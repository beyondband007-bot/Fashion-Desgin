import type { IncomingMessage, ServerResponse } from 'node:http'

import { healthController } from '../../../../../packages/shared-kernel/src/system/health.controller'
import { createRequestContext } from '../../../../../packages/shared-kernel/src/system/request-context'

type AppHandler = (req: IncomingMessage, res: ServerResponse) => void

export function buildLedgerApp(): AppHandler {
  return (req, res) => {
    const ctx = createRequestContext(req)

    if (req.url === '/health' && req.method === 'GET') {
      healthController(ctx, res, 'ledger-service')
      return
    }

    res.statusCode = 404
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.end(
      JSON.stringify({
        code: 404000,
        message: 'Not Found',
        request_id: ctx.requestId,
      }),
    )
  }
}
