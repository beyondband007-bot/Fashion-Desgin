import type { ServerResponse } from 'node:http'

import type { RequestContext } from './request-context'
import type { ServiceName } from '../index'

export function healthController(ctx: RequestContext, res: ServerResponse, service: ServiceName) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.end(
    JSON.stringify({
      code: 0,
      message: 'success',
      data: {
        service,
        status: 'ok',
        now: new Date().toISOString(),
      },
      request_id: ctx.requestId,
    }),
  )
}

