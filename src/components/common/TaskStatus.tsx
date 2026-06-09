import { Tag } from '@arco-design/web-react'

import type { TaskStatusValue } from '@/types/business'

const statusMap: Record<
  TaskStatusValue,
  { label: string; color: 'arcoblue' | 'green' | 'red' | 'orange' | 'gray' | 'gold' }
> = {
  pending: { label: '待处理', color: 'gray' },
  queued: { label: '排队中', color: 'gold' },
  running: { label: '执行中', color: 'arcoblue' },
  success: { label: '已完成', color: 'green' },
  failed: { label: '失败', color: 'red' },
  cancelled: { label: '已取消', color: 'orange' },
}

export function TaskStatus({ status }: { status: TaskStatusValue }) {
  const config = statusMap[status]
  return <Tag color={config.color}>{config.label}</Tag>
}
