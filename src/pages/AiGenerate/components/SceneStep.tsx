import { Select } from '@arco-design/web-react'
import { useState } from 'react'

import type { WorkbenchScene } from '@/types/generate'

import styles from '../index.module.scss'

type SceneStepProps = {
  scenes: WorkbenchScene[]
  selectedId: string | undefined
  onSelect: (id: string) => void
  onOpenDrawer: () => void
}

export function SceneStep({ scenes, selectedId, onSelect, onOpenDrawer }: SceneStepProps) {
  const [genMode, setGenMode] = useState<'standard' | 'hq'>('standard')

  return (
    <>
      <section className={styles.configSection}>
        <div className={styles.configSectionTitle}>背景</div>
        <Select
          placeholder="背景（非必选）"
          value={selectedId ?? ''}
          onChange={(value) => value && onSelect(value)}
          className={styles.configSelect ?? ''}
        >
          {scenes.map((scene) => (
            <Select.Option key={scene.id} value={scene.id}>
              {scene.name}
            </Select.Option>
          ))}
        </Select>
        <button type="button" className={styles.configSectionLink} onClick={onOpenDrawer}>
          更多场景 ›
        </button>
      </section>

      <section className={styles.configSection}>
        <div className={styles.configSectionTitle}>生成模式</div>
        <div className={styles.toggleGroup}>
          <button
            type="button"
            className={`${styles.toggleBtn}${genMode === 'standard' ? ` ${styles.toggleBtnActive}` : ''}`}
            onClick={() => setGenMode('standard')}
          >
            标准模式
          </button>
          <button
            type="button"
            className={`${styles.toggleBtn}${genMode === 'hq' ? ` ${styles.toggleBtnActive}` : ''}`}
            onClick={() => setGenMode('hq')}
          >
            高品质模式
          </button>
        </div>
      </section>
    </>
  )
}
