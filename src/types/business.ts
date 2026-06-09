export type GenerateCategory = 'clothes' | 'real' | 'mannequin' | 'model'

export type TaskStatusValue = 'pending' | 'queued' | 'running' | 'success' | 'failed' | 'cancelled'

export type PlanBillingCycle = 'monthly' | 'yearly'

export type ModelProfile = {
  id: string
  name: string
  region: string
  style: string
  tags: string[]
  cover: string
}

export type SceneProfile = {
  id: string
  name: string
  category: string
  light: string
  cover: string
}

export type TaskRecord = {
  id: string
  title: string
  type: string
  status: TaskStatusValue
  createdAt: string
  progress: number
  credits: number
  thumbnail: string
}

export type CreditTransaction = {
  id: string
  title: string
  delta: number
  type: 'consume' | 'recharge' | 'refund'
  createdAt: string
}

export type PricingPlan = {
  id: string
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
  seats: string
  highlight?: boolean
  features: string[]
}

export type AssetItem = {
  id: string
  name: string
  category: string
  tags: string[]
  favorite: boolean
  cover: string
  updatedAt: string
}

export type ProjectItem = {
  id: string
  title: string
  summary: string
  status: TaskStatusValue
  updatedAt: string
  taskCount: number
  cover: string
}
