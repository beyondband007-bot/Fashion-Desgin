import { createServer } from 'node:http'

import { loadEnvFile } from '../../../packages/shared-kernel/src/system/env'
import { realtimeGateway } from './modules/realtime/services/realtime.gateway'

async function main() {
  loadEnvFile()

  const { buildBizApiApp } = await import('./modules/system/app')
  const app = buildBizApiApp()
  const server = createServer(app)
  const port = Number(process.env.BIZ_API_PORT ?? 3001)

  realtimeGateway.attach(server)

  server.listen(port, () => {
    process.stdout.write(`[biz-api] listening on :${port}\n`)
  })
}

main().catch((error) => {
  process.stderr.write(
    `[biz-api] failed to start: ${error instanceof Error ? error.message : 'UNKNOWN_ERROR'}\n`,
  )
  process.exit(1)
})
