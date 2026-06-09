import { Button, Card, Grid, Table, Typography } from '@arco-design/web-react'

import { PageHeader } from '@/components/common/PageHeader'

const planData = [
  { item: 'API 接入', standard: '不支持', enterprise: '支持' },
  { item: '私有化部署', standard: '不支持', enterprise: '支持' },
  { item: '品牌模型训练', standard: '不支持', enterprise: '支持' },
  { item: '专属成功团队', standard: '通用支持', enterprise: '专属顾问' },
]

export function EnterprisePage() {
  return (
    <div className="page-section space-y-6 py-10">
      <PageHeader
        title="企业版"
        description="面向多品牌、多团队和稳定产能场景的企业解决方案。"
        breadcrumb={['解决方案', '企业版']}
        extra={<Button type="primary">联系销售</Button>}
      />

      <Grid.Row gutter={[16, 16]}>
        <Grid.Col xs={24} xl={14}>
          <Card bordered={false} className="soft-card">
            <Typography.Title heading={5}>企业能力</Typography.Title>
            <div className="grid gap-4 md:grid-cols-2">
              {['多角色协作', '统一资产沉淀', '品牌视觉规范', '高并发内容生产'].map((item) => (
                <div key={item} className="rounded-2xl bg-[var(--bg-tertiary)] p-4">
                  {item}
                </div>
              ))}
            </div>
          </Card>
        </Grid.Col>
        <Grid.Col xs={24} xl={10}>
          <Card bordered={false} className="soft-card">
            <Typography.Title heading={5}>API 与私有化</Typography.Title>
            <Typography.Paragraph className="text-muted">
              本阶段以前端业务框架为主，API
              介绍与私有化部署入口采用占位说明，后续接入真实接口文档后可平滑替换。
            </Typography.Paragraph>
            <Button type="outline" long>
              查看接口规划
            </Button>
          </Card>
        </Grid.Col>
      </Grid.Row>

      <Card bordered={false} className="soft-card">
        <Typography.Title heading={5}>套餐对比</Typography.Title>
        <Table
          border
          columns={[
            { title: '能力项', dataIndex: 'item' },
            { title: '标准版', dataIndex: 'standard' },
            { title: '企业版', dataIndex: 'enterprise' },
          ]}
          data={planData}
          pagination={false}
          rowKey="item"
        />
      </Card>
    </div>
  )
}
