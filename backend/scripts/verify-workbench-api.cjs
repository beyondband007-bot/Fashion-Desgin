const { spawn } = require('node:child_process')
const path = require('node:path')

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
      name: 'Workbench Verify Project',
      status: 'active',
    },
    create: {
      id: projectId,
      ownerType: 'user',
      ownerId: 'usr_demo',
      createdBy: 'usr_demo',
      name: 'Workbench Verify Project',
      status: 'active',
    },
  })
}

async function main() {
  const server = spawn(nodeExe, [serverEntry], {
    cwd: backendRoot,
    env: { ...process.env },
    stdio: ['ignore', 'pipe', 'pipe'],
  })

  server.stdout.on('data', (chunk) => process.stdout.write(`[biz-api] ${chunk}`))
  server.stderr.on('data', (chunk) => process.stderr.write(`[biz-api] ${chunk}`))

  try {
    await waitForServerReady()

    const models = await requestJson(`${apiBaseUrl}/api/v1/models`, { method: 'GET' })
    const scenes = await requestJson(`${apiBaseUrl}/api/v1/scenes`, { method: 'GET' })

    assert(models.data.items.length >= 1, 'WORKBENCH_MODELS_EMPTY')
    assert(scenes.data.items.length >= 1, 'WORKBENCH_SCENES_EMPTY')

    const projectId = `prj_${Date.now()}`
    const batchId = `bat_${Date.now()}`
    await ensureProject(projectId)

    const estimate = await requestJson(`${apiBaseUrl}/api/v1/tasks/estimate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        module: 'ai_generate',
        type: 'clothes',
        project_id: projectId,
        batch_id: batchId,
        input_asset_ids: ['ast_input_001'],
        source_page: '/ai-generate/clothes',
        config: {
          model_code: models.data.items[0].code,
          scene_code: scenes.data.items[0].code,
          count: 2,
        },
      }),
    })

    const created = await requestJson(`${apiBaseUrl}/api/v1/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        quote_id: estimate.data.quote_id,
        module: 'ai_generate',
        type: 'clothes',
        project_id: projectId,
        batch_id: batchId,
        input_asset_ids: ['ast_input_001'],
        source_page: '/ai-generate/clothes',
        model_id: models.data.items[0].id,
        scene_id: scenes.data.items[0].id,
        config: {
          model_code: models.data.items[0].code,
          scene_code: scenes.data.items[0].code,
          count: 2,
        },
      }),
    })

    const taskId = created.data.task.id

    const cancelled = await requestJson(`${apiBaseUrl}/api/v1/tasks/${taskId}/cancel`, {
      method: 'POST',
    })
    assert(cancelled.data.task.status === 'cancelled', 'TASK_CANCEL_FAILED')

    const failedEstimate = await requestJson(`${apiBaseUrl}/api/v1/tasks/estimate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        module: 'ai_generate',
        type: 'clothes',
        input_asset_ids: ['ast_input_001'],
        source_page: '/ai-generate/clothes',
        config: {
          model_code: models.data.items[0].code,
          scene_code: scenes.data.items[0].code,
          count: 1,
        },
      }),
    })

    const failedCreated = await requestJson(`${apiBaseUrl}/api/v1/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        quote_id: failedEstimate.data.quote_id,
        module: 'ai_generate',
        type: 'clothes',
        project_id: projectId,
        batch_id: batchId,
        input_asset_ids: ['ast_input_001'],
        source_page: '/ai-generate/clothes',
        config: {
          model_code: models.data.items[0].code,
          scene_code: scenes.data.items[0].code,
          count: 1,
        },
      }),
    })

    await requestJson(`${apiBaseUrl}/api/v1/tasks/${failedCreated.data.task.id}/status`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        status: 'failed',
        error_code: 'PROVIDER_TIMEOUT',
        error_message: 'provider timeout',
      }),
    })

    const retried = await requestJson(`${apiBaseUrl}/api/v1/tasks/${failedCreated.data.task.id}/retry`, {
      method: 'POST',
    })
    assert(retried.data.task.parent_task_id === undefined || retried.data.task.status === 'queued', 'TASK_RETRY_FAILED')

    const completedEstimate = await requestJson(`${apiBaseUrl}/api/v1/tasks/estimate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        module: 'ai_generate',
        type: 'clothes',
        input_asset_ids: ['ast_input_001'],
        source_page: '/ai-generate/clothes',
        config: {
          model_code: models.data.items[0].code,
          scene_code: scenes.data.items[0].code,
          count: 1,
        },
      }),
    })

    const completedCreated = await requestJson(`${apiBaseUrl}/api/v1/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        quote_id: completedEstimate.data.quote_id,
        module: 'ai_generate',
        type: 'clothes',
        project_id: projectId,
        batch_id: batchId,
        input_asset_ids: ['ast_input_001'],
        source_page: '/ai-generate/clothes',
        config: {
          model_code: models.data.items[0].code,
          scene_code: scenes.data.items[0].code,
          count: 1,
        },
      }),
    })

    await requestJson(`${apiBaseUrl}/api/v1/tasks/${completedCreated.data.task.id}/status`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        status: 'processing',
        progress: 60,
        stage: 'rendering',
      }),
    })

    await requestJson(`${apiBaseUrl}/api/v1/tasks/${completedCreated.data.task.id}/status`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        status: 'completed',
      }),
    })

    const download = await requestJson(`${apiBaseUrl}/api/v1/tasks/${completedCreated.data.task.id}/download`, {
      method: 'POST',
    })
    const recent = await requestJson(
      `${apiBaseUrl}/api/v1/workbench/recent-results?module=ai_generate&limit=5`,
      { method: 'GET' },
    )

    assert(typeof download.data.download_url === 'string', 'TASK_DOWNLOAD_URL_MISSING')
    assert(recent.data.items.some((item) => item.task_id === completedCreated.data.task.id), 'RECENT_RESULT_MISSING')

    process.stdout.write(
      JSON.stringify(
        {
          status: 'ok',
          model_count: models.data.items.length,
          scene_count: scenes.data.items.length,
          cancelled_task_id: taskId,
          retried_task_id: retried.data.task.id,
          completed_task_id: completedCreated.data.task.id,
          recent_count: recent.data.items.length,
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
    `[biz-api] workbench api verify failed: ${error instanceof Error ? error.message : 'UNKNOWN_ERROR'}\n`,
  )
  process.exit(1)
})
