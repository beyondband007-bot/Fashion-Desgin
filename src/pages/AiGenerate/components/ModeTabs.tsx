import type { GenerateMode } from '@/types/generate'

import styles from '../index.module.scss'

const modes: { key: GenerateMode; label: string; path: string }[] = [
  { key: 'clothes', label: '衣服图', path: '/ai-generate/clothes' },
  { key: 'real', label: '真人图', path: '/ai-generate/real' },
  { key: 'mannequin', label: '人台图', path: '/ai-generate/mannequin' },
  { key: 'model', label: '模特替换', path: '/ai-generate/model' },
]

type ModeTabsProps = {
  active: GenerateMode
  onChange: (path: string) => void
}

export function ModeTabs({ active, onChange }: ModeTabsProps) {
  return (
    <div className={styles.modeTabs} role="tablist">
      {modes.map((mode) => (
        <button
          key={mode.key}
          type="button"
          role="tab"
          aria-selected={active === mode.key}
          className={`${styles.modeTab}${active === mode.key ? ` ${styles.modeTabActive}` : ''}`}
          onClick={() => onChange(mode.path)}
        >
          {mode.label}
        </button>
      ))}
    </div>
  )
}
