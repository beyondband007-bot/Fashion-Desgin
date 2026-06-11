import { useState, type ReactNode } from 'react'

import styles from './ConfigCard.module.scss'

export type ConfigCardProps = {
  title?: ReactNode
  extra?: ReactNode
  required?: boolean
  collapsible?: boolean
  defaultOpen?: boolean
  children: ReactNode
  className?: string
}

export function ConfigCard({
  title,
  extra,
  required,
  collapsible = false,
  defaultOpen = true,
  children,
  className,
}: ConfigCardProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <section className={[styles.configCard, className ?? ''].filter(Boolean).join(' ')}>
      {collapsible && title ? (
        <button type="button" className={styles.collapseHead} onClick={() => setOpen(!open)}>
          <span>
            {title}
            {required ? <em className={styles.requiredTag}>必选</em> : null}
          </span>
          <span className={styles.collapseArrow}>{open ? '▾' : '▸'}</span>
        </button>
      ) : title || extra ? (
        <div className={styles.configCardHead}>
          {title ? (
            <div className={styles.configCardTitle}>
              {title}
              {required ? <em className={styles.requiredTag}>必选</em> : null}
            </div>
          ) : (
            <span />
          )}
          {extra}
        </div>
      ) : null}

      {collapsible ? (open ? <div className={styles.collapseBody}>{children}</div> : null) : children}
    </section>
  )
}
