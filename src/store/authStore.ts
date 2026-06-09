import { create } from 'zustand'

type AuthState = {
  isLoggedIn: boolean
  loginModalOpen: boolean
  redirectPath: string | undefined
  login: () => void
  logout: () => void
  openLoginModal: () => void
  closeLoginModal: () => void
  setRedirectPath: (path: string | undefined) => void
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  loginModalOpen: false,
  redirectPath: undefined,
  login: () => set({ isLoggedIn: true, loginModalOpen: false }),
  logout: () => set({ isLoggedIn: false }),
  openLoginModal: () => set({ loginModalOpen: true }),
  closeLoginModal: () => set({ loginModalOpen: false }),
  setRedirectPath: (path) => set({ redirectPath: path }),
}))
