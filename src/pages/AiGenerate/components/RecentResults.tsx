import dayjs from 'dayjs'
import { IconDownload, IconEye, IconRefresh } from '@arco-design/web-react/icon'

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
      <h4 className={styles.recentTitle}>最近生成</h4>
      <div className={styles.recentList}>
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`${styles.recentItem}${activeId === item.id ? ` ${styles.recentItemActive}` : ''}`}
            onClick={() => onSelect(item)}
          >
            <img src={item.image} alt={item.type} />
            <div className={styles.recentOverlay}>
              <span className={styles.recentStatus}>{statusLabel(item.status)}</span>
              <span className={styles.recentTime}>{dayjs(item.createdAt).format('HH:mm')}</span>
              <div className={styles.recentActions}>
                <IconEye />
                <IconDownload />
                <IconRefresh />
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}

function statusLabel(status: RecentResult['status']) {
  const map = { completed: '已完成', processing: '生成中', failed: '失败' }
  return map[status]
}
