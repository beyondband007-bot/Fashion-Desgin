import type { EnterpriseSection } from '@/mock/enterprise'
import { enterpriseNavItems } from '@/mock/enterprise'

import styles from '../index.module.scss'

type Props = {
  active: EnterpriseSection
  onChange: (section: EnterpriseSection) => void
}

export function EnterpriseSidebar({ active, onChange }: Props) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHead}>
        <span className={styles.sidebarBadge}>Enterprise</span>
        <h2>企业版</h2>
        <p>API · 私有化 · 定制训练</p>
      </div>
      <nav className={styles.sidebarNav}>
        {enterpriseNavItems.map((item) => (
          <button
            key={item.key}
            type="button"
            className={`${styles.navItem}${active === item.key ? ` ${styles.navItemActive}` : ''}`}
            onClick={() => onChange(item.key)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}
