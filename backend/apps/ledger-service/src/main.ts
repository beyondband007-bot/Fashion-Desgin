import { createServer } from 'node:http'

import { loadEnvFile } from '../../../packages/shared-kernel/src/system/env'

async function main() {
  loadEnvFile()

  const { buildLedgerApp } = await import('./modules/system/app')
  const app = buildLedgerApp()
  const server = createServer(app)
  const port = Number(process.env.LEDGER_SERVICE_PORT ?? 3002)

  server.listen(port, () => {
    process.stdout.write(`[ledger-service] listening on :${port}\n`)
  })
}

main().catch((error) => {
  process.stderr.write(
    `[ledger-service] failed to start: ${error instanceof Error ? error.message : 'UNKNOWN_ERROR'}\n`,
  )
  process.exit(1)
})
