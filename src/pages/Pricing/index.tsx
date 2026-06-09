import { Button, Radio, Typography } from '@arco-design/web-react'
import { useQuery } from '@tanstack/react-query'

import { PageHeader } from '@/components/common/PageHeader'
import { PlanCard } from '@/components/common/PlanCard'
import { mockService } from '@/services/mockService'
import { usePricingStore } from '@/store/pricingStore'
import type { PlanBillingCycle } from '@/types/business'

export function PricingPage() {
  const { data: plans = [] } = useQuery({ queryKey: ['plans'], queryFn: mockService.getPlans })
  const { billingCycle, setBillingCycle } = usePricingStore()

  return (
    <div className="page-section space-y-6 py-10">
      <PageHeader
        title="套餐中心"
        description="支持新人体验、基础会员、高级会员、专业会员与企业版，并提供月付 / 年付切换。"
        breadcrumb={['商业化', '套餐中心']}
        extra={<Button type="primary">进入积分充值</Button>}
      />
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <Typography.Paragraph className="text-muted" style={{ marginBottom: 0 }}>
          推荐先从 MVP 方案验证业务价值，再按团队规模升级。
        </Typography.Paragraph>
        <Radio.Group
          type="button"
          value={billingCycle}
          onChange={(value) => setBillingCycle(value as PlanBillingCycle)}
        >
          <Radio value="monthly">月付</Radio>
          <Radio value="yearly">年付</Radio>
        </Radio.Group>
      </div>
      <div className="grid gap-6 xl:grid-cols-5">
        {plans.map((plan) => (
          <PlanCard key={plan.id} billingCycle={billingCycle} plan={plan} />
        ))}
      </div>
    </div>
  )
}
