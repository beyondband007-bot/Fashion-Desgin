import path from 'node:path'

import type { Prisma, PrismaClient as BizPrismaClient } from '../../../../../../generated/biz-client'
import type {
  TaskDetailDto,
  TaskDownloadResponseDto,
  TaskEstimateResponseDto,
  TaskListQueryDto,
  TaskRealtimeEventDto,
  WorkbenchRecentResultDto,
} from '../../../../../../packages/shared-types/src'

import type { TaskRepository } from './task.repository'
import {
  DEMO_TASK_CREDIT_ACCOUNT_ID,
  DEMO_TASK_OWNER_TYPE,
  DEMO_TASK_USER_ID,
} from '../constants/demo-task-context'

const { PrismaClient } = require(path.resolve(process.cwd(), 'generated/biz-client')) as typeof import('../../../../../../generated/biz-client')

const prisma = new PrismaClient() as BizPrismaClient

export class PrismaTaskRepository implements TaskRepository {
  async saveQuote(quote: TaskEstimateResponseDto) {
    await prisma.taskQuote.upsert({
      where: { id: quote.quote_id },
      update: {
        module: quote.module,
        taskType: quote.task_type,
        unitCredits: quote.unit_credits,
        billableQuantity: quote.billable_quantity,
        estimatedCredits: quote.estimated_credits,
        expiresAt: new Date(quote.expires_at),
        planCode: quote.pricing_snapshot.plan_code,
        ruleVersion: quote.pricing_snapshot.rule_version,
      },
      create: {
        id: quote.quote_id,
        userId: DEMO_TASK_USER_ID,
        billingOwnerType: DEMO_TASK_OWNER_TYPE,
        billingOwnerId: DEMO_TASK_USER_ID,
        creditAccountId: DEMO_TASK_CREDIT_ACCOUNT_ID,
        module: quote.module,
        taskType: quote.task_type,
        requestHash: `rqh_${quote.quote_id}`,
        planCode: quote.pricing_snapshot.plan_code,
        ruleVersion: quote.pricing_snapshot.rule_version,
        unitCredits: quote.unit_credits,
        billableQuantity: quote.billable_quantity,
        estimatedCredits: quote.estimated_credits,
        configSnapshotJson: {} as Prisma.InputJsonValue,
        status: 'active',
        expiresAt: new Date(quote.expires_at),
      },
    })
  }

  async findQuoteById(id: string) {
    const quote = await prisma.taskQuote.findUnique({
      where: { id },
    })

    if (!quote) {
      return undefined
    }

    return {
      quote_id: quote.id,
      module: quote.module,
      task_type: quote.taskType,
      unit_credits: toFixedCreditString(quote.unitCredits.toString()),
      billable_quantity: toFixedCreditString(quote.billableQuantity.toString()),
      estimated_credits: toFixedCreditString(quote.estimatedCredits.toString()),
      available_credits: '1000.0000',
      sufficient: true,
      expires_at: quote.expiresAt.toISOString(),
      pricing_snapshot: {
        plan_code: quote.planCode,
        rule_version: quote.ruleVersion,
      },
    }
  }

  async saveTask(task: TaskDetailDto) {
    await prisma.generationTask.upsert({
      where: { id: task.id },
      update: buildGenerationTaskMutation(task),
      create: {
        ...buildGenerationTaskMutation(task),
        id: task.id,
        userId: task.user_id,
        ownerType: task.owner_type,
        ownerId: task.owner_id,
      },
    })
  }

  async findTaskById(id: string) {
    const task = await prisma.generationTask.findUnique({
      where: { id },
    })

    if (!task) {
      return undefined
    }

    return mapGenerationTask(task)
  }

  async listTasks(query?: TaskListQueryDto) {
    const tasks = await prisma.generationTask.findMany({
      where: buildTaskWhereInput(query),
      orderBy: {
        createdAt: 'desc',
      },
    })

    return tasks.map(mapGenerationTask)
  }

  async appendEvent(taskId: string, event: TaskRealtimeEventDto) {
    await prisma.taskEvent.create({
      data: {
        taskId,
        eventType: event.event_type,
        fromStatus: event.from_status ?? null,
        toStatus: event.to_status ?? event.task.status,
        progress: event.task.progress,
        payloadJson: event as unknown as Prisma.InputJsonValue,
        requestId: event.event_id,
        createdAt: new Date(event.occurred_at),
      },
    })
  }

  async listEvents(taskId: string) {
    const events = await prisma.taskEvent.findMany({
      where: { taskId },
      orderBy: {
        createdAt: 'asc',
      },
    })

    return events.map((event) => event.payloadJson as unknown as TaskRealtimeEventDto)
  }

  async listRecentCompletedTasks(module: string, limit: number) {
    const tasks = await prisma.generationTask.findMany({
      where: {
        module: module as TaskDetailDto['module'],
        status: 'completed',
      },
      include: {
        outputs: {
          orderBy: {
            createdAt: 'asc',
          },
        },
      },
      orderBy: {
        completedAt: 'desc',
      },
      take: limit,
    })

    const assetIds = tasks
      .flatMap((task) => task.outputs.map((output) => output.assetId))
      .filter(Boolean)

    const assets = assetIds.length
      ? await prisma.asset.findMany({
          where: {
            id: {
              in: assetIds,
            },
          },
        })
      : []

    const assetMap = new Map(assets.map((asset) => [asset.id, asset]))

    return tasks.map((task): WorkbenchRecentResultDto => {
      const primaryOutput = task.outputs[0]
      const asset = primaryOutput ? assetMap.get(primaryOutput.assetId) : undefined

      return {
        task_id: task.id,
        project_id: task.projectId,
        batch_id: task.batchId,
        module: task.module as WorkbenchRecentResultDto['module'],
        task_type: task.taskType as WorkbenchRecentResultDto['task_type'],
        status: task.status as WorkbenchRecentResultDto['status'],
        image_url: asset?.publicUrl ?? `https://picsum.photos/seed/${task.id}/960/1280`,
        source_page: task.sourcePage,
        created_at: task.createdAt.toISOString(),
        completed_at: task.completedAt ? task.completedAt.toISOString() : null,
      }
    })
  }

  async getTaskDownload(taskId: string) {
    const output = await prisma.taskOutput.findFirst({
      where: { taskId },
      orderBy: {
        createdAt: 'asc',
      },
    })

    if (!output) {
      return undefined
    }

    const asset = await prisma.asset.findUnique({
      where: { id: output.assetId },
    })

    if (!asset?.publicUrl) {
      return undefined
    }

    return {
      task_id: taskId,
      download_url: asset.publicUrl,
    } satisfies TaskDownloadResponseDto
  }
}

function buildGenerationTaskMutation(task: TaskDetailDto) {
  return {
    name: task.name,
    module: task.module,
    scene: task.scene,
    taskType: task.task_type,
    sourcePage: task.source_page,
    batchId: task.batch_id,
    projectId: task.project_id,
    parentTaskId: task.parent_task_id,
    quoteId: task.quote_id,
    status: task.status,
    progress: task.progress,
    stage: task.stage,
    modelId: task.model_id,
    sceneId: task.scene_id,
    templateId: task.template_id,
    configJson: task.config as unknown as Prisma.InputJsonValue,
    configVersion: task.config_version,
    billingOwnerType: task.owner_type,
    billingOwnerId: task.owner_id,
    creditAccountId: DEMO_TASK_CREDIT_ACCOUNT_ID,
    billingStatus: task.billing_status,
    estimatedCredits: task.estimated_credits,
    settledCredits: task.settled_credits,
    errorCode: task.error_code,
    errorMessage: task.error_message,
    retryCount: 0,
    cancellable: task.cancellable,
    startedAt: null,
    deadlineAt: null,
    completedAt: task.completed_at ? new Date(task.completed_at) : null,
    cancelledAt: null,
    version: task.version,
  }
}

function buildTaskWhereInput(query?: TaskListQueryDto) {
  if (!query) {
    return {}
  }

  return {
    ...(query.module ? { module: query.module } : {}),
    ...(query.project_id ? { projectId: query.project_id } : {}),
    ...(query.batch_id ? { batchId: query.batch_id } : {}),
    ...(query.task_type ? { taskType: query.task_type } : {}),
    ...(query.status ? { status: query.status } : {}),
    ...(query.billing_status ? { billingStatus: query.billing_status } : {}),
  }
}

function mapGenerationTask(task: {
  id: string
  name: string
  module: string
  scene: string | null
  taskType: string
  projectId: string | null
  batchId: string | null
  sourcePage: string | null
  status: string
  billingStatus: string
  progress: number
  stage: string | null
  estimatedCredits: { toString: () => string }
  settledCredits: { toString: () => string } | null
  errorCode: string | null
  errorMessage: string | null
  cancellable: boolean
  createdAt: Date
  updatedAt: Date
  completedAt: Date | null
  version: number
  userId: string
  ownerType: string
  ownerId: string
  parentTaskId: string | null
  quoteId: string | null
  modelId: string | null
  sceneId: string | null
  templateId: string | null
  configVersion: string
  configJson: unknown
}): TaskDetailDto {
  return {
    id: task.id,
    name: task.name,
    module: task.module as TaskDetailDto['module'],
    scene: task.scene,
    task_type: task.taskType as TaskDetailDto['task_type'],
    project_id: task.projectId,
    batch_id: task.batchId,
    source_page: task.sourcePage,
    status: task.status as TaskDetailDto['status'],
    billing_status: task.billingStatus as TaskDetailDto['billing_status'],
    progress: task.progress,
    stage: task.stage,
    estimated_credits: toFixedCreditString(task.estimatedCredits.toString()),
    settled_credits: task.settledCredits ? toFixedCreditString(task.settledCredits.toString()) : null,
    error_code: task.errorCode,
    error_message: task.errorMessage,
    cancellable: task.cancellable,
    created_at: task.createdAt.toISOString(),
    updated_at: task.updatedAt.toISOString(),
    completed_at: task.completedAt ? task.completedAt.toISOString() : null,
    version: task.version,
    user_id: task.userId,
    owner_type: task.ownerType as TaskDetailDto['owner_type'],
    owner_id: task.ownerId,
    parent_task_id: task.parentTaskId,
    quote_id: task.quoteId,
    model_id: task.modelId,
    scene_id: task.sceneId,
    template_id: task.templateId,
    config_version: task.configVersion,
    config: (task.configJson ?? {}) as Record<string, unknown>,
    input_asset_ids: [],
    output_asset_ids: [],
  }
}

function toFixedCreditString(value: string) {
  return Number(value).toFixed(4)
}
