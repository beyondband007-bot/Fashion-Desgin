import styles from './ConfigColumn.module.scss'

type TryOnMode = 'clothes' | 'real'

const tabs: { key: TryOnMode; label: string; path: string }[] = [
  { key: 'clothes', label: '单件服装', path: '/ai-generate/clothes' },
  { key: 'real', label: '上下搭配', path: '/ai-generate/real' },
]

type TryOnModeTabsProps = {
  active: TryOnMode
  onChange: (path: string) => void
}

export function TryOnModeTabs({ active, onChange }: TryOnModeTabsProps) {
  return (
    <div className={styles.configTabs} role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          type="button"
          role="tab"
          aria-selected={active === tab.key}
          className={`${styles.configTab}${active === tab.key ? ` ${styles.configTabActive}` : ''}`}
          onClick={() => onChange(tab.path)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
