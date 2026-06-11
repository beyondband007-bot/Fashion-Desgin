import { Select } from '@arco-design/web-react'
import { useState } from 'react'

import type { WorkbenchModel } from '@/types/generate'

import styles from '../index.module.scss'

type ModelStepProps = {
  models: WorkbenchModel[]
  selectedId: string | undefined
  onSelect: (id: string) => void
  onOpenDrawer: () => void
}

export function ModelStep({ models, selectedId, onSelect, onOpenDrawer }: ModelStepProps) {
  const [engine, setEngine] = useState<'artmuse' | 'pro'>('artmuse')

  return (
    <>
      <section className={styles.configSection}>
        <div className={styles.configSectionTitle}>模型选择</div>
        <div className={styles.toggleGroup}>
          <button
            type="button"
            className={`${styles.toggleBtn}${engine === 'artmuse' ? ` ${styles.toggleBtnActive}` : ''}`}
            onClick={() => setEngine('artmuse')}
          >
            ArtMuse
          </button>
          <button
            type="button"
            className={`${styles.toggleBtn}${engine === 'pro' ? ` ${styles.toggleBtnActive}` : ''}`}
            onClick={() => setEngine('pro')}
          >
            全能模型
            <span className={styles.memberBadge}>会员</span>
          </button>
        </div>
      </section>

      <section className={styles.configSection}>
        <div className={styles.configSectionTitle}>模特</div>
        <Select
          placeholder="模特（非必选）"
          value={selectedId ?? ''}
          onChange={(value) => value && onSelect(value)}
          className={styles.configSelect ?? ''}
        >
          {models.map((model) => (
            <Select.Option key={model.id} value={model.id}>
              {model.name} · {model.race}
            </Select.Option>
          ))}
        </Select>
        <button type="button" className={styles.configSectionLink} onClick={onOpenDrawer}>
          更多模特 ›
        </button>
      </section>
    </>
  )
}
