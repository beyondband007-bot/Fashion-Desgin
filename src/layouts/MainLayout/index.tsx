import { Outlet, useLocation } from 'react-router-dom'

import { AppFooter } from '@/components/common/AppFooter'
import { AppHeader } from '@/components/common/AppHeader'
import { LoginModal } from '@/components/common/LoginModal'

export function MainLayout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className={`app-shell${isHome ? ' app-shell--home' : ''}`}>
      <AppHeader />
      <main>
        <Outlet />
      </main>
      <AppFooter />
      <LoginModal />
    </div>
  )
}
