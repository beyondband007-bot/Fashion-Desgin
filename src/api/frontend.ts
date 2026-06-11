import { apiClient } from './client'

import { mockService } from '@/services/mockService'
import type { AssetItem, CreditTransaction, PricingPlan, TaskRecord } from '@/types/business'
import type { RecentResult, WorkbenchModel, WorkbenchScene } from '@/types/generate'

type ApiResponse<T> = {
  code: number
  message: string
  data: T
  request_id: string
}

type ListPayload<T> = {
  items: T[]
}

type BackendTaskType = 'clothes' | 'real' | 'mannequin' | 'model_replace' | 'video' | 'creative'

type BackendTaskSummary = {
  id: string
  name: string
  task_type: BackendTaskType
  status:
    | 'created'
    | 'billing_pending'
    | 'queued'
    | 'processing'
    | 'completed'
    | 'failed'
    | 'cancelling'
    | 'cancelled'
  progress: number
  estimated_credits: string
  created_at: string
}

type EstimateTaskInput = {
  module: 'ai_generate'
  type: BackendTaskType
  input_asset_ids: string[]
  source_page: string
  config: Record<string, unknown>
}

type CreateTaskInput = {
  quote_id: string
  module: 'ai_generate'
  type: BackendTaskType
  project_id?: string
  batch_id?: string
  source_page: string
  input_asset_ids: string[]
  config: Record<string, unknown>
  name?: string
  model_id?: string
  scene_id?: string
}

type TransitionTaskInput = {
  status: 'processing' | 'completed' | 'failed'
  progress?: number
  stage?: string
  error_code?: string
  error_message?: string
  settled_credits?: string
}

export const frontendApi = {
  async getRealtimeToken() {
    return withMockFallback(
      async () => {
        const response = await apiClient.post<
          ApiResponse<{
            token: string
            expires_in: number
            channel: string
          }>
        >('/api/v1/realtime/token')

        return response.data.data
      },
      async () => ({
        token: 'mock-dev-token',
        expires_in: 3600,
        channel: 'dev',
      }),
    )
  },

  async estimateGenerateTask(input: EstimateTaskInput) {
    const response = await apiClient.post<
      ApiResponse<{
        quote_id: string
        estimated_credits: string
        available_credits: string
      }>
    >('/api/v1/tasks/estimate', input)

    return response.data.data
  },

  async createGenerateTask(input: CreateTaskInput) {
    const response = await apiClient.post<
      ApiResponse<{
        task: {
          id: string
          module: string
          task_type: string
          status: string
          progress: number
          project_id: string | null
          batch_id: string | null
          source_page: string | null
          created_at: string
          version: number
        }
        credit_balance: {
          available: string
          frozen: string
        }
        ws_channel: string
      }>
    >('/api/v1/tasks', input)

    return response.data.data
  },

  async transitionTask(taskId: string, input: TransitionTaskInput) {
    const response = await apiClient.post<ApiResponse<Record<string, unknown>>>(
      `/api/v1/tasks/${taskId}/status`,
      input,
    )

    return response.data.data
  },

  async getAssets() {
    const response = await apiClient.get<ApiResponse<ListPayload<AssetItem>>>('/api/v1/assets')
    return response.data.data.items
  },

  async getTasks() {
    const response = await apiClient.get<ApiResponse<ListPayload<BackendTaskSummary>>>('/api/v1/tasks', {
      params: {
        module: 'ai_generate',
      },
    })

    return response.data.data.items.map(mapTaskRecord)
  },

  async getTransactions() {
    const response = await apiClient.get<ApiResponse<ListPayload<CreditTransaction>>>(
      '/api/v1/credits/transactions',
    )
    return response.data.data.items
  },

  async getPlans() {
    const response = await apiClient.get<ApiResponse<ListPayload<PricingPlan>>>('/api/v1/plans')
    return response.data.data.items
  },

  async getWorkbenchModels() {
    return withMockFallback(
      async () => {
        const response = await apiClient.get<ApiResponse<ListPayload<WorkbenchModel>>>('/api/v1/models')
        return response.data.data.items
      },
      mockService.getWorkbenchModels,
    )
  },

  async getWorkbenchScenes() {
    return withMockFallback(
      async () => {
        const response = await apiClient.get<ApiResponse<ListPayload<WorkbenchScene>>>('/api/v1/scenes')
        return response.data.data.items
      },
      mockService.getWorkbenchScenes,
    )
  },

  async getRecentResults() {
    return withMockFallback(
      async () => {
        const response = await apiClient.get<ApiResponse<ListPayload<RecentResult>>>(
          '/api/v1/workbench/recent-results',
          {
            params: {
              module: 'ai_generate',
              limit: 8,
            },
          },
        )

        return response.data.data.items
      },
      mockService.getRecentResults,
    )
  },
}

function mapTaskRecord(task: BackendTaskSummary): TaskRecord {
  return {
    id: task.id,
    title: task.name,
    type: mapTaskTypeLabel(task.task_type),
    status: mapTaskStatus(task.status),
    createdAt: task.created_at,
    progress: task.progress,
    credits: Number(task.estimated_credits),
    thumbnail: `https://picsum.photos/seed/${task.id}/960/720`,
  }
}

function mapTaskStatus(status: BackendTaskSummary['status']): TaskRecord['status'] {
  if (status === 'processing') {
    return 'running'
  }

  if (status === 'completed') {
    return 'success'
  }

  if (status === 'failed') {
    return 'failed'
  }

  if (status === 'cancelled') {
    return 'cancelled'
  }

  return 'queued'
}

function mapTaskTypeLabel(taskType: BackendTaskSummary['task_type']): TaskRecord['type'] {
  const labelMap: Record<BackendTaskSummary['task_type'], string> = {
    clothes: '服装图',
    real: '真人图',
    mannequin: '人台图',
    model_replace: '换模特',
    video: '视频',
    creative: '创意生图',
  }

  return labelMap[taskType]
}

async function withMockFallback<T>(request: () => Promise<T>, fallback: () => Promise<T>): Promise<T> {
  try {
    return await request()
  } catch {
    return fallback()
  }
}
