import type {
  CreateTaskRequestDto,
  CreateTaskResponseDto,
  TaskDetailDto,
  TaskEstimateRequestDto,
  TaskEstimateResponseDto,
  TaskListQueryDto,
  TaskRealtimeEventDto,
  TaskStatus,
  TaskSummaryDto,
  TransitionTaskRequestDto,
} from '../../../../../../packages/shared-types/src'
import { createId } from '../../../../../../packages/shared-kernel/src/utils/id'

import {
  DEMO_TASK_CREDIT_ACCOUNT_ID,
  DEMO_TASK_OWNER_TYPE,
  DEMO_TASK_USER_ID,
  DEMO_TASK_WS_CHANNEL,
} from '../constants/demo-task-context'
import { publishTaskRealtimeEvent } from '../../realtime/services/task-realtime.publisher'
import { taskRepository } from '../repositories'
import { toTaskSummary } from '../repositories/task.mapper'
import { ledgerClient } from './ledger.client'
import {
  buildTaskRealtimeEvent,
  mapTaskTransitionEventType,
} from './task-event.factory'

export class TaskService {
  async estimate(input: TaskEstimateRequestDto): Promise<TaskEstimateResponseDto> {
    const unitCredits = input.type === 'video' ? '50.0000' : '12.0000'
    const quote: TaskEstimateResponseDto = {
      quote_id: createId('qte'),
      module: input.module,
      task_type: input.type,
      unit_credits: unitCredits,
      billable_quantity: String(Math.max(1, input.input_asset_ids.length)),
      estimated_credits: String((Number(unitCredits) * Math.max(1, input.input_asset_ids.length)).toFixed(4)),
      available_credits: '1000.0000',
      sufficient: true,
      expires_at: new Date(Date.now() + 5 * 60 * 1000).toISOString(),
      pricing_snapshot: {
        plan_code: 'basic',
        rule_version: '2026-06-10',
      },
    }

    await taskRepository.saveQuote(quote)
    return quote
  }

  async createTask(input: CreateTaskRequestDto): Promise<CreateTaskResponseDto> {
    const quote = await taskRepository.findQuoteById(input.quote_id)

    if (!quote) {
      throw new Error('QUOTE_NOT_FOUND')
    }

    const now = new Date().toISOString()
    const taskId = createId('tsk')

    const detail: TaskDetailDto = {
      id: taskId,
      name: input.name ?? `${input.module}:${input.type}`,
      module: input.module,
      scene: null,
      task_type: input.type,
      project_id: input.project_id ?? null,
      batch_id: input.batch_id ?? null,
      source_page: input.source_page ?? null,
      status: 'queued',
      billing_status: 'frozen',
      progress: 0,
      stage: 'queued',
      estimated_credits: quote.estimated_credits,
      settled_credits: null,
      error_code: null,
      error_message: null,
      cancellable: true,
      created_at: now,
      updated_at: now,
      completed_at: null,
      version: 1,
      user_id: DEMO_TASK_USER_ID,
      owner_type: DEMO_TASK_OWNER_TYPE,
      owner_id: DEMO_TASK_USER_ID,
      parent_task_id: null,
      quote_id: input.quote_id,
      model_id: input.model_id ?? null,
      scene_id: input.scene_id ?? null,
      template_id: input.template_id ?? null,
      config_version: 'v1',
      config: input.config,
      input_asset_ids: input.input_asset_ids,
      output_asset_ids: [],
    }

    await taskRepository.saveTask(detail)

    const event = buildTaskRealtimeEvent({
      occurredAt: now,
      eventType: 'task.created',
      fromStatus: null,
      toStatus: detail.status,
      task: toTaskSummary(detail),
    })

    await taskRepository.appendEvent(taskId, event)
    publishTaskRealtimeEvent(event)

    const creditBalance = await ledgerClient.freezeCredits(taskId, detail.estimated_credits)

    return {
      task: toTaskSummary(detail),
      credit_balance: creditBalance,
      ws_channel: DEMO_TASK_WS_CHANNEL,
    }
  }

  getTask(id: string): Promise<TaskDetailDto | undefined> {
    return taskRepository.findTaskById(id)
  }

  async listTasks(query?: TaskListQueryDto): Promise<TaskSummaryDto[]> {
    return (await taskRepository.listTasks(query)).map(toTaskSummary)
  }

  listTaskEvents(taskId: string): Promise<TaskRealtimeEventDto[]> {
    return taskRepository.listEvents(taskId)
  }

  async transitionTask(taskId: string, input: TransitionTaskRequestDto): Promise<TaskDetailDto> {
    const currentTask = await taskRepository.findTaskById(taskId)

    if (!currentTask) {
      throw new Error('TASK_NOT_FOUND')
    }

    validateTaskTransition(currentTask.status, input.status)

    const now = new Date().toISOString()
    const nextTask: TaskDetailDto = {
      ...currentTask,
      status: input.status,
      progress: normalizeProgress(input.status, input.progress, currentTask.progress),
      stage: input.stage ?? defaultStageByStatus(input.status),
      error_code: input.status === 'failed' ? (input.error_code ?? 'TASK_FAILED') : null,
      error_message: input.status === 'failed' ? (input.error_message ?? 'Task failed') : null,
      settled_credits: input.status === 'completed' ? (input.settled_credits ?? currentTask.estimated_credits) : null,
      completed_at: input.status === 'completed' ? now : null,
      updated_at: now,
      version: currentTask.version + 1,
    }

    await taskRepository.saveTask(nextTask)

    const event = buildTaskRealtimeEvent({
      occurredAt: now,
      eventType: mapTaskTransitionEventType(input.status),
      fromStatus: currentTask.status,
      toStatus: nextTask.status,
      task: toTaskSummary(nextTask),
    })

    await taskRepository.appendEvent(taskId, event)
    publishTaskRealtimeEvent(event)

    return nextTask
  }
}

export const taskService = new TaskService()

function validateTaskTransition(currentStatus: TaskStatus, nextStatus: TransitionTaskRequestDto['status']) {
  const allowedTransitions: Record<TaskStatus, TaskStatus[]> = {
    created: [],
    billing_pending: [],
    queued: ['processing', 'failed'],
    processing: ['completed', 'failed'],
    completed: [],
    failed: [],
    cancelling: [],
    cancelled: [],
  }

  if (!allowedTransitions[currentStatus].includes(nextStatus)) {
    throw new Error('TASK_STATUS_TRANSITION_INVALID')
  }
}

function defaultStageByStatus(status: TransitionTaskRequestDto['status']) {
  if (status === 'processing') {
    return 'processing'
  }

  if (status === 'completed') {
    return 'completed'
  }

  return 'failed'
}

function normalizeProgress(
  status: TransitionTaskRequestDto['status'],
  progress: number | undefined,
  currentProgress: number,
) {
  if (typeof progress === 'number') {
    return Math.max(0, Math.min(100, progress))
  }

  if (status === 'processing') {
    return Math.max(currentProgress, 1)
  }

  if (status === 'completed') {
    return 100
  }

  return currentProgress
}
