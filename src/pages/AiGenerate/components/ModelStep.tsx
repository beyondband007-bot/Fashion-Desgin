import { Button } from '@arco-design/web-react'
import { IconHeart, IconHeartFill } from '@arco-design/web-react/icon'

import type { WorkbenchModel } from '@/types/generate'

import styles from '../index.module.scss'

type ModelStepProps = {
  models: WorkbenchModel[]
  selectedId: string | undefined
  onSelect: (id: string) => void
  onOpenDrawer: () => void
}

export function ModelStep({ models, selectedId, onSelect, onOpenDrawer }: ModelStepProps) {
  const recommended = models.slice(0, 4)

  return (
    <section className={styles.stepCard}>
      <div className={styles.stepHead}>
        <h3 className={styles.stepTitle}>2. 选择 AI 模特</h3>
        <div className={styles.stepTabs}>
          <button type="button" className={styles.stepTabActive}>
            推荐模特
          </button>
          <button type="button" className={styles.stepTab}>
            我的收藏
          </button>
          <button type="button" className={styles.stepTab} onClick={onOpenDrawer}>
            更多筛选
          </button>
        </div>
      </div>

      <div className={styles.modelRow}>
        {recommended.map((model) => {
          const active = selectedId === model.id
          return (
            <button
              key={model.id}
              type="button"
              className={`${styles.modelCard}${active ? ` ${styles.modelCardActive}` : ''}`}
              onClick={() => onSelect(model.id)}
            >
              <img src={model.avatar} alt={model.name} className={styles.modelAvatar} />
              <div className={styles.modelInfo}>
                <strong>{model.name}</strong>
                <span>
                  {model.race} · {model.age}
                </span>
                <div className={styles.modelTags}>
                  {model.style.slice(0, 2).map((tag) => (
                    <em key={tag}>{tag}</em>
                  ))}
                </div>
              </div>
              <span className={styles.modelFavorite} aria-hidden>
                {model.favorite ? <IconHeartFill /> : <IconHeart />}
              </span>
            </button>
          )
        })}
      </div>

      <Button type="outline" long className={styles.stepMoreBtn ?? ''} onClick={onOpenDrawer}>
        浏览全部模特
      </Button>
    </section>
  )
}
