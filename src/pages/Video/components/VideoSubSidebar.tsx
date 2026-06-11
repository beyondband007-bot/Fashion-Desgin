import { IconImage, IconVideoCamera } from '@arco-design/web-react/icon'
import { useNavigate } from 'react-router-dom'

import type { VideoMode } from '../types'

import styles from '../index.module.scss'

type VideoSubSidebarProps = {
  mode: VideoMode
  onModeChange: (mode: VideoMode) => void
}

const items: { key: VideoMode; label: string; icon: React.ReactNode }[] = [
  { key: 'action', label: '动作模仿', icon: <IconVideoCamera /> },
  { key: 'image', label: '图生视频', icon: <IconImage /> },
]

export function VideoSubSidebar({ mode, onModeChange }: VideoSubSidebarProps) {
  const navigate = useNavigate()

  return (
    <aside className={styles.subSidebar}>
      <div className={styles.subSidebarTitle}>AI视频</div>
      <nav className={styles.subNav}>
        {items.map((item) => (
          <button
            key={item.key}
            type="button"
            className={`${styles.subNavItem}${mode === item.key ? ` ${styles.subNavItemActive}` : ''}`}
            onClick={() => onModeChange(item.key)}
          >
            <span className={styles.subNavIcon}>{item.icon}</span>
            <span className={styles.subNavLabel}>{item.label}</span>
            <span className={styles.memberBadge}>会员</span>
          </button>
        ))}
      </nav>
      <button type="button" className={styles.rechargeBtn} onClick={() => navigate('/pricing')}>
        红豆充值
      </button>
    </aside>
  )
}
