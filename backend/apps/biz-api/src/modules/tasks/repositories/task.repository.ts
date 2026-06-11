import type {
  TaskDetailDto,
  TaskDownloadResponseDto,
  TaskEstimateResponseDto,
  TaskListQueryDto,
  TaskRealtimeEventDto,
  WorkbenchRecentResultDto,
} from '../../../../../../packages/shared-types/src'

export type TaskRepository = {
  saveQuote: (quote: TaskEstimateResponseDto) => Promise<void>
  findQuoteById: (id: string) => Promise<TaskEstimateResponseDto | undefined>
  saveTask: (task: TaskDetailDto) => Promise<void>
  findTaskById: (id: string) => Promise<TaskDetailDto | undefined>
  listTasks: (query?: TaskListQueryDto) => Promise<TaskDetailDto[]>
  appendEvent: (taskId: string, event: TaskRealtimeEventDto) => Promise<void>
  listEvents: (taskId: string) => Promise<TaskRealtimeEventDto[]>
  listRecentCompletedTasks: (module: string, limit: number) => Promise<WorkbenchRecentResultDto[]>
  getTaskDownload: (taskId: string) => Promise<TaskDownloadResponseDto | undefined>
}
