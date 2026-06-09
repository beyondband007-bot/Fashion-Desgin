import { ConfigProvider } from '@arco-design/web-react'
import { QueryClientProvider } from '@tanstack/react-query'
import zhCN from '@arco-design/web-react/es/locale/zh-CN'
import { type PropsWithChildren } from 'react'

import { queryClient } from '@/providers/query-client'
import { ThemeProvider } from '@/providers/theme-provider'
import { useThemeStore } from '@/store/themeStore'

function ArcoThemeConfig({ children }: PropsWithChildren) {
  const resolvedTheme = useThemeStore((state) => state.resolvedTheme)
  const primaryColor = resolvedTheme === 'dark' ? '#7C5CFF' : '#6F52FF'

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        primaryColor,
      }}
    >
      {children}
    </ConfigProvider>
  )
}

export function AppProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <ArcoThemeConfig>{children}</ArcoThemeConfig>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
