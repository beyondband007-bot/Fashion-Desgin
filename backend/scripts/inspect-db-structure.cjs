const { PrismaClient: BizPrismaClient } = require('../generated/biz-client')
const { PrismaClient: LedgerPrismaClient } = require('../generated/ledger-client')

const { loadEnvFile } = require('./load-env.cjs')

loadEnvFile()

async function main() {
  const bizPrisma = new BizPrismaClient()
  const ledgerPrisma = new LedgerPrismaClient()

  try {
    const bizTables = await bizPrisma.$queryRawUnsafe(
      "SELECT table_name AS tableName FROM information_schema.tables WHERE table_schema = DATABASE() ORDER BY table_name ASC",
    )
    const ledgerTables = await ledgerPrisma.$queryRawUnsafe(
      "SELECT table_name AS tableName FROM information_schema.tables WHERE table_schema = DATABASE() ORDER BY table_name ASC",
    )

    process.stdout.write(
      JSON.stringify(
        {
          status: 'ok',
          databases: {
            biz: {
              database: 'fashion_biz',
              table_count: bizTables.length,
              tables: bizTables.map((item) => item.tableName),
            },
            ledger: {
              database: 'fashion_ledger',
              table_count: ledgerTables.length,
              tables: ledgerTables.map((item) => item.tableName),
            },
          },
          conclusion:
            '当前项目按双数据库方案运行，只维护 fashion_biz 和 fashion_ledger 两个库；本次新增主要是新表和新接口，不是继续新增数据库名。',
        },
        null,
        2,
      ) + '\n',
    )
  } finally {
    await bizPrisma.$disconnect()
    await ledgerPrisma.$disconnect()
  }
}

main().catch((error) => {
  process.stderr.write(`[db-inspect] failed: ${error.message}\n`)
  process.exit(1)
})
