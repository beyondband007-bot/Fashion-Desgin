import { Button } from '@arco-design/web-react'
import { useNavigate } from 'react-router-dom'

import type { GenerateTaskStatus } from '@/types/generate'

import styles from '../index.module.scss'

type GenerateActionBarProps = {
  estimatedCost: number
  balance: number
  canGenerate: boolean
  insufficientCredits: boolean
  status: GenerateTaskStatus
  onGenerate: () => void
}

export function GenerateActionBar({
  estimatedCost,
  balance,
  canGenerate,
  insufficientCredits,
  status,
  onGenerate,
}: GenerateActionBarProps) {
  const navigate = useNavigate()
  const loading = status === 'pending' || status === 'processing'

  return (
    <div className={styles.actionBar}>
      <div className={styles.actionMeta}>
        <div>
          <span>本次预计消耗</span>
          <strong>{estimatedCost} 积分</strong>
        </div>
        <div>
          <span>可用积分</span>
          <strong>{balance.toLocaleString()}</strong>
        </div>
      </div>
      {insufficientCredits ? (
        <Button type="primary" long size="large" onClick={() => navigate('/pricing')}>
          积分不足，去充值
        </Button>
      ) : (
        <Button
          type="primary"
          long
          size="large"
          className={styles.generateBtn ?? ''}
          disabled={!canGenerate || loading}
          loading={loading}
          onClick={onGenerate}
        >
          立即生成
        </Button>
      )}
    </div>
  )
}
