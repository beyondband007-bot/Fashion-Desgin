import type {
  TaskDetailDto,
  TaskDownloadResponseDto,
  TaskEstimateResponseDto,
  TaskListQueryDto,
  TaskRealtimeEventDto,
  WorkbenchRecentResultDto,
} from '../../../../../../packages/shared-types/src'

import type { TaskRepository } from './task.repository'

type MemoryState = {
  tasks: Map<string, TaskDetailDto>
  quotes: Map<string, TaskEstimateResponseDto>
  events: Map<string, TaskRealtimeEventDto[]>
}

const state: MemoryState = {
  tasks: new Map(),
  quotes: new Map(),
  events: new Map(),
}

export class MemoryTaskRepository implements TaskRepository {
  async saveQuote(quote: TaskEstimateResponseDto) {
    state.quotes.set(quote.quote_id, quote)
  }

  async findQuoteById(id: string) {
    return state.quotes.get(id)
  }

  async saveTask(task: TaskDetailDto) {
    state.tasks.set(task.id, task)
  }

  async findTaskById(id: string) {
    return state.tasks.get(id)
  }

  async listTasks(query?: TaskListQueryDto) {
    const tasks = Array.from(state.tasks.values())

    if (!query) {
      return tasks
    }

    return tasks.filter((task) => {
      if (query.module && task.module !== query.module) return false
      if (query.project_id && task.project_id !== query.project_id) return false
      if (query.batch_id && task.batch_id !== query.batch_id) return false
      if (query.task_type && task.task_type !== query.task_type) return false
      if (query.status && task.status !== query.status) return false
      if (query.billing_status && task.billing_status !== query.billing_status) return false
      return true
    })
  }

  async appendEvent(taskId: string, event: TaskRealtimeEventDto) {
    const current = state.events.get(taskId) ?? []
    current.push(event)
    state.events.set(taskId, current)
  }

  async listEvents(taskId: string) {
    return state.events.get(taskId) ?? []
  }

  async listRecentCompletedTasks(module: string, limit: number) {
    return Array.from(state.tasks.values())
      .filter((task) => task.module === module && task.status === 'completed')
      .sort((a, b) => b.created_at.localeCompare(a.created_at))
      .slice(0, limit)
      .map(
        (task): WorkbenchRecentResultDto => ({
          task_id: task.id,
          project_id: task.project_id,
          batch_id: task.batch_id,
          module: task.module,
          task_type: task.task_type,
          status: task.status,
          image_url: `https://picsum.photos/seed/${task.id}/960/1280`,
          source_page: task.source_page,
          created_at: task.created_at,
          completed_at: task.completed_at,
        }),
      )
  }

  async getTaskDownload(taskId: string) {
    const task = state.tasks.get(taskId)

    if (!task || task.status !== 'completed') {
      return undefined
    }

    return {
      task_id: taskId,
      download_url: `https://picsum.photos/seed/${taskId}/960/1280`,
    } satisfies TaskDownloadResponseDto
  }
}
