import { IconArrowRight } from '@arco-design/web-react/icon'

import { mockVideoCases, mockVideoWorkflow } from '@/mock/video'

import styles from '../index.module.scss'

export function VideoShowcase() {
  return (
    <div className={styles.showcase}>
      <section className={styles.workflow}>
        <div className={styles.workflowCard}>
          <img src={mockVideoWorkflow.model} alt="上传模特图" />
          <span>上传模特图</span>
        </div>
        <IconArrowRight className={styles.workflowArrow} />
        <div className={styles.workflowCard}>
          <img src={mockVideoWorkflow.action} alt="选择动作" />
          <span>选择动作</span>
        </div>
        <IconArrowRight className={styles.workflowArrow} />
        <div className={`${styles.workflowCard} ${styles.workflowCardResult}`}>
          <img src={mockVideoWorkflow.result} alt="生成结果视频" />
          <span>生成结果视频</span>
          <div className={styles.sparkles} aria-hidden>
            ✦ ✦
          </div>
        </div>
      </section>

      <section className={styles.casesSection}>
        <h3 className={styles.casesTitle}>优秀案例</h3>
        <div className={styles.casesGrid}>
          {mockVideoCases.map((item) => (
            <article key={item.id} className={styles.caseCard}>
              <img src={item.cover} alt="" className={styles.caseCover} />
              <img src={item.inset} alt="" className={styles.caseInset} />
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
