import { Button } from '@arco-design/web-react'
import { IconCheck } from '@arco-design/web-react/icon'

import type { WorkbenchScene } from '@/types/generate'

import styles from '../index.module.scss'

type SceneStepProps = {
  scenes: WorkbenchScene[]
  selectedId: string | undefined
  onSelect: (id: string) => void
  onOpenDrawer: () => void
}

export function SceneStep({ scenes, selectedId, onSelect, onOpenDrawer }: SceneStepProps) {
  const recommended = scenes.slice(0, 6)

  return (
    <section className={styles.stepCard}>
      <div className={styles.stepHead}>
        <h3 className={styles.stepTitle}>3. 选择商拍场景</h3>
        <p className={styles.stepDesc}>选择场景后右侧预览背景将同步变化</p>
      </div>

      <div className={styles.sceneScroll}>
        {recommended.map((scene) => {
          const active = selectedId === scene.id
          return (
            <button
              key={scene.id}
              type="button"
              className={`${styles.sceneCard}${active ? ` ${styles.sceneCardActive}` : ''}`}
              onClick={() => onSelect(scene.id)}
            >
              <img src={scene.image} alt={scene.name} />
              <div className={styles.sceneOverlay}>
                <strong>{scene.name}</strong>
                <span>{scene.tone}</span>
              </div>
              {active ? (
                <span className={styles.sceneCheck}>
                  <IconCheck />
                </span>
              ) : null}
            </button>
          )
        })}
      </div>

      <Button type="outline" long className={styles.stepMoreBtn ?? ''} onClick={onOpenDrawer}>
        更多场景
      </Button>
    </section>
  )
}
