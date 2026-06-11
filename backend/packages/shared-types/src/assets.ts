export const ASSET_STATUSES = ['uploading', 'ready', 'failed', 'deleted'] as const

export type AssetStatus = (typeof ASSET_STATUSES)[number]

export const REVIEW_STATUSES = ['pending', 'passed', 'rejected'] as const

export type ReviewStatus = (typeof REVIEW_STATUSES)[number]

