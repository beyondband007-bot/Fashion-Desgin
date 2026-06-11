import { IconClockCircle } from '@arco-design/web-react/icon'

import type { RecentResult } from '@/types/generate'

import styles from '../index.module.scss'

type RecentResultsProps = {
  items: RecentResult[]
  activeId: string | undefined
  onSelect: (item: RecentResult) => void
}

export function RecentResults({ items, activeId, onSelect }: RecentResultsProps) {
  if (items.length === 0) return null

  return (
    <section className={styles.recentSection}>
      <div className={styles.recentHead}>
        <h4 className={styles.recentTitle}>
          <IconClockCircle />
          最近生成
        </h4>
        <span className={styles.recentMore}>查看全部 ›</span>
      </div>
      <div className={styles.recentGrid}>
        {items.slice(0, 4).map((item) => (
          <button
            key={item.id}
            type="button"
            className={`${styles.recentItem}${activeId === item.id ? ` ${styles.recentItemActive}` : ''}`}
            onClick={() => onSelect(item)}
          >
            <img src={item.image} alt={item.type} />
            <span className={styles.recentBadge}>{statusLabel(item.status)}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

function statusLabel(status: RecentResult['status']) {
  const map = { completed: '3:4', processing: '生成中', failed: '失败' }
  return map[status]
}
