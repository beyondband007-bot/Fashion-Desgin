import { Button } from '@arco-design/web-react'
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
        <h1 className={styles.pageTitle}>AI 在线生成</h1>
        <p className={styles.pageSubtitle}>国货服装图、真人图、人台图与模特替换统一生成工作台</p>
      </div>
      <div className={styles.pageHeaderMeta}>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>可用积分</span>
          <strong>{balance.toLocaleString()}</strong>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>今日生成</span>
          <strong>{todayTasks}</strong>
        </div>
        <Button type="primary" onClick={() => navigate('/pricing')}>
          积分预估与购买
        </Button>
      </div>
    </header>
  )
}
