import { Button, Card, Form, Grid, Input, Space, Typography } from '@arco-design/web-react'

import { PageHeader } from '@/components/common/PageHeader'

export function DeliveryPage() {
  return (
    <div className="page-section space-y-6 py-10">
      <PageHeader
        title="成片交付"
        description="围绕需求收集、案例展示、联系方式和在线咨询构建人工服务入口。"
        breadcrumb={['服务', '成片交付']}
      />

      <Grid.Row gutter={[16, 16]}>
        <Grid.Col xs={24} xl={14}>
          <div className="space-y-6">
            <Card bordered={false} className="soft-card">
              <Typography.Title heading={5}>服务介绍</Typography.Title>
              <Typography.Paragraph className="text-muted">
                提供从服装拍摄策划、内容产出到品牌视觉交付的一站式服务，适合需要高质感成片的品牌营销团队。
              </Typography.Paragraph>
              <div className="grid gap-4 md:grid-cols-3">
                {['48 小时内响应', '专属项目经理', '交付流程可追踪'].map((item) => (
                  <div key={item} className="rounded-2xl bg-[var(--bg-tertiary)] p-4">
                    {item}
                  </div>
                ))}
              </div>
            </Card>
            <Card bordered={false} className="soft-card">
              <Typography.Title heading={5}>案例展示</Typography.Title>
              <div className="grid gap-4 md:grid-cols-2">
                {['lookbook', 'campaign'].map((seed) => (
                  <img
                    key={seed}
                    alt={seed}
                    className="aspect-[4/3] rounded-2xl object-cover"
                    src={`https://picsum.photos/seed/${seed}/960/720`}
                  />
                ))}
              </div>
            </Card>
          </div>
        </Grid.Col>
        <Grid.Col xs={24} xl={10}>
          <Card bordered={false} className="soft-card">
            <Typography.Title heading={5}>需求表单</Typography.Title>
            <Form layout="vertical">
              <Form.Item label="公司 / 品牌名称">
                <Input placeholder="请输入品牌或公司名称" />
              </Form.Item>
              <Form.Item label="联系人">
                <Input placeholder="请输入联系人姓名" />
              </Form.Item>
              <Form.Item label="联系方式">
                <Input placeholder="请输入手机号 / 微信 / 邮箱" />
              </Form.Item>
              <Form.Item label="需求说明">
                <Input.TextArea placeholder="请描述服装品类、期望风格、周期和交付要求" rows={6} />
              </Form.Item>
              <Space direction="vertical" style={{ width: '100%' }}>
                <Button type="primary" long>
                  提交需求
                </Button>
                <Button long>在线咨询</Button>
              </Space>
            </Form>
          </Card>
        </Grid.Col>
      </Grid.Row>
    </div>
  )
}
