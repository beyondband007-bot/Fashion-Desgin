import type { GenerateMode } from '@/types/generate'

import styles from './ConfigColumn.module.scss'

const modes: { key: GenerateMode; label: string; path: string }[] = [
  { key: 'clothes', label: '单件服装', path: '/ai-generate/clothes' },
  { key: 'real', label: '上下搭配', path: '/ai-generate/real' },
  { key: 'mannequin', label: '人台图', path: '/ai-generate/mannequin' },
  { key: 'model', label: '模特替换', path: '/ai-generate/model' },
]

type ModeTabsProps = {
  active: GenerateMode
  onChange: (path: string) => void
}

export function ModeTabs({ active, onChange }: ModeTabsProps) {
  return (
    <div className={styles.configTabs} role="tablist">
      {modes.map((mode) => (
        <button
          key={mode.key}
          type="button"
          role="tab"
          aria-selected={active === mode.key}
          className={`${styles.configTab}${active === mode.key ? ` ${styles.configTabActive}` : ''}`}
          onClick={() => onChange(mode.path)}
        >
          {mode.label}
        </button>
      ))}
    </div>
  )
}
