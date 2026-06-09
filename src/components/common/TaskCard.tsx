import { Button, Progress, Space, Typography } from '@arco-design/web-react'

import { TaskStatus } from '@/components/common/TaskStatus'
import type { TaskRecord } from '@/types/business'
import { formatCredit, formatDateTime } from '@/utils/format'

export function TaskCard({ task }: { task: TaskRecord }) {
  return (
    <div className="soft-card overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden bg-[var(--bg-tertiary)]">
        <img alt={task.title} className="h-full w-full object-cover" src={task.thumbnail} />
      </div>
      <div className="space-y-4 p-4">
        <Space align="start" className="w-full justify-between">
          <div>
            <Typography.Title heading={6} style={{ marginBottom: 6 }}>
              {task.title}
            </Typography.Title>
            <Typography.Text className="text-subtle">{task.type}</Typography.Text>
          </div>
          <TaskStatus status={task.status} />
        </Space>
        <Progress percent={task.progress} showText />
        <div className="type-body-sm flex items-center justify-between text-[var(--text-secondary)]">
          <span>{formatDateTime(task.createdAt)}</span>
          <span>{formatCredit(task.credits)} 积分</span>
        </div>
        <Button long type="outline">
          查看详情
        </Button>
      </div>
    </div>
  )
}
