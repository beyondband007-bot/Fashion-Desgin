import { IconRight, IconUpload } from '@arco-design/web-react/icon'

import styles from '../index.module.scss'

export function ReferenceStep() {
  return (
    <section className={styles.configSection}>
      <div className={styles.configSectionHead}>
        <span className={styles.configSectionTitle}>
          试衣参考图
          <em className={styles.optionalInline}>(1-5张)</em>
        </span>
        <button type="button" className={styles.configSectionLink}>
          选择参考图 <IconRight />
        </button>
      </div>
      <div className={styles.referenceUpload}>
        <IconUpload />
        <span>点击 / 拖拽上传</span>
      </div>
    </section>
  )
}
