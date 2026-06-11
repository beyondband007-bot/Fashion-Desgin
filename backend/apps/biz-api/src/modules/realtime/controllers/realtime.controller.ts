import type { ServerResponse } from 'node:http'

import { writeJson } from '../../../../../../packages/shared-kernel/src/http/json'
import type { RequestContext } from '../../../../../../packages/shared-kernel/src/system/request-context'
import {
  DEMO_TASK_USER_ID,
  DEMO_TASK_WS_CHANNEL,
} from '../../tasks/constants/demo-task-context'
import { realtimeGateway } from '../services/realtime.gateway'

export async function handleRealtimeToken(ctx: RequestContext, res: ServerResponse) {
  const data = realtimeGateway.issueToken(DEMO_TASK_USER_ID, DEMO_TASK_WS_CHANNEL)

  writeJson(res, 200, {
    code: 0,
    message: 'success',
    data,
    request_id: ctx.requestId,
  })
}
