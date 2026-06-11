export type FrontendTaskStatus = 'pending' | 'queued' | 'running' | 'success' | 'failed' | 'cancelled'

export type AssetListItemDto = {
  id: string
  name: string
  category: string
  tags: string[]
  favorite: boolean
  cover_url: string
  updated_at: string
  cover: string
  updatedAt: string
}

export type ProjectListItemDto = {
  id: string
  title: string
  summary: string
  status: FrontendTaskStatus
  updated_at: string
  task_count: number
  cover_url: string
  updatedAt: string
  taskCount: number
  cover: string
}

export type CreditTransactionItemDto = {
  id: string
  title: string
  delta: number
  type: 'consume' | 'recharge' | 'refund'
  created_at: string
  createdAt: string
}

export type PricingPlanDto = {
  id: string
  name: string
  description: string
  monthly_price: number
  yearly_price: number
  seats: string
  highlight?: boolean
  features: string[]
  monthlyPrice: number
  yearlyPrice: number
}
