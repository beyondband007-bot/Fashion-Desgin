import { Button, Radio } from '@arco-design/web-react'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'

import { frontendApi } from '@/api/frontend'
import { PlanCard } from '@/components/common/PlanCard'
import { useCreditStore } from '@/store/creditStore'
import { usePricingStore } from '@/store/pricingStore'
import type { PlanBillingCycle } from '@/types/business'
import { formatCredit, formatDate } from '@/utils/format'

import styles from './index.module.scss'

const rechargeOptions = [
  { credits: 200, price: '楼39' },
  { credits: 500, price: '楼89' },
  { credits: 1000, price: '楼169' },
  { credits: 3000, price: '楼459' },
]

export function PricingPage() {
  const { data: plans = [] } = useQuery({ queryKey: ['plans'], queryFn: frontendApi.getPlans })
  const { billingCycle, setBillingCycle } = usePricingStore()
  const balance = useCreditStore((state) => state.balance)

  const currentPlan =
    plans.find((plan) => plan.id === 'advanced') ?? plans.find((plan) => plan.id !== 'enterprise')
  const currentPlanExpiresAt = dayjs().add(18, 'day').toISOString()
  const currentPlanConcurrency =
    currentPlan?.id === 'pro' ? 8 : currentPlan?.id === 'advanced' ? 4 : currentPlan ? 1 : 0
  const daysLeft = currentPlan ? dayjs(currentPlanExpiresAt).diff(dayjs(), 'day') : 0

  return (
    <div className={styles.page}>
      {currentPlan ? (
        <>
          <section className={styles.currentPlan}>
            <div>
              <h2>当前套餐 · {currentPlan.name}</h2>
              <p>
                有效期至 {formatDate(currentPlanExpiresAt)} ·{' '}
                {billingCycle === 'monthly' ? '月付' : '年付'}
              </p>
            </div>
            <div className={styles.planMeta}>
              <div>
                <span>剩余积分</span>
                <strong>{formatCredit(balance)}</strong>
              </div>
              <div>
                <span>并发上限</span>
                <strong>{currentPlanConcurrency} 组</strong>
              </div>
            </div>
            <Button type="primary">续费套餐</Button>
          </section>
          {daysLeft <= 30 ? (
            <div className={styles.expireBanner}>
              <span>当前套餐将在 {daysLeft} 天后到期，建议提前续费避免影响批量任务。</span>
              <Button type="outline" size="small">
                立即续费
              </Button>
            </div>
          ) : null}
        </>
      ) : null}

      <div className={styles.headerRow}>
        <div>
          <h1>套餐 / 积分</h1>
          <p>支持基础版、高级版、专业版、企业版对比，并保留按量充值入口。</p>
        </div>
        <Radio.Group
          type="button"
          value={billingCycle}
          onChange={(value) => setBillingCycle(value as PlanBillingCycle)}
        >
          <Radio value="monthly">月付</Radio>
          <Radio value="yearly">年付</Radio>
        </Radio.Group>
      </div>

      <div className={styles.planGrid}>
        {plans.map((plan) => (
          <PlanCard key={plan.id} billingCycle={billingCycle} plan={plan} />
        ))}
      </div>

      <section className={styles.rechargeSection}>
        <h2>积分充值</h2>
        <div className={styles.rechargeGrid}>
          {rechargeOptions.map((item) => (
            <button key={item.credits} type="button" className={styles.rechargeCard}>
              <strong>{item.credits}</strong>
              <span>{item.price}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
