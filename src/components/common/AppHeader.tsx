import { Avatar, Button, Dropdown, Menu } from '@arco-design/web-react'
import { IconGift, IconStarFill, IconUser } from '@arco-design/web-react/icon'
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
  { key: 'toolbox', label: 'AI 编辑工具箱', path: '/ai-edit' },
  { key: 'video', label: '视频生成', path: '/video' },
  { key: 'delivery', label: '成片交付服务', path: '/delivery' },
  { key: 'creative', label: 'AI 创意生图', path: '/creative' },
  { key: 'enterprise', label: '企业版', path: '/enterprise' },
]

function isNavActive(pathname: string, item: NavItem) {
  if (item.path === '/') {
    return pathname === '/'
  }
  if (item.path === '/ai-generate') {
    return pathname.startsWith('/ai-generate')
  }
  return pathname === item.path || pathname.startsWith(`${item.path}/`)
}

export function AppHeader() {
  const location = useLocation()
  const navigate = useNavigate()
  const { guard } = useAuthGuard()
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn)
  const openLoginModal = useAuthStore((state) => state.openLoginModal)
  const logout = useAuthStore((state) => state.logout)
  const user = useUserStore((state) => state)
  const balance = useCreditStore((state) => state.balance)

  const handleNavClick = (item: NavItem) => {
    navigate(item.path)
  }

  const openUserCenter = (path: string) => {
    guard(path)
  }

  return (
    <header className="app-header">
      <div className="page-section app-header__inner">
        <Link to="/" className="app-header__logo">
          <span className="app-header__logo-icon">AI</span>
          <span className="app-header__logo-text">AI商拍</span>
        </Link>

        <div className="app-header__scroll">
          <nav className="app-header__nav">
            {navItems.map((item) => {
              const active = isNavActive(location.pathname, item)
              return (
                <button
                  key={item.key}
                  type="button"
                  className={`app-header__nav-link ${active ? 'app-header__nav-link--active' : ''}`}
                  onClick={() => handleNavClick(item)}
                >
                  <span className="app-header__nav-label">{item.label}</span>
                  {item.badge ? (
                    <span
                      className={`app-header__nav-badge app-header__nav-badge--${item.badge.variant}`}
                    >
                      {item.badge.text}
                    </span>
                  ) : null}
                </button>
              )
            })}
          </nav>

          <div className="app-header__actions">
            <button
              type="button"
              className="app-header__promo app-header__promo--gift"
              onClick={openLoginModal}
            >
              <IconGift />
              <span>新人免费作图40张</span>
            </button>
            <button
              type="button"
              className="app-header__promo app-header__promo--vip"
              onClick={() => navigate('/pricing')}
            >
              <IconStarFill />
              <span>会员低至0.16元/图</span>
            </button>

            <ThemeSwitcher />

            {isLoggedIn ? (
              <>
                <div className="app-header__credits">积分 {balance}</div>
                <Dropdown
                  droplist={
                    <Menu>
                      <Menu.Item key="projects" onClick={() => openUserCenter('/projects')}>
                        我的项目
                      </Menu.Item>
                      <Menu.Item key="assets" onClick={() => openUserCenter('/assets')}>
                        素材管理
                      </Menu.Item>
                      <Menu.Item key="credits" onClick={() => openUserCenter('/credits')}>
                        积分查询
                      </Menu.Item>
                      <Menu.Item key="pricing" onClick={() => openUserCenter('/pricing')}>
                        套餐/积分
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
                    className="app-header__user"
                    icon={
                      <Avatar size={28}>
                        <IconUser />
                      </Avatar>
                    }
                  >
                    <span className="app-header__user-name">{user.name}</span>
                  </Button>
                </Dropdown>
              </>
            ) : (
              <Button type="primary" className="app-header__auth" onClick={openLoginModal}>
                登录/注册
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
