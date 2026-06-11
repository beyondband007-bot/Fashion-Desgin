import { useNavigate } from 'react-router-dom'

import type { GenerateTaskStatus, OutputCount } from '@/types/generate'

import styles from '../index.module.scss'

type GenerateActionBarProps = {
  estimatedCost: number
  outputCount: OutputCount
  canGenerate: boolean
  insufficientCredits: boolean
  status: GenerateTaskStatus
  onGenerate: () => void
  onCountChange: (count: OutputCount) => void
}

const countOptions: OutputCount[] = [1, 2, 4]

export function GenerateActionBar({
  estimatedCost,
  outputCount,
  canGenerate,
  insufficientCredits,
  status,
  onGenerate,
  onCountChange,
}: GenerateActionBarProps) {
  const navigate = useNavigate()
  const loading = status === 'pending' || status === 'processing'

  return (
    <div className={styles.actionBar}>
      <div className={styles.actionBarInner}>
        <div className={styles.countSelect}>
          <select
            value={outputCount}
            onChange={(e) => onCountChange(Number(e.target.value) as OutputCount)}
          >
            {countOptions.map((n) => (
              <option key={n} value={n}>
                {n} 张
              </option>
            ))}
          </select>
        </div>
        {insufficientCredits ? (
          <button type="button" className={styles.generateBtn} onClick={() => navigate('/pricing')}>
            积分不足，去充值
          </button>
        ) : (
          <button
            type="button"
            className={styles.generateBtn}
            disabled={!canGenerate || loading}
            onClick={onGenerate}
          >
            {loading ? '生成中…' : '生成'}
            <span className={styles.generateCost}>{estimatedCost}</span>
          </button>
        )}
      </div>
    </div>
  )
}
