const { PrismaClient } = require('../generated/biz-client')

const { loadEnvFile } = require('./load-env.cjs')

const DEMO_USER_ID = 'usr_demo'
const DEMO_CREDIT_ACCOUNT_ID = 'crd_demo'

async function main() {
  loadEnvFile()

  const prisma = new PrismaClient()

  try {
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

    process.stdout.write('[biz-db] demo user bootstrap ok\n')
  } finally {
    await prisma.$disconnect()
  }
}

main().catch((error) => {
  process.stderr.write(`[biz-db] demo user bootstrap failed: ${error.message}\n`)
  process.exit(1)
})
