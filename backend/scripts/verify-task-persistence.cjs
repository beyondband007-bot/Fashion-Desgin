const { PrismaClient } = require('../generated/biz-client')

const { loadEnvFile } = require('./load-env.cjs')

const DEMO_USER_ID = 'usr_demo'
const DEMO_CREDIT_ACCOUNT_ID = 'crd_demo'

function createId(prefix) {
  const random = Math.random().toString(36).slice(2, 10)
  return `${prefix}_${Date.now()}_${random}`
}

async function ensureDemoUser(prisma) {
  await prisma.user.upsert({
    where: { id: DEMO_USER_ID },
    update: {
      nickname: 'Demo User',
      status: 'active',
      userType: 'personal',
      registerSource: 'bootstrap',
      creditAccountId: DEMO_CREDIT_ACCOUNT_ID,
      creditAccountStatus: 'ready',
    },
    create: {
      id: DEMO_USER_ID,
      nickname: 'Demo User',
      status: 'active',
      userType: 'personal',
      registerSource: 'bootstrap',
      creditAccountId: DEMO_CREDIT_ACCOUNT_ID,
      creditAccountStatus: 'ready',
    },
  })
}

async function main() {
  loadEnvFile()

  const prisma = new PrismaClient()
  const quoteId = createId('qte')
  const taskId = createId('tsk')
  const eventId = createId('evt')
  const occurredAt = new Date()

  try {
    await ensureDemoUser(prisma)

    await prisma.taskQuote.create({
      data: {
        id: quoteId,
        userId: DEMO_USER_ID,
        billingOwnerType: 'user',
        billingOwnerId: DEMO_USER_ID,
        creditAccountId: DEMO_CREDIT_ACCOUNT_ID,
        taskType: 'clothes',
        module: 'ai_generate',
        requestHash: `rqh_${quoteId}`,
        planCode: 'basic',
        ruleVersion: '2026-06-10',
        unitCredits: '12.0000',
        billableQuantity: '1.0000',
        estimatedCredits: '12.0000',
        configSnapshotJson: {},
        status: 'active',
        expiresAt: new Date(occurredAt.getTime() + 5 * 60 * 1000),
      },
    })

    await prisma.generationTask.create({
      data: {
        id: taskId,
        userId: DEMO_USER_ID,
        ownerType: 'user',
        ownerId: DEMO_USER_ID,
        quoteId,
        name: 'ai_generate:clothes',
        module: 'ai_generate',
        taskType: 'clothes',
        sourcePage: 'workspace',
        status: 'queued',
        progress: 0,
        stage: 'queued',
        configJson: {},
        configVersion: 'v1',
        billingOwnerType: 'user',
        billingOwnerId: DEMO_USER_ID,
        creditAccountId: DEMO_CREDIT_ACCOUNT_ID,
        billingStatus: 'frozen',
        estimatedCredits: '12.0000',
        cancellable: true,
        version: 1,
      },
    })

    await prisma.taskEvent.create({
      data: {
        taskId,
        eventType: 'task.created',
        toStatus: 'queued',
        progress: 0,
        requestId: eventId,
        payloadJson: {
          event_id: eventId,
          event_type: 'task.created',
          occurred_at: occurredAt.toISOString(),
          task: {
            id: taskId,
            name: 'ai_generate:clothes',
            module: 'ai_generate',
            scene: null,
            task_type: 'clothes',
            project_id: null,
            batch_id: null,
            source_page: 'workspace',
            status: 'queued',
            billing_status: 'frozen',
            progress: 0,
            stage: 'queued',
            estimated_credits: '12.0000',
            settled_credits: null,
            error_code: null,
            error_message: null,
            cancellable: true,
            created_at: occurredAt.toISOString(),
            updated_at: occurredAt.toISOString(),
            completed_at: null,
            version: 1,
          },
        },
      },
    })

    const persistedTask = await prisma.generationTask.findUnique({
      where: { id: taskId },
      include: {
        events: true,
      },
    })

    if (!persistedTask) {
      throw new Error('TASK_PERSISTENCE_VERIFY_FAILED')
    }

    process.stdout.write(
      JSON.stringify(
        {
          status: 'ok',
          quote_id: quoteId,
          task_id: taskId,
          event_count: persistedTask.events.length,
          module: persistedTask.module,
          task_type: persistedTask.taskType,
        },
        null,
        2,
      ) + '\n',
    )
  } finally {
    await prisma.$disconnect()
  }
}

main().catch((error) => {
  process.stderr.write(`[biz-db] task persistence verify failed: ${error.message}\n`)
  process.exit(1)
})
