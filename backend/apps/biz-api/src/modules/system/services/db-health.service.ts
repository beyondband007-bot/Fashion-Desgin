import path from 'node:path'

import type { PrismaClient as BizPrismaClient } from '../../../../../../generated/biz-client'

const { PrismaClient } = require(path.resolve(process.cwd(), 'generated/biz-client')) as typeof import('../../../../../../generated/biz-client')

const prisma = new PrismaClient() as BizPrismaClient

export async function getBizDbHealth() {
  try {
    await prisma.$queryRaw`SELECT 1`

    return {
      status: 'ok' as const,
      database: 'biz',
      checked_at: new Date().toISOString(),
    }
  } catch (error) {
    return {
      status: 'failed' as const,
      database: 'biz',
      checked_at: new Date().toISOString(),
      error: error instanceof Error ? error.message : 'DB_HEALTH_CHECK_FAILED',
    }
  }
}
