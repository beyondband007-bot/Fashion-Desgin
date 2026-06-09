import { Outlet } from 'react-router-dom'

import { AppHeader } from '@/components/common/AppHeader'
import { LoginModal } from '@/components/common/LoginModal'

export function WorkspaceLayout() {
  return (
    <div className="app-shell workspace-shell">
      <AppHeader />
      <Outlet />
      <LoginModal />
    </div>
  )
}
