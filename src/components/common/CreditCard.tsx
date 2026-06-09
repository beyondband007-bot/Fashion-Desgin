import { Statistic, Typography } from '@arco-design/web-react'

type CreditCardProps = {
  balance: number
  frozen: number
  expiringSoon: number
}

export function CreditCard({ balance, frozen, expiringSoon }: CreditCardProps) {
  return (
    <div className="soft-card space-y-4 p-5">
      <div>
        <Typography.Text className="text-subtle">积分余额</Typography.Text>
        <Statistic countUp value={balance} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-[var(--bg-tertiary)] p-3">
          <div className="text-subtle type-body-sm">冻结中</div>
          <div className="type-h5 mt-1 font-semibold">{frozen}</div>
        </div>
        <div className="rounded-xl bg-[var(--bg-tertiary)] p-3">
          <div className="text-subtle type-body-sm">即将过期</div>
          <div className="type-h5 mt-1 font-semibold">{expiringSoon}</div>
        </div>
      </div>
    </div>
  )
}
