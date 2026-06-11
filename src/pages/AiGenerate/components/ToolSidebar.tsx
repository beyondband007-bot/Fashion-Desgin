import { IconCamera, IconImage, IconSkin, IconUser } from '@arco-design/web-react/icon'
import { useLocation, useNavigate } from 'react-router-dom'

import styles from '../index.module.scss'

type ToolItem = {
  key: string
  label: string
  subLabel?: string
  icon: React.ReactNode
  path: string
}

const toolItems: ToolItem[] = [
  {
    key: 'clothes',
    label: '衣服图',
    subLabel: 'AI 试衣',
    icon: <IconSkin />,
    path: '/ai-generate/clothes',
  },
  {
    key: 'real',
    label: '真人图',
    icon: <IconUser />,
    path: '/ai-generate/real',
  },
  {
    key: 'mannequin',
    label: '人台图',
    icon: <IconImage />,
    path: '/ai-generate/mannequin',
  },
  {
    key: 'model',
    label: 'AI 模特替换',
    icon: <IconCamera />,
    path: '/ai-generate/model',
  },
]

export function ToolSidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (item: ToolItem) => location.pathname.startsWith(item.path)

  return (
    <aside className={styles.toolSidebar}>
      <nav className={styles.toolNav}>
        {toolItems.map((item) => (
          <button
            key={item.key}
            type="button"
            className={`${styles.toolItem}${isActive(item) ? ` ${styles.toolItemActive}` : ''}`}
            onClick={() => navigate(item.path)}
          >
            <span className={styles.toolItemIcon}>{item.icon}</span>
            <span className={styles.toolItemLabel}>
              {item.label}
              {item.subLabel ? (
                <span className={styles.toolItemSubLabel}>（{item.subLabel}）</span>
              ) : null}
            </span>
          </button>
        ))}
      </nav>
    </aside>
  )
}
