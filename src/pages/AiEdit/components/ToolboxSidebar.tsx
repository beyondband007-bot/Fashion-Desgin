import {
  IconBrush,
  IconExpand,
  IconScissor,
  IconStar,
  IconSun,
  IconThunderbolt,
} from '@arco-design/web-react/icon'

import styles from '../index.module.scss'

export type ToolboxToolKey = 'relight' | 'beautify' | 'erase' | 'upscale' | 'deform' | 'cutout'

type ToolboxTool = {
  key: ToolboxToolKey
  label: string
  icon: React.ReactNode
}

const tools: ToolboxTool[] = [
  { key: 'relight', label: '智能补光', icon: <IconSun /> },
  { key: 'beautify', label: '智能美化', icon: <IconStar /> },
  { key: 'erase', label: '魔法擦除', icon: <IconBrush /> },
  { key: 'upscale', label: '画质升级', icon: <IconThunderbolt /> },
  { key: 'deform', label: '随心变形', icon: <IconExpand /> },
  { key: 'cutout', label: '智能抠图', icon: <IconScissor /> },
]

type ToolboxSidebarProps = {
  activeTool: ToolboxToolKey
  onChange: (tool: ToolboxToolKey) => void
}

export function ToolboxSidebar({ activeTool, onChange }: ToolboxSidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.sidebarNav}>
        {tools.map((tool) => {
          const active = tool.key === activeTool
          return (
            <button
              key={tool.key}
              type="button"
              className={`${styles.sidebarItem}${active ? ` ${styles.sidebarItemActive}` : ''}`}
              onClick={() => onChange(tool.key)}
            >
              <span className={styles.sidebarItemIcon}>{tool.icon}</span>
              <span className={styles.sidebarItemLabel}>{tool.label}</span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}

export const toolboxTools = tools
