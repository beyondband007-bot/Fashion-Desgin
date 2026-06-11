const { spawn } = require('node:child_process')
const path = require('node:path')

const { loadEnvFile } = require('./load-env.cjs')
const { PrismaClient } = require('../generated/biz-client')

loadEnvFile()

const backendRoot = path.resolve(__dirname, '..')
const nodeExe = path.join(process.env.ProgramFiles || 'C:\\Program Files', 'nodejs', 'node.exe')
const serverEntry = path.join(backendRoot, 'dist', 'apps', 'biz-api', 'src', 'main.js')
const apiBaseUrl = `http://127.0.0.1:${process.env.BIZ_API_PORT || '3001'}`
const prisma = new PrismaClient()

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
      name: 'API Verify Project',
      status: 'active',
    },
    create: {
      id: projectId,
      ownerType: 'user',
      ownerId: 'usr_demo',
      createdBy: 'usr_demo',
      name: 'API Verify Project',
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

    const health = await requestJson(`${apiBaseUrl}/health/db`, {
      method: 'GET',
    })

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
          prompt: 'white shirt',
        },
      }),
    })

    const batchId = `bat_${Date.now()}`
    const projectId = `prj_${Date.now()}`
    await ensureProject(projectId)
    const createTask = await requestJson(`${apiBaseUrl}/api/v1/tasks`, {
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
          prompt: 'white shirt',
        },
      }),
    })

    const taskId = createTask.data.task.id
    const detail = await requestJson(`${apiBaseUrl}/api/v1/tasks/${taskId}`, {
      method: 'GET',
    })
    const events = await requestJson(`${apiBaseUrl}/api/v1/tasks/${taskId}/events`, {
      method: 'GET',
    })
    const list = await requestJson(
      `${apiBaseUrl}/api/v1/tasks?module=ai_generate&project_id=${projectId}&batch_id=${batchId}&task_type=clothes`,
      {
        method: 'GET',
      },
    )

    assert(health.data.status === 'ok', 'DB_HEALTH_NOT_OK')
    assert(detail.data.id === taskId, 'TASK_DETAIL_MISMATCH')
    assert(detail.data.module === 'ai_generate', 'TASK_MODULE_MISMATCH')
    assert(detail.data.project_id === projectId, 'TASK_PROJECT_FILTER_MISMATCH')
    assert(detail.data.batch_id === batchId, 'TASK_BATCH_FILTER_MISMATCH')
    assert(Array.isArray(events.data.items) && events.data.items.length >= 1, 'TASK_EVENTS_EMPTY')
    assert(
      Array.isArray(list.data.items) && list.data.items.some((task) => task.id === taskId),
      'TASK_LIST_FILTER_MISMATCH',
    )

    process.stdout.write(
      JSON.stringify(
        {
          status: 'ok',
          db_health: health.data.status,
          quote_id: estimate.data.quote_id,
          task_id: taskId,
          filtered_list_count: list.data.items.length,
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
    `[biz-api] task api verify failed: ${error instanceof Error ? error.message : 'UNKNOWN_ERROR'}\n`,
  )
  process.exit(1)
})
