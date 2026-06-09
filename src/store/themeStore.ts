import { create } from 'zustand'

import type { ResolvedTheme, ThemeMode } from '@/types/app'

type ThemeState = {
  theme: ThemeMode
  resolvedTheme: ResolvedTheme
  setTheme: (theme: ThemeMode) => void
  toggleTheme: () => void
}

const getSystemTheme = (): ResolvedTheme =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

const resolveTheme = (theme: ThemeMode): ResolvedTheme => {
  if (theme === 'system') {
    return getSystemTheme()
  }
  return theme
}

const initialTheme = (): ThemeMode => {
  if (typeof window === 'undefined') {
    return 'system'
  }

  const savedTheme = window.localStorage.getItem('theme-mode')
  if (savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'system') {
    return savedTheme
  }

  return 'system'
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: initialTheme(),
  resolvedTheme: typeof window === 'undefined' ? 'light' : resolveTheme(initialTheme()),
  setTheme: (theme) => {
    window.localStorage.setItem('theme-mode', theme)
    set({ theme, resolvedTheme: resolveTheme(theme) })
  },
  toggleTheme: () =>
    set((state) => {
      const order: ThemeMode[] = ['light', 'dark', 'system']
      const currentIndex = order.indexOf(state.theme)
      const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % order.length : 0
      const nextTheme = order[nextIndex]!
      window.localStorage.setItem('theme-mode', nextTheme)
      return { theme: nextTheme, resolvedTheme: resolveTheme(nextTheme) }
    }),
}))

export function syncSystemTheme() {
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  const handler = () => {
    const { theme } = useThemeStore.getState()
    if (theme === 'system') {
      useThemeStore.setState({ resolvedTheme: getSystemTheme() })
    }
  }
  media.addEventListener('change', handler)
  return () => media.removeEventListener('change', handler)
}
