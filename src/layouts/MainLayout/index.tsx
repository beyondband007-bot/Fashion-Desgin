import { Outlet } from 'react-router-dom'

import { AppFooter } from '@/components/common/AppFooter'
import { AppHeader } from '@/components/common/AppHeader'
import { LoginModal } from '@/components/common/LoginModal'

export function MainLayout() {
  return (
    <div className="app-shell">
      <AppHeader />
      <main>
        <Outlet />
      </main>
      <AppFooter />
      <LoginModal />
    </div>
  )
}
