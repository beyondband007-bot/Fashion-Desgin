import { Avatar, Button, Dropdown, Menu, Space } from '@arco-design/web-react'
import { IconApps, IconUser } from '@arco-design/web-react/icon'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { ThemeSwitcher } from '@/components/common/ThemeSwitcher'
import { useAuthGuard } from '@/hooks/useAuthGuard'
import { useAuthStore } from '@/store/authStore'
import { useCreditStore } from '@/store/creditStore'
import { useUserStore } from '@/store/userStore'
import type { NavItem } from '@/types/app'

const navItems: NavItem[] = [
  { key: 'home', label: '首页', path: '/' },
  { key: 'generate', label: 'AI 在线生成', path: '/ai-generate' },
  { key: 'edit', label: 'AI 编辑工具箱', path: '/ai-edit', requiresAuth: true },
  { key: 'video', label: '视频生成', path: '/video', requiresAuth: true },
  { key: 'delivery', label: '成片交付', path: '/delivery' },
  { key: 'creative', label: 'AI 创意圈', path: '/creative', requiresAuth: true },
  { key: 'enterprise', label: '企业版', path: '/enterprise' },
  { key: 'pricing', label: '套餐 / 积分', path: '/pricing' },
]

export function AppHeader() {
  const location = useLocation()
  const navigate = useNavigate()
  const { guard } = useAuthGuard()
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn)
  const openLoginModal = useAuthStore((state) => state.openLoginModal)
  const logout = useAuthStore((state) => state.logout)
  const user = useUserStore((state) => state)
  const balance = useCreditStore((state) => state.balance)
  const isHome = location.pathname === '/'

  return (
    <header className={`app-header ${isHome ? 'app-header--transparent' : ''}`}>
      <div className="page-section app-header__inner">
        <div className="flex items-center gap-8">
          <Link to="/" className="app-header__logo">
            <span className="app-header__logo-icon">
              <IconApps />
            </span>
            <span>Fashion Design AI</span>
          </Link>
          <nav className="app-header__nav hidden gap-5 xl:flex">
            {navItems.map((item) => {
              const active =
                item.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.path)
              return (
                <button
                  key={item.key}
                  className={`app-header__nav-link ${active ? 'app-header__nav-link--active' : ''}`}
                  onClick={() => {
                    if (item.requiresAuth) {
                      guard(item.path)
                      return
                    }
                    navigate(item.path)
                  }}
                >
                  {item.label}
                </button>
              )
            })}
          </nav>
        </div>
        <Space size="medium">
          <ThemeSwitcher />
          {isLoggedIn ? (
            <>
              <div className="type-body-sm hidden rounded-full border border-[var(--border-color)] px-4 py-2 text-[var(--text-secondary)] md:block">
                积分 {balance}
              </div>
              <Dropdown
                droplist={
                  <Menu>
                    <Menu.Item key="projects" onClick={() => navigate('/projects')}>
                      我的项目
                    </Menu.Item>
                    <Menu.Item key="assets" onClick={() => navigate('/assets')}>
                      素材管理
                    </Menu.Item>
                    <Menu.Item key="logout" onClick={logout}>
                      退出登录
                    </Menu.Item>
                  </Menu>
                }
                position="br"
              >
                <Button
                  type="text"
                  icon={
                    <Avatar size={28}>
                      <IconUser />
                    </Avatar>
                  }
                >
                  {user.name}
                </Button>
              </Dropdown>
            </>
          ) : (
            <>
              <Button type="text" onClick={openLoginModal}>
                登录
              </Button>
              <Button type="primary" onClick={openLoginModal}>
                立即注册
              </Button>
            </>
          )}
        </Space>
      </div>
    </header>
  )
}
