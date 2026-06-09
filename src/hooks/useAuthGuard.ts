import { Message } from '@arco-design/web-react'
import { useNavigate } from 'react-router-dom'

import { useAuthStore } from '@/store/authStore'

export function useAuthGuard() {
  const navigate = useNavigate()
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn)
  const openLoginModal = useAuthStore((state) => state.openLoginModal)

  const guard = (targetPath?: string) => {
    if (isLoggedIn) {
      if (targetPath) {
        navigate(targetPath)
      }
      return true
    }

    if (targetPath) {
      useAuthStore.getState().setRedirectPath(targetPath)
    }
    openLoginModal()
    Message.info('请先登录后继续操作')
    return false
  }

  return { guard, isLoggedIn }
}
