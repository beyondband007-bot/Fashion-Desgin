import dayjs from 'dayjs'

import type { CreditTransaction, TaskStatusValue } from '@/types/business'

export const formatDateTime = (value: string) => dayjs(value).format('YYYY-MM-DD HH:mm')

export const formatDate = (value: string) => dayjs(value).format('YYYY-MM-DD')

export const formatCredit = (value: number) =>
  new Intl.NumberFormat('zh-CN', { maximumFractionDigits: 0 }).format(value)

export const formatFileSize = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

const taskStatusLabels: Record<TaskStatusValue, string> = {
  pending: '待处理',
  queued: '排队中',
  running: '生成中',
  success: '已完成',
  failed: '失败',
  cancelled: '已删除',
}

export const formatTaskStatus = (status: TaskStatusValue) => taskStatusLabels[status]

export const formatCreditType = (type: CreditTransaction['type']) => {
  const map = {
    consume: '任务扣费',
    recharge: '充值',
    refund: '失败退款',
  } as const
  return map[type]
}
