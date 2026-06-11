import type { IncomingMessage, ServerResponse } from 'node:http'

import type {
  BillingStatus,
  CreateTaskRequestDto,
  TaskEstimateRequestDto,
  TaskListQueryDto,
  TaskModule,
  TaskStatus,
  TaskType,
  TransitionTaskRequestDto,
} from '../../../../../../packages/shared-types/src'
import {
  BILLING_STATUSES,
  TASK_MODULES,
  TASK_STATUSES,
  TASK_TYPES,
} from '../../../../../../packages/shared-types/src'
import {
  readJsonBody,
  writeError,
  writeSuccess,
} from '../../../../../../packages/shared-kernel/src/http/json'
import type { RequestContext } from '../../../../../../packages/shared-kernel/src/system/request-context'

import { taskService } from '../services/task.service'

export async function handleTaskEstimate(
  ctx: RequestContext,
  req: IncomingMessage,
  res: ServerResponse,
) {
  const payload = await readJsonBody<TaskEstimateRequestDto>(req)
  const data = await taskService.estimate(payload)

  writeSuccess(ctx, res, data)
}

export async function handleTaskCreate(
  ctx: RequestContext,
  req: IncomingMessage,
  res: ServerResponse,
) {
  const payload = await readJsonBody<CreateTaskRequestDto>(req)

  try {
    const data = await taskService.createTask(payload)
    writeSuccess(ctx, res, data)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'TASK_CREATE_FAILED'
    writeError(ctx, res, 400, 400001, message)
  }
}

export async function handleTaskList(ctx: RequestContext, req: IncomingMessage, res: ServerResponse) {
  const query = new URL(req.url ?? '/', 'http://localhost').searchParams
  const filters: TaskListQueryDto = {
    module: readEnum<TaskModule>(query.get('module'), TASK_MODULES),
    project_id: query.get('project_id') ?? undefined,
    batch_id: query.get('batch_id') ?? undefined,
    task_type: readEnum<TaskType>(query.get('task_type'), TASK_TYPES),
    status: readEnum<TaskStatus>(query.get('status'), TASK_STATUSES),
    billing_status: readEnum<BillingStatus>(query.get('billing_status'), BILLING_STATUSES),
  }

  writeSuccess(ctx, res, {
    items: await taskService.listTasks(filters),
  })
}

export async function handleTaskTransition(
  ctx: RequestContext,
  req: IncomingMessage,
  res: ServerResponse,
  taskId: string,
) {
  const payload = await readJsonBody<TransitionTaskRequestDto>(req)

  try {
    const data = await taskService.transitionTask(taskId, payload)
    writeSuccess(ctx, res, data)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'TASK_TRANSITION_FAILED'
    const code = message === 'TASK_NOT_FOUND' ? 404001 : 400002
    writeError(ctx, res, message === 'TASK_NOT_FOUND' ? 404 : 400, code, message)
  }
}

export async function handleTaskDetail(ctx: RequestContext, res: ServerResponse, taskId: string) {
  const task = await taskService.getTask(taskId)

  if (!task) {
    writeError(ctx, res, 404, 404001, 'TASK_NOT_FOUND')
    return
  }

  writeSuccess(ctx, res, task)
}

export async function handleTaskEvents(ctx: RequestContext, res: ServerResponse, taskId: string) {
  writeSuccess(ctx, res, {
    items: await taskService.listTaskEvents(taskId),
  })
}

function readEnum<T extends string>(value: string | null, values: readonly T[]): T | undefined {
  if (!value) {
    return undefined
  }

  return values.includes(value as T) ? (value as T) : undefined
}
