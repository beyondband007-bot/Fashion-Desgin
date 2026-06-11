export const TASK_MODULES = ['ai_generate', 'creative', 'video_beta', 'delivery'] as const

export type TaskModule = (typeof TASK_MODULES)[number]

export const TASK_TYPES = [
  'clothes',
  'real',
  'mannequin',
  'model_replace',
  'video',
  'creative',
] as const

export type TaskType = (typeof TASK_TYPES)[number]

export const TASK_STATUSES = [
  'created',
  'billing_pending',
  'queued',
  'processing',
  'completed',
  'failed',
  'cancelling',
  'cancelled',
] as const

export type TaskStatus = (typeof TASK_STATUSES)[number]

export const BILLING_STATUSES = [
  'not_started',
  'freezing',
  'frozen',
  'settling',
  'settled',
  'refunding',
  'refunded',
  'failed',
] as const

export type BillingStatus = (typeof BILLING_STATUSES)[number]

export const TASK_EVENT_TYPES = [
  'task.created',
  'task.updated',
  'task.completed',
  'task.failed',
  'task.cancelled',
  'task.refunded',
] as const

export type TaskEventType = (typeof TASK_EVENT_TYPES)[number]

export type TaskSummaryDto = {
  id: string
  name: string
  module: TaskModule
  scene: string | null
  task_type: TaskType
  project_id: string | null
  batch_id: string | null
  source_page: string | null
  status: TaskStatus
  billing_status: BillingStatus
  progress: number
  stage: string | null
  estimated_credits: string
  settled_credits: string | null
  error_code: string | null
  error_message: string | null
  cancellable: boolean
  created_at: string
  updated_at: string
  completed_at: string | null
  version: number
}

export type TaskDetailDto = TaskSummaryDto & {
  user_id: string
  owner_type: 'user' | 'enterprise'
  owner_id: string
  parent_task_id: string | null
  quote_id: string | null
  model_id: string | null
  scene_id: string | null
  template_id: string | null
  config_version: string
  config: Record<string, unknown>
  input_asset_ids: string[]
  output_asset_ids: string[]
}

export type TaskRealtimeEventDto = {
  event_id: string
  event_type: TaskEventType
  occurred_at: string
  from_status?: TaskStatus | null
  to_status?: TaskStatus | null
  task: TaskSummaryDto
}

export type TaskListQueryDto = {
  module?: TaskModule
  project_id?: string
  batch_id?: string
  task_type?: TaskType
  status?: TaskStatus
  billing_status?: BillingStatus
}

export type TaskEstimateRequestDto = {
  module: TaskModule
  type: TaskType
  project_id?: string | null
  batch_id?: string | null
  input_asset_ids: string[]
  model_id?: string | null
  scene_id?: string | null
  template_id?: string | null
  source_page?: string | null
  config: Record<string, unknown>
}

export type TaskEstimateResponseDto = {
  quote_id: string
  module: TaskModule
  task_type: TaskType
  unit_credits: string
  billable_quantity: string
  estimated_credits: string
  available_credits: string
  sufficient: boolean
  expires_at: string
  pricing_snapshot: {
    plan_code: string
    rule_version: string
  }
}

export type CreateTaskRequestDto = {
  quote_id: string
  module: TaskModule
  type: TaskType
  name?: string
  project_id?: string | null
  batch_id?: string | null
  input_asset_ids: string[]
  model_id?: string | null
  scene_id?: string | null
  template_id?: string | null
  source_page?: string | null
  config: Record<string, unknown>
}

export type CreateTaskResponseDto = {
  task: TaskSummaryDto
  credit_balance: {
    total: string
    available: string
    frozen: string
  }
  ws_channel: string
}

export type TransitionTaskRequestDto = {
  status: Extract<TaskStatus, 'processing' | 'completed' | 'failed'>
  progress?: number
  stage?: string | null
  error_code?: string | null
  error_message?: string | null
  settled_credits?: string | null
}

export type WorkbenchModelDto = {
  id: string
  name: string
  code: string
  cover_image_url: string
  tags: string[]
  supported_task_types: TaskType[]
  avatar?: string
  race?: string
  age?: string
  style?: string[]
  bodyType?: string
  skinTone?: string
  hairColor?: string
  favorite?: boolean
}

export type WorkbenchSceneDto = {
  id: string
  name: string
  code: string
  preview_image_url: string
  prompt_hint: string
  supported_task_types: TaskType[]
  image?: string
  type?: string
  tone?: string
  lighting?: string
  style?: string
  usageCount?: number
}

export type WorkbenchRecentResultDto = {
  task_id: string
  project_id: string | null
  batch_id: string | null
  module: TaskModule
  task_type: TaskType
  status: TaskStatus
  image_url: string
  source_page: string | null
  created_at: string
  completed_at: string | null
  id?: string
  image?: string
  sourceImage?: string
  type?: string
  createdAt?: string
}

export type TaskDownloadResponseDto = {
  task_id: string
  download_url: string
}
