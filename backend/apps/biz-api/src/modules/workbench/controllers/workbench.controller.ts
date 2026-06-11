import type { IncomingMessage, ServerResponse } from 'node:http'

import {
  writeError,
  writeSuccess,
} from '../../../../../../packages/shared-kernel/src/http/json'
import type { RequestContext } from '../../../../../../packages/shared-kernel/src/system/request-context'
import { toTaskSummary } from '../../tasks/repositories/task.mapper'
import { workbenchService } from '../services/workbench.service'

export async function handleWorkbenchModels(ctx: RequestContext, res: ServerResponse) {
  writeSuccess(ctx, res, {
    items: workbenchService.listModels(),
  })
}

export async function handleWorkbenchScenes(ctx: RequestContext, res: ServerResponse) {
  writeSuccess(ctx, res, {
    items: workbenchService.listScenes(),
  })
}

export async function handleWorkbenchRecentResults(ctx: RequestContext, req: IncomingMessage, res: ServerResponse) {
  const query = new URL(req.url ?? '/', 'http://localhost').searchParams
  const module = query.get('module') ?? 'ai_generate'
  const limit = Number(query.get('limit') ?? '8')

  writeSuccess(ctx, res, {
    items: await workbenchService.listRecentResults(module, Math.max(1, Math.min(limit, 20))),
  })
}

export async function handleTaskCancel(ctx: RequestContext, res: ServerResponse, taskId: string) {
  try {
    const task = await workbenchService.cancelTask(taskId)
    writeSuccess(ctx, res, {
      task: toTaskSummary(task),
    })
  } catch (error) {
    writeError(ctx, res, 400, 400003, error instanceof Error ? error.message : 'TASK_CANCEL_FAILED')
  }
}

export async function handleTaskRetry(ctx: RequestContext, res: ServerResponse, taskId: string) {
  try {
    const task = await workbenchService.retryTask(taskId)
    writeSuccess(ctx, res, {
      task: toTaskSummary(task),
    })
  } catch (error) {
    writeError(ctx, res, 400, 400004, error instanceof Error ? error.message : 'TASK_RETRY_FAILED')
  }
}

export async function handleTaskDownload(ctx: RequestContext, res: ServerResponse, taskId: string) {
  const data = await workbenchService.getDownload(taskId)

  if (!data) {
    writeError(ctx, res, 404, 404002, 'TASK_DOWNLOAD_NOT_FOUND')
    return
  }

  writeSuccess(ctx, res, data)
}
