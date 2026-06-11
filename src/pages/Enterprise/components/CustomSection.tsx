import { Button } from '@arco-design/web-react'

import { customServiceSteps } from '@/mock/enterprise'

import styles from '../index.module.scss'

type Props = {
  onBookConsult: () => void
}

export function CustomSection({ onBookConsult }: Props) {
  return (
    <div className={styles.sectionStack}>
      <header className={styles.sectionHeader}>
        <h1>定制服务 2.0</h1>
        <p>基于品牌调性训练专属 AI 模特，统一视觉形象，支持场景库共建与业务流程适配。</p>
      </header>

      <div className={styles.customHighlight}>
        <div className={styles.customVisual}>
          <div className={styles.customBefore}>
            <img src="https://picsum.photos/seed/custom-before/160/200" alt="" />
            <span>品牌参考</span>
          </div>
          <div className={styles.customArrow}>→</div>
          <div className={styles.customAfter}>
            <img src="https://picsum.photos/seed/custom-after/160/200" alt="" />
            <span>定制模特</span>
          </div>
        </div>
        <div className={styles.customCopy}>
          <h3>模特定制</h3>
          <p>
            上传品牌历史商拍与模特参考图，由算法团队训练 LoRA
            模型，确保肤色、姿态、光影与品牌 VI 一致。平均 5–7 个工作日交付首版模型。
          </p>
          <Button type="primary" onClick={onBookConsult}>
            预约定制评估
          </Button>
        </div>
      </div>

      <div className={styles.stepGrid}>
        {customServiceSteps.map((item) => (
          <article key={item.step} className={styles.stepCard}>
            <span className={styles.stepNum}>{item.step}</span>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
