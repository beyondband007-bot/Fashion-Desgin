const { PrismaClient } = require('../generated/ledger-client')

const { loadEnvFile } = require('./load-env.cjs')

const DEMO_USER_ID = 'usr_demo'
const DEMO_CREDIT_ACCOUNT_ID = 'crd_demo'

async function main() {
  loadEnvFile()

  const prisma = new PrismaClient()

  try {
    await prisma.creditAccount.upsert({
      where: { id: DEMO_CREDIT_ACCOUNT_ID },
      update: {
        ownerType: 'user',
        ownerId: DEMO_USER_ID,
        currency: 'CREDIT',
        totalBalance: '1000.0000',
        lockedBalance: '0.0000',
        availableBalance: '1000.0000',
        status: 'active',
      },
      create: {
        id: DEMO_CREDIT_ACCOUNT_ID,
        ownerType: 'user',
        ownerId: DEMO_USER_ID,
        currency: 'CREDIT',
        totalBalance: '1000.0000',
        lockedBalance: '0.0000',
        availableBalance: '1000.0000',
        status: 'active',
      },
    })

    process.stdout.write('[ledger-db] demo credit account bootstrap ok\n')
  } finally {
    await prisma.$disconnect()
  }
}

main().catch((error) => {
  process.stderr.write(`[ledger-db] demo credit account bootstrap failed: ${error.message}\n`)
  process.exit(1)
})
