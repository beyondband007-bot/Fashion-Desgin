import type { OutputConfig, OutputQuality, OutputRatio } from '@/types/generate'

import styles from '../index.module.scss'

type OutputConfigStepProps = {
  config: OutputConfig
  onChange: (config: OutputConfig) => void
}

const ratioOptions: { value: OutputRatio; label: string }[] = [
  { value: '1:1', label: '1:1' },
  { value: '3:4', label: '3:4' },
  { value: '4:5', label: '4:5' },
  { value: '9:16', label: '9:16' },
]

const qualityOptions: { value: OutputQuality; label: string }[] = [
  { value: 'standard', label: '标准' },
  { value: 'hd', label: '高清' },
  { value: 'uhd', label: '超清' },
]

export function OutputConfigStep({ config, onChange }: OutputConfigStepProps) {
  return (
    <section className={styles.configSection}>
      <div className={styles.configSectionTitle}>画面比例</div>
      <div className={styles.toggleGroup}>
        {ratioOptions.map((opt) => (
          <button
            key={opt.value}
            type="button"
            className={`${styles.toggleBtn}${config.ratio === opt.value ? ` ${styles.toggleBtnActive}` : ''}`}
            onClick={() => onChange({ ...config, ratio: opt.value })}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className={styles.configSectionTitle} style={{ marginTop: 16 }}>
        画质
      </div>
      <div className={styles.toggleGroup}>
        {qualityOptions.map((opt) => (
          <button
            key={opt.value}
            type="button"
            className={`${styles.toggleBtn}${config.quality === opt.value ? ` ${styles.toggleBtnActive}` : ''}`}
            onClick={() => onChange({ ...config, quality: opt.value })}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </section>
  )
}
