import { Button, Card, Grid, Select, Space, Typography } from '@arco-design/web-react'

import { PageHeader } from '@/components/common/PageHeader'
import { ResultViewer } from '@/components/common/ResultViewer'

export function CreativePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="AI 创意生图"
        description="通过模板库、风格库和参数面板快速探索品牌创意方向。"
        breadcrumb={['工作台', 'AI 创意生图']}
      />

      <Grid.Row gutter={[16, 16]}>
        <Grid.Col xs={24} xl={7}>
          <Card bordered={false} className="soft-card">
            <Typography.Title heading={6}>参数面板</Typography.Title>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Select
                placeholder="模板库"
                options={[
                  { label: '极简主视觉', value: 'minimal' },
                  { label: '品牌大片', value: 'campaign' },
                  { label: '社媒海报', value: 'social' },
                ]}
              />
              <Select
                placeholder="风格库"
                options={[
                  { label: '轻奢高级', value: 'premium' },
                  { label: '城市通勤', value: 'urban' },
                  { label: '自然假日', value: 'nature' },
                ]}
              />
              <Select
                placeholder="比例"
                options={[
                  { label: '1:1', value: '1:1' },
                  { label: '4:5', value: '4:5' },
                  { label: '16:9', value: '16:9' },
                ]}
              />
              <Button type="primary" long>
                生成创意图
              </Button>
            </Space>
          </Card>
        </Grid.Col>
        <Grid.Col xs={24} xl={17}>
          <div className="space-y-6">
            <ResultViewer imageUrl="https://picsum.photos/seed/creative-main/1280/900" />
            <Card bordered={false} className="soft-card">
              <Typography.Title heading={6}>模板库与结果展示</Typography.Title>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {['creative-1', 'creative-2', 'creative-3'].map((seed) => (
                  <div key={seed} className="overflow-hidden rounded-2xl bg-[var(--bg-tertiary)]">
                    <img
                      alt={seed}
                      className="aspect-[4/3] w-full object-cover"
                      src={`https://picsum.photos/seed/${seed}/960/720`}
                    />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Grid.Col>
      </Grid.Row>
    </div>
  )
}
