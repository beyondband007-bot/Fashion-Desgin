import { Button, Tag, Typography } from '@arco-design/web-react'

import type { PlanBillingCycle, PricingPlan } from '@/types/business'

type PlanCardProps = {
  plan: PricingPlan
  billingCycle: PlanBillingCycle
}

const planTierStyles: Record<string, { bg: string; text?: string; btnClass?: string }> = {
  starter: { bg: 'var(--plan-starter-bg)' },
  basic: { bg: 'var(--plan-basic-bg)' },
  advanced: { bg: 'var(--plan-advanced-bg)' },
  pro: { bg: 'var(--plan-pro-bg)' },
  enterprise: {
    bg: 'var(--plan-enterprise-bg)',
    text: 'var(--text-inverse)',
    btnClass: 'plan-card__btn--enterprise',
  },
}

export function PlanCard({ plan, billingCycle }: PlanCardProps) {
  const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice
  const tierStyle = planTierStyles[plan.id] ?? { bg: 'var(--card-bg)' }
  const isEnterprise = plan.id === 'enterprise'

  return (
    <div
      className={`theme-card flex h-full flex-col gap-4 p-5 ${plan.highlight ? 'ring-2 ring-[var(--primary)]' : ''}`}
      style={{
        background: tierStyle.bg,
        color: tierStyle.text,
      }}
    >
      <div className="flex items-center justify-between">
        <Typography.Title
          heading={5}
          style={{ marginBottom: 0, color: tierStyle.text ?? 'var(--text-primary)' }}
        >
          {plan.name}
        </Typography.Title>
        {plan.highlight ? (
          <Tag
            color="purple"
            style={{ background: 'var(--primary)', color: '#fff', border: 'none' }}
          >
            推荐
          </Tag>
        ) : null}
      </div>
      <Typography.Paragraph
        style={{
          marginBottom: 0,
          color: isEnterprise ? 'rgba(255,255,255,0.72)' : 'var(--text-secondary)',
        }}
      >
        {plan.description}
      </Typography.Paragraph>
      <div>
        <div className="type-price" style={{ color: tierStyle.text ?? 'var(--text-primary)' }}>
          {price === 0 ? '定制报价' : `¥ ${price}`}
        </div>
        <div
          className="type-body-sm mt-1"
          style={{ color: isEnterprise ? 'rgba(255,255,255,0.6)' : 'var(--text-tertiary)' }}
        >
          {plan.seats}
        </div>
      </div>
      <div className="type-body-sm flex-1 space-y-2">
        {plan.features.map((feature) => (
          <div
            key={feature}
            className="rounded-xl px-3 py-2"
            style={{
              background: isEnterprise ? 'rgba(255,255,255,0.08)' : 'var(--card-bg)',
              color: isEnterprise ? 'rgba(255,255,255,0.85)' : 'var(--text-secondary)',
            }}
          >
            {feature}
          </div>
        ))}
      </div>
      <Button
        type={plan.highlight || isEnterprise ? 'primary' : 'outline'}
        long
        {...(tierStyle.btnClass ? { className: tierStyle.btnClass } : {})}
        {...(isEnterprise
          ? { style: { background: 'var(--primary)', borderColor: 'var(--primary)' } }
          : {})}
      >
        {price === 0 ? '联系销售' : '立即购买'}
      </Button>
    </div>
  )
}
