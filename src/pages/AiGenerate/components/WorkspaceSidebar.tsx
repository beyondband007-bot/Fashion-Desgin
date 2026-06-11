import { Button } from '@arco-design/web-react'
import {
  IconApps,
  IconCalendarClock,
  IconEdit,
  IconFile,
  IconImage,
  IconSafe,
  IconStorage,
  IconVideoCamera,
} from '@arco-design/web-react/icon'
import { useLocation, useNavigate } from 'react-router-dom'

import styles from '../index.module.scss'

type MenuItem = {
  key: string
  label: string
  icon: React.ReactNode
}

type MenuGroup = {
  title: string
  items: MenuItem[]
}

const menuGroups: MenuGroup[] = [
  {
    title: '创作工作台',
    items: [
      { key: '/ai-generate', label: 'AI 在线生成', icon: <IconApps /> },
      { key: '/ai-edit', label: 'AI 编辑工具箱', icon: <IconEdit /> },
      { key: '/video', label: '视频生成', icon: <IconVideoCamera /> },
      { key: '/creative', label: 'AI 创意生图', icon: <IconImage /> },
    ],
  },
  {
    title: '资产管理',
    items: [
      { key: '/projects', label: '我的项目', icon: <IconFile /> },
      { key: '/assets', label: '素材管理', icon: <IconStorage /> },
      { key: '/credits', label: '积分中心', icon: <IconCalendarClock /> },
    ],
  },
  {
    title: '企业服务',
    items: [
      { key: '/enterprise', label: '企业版', icon: <IconSafe /> },
      { key: '/pricing', label: '套餐/积分', icon: <IconCalendarClock /> },
    ],
  },
]

export function WorkspaceSidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (key: string) => {
    if (key === '/ai-generate') return location.pathname.startsWith('/ai-generate')
    if (key === '/pricing') return location.pathname === '/pricing'
    if (key === '/enterprise') return location.pathname === '/enterprise'
    return location.pathname.startsWith(key)
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarBrand}>
        <span className={styles.sidebarBrandMark}>PS</span>
        <div>
          <div className={styles.sidebarBrandTitle}>PhotoStudio</div>
          <div className={styles.sidebarBrandSub}>AI Workspace</div>
        </div>
      </div>

      <nav className={styles.sidebarNav}>
        {menuGroups.map((group) => (
          <div key={group.title} className={styles.sidebarGroup}>
            <div className={styles.sidebarGroupTitle}>{group.title}</div>
            {group.items.map((item) => (
              <button
                key={item.key}
                type="button"
                className={`${styles.sidebarItem}${isActive(item.key) ? ` ${styles.sidebarItemActive}` : ''}`}
                onClick={() =>
                  navigate(item.key === '/ai-generate' ? '/ai-generate/clothes' : item.key)
                }
              >
                <span className={styles.sidebarItemIcon}>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        ))}
      </nav>

      <div className={styles.sidebarUpgrade}>
        <h4>升级企业版</h4>
        <p>无限生成次数 · 更多专属模型 · 商用授权 · 团队协作</p>
        <Button type="primary" long size="small" onClick={() => navigate('/enterprise')}>
          立即升级
        </Button>
      </div>
    </aside>
  )
}
