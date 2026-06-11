export type GenerateTaskStatus =
  | 'idle'
  | 'uploading'
  | 'ready'
  | 'pending'
  | 'processing'
  | 'completed'
  | 'failed'

export type WorkbenchModel = {
  id: string
  name: string
  avatar: string
  race: string
  age: string
  style: string[]
  bodyType: string
  skinTone: string
  hairColor: string
  favorite: boolean
}

export type WorkbenchScene = {
  id: string
  name: string
  image: string
  type: string
  tone: string
  lighting: string
  style: string
  usageCount: number
}

export type RecentResult = {
  id: string
  image: string
  sourceImage: string
  type: string
  createdAt: string
  status: 'completed' | 'processing' | 'failed'
}

export type OutputRatio = '1:1' | '3:4' | '4:5' | '9:16' | '16:9'
export type OutputPose = 'stand' | 'sit' | 'walk' | 'closeup'
export type OutputQuality = 'standard' | 'hd' | 'uhd'
export type OutputCount = 1 | 2 | 4

export type OutputConfig = {
  ratio: OutputRatio
  pose: OutputPose
  quality: OutputQuality
  count: OutputCount
}

export type UploadedFile = {
  id: string
  name: string
  url: string
  size: number
  width?: number
  height?: number
  progress: number
}

export type GenerateMode = 'same-style' | 'clothes' | 'real' | 'mannequin' | 'model'

export type MockCreditInfo = {
  balance: number
  todayTasks: number
  estimatedCost: number
}
