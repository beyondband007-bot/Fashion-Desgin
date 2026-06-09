import type {
  OutputConfig,
  OutputCount,
  OutputPose,
  OutputQuality,
  OutputRatio,
} from '@/types/generate'

import styles from '../index.module.scss'

type OptionGroupProps<T extends string | number> = {
  label: string
  value: T
  options: { value: T; label: string }[]
  onChange: (value: T) => void
}

function OptionGroup<T extends string | number>({
  label,
  value,
  options,
  onChange,
}: OptionGroupProps<T>) {
  return (
    <div className={styles.optionGroup}>
      <span className={styles.optionLabel}>{label}</span>
      <div className={styles.optionButtons}>
        {options.map((opt) => (
          <button
            key={String(opt.value)}
            type="button"
            className={`${styles.optionBtn}${value === opt.value ? ` ${styles.optionBtnActive}` : ''}`}
            onClick={() => onChange(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}

type OutputConfigStepProps = {
  config: OutputConfig
  onChange: (config: OutputConfig) => void
}

const ratioOptions: { value: OutputRatio; label: string }[] = [
  { value: '1:1', label: '1:1' },
  { value: '3:4', label: '3:4' },
  { value: '4:3', label: '4:3' },
  { value: '9:16', label: '9:16' },
  { value: '16:9', label: '16:9' },
]

const poseOptions: { value: OutputPose; label: string }[] = [
  { value: 'stand', label: '站姿' },
  { value: 'sit', label: '坐姿' },
  { value: 'walk', label: '走姿' },
  { value: 'closeup', label: '特写' },
]

const qualityOptions: { value: OutputQuality; label: string }[] = [
  { value: 'standard', label: '标准' },
  { value: 'hd', label: '高清' },
  { value: 'uhd', label: '超清' },
]

const countOptions: { value: OutputCount; label: string }[] = [
  { value: 1, label: '1 张' },
  { value: 2, label: '2 张' },
  { value: 4, label: '4 张' },
]

export function OutputConfigStep({ config, onChange }: OutputConfigStepProps) {
  return (
    <section className={styles.stepCard}>
      <div className={styles.stepHead}>
        <h3 className={styles.stepTitle}>4. 生成参数</h3>
      </div>
      <div className={styles.configGroups}>
        <OptionGroup
          label="输出比例"
          value={config.ratio}
          options={ratioOptions}
          onChange={(ratio) => onChange({ ...config, ratio })}
        />
        <OptionGroup
          label="姿态"
          value={config.pose}
          options={poseOptions}
          onChange={(pose) => onChange({ ...config, pose })}
        />
        <OptionGroup
          label="清晰度"
          value={config.quality}
          options={qualityOptions}
          onChange={(quality) => onChange({ ...config, quality })}
        />
        <OptionGroup
          label="生成数量"
          value={config.count}
          options={countOptions}
          onChange={(count) => onChange({ ...config, count })}
        />
      </div>
    </section>
  )
}
