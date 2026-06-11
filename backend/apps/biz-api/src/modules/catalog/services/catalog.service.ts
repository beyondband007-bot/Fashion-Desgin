import path from 'node:path'

import type {
  AssetListItemDto,
  CreditTransactionItemDto,
  PricingPlanDto,
  ProjectListItemDto,
} from '../../../../../../packages/shared-types/src'
import { DEMO_TASK_CREDIT_ACCOUNT_ID, DEMO_TASK_USER_ID } from '../../tasks/constants/demo-task-context'

const { PrismaClient: BizPrismaClient } = require(path.resolve(
  process.cwd(),
  'generated/biz-client',
)) as typeof import('../../../../../../generated/biz-client')
const { PrismaClient: LedgerPrismaClient } = require(path.resolve(
  process.cwd(),
  'generated/ledger-client',
)) as typeof import('../../../../../../generated/ledger-client')

const bizPrisma = new BizPrismaClient()
const ledgerPrisma = new LedgerPrismaClient()

const fallbackAssets: AssetListItemDto[] = [
  createAssetFallback('asset-1', 'Wool Coat Source', 'garment', ['coat', 'winter'], true, 'asset-1', daysAgo(1)),
  createAssetFallback('asset-2', 'Urban Street Scene', 'scene', ['street', 'brand'], false, 'asset-2', daysAgo(2)),
  createAssetFallback('asset-3', 'Authorized Model Set', 'model', ['license', 'common'], true, 'asset-3', daysAgo(3)),
]

const fallbackProjects: ProjectListItemDto[] = [
  createProjectFallback('project-1', '618 New Arrival', 'Main images, detail pages, and short-form assets.', 'running', 24, 'project-1', hoursAgo(1)),
  createProjectFallback('project-2', 'Overseas Lookbook', 'Brand-style seasonal visuals for overseas channels.', 'success', 12, 'project-2', hoursAgo(5)),
]

const fallbackPlans: PricingPlanDto[] = [
  createPlan('starter', 'Starter', 'Validate the AI generation workflow with the smallest entry plan.', 0, 0, '1 seat', false, ['100 credits', 'Base models', 'Standard output']),
  createPlan('basic', 'Basic', 'For teams with stable weekly updates and small catalog operations.', 99, 990, '3 seats', false, ['500 credits', 'Batch generation', 'Project management', 'Priority queue']),
  createPlan('advanced', 'Advanced', 'For brand content and livestream material teams.', 299, 2990, '10 seats', false, ['1500 credits', 'Video generation', 'Exclusive scenes', 'Data export']),
  createPlan('pro', 'Pro', 'For multi-brand and multi-store centralized operations.', 599, 5990, '20 seats', false, ['4000 credits', 'Advanced review flow', 'Team collaboration', 'Priority support']),
  createPlan('enterprise', 'Enterprise', 'For large brands that need private deployment and custom model training.', 0, 0, 'custom', true, ['API integration', 'Private deployment', 'Brand model training', 'Dedicated success team']),
]

const fallbackTransactions: CreditTransactionItemDto[] = [
  createTransaction('credit-1', 'AI generation consumption', -48, 'consume', minutesAgo(30)),
  createTransaction('credit-2', 'Plan recharge', 1000, 'recharge', daysAgo(1)),
  createTransaction('credit-3', 'Failed task refund', 24, 'refund', daysAgo(2)),
]

export class CatalogService {
  async listAssets(): Promise<AssetListItemDto[]> {
    const assets = await bizPrisma.asset.findMany({
      where: {
        ownerType: 'user',
        ownerId: DEMO_TASK_USER_ID,
        deletedAt: null,
        status: {
          in: ['ready', 'uploading'],
        },
      },
      orderBy: {
        updatedAt: 'desc',
      },
      take: 24,
    })

    if (assets.length === 0) {
      return fallbackAssets
    }

    return assets.map((asset) => {
      const tags = readTagList(asset.metadataJson)
      const coverUrl = asset.thumbnailUrl ?? asset.publicUrl ?? picsum(asset.id)
      const updatedAt = asset.updatedAt.toISOString()

      return {
        id: asset.id,
        name: asset.name,
        category: asset.purpose ?? asset.mediaType,
        tags: tags.length > 0 ? tags : [asset.mediaType, asset.fileExt].filter(Boolean),
        favorite: asset.favorite,
        cover_url: coverUrl,
        updated_at: updatedAt,
        cover: coverUrl,
        updatedAt,
      }
    })
  }

  async listProjects(): Promise<ProjectListItemDto[]> {
    const projects = await bizPrisma.project.findMany({
      where: {
        ownerType: 'user',
        ownerId: DEMO_TASK_USER_ID,
        deletedAt: null,
      },
      orderBy: {
        updatedAt: 'desc',
      },
      take: 20,
    })

    if (projects.length === 0) {
      return fallbackProjects
    }

    const coverAssetIds = projects.map((item) => item.coverAssetId).filter(Boolean) as string[]
    const coverAssets = coverAssetIds.length
      ? await bizPrisma.asset.findMany({
          where: {
            id: {
              in: coverAssetIds,
            },
          },
        })
      : []
    const coverMap = new Map(coverAssets.map((item) => [item.id, item]))

    return projects.map((project) => {
      const coverAsset = project.coverAssetId ? coverMap.get(project.coverAssetId) : undefined
      const coverUrl = coverAsset?.thumbnailUrl ?? coverAsset?.publicUrl ?? picsum(project.id)
      const updatedAt = project.updatedAt.toISOString()
      const status = mapProjectStatus(project.status, project.taskCount)

      return {
        id: project.id,
        title: project.name,
        summary: project.description ?? 'Project generated from the current AI workflow.',
        status,
        updated_at: updatedAt,
        task_count: project.taskCount,
        cover_url: coverUrl,
        updatedAt,
        taskCount: project.taskCount,
        cover: coverUrl,
      }
    })
  }

  async listPricingPlans(): Promise<PricingPlanDto[]> {
    return fallbackPlans
  }

  async listCreditTransactions(): Promise<CreditTransactionItemDto[]> {
    const transactions = await ledgerPrisma.creditTransaction.findMany({
      where: {
        accountId: DEMO_TASK_CREDIT_ACCOUNT_ID,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 20,
    })

    if (transactions.length === 0) {
      return fallbackTransactions
    }

    return transactions.map((item) => {
      const type = mapTransactionType(item.transactionType)
      const signedPoints = type === 'consume' ? -Math.abs(Number(item.points)) : Math.abs(Number(item.points))
      const createdAt = item.createdAt.toISOString()

      return {
        id: item.id,
        title: mapTransactionTitle(item.descriptionCode, type),
        delta: signedPoints,
        type,
        created_at: createdAt,
        createdAt,
      }
    })
  }
}

function readTagList(value: unknown): string[] {
  if (!value || typeof value !== 'object') {
    return []
  }

  const tags = (value as { tags?: unknown }).tags
  if (!Array.isArray(tags)) {
    return []
  }

  return tags.filter((item): item is string => typeof item === 'string')
}

function mapProjectStatus(status: string, taskCount: number): ProjectListItemDto['status'] {
  if (status === 'archived' || status === 'deleted') {
    return 'cancelled'
  }

  return taskCount > 0 ? 'running' : 'queued'
}

function mapTransactionType(transactionType: string): CreditTransactionItemDto['type'] {
  if (transactionType === 'refund' || transactionType === 'release') {
    return 'refund'
  }

  if (transactionType === 'recharge' || transactionType === 'grant' || transactionType === 'adjust_credit') {
    return 'recharge'
  }

  return 'consume'
}

function mapTransactionTitle(descriptionCode: string, type: CreditTransactionItemDto['type']) {
  if (descriptionCode && descriptionCode !== 'UNKNOWN') {
    return descriptionCode
      .toLowerCase()
      .replaceAll('_', ' ')
      .replace(/(^|\s)\S/g, (char) => char.toUpperCase())
  }

  if (type === 'recharge') {
    return 'Credit Recharge'
  }

  if (type === 'refund') {
    return 'Task Refund'
  }

  return 'AI Generation Consumption'
}

function createAssetFallback(
  id: string,
  name: string,
  category: string,
  tags: string[],
  favorite: boolean,
  seed: string,
  updatedAt: string,
): AssetListItemDto {
  const coverUrl = picsum(seed)
  return {
    id,
    name,
    category,
    tags,
    favorite,
    cover_url: coverUrl,
    updated_at: updatedAt,
    cover: coverUrl,
    updatedAt,
  }
}

function createProjectFallback(
  id: string,
  title: string,
  summary: string,
  status: ProjectListItemDto['status'],
  taskCount: number,
  seed: string,
  updatedAt: string,
): ProjectListItemDto {
  const coverUrl = picsum(seed)
  return {
    id,
    title,
    summary,
    status,
    updated_at: updatedAt,
    task_count: taskCount,
    cover_url: coverUrl,
    updatedAt,
    taskCount,
    cover: coverUrl,
  }
}

function createPlan(
  id: string,
  name: string,
  description: string,
  monthlyPrice: number,
  yearlyPrice: number,
  seats: string,
  highlight: boolean,
  features: string[],
): PricingPlanDto {
  return {
    id,
    name,
    description,
    monthly_price: monthlyPrice,
    yearly_price: yearlyPrice,
    seats,
    highlight,
    features,
    monthlyPrice,
    yearlyPrice,
  }
}

function createTransaction(
  id: string,
  title: string,
  delta: number,
  type: CreditTransactionItemDto['type'],
  createdAt: string,
): CreditTransactionItemDto {
  return {
    id,
    title,
    delta,
    type,
    created_at: createdAt,
    createdAt,
  }
}

function picsum(seed: string) {
  return `https://picsum.photos/seed/${seed}/960/720`
}

function minutesAgo(value: number) {
  return new Date(Date.now() - value * 60_000).toISOString()
}

function hoursAgo(value: number) {
  return new Date(Date.now() - value * 3_600_000).toISOString()
}

function daysAgo(value: number) {
  return new Date(Date.now() - value * 86_400_000).toISOString()
}

export const catalogService = new CatalogService()
