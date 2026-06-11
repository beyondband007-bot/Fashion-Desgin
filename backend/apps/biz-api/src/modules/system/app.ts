import type { IncomingMessage, ServerResponse } from 'node:http'

import { healthController } from '../../../../../packages/shared-kernel/src/system/health.controller'
import { createRequestContext } from '../../../../../packages/shared-kernel/src/system/request-context'
import { handleRealtimeToken } from '../realtime/controllers/realtime.controller'
import {
  handleAssetList,
  handleCreditTransactions,
  handlePricingPlans,
  handleProjectList,
} from '../catalog/controllers/catalog.controller'
import { dbHealthController } from './controllers/db-health.controller'
import {
  handleTaskCreate,
  handleTaskDetail,
  handleTaskEstimate,
  handleTaskEvents,
  handleTaskList,
  handleTaskTransition,
} from '../tasks/controllers/task.controller'
import {
  handleTaskCancel,
  handleTaskDownload,
  handleTaskRetry,
  handleWorkbenchModels,
  handleWorkbenchRecentResults,
  handleWorkbenchScenes,
} from '../workbench/controllers/workbench.controller'

type AppHandler = (req: IncomingMessage, res: ServerResponse) => void

export function buildBizApiApp(): AppHandler {
  return async (req, res) => {
    const ctx = createRequestContext(req)
    const path = new URL(req.url ?? '/', 'http://localhost').pathname

    if (path === '/health' && req.method === 'GET') {
      healthController(ctx, res, 'biz-api')
      return
    }

    if (path === '/health/db' && req.method === 'GET') {
      await dbHealthController(ctx, res)
      return
    }

    if (path === '/api/v1/realtime/token' && req.method === 'POST') {
      await handleRealtimeToken(ctx, res)
      return
    }

    if (path === '/api/v1/assets' && req.method === 'GET') {
      await handleAssetList(ctx, res)
      return
    }

    if (path === '/api/v1/projects' && req.method === 'GET') {
      await handleProjectList(ctx, res)
      return
    }

    if (path === '/api/v1/plans' && req.method === 'GET') {
      await handlePricingPlans(ctx, res)
      return
    }

    if (path === '/api/v1/credits/transactions' && req.method === 'GET') {
      await handleCreditTransactions(ctx, res)
      return
    }

    if (path === '/api/v1/models' && req.method === 'GET') {
      await handleWorkbenchModels(ctx, res)
      return
    }

    if (path === '/api/v1/scenes' && req.method === 'GET') {
      await handleWorkbenchScenes(ctx, res)
      return
    }

    if (path === '/api/v1/workbench/recent-results' && req.method === 'GET') {
      await handleWorkbenchRecentResults(ctx, req, res)
      return
    }

    if (path === '/api/v1/tasks/estimate' && req.method === 'POST') {
      await handleTaskEstimate(ctx, req, res)
      return
    }

    if (path === '/api/v1/tasks' && req.method === 'POST') {
      await handleTaskCreate(ctx, req, res)
      return
    }

    if (path === '/api/v1/tasks' && req.method === 'GET') {
      await handleTaskList(ctx, req, res)
      return
    }

    if (path.startsWith('/api/v1/tasks/') && path.endsWith('/status') && req.method === 'POST') {
      const taskId = path.replace('/api/v1/tasks/', '').replace('/status', '')
      await handleTaskTransition(ctx, req, res, taskId)
      return
    }

    if (path.startsWith('/api/v1/tasks/') && path.endsWith('/cancel') && req.method === 'POST') {
      const taskId = path.replace('/api/v1/tasks/', '').replace('/cancel', '')
      await handleTaskCancel(ctx, res, taskId)
      return
    }

    if (path.startsWith('/api/v1/tasks/') && path.endsWith('/retry') && req.method === 'POST') {
      const taskId = path.replace('/api/v1/tasks/', '').replace('/retry', '')
      await handleTaskRetry(ctx, res, taskId)
      return
    }

    if (path.startsWith('/api/v1/tasks/') && path.endsWith('/download') && req.method === 'POST') {
      const taskId = path.replace('/api/v1/tasks/', '').replace('/download', '')
      await handleTaskDownload(ctx, res, taskId)
      return
    }

    if (path.startsWith('/api/v1/tasks/') && req.method === 'GET') {
      const taskId = path.replace('/api/v1/tasks/', '')

      if (taskId.endsWith('/events')) {
        await handleTaskEvents(ctx, res, taskId.replace('/events', ''))
        return
      }

      await handleTaskDetail(ctx, res, taskId)
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
