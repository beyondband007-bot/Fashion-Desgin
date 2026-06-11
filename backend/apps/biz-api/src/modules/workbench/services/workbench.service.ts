import type {
  TaskDownloadResponseDto,
  TaskRealtimeEventDto,
  WorkbenchModelDto,
  WorkbenchRecentResultDto,
  WorkbenchSceneDto,
} from '../../../../../../packages/shared-types/src'
import { createId } from '../../../../../../packages/shared-kernel/src/utils/id'
import { taskRepository } from '../../tasks/repositories'
import type { TaskDetailDto } from '../../../../../../packages/shared-types/src'
import { workbenchModels, workbenchScenes } from './workbench.catalog'
import { toTaskSummary } from '../../tasks/repositories/task.mapper'
import { publishTaskRealtimeEvent } from '../../realtime/services/task-realtime.publisher'

export class WorkbenchService {
  listModels() {
    return workbenchModels
  }

  listScenes() {
    return workbenchScenes
  }

  async listRecentResults(module = 'ai_generate', limit = 8): Promise<WorkbenchRecentResultDto[]> {
    const items = await taskRepository.listRecentCompletedTasks(module, limit)

    return items.map((item) => ({
      ...item,
      id: item.task_id,
      image: item.image_url,
      sourceImage: item.image_url,
      type: mapTaskTypeLabel(item.task_type),
      createdAt: item.completed_at ?? item.created_at,
    }))
  }

  async cancelTask(taskId: string): Promise<TaskDetailDto> {
    const task = await taskRepository.findTaskById(taskId)

    if (!task) {
      throw new Error('TASK_NOT_FOUND')
    }

    if (!['queued', 'processing'].includes(task.status)) {
      throw new Error('TASK_CANCEL_NOT_ALLOWED')
    }

    const now = new Date().toISOString()
    const nextTask: TaskDetailDto = {
      ...task,
      status: 'cancelled',
      stage: 'cancelled',
      cancellable: false,
      updated_at: now,
      version: task.version + 1,
      completed_at: task.completed_at,
      error_code: null,
      error_message: null,
    }

    await taskRepository.saveTask(nextTask)
    const event: TaskRealtimeEventDto = {
      event_id: createId('evt'),
      event_type: 'task.cancelled',
      occurred_at: now,
      from_status: task.status,
      to_status: nextTask.status,
      task: toTaskSummary(nextTask),
    }
    await taskRepository.appendEvent(taskId, event)
    publishTaskRealtimeEvent(event)

    return nextTask
  }

  async retryTask(taskId: string): Promise<TaskDetailDto> {
    const task = await taskRepository.findTaskById(taskId)

    if (!task) {
      throw new Error('TASK_NOT_FOUND')
    }

    if (task.status !== 'failed') {
      throw new Error('TASK_RETRY_NOT_ALLOWED')
    }

    const now = new Date().toISOString()
    const retriedTask: TaskDetailDto = {
      ...task,
      id: createId('tsk'),
      status: 'queued',
      progress: 0,
      stage: 'queued',
      error_code: null,
      error_message: null,
      settled_credits: null,
      completed_at: null,
      created_at: now,
      updated_at: now,
      version: 1,
      parent_task_id: task.id,
    }

    await taskRepository.saveTask(retriedTask)
    const event: TaskRealtimeEventDto = {
      event_id: createId('evt'),
      event_type: 'task.created',
      occurred_at: now,
      from_status: null,
      to_status: retriedTask.status,
      task: toTaskSummary(retriedTask),
    }
    await taskRepository.appendEvent(retriedTask.id, event)
    publishTaskRealtimeEvent(event)

    return retriedTask
  }

  async getDownload(taskId: string): Promise<TaskDownloadResponseDto | undefined> {
    const download = await taskRepository.getTaskDownload(taskId)

    if (download) {
      return download
    }

    const task = await taskRepository.findTaskById(taskId)

    if (!task || task.status !== 'completed') {
      return undefined
    }

    return {
      task_id: taskId,
      download_url: `https://picsum.photos/seed/${taskId}/960/1280`,
    }
  }
}

export const workbenchService = new WorkbenchService()

function mapTaskTypeLabel(taskType: string) {
  const labels: Record<string, string> = {
    clothes: 'clothes',
    real: 'real',
    mannequin: 'mannequin',
    model_replace: 'model',
    video: 'video',
    creative: 'creative',
  }

  return labels[taskType] ?? taskType
}
