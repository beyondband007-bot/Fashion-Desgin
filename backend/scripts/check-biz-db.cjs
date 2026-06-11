const { PrismaClient } = require('../generated/biz-client')

async function main() {
  const prisma = new PrismaClient()

  try {
    await prisma.$queryRaw`SELECT 1`
    process.stdout.write('[biz-db] connectivity ok\n')
  } finally {
    await prisma.$disconnect()
  }
}

main().catch((error) => {
  process.stderr.write(`[biz-db] connectivity failed: ${error.message}\n`)
  process.exit(1)
})

