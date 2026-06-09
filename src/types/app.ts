import type { ReactNode } from 'react'

export type ThemeMode = 'light' | 'dark' | 'system'

export type ResolvedTheme = 'light' | 'dark'

export type NavItem = {
  key: string
  label: string
  path: string
  requiresAuth?: boolean
}

export type StatCardItem = {
  label: string
  value: string
  hint?: string
  icon?: string
}

export type FeatureCardItem = {
  title: string
  description: string
  tags: string[]
  icon?: string
  cover?: string
  path?: string
}

export type BrandItem = {
  name: string
  enName?: string
}

export type SuccessCaseItem = {
  id: string
  brand: string
  cover: string
  gmvIncrease: string
  costReduction: string
  summary: string
}

export type HomeConfig = {
  heroBadge: string
  heroTitle: string
  heroSubtitle: string
  heroHighlights: string[]
  stats: StatCardItem[]
  features: FeatureCardItem[]
  brands: BrandItem[]
  cases: SuccessCaseItem[]
}

export type UploadFileItem = {
  id: string
  name: string
  size: number
  url: string
  type: 'image' | 'video'
}

export type PageSection = {
  title: string
  description: string
  action?: ReactNode
}
