import type { ReactNode } from 'react'

import styles from './ConfigColumn.module.scss'

export type ConfigColumnVariant = 'default' | 'card'

export type ConfigColumnProps = {
  /** 顶部区域，通常为 ModeTabs */
  header?: ReactNode
  /** 底部固定操作区，通常为 GenerateActionBar */
  footer: ReactNode
  /** 可滚动的配置内容 */
  children: ReactNode
  /** default：图2 白底平铺；card：灰底 + 内部白卡片（换模特等） */
  variant?: ConfigColumnVariant
  className?: string
}

export function ConfigColumn({
  header,
  footer,
  children,
  variant = 'default',
  className,
}: ConfigColumnProps) {
  const columnClass = [
    styles.configColumn,
    variant === 'card' ? styles.configColumnCard : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <aside className={columnClass}>
      {header ? <div className={styles.configColumnHeader}>{header}</div> : null}
      <div className={styles.configColumnBody}>{children}</div>
      <div className={styles.configColumnFooter}>{footer}</div>
    </aside>
  )
}
