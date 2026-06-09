import { Button, Card, Grid, Table } from '@arco-design/web-react'
import { useQuery } from '@tanstack/react-query'

import { CreditCard } from '@/components/common/CreditCard'
import { FilterBar } from '@/components/common/FilterBar'
import { PageHeader } from '@/components/common/PageHeader'
import { mockService } from '@/services/mockService'
import { useCreditStore } from '@/store/creditStore'
import { formatDateTime } from '@/utils/format'

export function CreditsPage() {
  const { balance, frozen, expiringSoon } = useCreditStore()
  const { data: transactions = [] } = useQuery({
    queryKey: ['credit-transactions'],
    queryFn: mockService.getTransactions,
  })

  return (
    <div className="space-y-6">
      <PageHeader
        title="积分中心"
        description="查看余额卡片、流水记录、筛选、导出与充值入口。"
        breadcrumb={['工作台', '积分中心']}
        extra={
          <>
            <Button>导出流水</Button>
            <Button type="primary">立即充值</Button>
          </>
        }
      />
      <Grid.Row gutter={[16, 16]}>
        <Grid.Col xs={24} xl={8}>
          <CreditCard balance={balance} frozen={frozen} expiringSoon={expiringSoon} />
        </Grid.Col>
        <Grid.Col xs={24} xl={16}>
          <FilterBar />
          <Card bordered={false} className="soft-card">
            <Table
              border
              columns={[
                {
                  title: '时间',
                  dataIndex: 'createdAt',
                  render: (value: string) => formatDateTime(value),
                },
                { title: '说明', dataIndex: 'title' },
                { title: '类型', dataIndex: 'type' },
                { title: '积分变动', dataIndex: 'delta' },
              ]}
              data={transactions}
              pagination={false}
              rowKey="id"
            />
          </Card>
        </Grid.Col>
      </Grid.Row>
    </div>
  )
}
