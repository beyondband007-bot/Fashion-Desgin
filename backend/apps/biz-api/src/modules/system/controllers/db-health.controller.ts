import type { ServerResponse } from 'node:http'

import { writeJson } from '../../../../../../packages/shared-kernel/src/http/json'
import type { RequestContext } from '../../../../../../packages/shared-kernel/src/system/request-context'

import { getBizDbHealth } from '../services/db-health.service'

export async function dbHealthController(ctx: RequestContext, res: ServerResponse) {
  const data = await getBizDbHealth()

  writeJson(res, data.status === 'ok' ? 200 : 503, {
    code: data.status === 'ok' ? 0 : 503001,
    message: data.status === 'ok' ? 'success' : 'DB_HEALTH_CHECK_FAILED',
    data,
    request_id: ctx.requestId,
  })
}

