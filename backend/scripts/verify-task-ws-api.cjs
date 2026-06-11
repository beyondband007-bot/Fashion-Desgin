const { spawn } = require('node:child_process')
const path = require('node:path')

const { WebSocket } = require('ws')
const { PrismaClient } = require('../generated/biz-client')
const { loadEnvFile } = require('./load-env.cjs')

loadEnvFile()

const prisma = new PrismaClient()
const backendRoot = path.resolve(__dirname, '..')
const nodeExe = path.join(process.env.ProgramFiles || 'C:\\Program Files', 'nodejs', 'node.exe')
const serverEntry = path.join(backendRoot, 'dist', 'apps', 'biz-api', 'src', 'main.js')
const apiBaseUrl = `http://127.0.0.1:${process.env.BIZ_API_PORT || '3001'}`

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function waitForServerReady(timeoutMs = 15000) {
  const startedAt = Date.now()

  while (Date.now() - startedAt < timeoutMs) {
    try {
      const response = await fetch(`${apiBaseUrl}/health`)

      if (response.ok) {
        return
      }
    } catch {}

    await sleep(300)
  }

  throw new Error('BIZ_API_START_TIMEOUT')
}

async function requestJson(url, options) {
  const response = await fetch(url, options)
  const payload = await response.json()

  if (!response.ok || payload.code !== 0) {
    throw new Error(
      `HTTP_VERIFY_FAILED ${response.status} ${typeof payload.message === 'string' ? payload.message : 'UNKNOWN_ERROR'}`,
    )
  }

  return payload
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message)
  }
}

async function ensureProject(projectId) {
  await prisma.user.upsert({
    where: { id: 'usr_demo' },
    update: {
      nickname: 'Demo User',
      status: 'active',
      userType: 'personal',
      registerSource: 'bootstrap',
      creditAccountId: 'crd_demo',
      creditAccountStatus: 'ready',
    },
    create: {
      id: 'usr_demo',
      nickname: 'Demo User',
      status: 'active',
      userType: 'personal',
      registerSource: 'bootstrap',
      creditAccountId: 'crd_demo',
      creditAccountStatus: 'ready',
    },
  })

  await prisma.project.upsert({
    where: { id: projectId },
    update: {
      ownerType: 'user',
      ownerId: 'usr_demo',
      createdBy: 'usr_demo',
      name: 'WS Verify Project',
      status: 'active',
    },
    create: {
      id: projectId,
      ownerType: 'user',
      ownerId: 'usr_demo',
      createdBy: 'usr_demo',
      name: 'WS Verify Project',
      status: 'active',
    },
  })
}

function waitForSocketEvent(socket, predicate, timeoutMs = 15000) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      cleanup()
      reject(new Error('WS_EVENT_TIMEOUT'))
    }, timeoutMs)

    function handleMessage(raw) {
      const payload = JSON.parse(raw.toString())

      if (!predicate(payload)) {
        return
      }

      cleanup()
      resolve(payload)
    }

    function cleanup() {
      clearTimeout(timer)
      socket.off('message', handleMessage)
    }

    socket.on('message', handleMessage)
  })
}

async function assertNoSocketEvent(socket, predicate, quietMs = 1200) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      cleanup()
      resolve()
    }, quietMs)

    function handleMessage(raw) {
      const payload = JSON.parse(raw.toString())

      if (!predicate(payload)) {
        return
      }

      cleanup()
      reject(new Error('WS_UNEXPECTED_EVENT'))
    }

    function cleanup() {
      clearTimeout(timer)
      socket.off('message', handleMessage)
    }

    socket.on('message', handleMessage)
  })
}

async function collectTaskEvents(socket, expectedProjectId, expectedCount, timeoutMs = 15000) {
  return new Promise((resolve, reject) => {
    const events = []
    const timer = setTimeout(() => {
      reject(new Error('WS_EVENT_TIMEOUT'))
    }, timeoutMs)

    socket.on('message', function onMessage(raw) {
      const payload = JSON.parse(raw.toString())

      if (!payload.task || payload.task.project_id !== expectedProjectId) {
        return
      }

      events.push(payload)

      if (events.length >= expectedCount) {
        clearTimeout(timer)
        socket.off('message', onMessage)
        resolve(events)
      }
    })
  })
}

async function main() {
  const server = spawn(nodeExe, [serverEntry], {
    cwd: backendRoot,
    env: {
      ...process.env,
    },
    stdio: ['ignore', 'pipe', 'pipe'],
  })

  server.stdout.on('data', (chunk) => {
    process.stdout.write(`[biz-api] ${chunk}`)
  })

  server.stderr.on('data', (chunk) => {
    process.stderr.write(`[biz-api] ${chunk}`)
  })

  let socket

  try {
    await waitForServerReady()

    const tokenPayload = await requestJson(`${apiBaseUrl}/api/v1/realtime/token`, {
      method: 'POST',
    })

    socket = new WebSocket(`ws://127.0.0.1:${process.env.BIZ_API_PORT || '3001'}/api/v1/ws?token=${tokenPayload.data.token}`)

    await new Promise((resolve, reject) => {
      socket.once('open', resolve)
      socket.once('error', reject)
    })

    const connected = await waitForSocketEvent(socket, (payload) => payload.event_type === 'system.connected')
    assert(typeof connected.connection_id === 'string', 'WS_CONNECTION_ID_MISSING')

    socket.send(
      JSON.stringify({
        type: 'client.ready',
        request_id: 'req_ready_1',
        subscriptions: {
          modules: ['ai_generate'],
        },
        resync: true,
      }),
    )

    const snapshot = await waitForSocketEvent(socket, (payload) => payload.event_type === 'task.snapshot')
    assert(Array.isArray(snapshot.items), 'WS_SNAPSHOT_ITEMS_INVALID')

    const subscribed = await waitForSocketEvent(socket, (payload) => payload.event_type === 'system.subscribed')
    assert(subscribed.request_id === 'req_ready_1', 'WS_SUBSCRIBE_ACK_MISSING')

    socket.send(
      JSON.stringify({
        type: 'system.ping',
        request_id: 'req_ping_1',
      }),
    )

    const pong = await waitForSocketEvent(socket, (payload) => payload.event_type === 'system.pong')
    assert(pong.request_id === 'req_ping_1', 'WS_PONG_MISSING')

    const projectId = `prj_${Date.now()}`
    const batchId = `bat_${Date.now()}`
    await ensureProject(projectId)

    socket.send(
      JSON.stringify({
        type: 'tasks.subscribe',
        request_id: 'req_sub_project',
        subscriptions: {
          project_ids: [projectId],
        },
      }),
    )

    await waitForSocketEvent(
      socket,
      (payload) => payload.event_type === 'system.subscribed' && payload.request_id === 'req_sub_project',
    )

    const eventPromise = collectTaskEvents(socket, projectId, 3)

    const estimate = await requestJson(`${apiBaseUrl}/api/v1/tasks/estimate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        module: 'ai_generate',
        type: 'clothes',
        input_asset_ids: ['ast_input_001'],
        source_page: 'workspace',
        config: {
          prompt: 'ws verify',
        },
      }),
    })

    const created = await requestJson(`${apiBaseUrl}/api/v1/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quote_id: estimate.data.quote_id,
        module: 'ai_generate',
        type: 'clothes',
        project_id: projectId,
        batch_id: batchId,
        source_page: 'workspace',
        input_asset_ids: ['ast_input_001'],
        config: {
          prompt: 'ws verify',
        },
      }),
    })

    const taskId = created.data.task.id

    await requestJson(`${apiBaseUrl}/api/v1/tasks/${taskId}/status`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: 'processing',
        progress: 50,
        stage: 'rendering',
      }),
    })

    await requestJson(`${apiBaseUrl}/api/v1/tasks/${taskId}/status`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: 'completed',
      }),
    })

    const events = await eventPromise

    assert(events.length === 3, 'WS_EVENT_COUNT_INVALID')
    assert(events[0].event_type === 'task.created', 'WS_CREATED_EVENT_MISSING')
    assert(events[1].event_type === 'task.updated', 'WS_UPDATED_EVENT_MISSING')
    assert(events[2].event_type === 'task.completed', 'WS_COMPLETED_EVENT_MISSING')
    assert(events[1].task.version === 2, 'WS_UPDATED_VERSION_INVALID')
    assert(events[2].task.version === 3, 'WS_COMPLETED_VERSION_INVALID')
    assert(events[2].task.status === 'completed', 'WS_FINAL_STATUS_INVALID')

    socket.send(
      JSON.stringify({
        type: 'tasks.unsubscribe',
        request_id: 'req_unsub_all',
        subscriptions: {},
      }),
    )

    const unsubscribed = await waitForSocketEvent(
      socket,
      (payload) => payload.event_type === 'system.unsubscribed' && payload.request_id === 'req_unsub_all',
    )
    assert(
      unsubscribed.subscriptions && Object.keys(unsubscribed.subscriptions).length === 0,
      'WS_UNSUBSCRIBE_ALL_STATE_INVALID',
    )

    const silentProjectId = `prj_${Date.now()}_silent`
    await ensureProject(silentProjectId)

    const silentEstimate = await requestJson(`${apiBaseUrl}/api/v1/tasks/estimate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        module: 'ai_generate',
        type: 'clothes',
        input_asset_ids: ['ast_input_001'],
        source_page: 'workspace',
        config: {
          prompt: 'ws verify silent',
        },
      }),
    })

    await requestJson(`${apiBaseUrl}/api/v1/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quote_id: silentEstimate.data.quote_id,
        module: 'ai_generate',
        type: 'clothes',
        project_id: silentProjectId,
        batch_id: `bat_${Date.now()}_silent`,
        source_page: 'workspace',
        input_asset_ids: ['ast_input_001'],
        config: {
          prompt: 'ws verify silent',
        },
      }),
    })

    await assertNoSocketEvent(
      socket,
      (payload) => payload.task && payload.task.project_id === silentProjectId,
    )

    process.stdout.write(
      JSON.stringify(
        {
          status: 'ok',
          channel: tokenPayload.data.channel,
          connection_id: connected.connection_id,
          snapshot_count: snapshot.items.length,
          task_id: taskId,
          event_count: events.length,
          final_event: events[2].event_type,
        },
        null,
        2,
      ) + '\n',
    )
  } finally {
    await prisma.$disconnect()

    if (socket) {
      socket.close()
    }

    if (!server.killed) {
      server.kill()
    }
  }
}

main().catch((error) => {
  process.stderr.write(
    `[biz-api] task ws verify failed: ${error instanceof Error ? error.message : 'UNKNOWN_ERROR'}\n`,
  )
  process.exit(1)
})
