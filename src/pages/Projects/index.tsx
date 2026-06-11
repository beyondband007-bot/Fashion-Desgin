import { Button, Checkbox, Input, Select } from '@arco-design/web-react'
import { useQuery } from '@tanstack/react-query'
import { useMemo, useState } from 'react'

import { frontendApi } from '@/api/frontend'
import type { TaskStatusValue } from '@/types/business'
import { formatDateTime, formatTaskStatus } from '@/utils/format'

import styles from './index.module.scss'

function statusClass(status: TaskStatusValue) {
  if (status === 'running') return styles.statusRunning
  if (status === 'success') return styles.statusSuccess
  if (status === 'failed') return styles.statusFailed
  return styles.statusQueued
}

export function ProjectsPage() {
  const { data: tasks = [] } = useQuery({
    queryKey: ['tasks'],
    queryFn: frontendApi.getTasks,
  })
  const [keyword, setKeyword] = useState('')
  const [status, setStatus] = useState('all')
  const [type, setType] = useState('all')
  const [selected, setSelected] = useState<string[]>([])

  const filtered = useMemo(
    () =>
      tasks.filter((task) => {
        const matchKeyword = !keyword || task.title.includes(keyword)
        const matchStatus = status === 'all' || task.status === status
        const matchType = type === 'all' || task.type === type
        return matchKeyword && matchStatus && matchType
      }),
    [keyword, status, tasks, type],
  )

  const toggleAll = (checked: boolean) => {
    setSelected(checked ? filtered.map((task) => task.id) : [])
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1>我的项目</h1>
          <p>查看历史生成任务，支持筛选、搜索、批量下载与重新生成。</p>
        </div>
        <Button type="primary" disabled={selected.length === 0}>
          批量下载 {selected.length > 0 ? `(${selected.length})` : ''}
        </Button>
      </div>

      <div className={styles.toolbar}>
        <Checkbox
          checked={selected.length > 0 && selected.length === filtered.length}
          indeterminate={selected.length > 0 && selected.length < filtered.length}
          onChange={toggleAll}
        >
          全选
        </Checkbox>
        <Input.Search
          allowClear
          placeholder="搜索任务名称"
          style={{ width: 220 }}
          onChange={setKeyword}
        />
        <Select
          placeholder="状态筛选"
          style={{ width: 140 }}
          value={status}
          onChange={setStatus}
          options={[
            { label: '全部状态', value: 'all' },
            { label: '生成中', value: 'running' },
            { label: '已完成', value: 'success' },
            { label: '失败', value: 'failed' },
          ]}
        />
        <Select
          placeholder="类型筛选"
          style={{ width: 140 }}
          value={type}
          onChange={setType}
          options={[
            { label: '全部类型', value: 'all' },
            { label: '衣服图', value: '衣服图' },
            { label: '真人图', value: '真人图' },
            { label: '人台图', value: '人台图' },
            { label: '编辑', value: '编辑' },
            { label: '视频', value: '视频' },
          ]}
        />
      </div>

      <div className={styles.taskGrid}>
        {filtered.map((task) => {
          const checked = selected.includes(task.id)
          return (
            <article key={task.id} className={styles.taskCard}>
              <Checkbox
                checked={checked}
                className={styles.taskCheckbox ?? ''}
                onChange={(value) =>
                  setSelected((prev) =>
                    value ? [...prev, task.id] : prev.filter((id) => id !== task.id),
                  )
                }
              />
              <img src={task.thumbnail} alt={task.title} className={styles.taskCover} />
              <div className={styles.taskBody}>
                <h3 className={styles.taskTitle}>{task.title}</h3>
                <div className={styles.taskMeta}>
                  <span className={styles.taskType}>{task.type}</span>
                  <span className={`${styles.statusTag} ${statusClass(task.status)}`}>
                    {formatTaskStatus(task.status)}
                  </span>
                </div>
                <div className={styles.taskFooter}>
                  <span>{formatDateTime(task.createdAt)}</span>
                  <span>{task.credits} 积分</span>
                </div>
                {task.status === 'running' ? (
                  <div className={styles.progressBar}>
                    <span style={{ width: `${task.progress}%` }} />
                  </div>
                ) : null}
                <div className={styles.taskActions}>
                  <Button size="mini" type="outline">
                    查看详情
                  </Button>
                  <Button size="mini" type="text">
                    重新生成
                  </Button>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
