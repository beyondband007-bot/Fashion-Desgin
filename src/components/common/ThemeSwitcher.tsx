import { Button, Dropdown, Menu } from '@arco-design/web-react'
import { IconDesktop, IconMoonFill, IconSunFill } from '@arco-design/web-react/icon'

import { useThemeStore } from '@/store/themeStore'
import type { ThemeMode } from '@/types/app'

const themeLabels: Record<ThemeMode, string> = {
  light: '浅色',
  dark: '深色',
  system: '跟随系统',
}

export function ThemeSwitcher() {
  const theme = useThemeStore((state) => state.theme)
  const resolvedTheme = useThemeStore((state) => state.resolvedTheme)
  const setTheme = useThemeStore((state) => state.setTheme)

  const icon =
    theme === 'system' ? (
      <IconDesktop />
    ) : resolvedTheme === 'dark' ? (
      <IconSunFill />
    ) : (
      <IconMoonFill />
    )

  return (
    <Dropdown
      droplist={
        <Menu selectedKeys={[theme]} onClickMenuItem={(key) => setTheme(key as ThemeMode)}>
          <Menu.Item key="light">浅色模式</Menu.Item>
          <Menu.Item key="dark">深色模式</Menu.Item>
          <Menu.Item key="system">跟随系统</Menu.Item>
        </Menu>
      }
      position="br"
    >
      <Button
        shape="circle"
        type="outline"
        aria-label={`当前主题：${themeLabels[theme]}`}
        icon={icon}
      />
    </Dropdown>
  )
}
