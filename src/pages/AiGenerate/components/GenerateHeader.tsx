import { Button } from '@arco-design/web-react'
import { IconPlus } from '@arco-design/web-react/icon'
import { useNavigate } from 'react-router-dom'

import styles from '../index.module.scss'

type GenerateHeaderProps = {
  balance: number
  todayTasks: number
}

export function GenerateHeader({ balance, todayTasks }: GenerateHeaderProps) {
  const navigate = useNavigate()

  return (
    <header className={styles.pageHeader}>
      <div>
        <div className={styles.breadcrumbs}>工作台 / AI 在线生成</div>
        <h1 className={styles.pageTitle}>AI 在线生成</h1>
        <p className={styles.pageSubtitle}>
          上传服装素材，选择模特与场景，AI 为您生成高质量时尚大片
        </p>
      </div>
      <div className={styles.pageHeaderMeta} aria-label="账户积分概览">
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>可用积分</span>
          <strong>{balance.toLocaleString()}</strong>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>今日生成</span>
          <strong>{todayTasks}</strong>
        </div>
        <Button
          type="primary"
          className={styles.newProjectBtn ?? ''}
          icon={<IconPlus />}
          onClick={() => navigate('/ai-generate/clothes')}
        >
          新建项目
        </Button>
      </div>
    </header>
  )
}
