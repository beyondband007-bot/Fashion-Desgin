const { spawn } = require('node:child_process')
const path = require('node:path')

const { loadEnvFile } = require('./load-env.cjs')
const { PrismaClient } = require('../generated/biz-client')

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
      name: 'Lifecycle Verify Project',
      status: 'active',
    },
    create: {
      id: projectId,
      ownerType: 'user',
      ownerId: 'usr_demo',
      createdBy: 'usr_demo',
      name: 'Lifecycle Verify Project',
      status: 'active',
    },
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

  try {
    await waitForServerReady()

    const projectId = `prj_${Date.now()}`
    const batchId = `bat_${Date.now()}`
    await ensureProject(projectId)

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
          prompt: 'lifecycle verify',
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
          prompt: 'lifecycle verify',
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
        progress: 45,
        stage: 'rendering',
      }),
    })

    const completed = await requestJson(`${apiBaseUrl}/api/v1/tasks/${taskId}/status`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: 'completed',
        settled_credits: '12.0000',
      }),
    })

    const detail = await requestJson(`${apiBaseUrl}/api/v1/tasks/${taskId}`, {
      method: 'GET',
    })

    const events = await requestJson(`${apiBaseUrl}/api/v1/tasks/${taskId}/events`, {
      method: 'GET',
    })

    assert(completed.data.status === 'completed', 'TASK_NOT_COMPLETED')
    assert(detail.data.progress === 100, 'TASK_PROGRESS_NOT_COMPLETED')
    assert(detail.data.version === 3, 'TASK_VERSION_NOT_INCREMENTED')
    assert(detail.data.settled_credits === '12.0000', 'TASK_SETTLED_CREDITS_MISMATCH')
    assert(Array.isArray(events.data.items) && events.data.items.length === 3, 'TASK_EVENT_COUNT_INVALID')
    assert(events.data.items[0].event_type === 'task.created', 'TASK_CREATED_EVENT_MISSING')
    assert(events.data.items[1].event_type === 'task.updated', 'TASK_PROCESSING_EVENT_MISSING')
    assert(events.data.items[2].event_type === 'task.completed', 'TASK_COMPLETED_EVENT_MISSING')
    assert(events.data.items[1].from_status === 'queued', 'TASK_PROCESSING_FROM_STATUS_INVALID')
    assert(events.data.items[2].from_status === 'processing', 'TASK_COMPLETED_FROM_STATUS_INVALID')

    process.stdout.write(
      JSON.stringify(
        {
          status: 'ok',
          task_id: taskId,
          final_status: detail.data.status,
          final_version: detail.data.version,
          event_count: events.data.items.length,
        },
        null,
        2,
      ) + '\n',
    )
  } finally {
    await prisma.$disconnect()

    if (!server.killed) {
      server.kill()
    }
  }
}

main().catch((error) => {
  process.stderr.write(
    `[biz-api] task lifecycle verify failed: ${error instanceof Error ? error.message : 'UNKNOWN_ERROR'}\n`,
  )
  process.exit(1)
})
