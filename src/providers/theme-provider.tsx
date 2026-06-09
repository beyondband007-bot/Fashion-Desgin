import { useEffect, type PropsWithChildren } from 'react'

import { syncSystemTheme, useThemeStore } from '@/store/themeStore'

export function ThemeProvider({ children }: PropsWithChildren) {
  const resolvedTheme = useThemeStore((state) => state.resolvedTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', resolvedTheme)
    document.body.setAttribute('arco-theme', resolvedTheme)
  }, [resolvedTheme])

  useEffect(() => syncSystemTheme(), [])

  return children
}
