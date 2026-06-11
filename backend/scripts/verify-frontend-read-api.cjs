const { spawn } = require('node:child_process')
const path = require('node:path')

const { loadEnvFile } = require('./load-env.cjs')

loadEnvFile()

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

async function requestJson(url) {
  const response = await fetch(url)
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

    const [assets, projects, plans, transactions, models, scenes, recent] = await Promise.all([
      requestJson(`${apiBaseUrl}/api/v1/assets`),
      requestJson(`${apiBaseUrl}/api/v1/projects`),
      requestJson(`${apiBaseUrl}/api/v1/plans`),
      requestJson(`${apiBaseUrl}/api/v1/credits/transactions`),
      requestJson(`${apiBaseUrl}/api/v1/models`),
      requestJson(`${apiBaseUrl}/api/v1/scenes`),
      requestJson(`${apiBaseUrl}/api/v1/workbench/recent-results?module=ai_generate&limit=8`),
    ])

    assert(Array.isArray(assets.data.items), 'ASSET_LIST_INVALID')
    assert(Array.isArray(projects.data.items), 'PROJECT_LIST_INVALID')
    assert(Array.isArray(plans.data.items) && plans.data.items.length >= 1, 'PLAN_LIST_EMPTY')
    assert(Array.isArray(transactions.data.items), 'CREDIT_TRANSACTIONS_INVALID')
    assert(Array.isArray(models.data.items) && models.data.items.length >= 1, 'WORKBENCH_MODELS_EMPTY')
    assert(Array.isArray(scenes.data.items) && scenes.data.items.length >= 1, 'WORKBENCH_SCENES_EMPTY')
    assert(Array.isArray(recent.data.items), 'RECENT_RESULTS_INVALID')

    const firstModel = models.data.items[0]
    const firstScene = scenes.data.items[0]
    const firstPlan = plans.data.items[0]

    assert(typeof firstModel.avatar === 'string', 'WORKBENCH_MODEL_ALIAS_MISSING')
    assert(Array.isArray(firstModel.style), 'WORKBENCH_MODEL_STYLE_INVALID')
    assert(typeof firstScene.image === 'string', 'WORKBENCH_SCENE_ALIAS_MISSING')
    assert(typeof firstPlan.monthlyPrice === 'number', 'PLAN_CAMEL_ALIAS_MISSING')

    process.stdout.write(
      JSON.stringify(
        {
          status: 'ok',
          assets: assets.data.items.length,
          projects: projects.data.items.length,
          plans: plans.data.items.length,
          transactions: transactions.data.items.length,
          models: models.data.items.length,
          scenes: scenes.data.items.length,
          recent: recent.data.items.length,
        },
        null,
        2,
      ) + '\n',
    )
  } finally {
    if (!server.killed) {
      server.kill()
    }
  }
}

main().catch((error) => {
  process.stderr.write(
    `[biz-api] frontend read api verify failed: ${error instanceof Error ? error.message : 'UNKNOWN_ERROR'}\n`,
  )
  process.exit(1)
})
