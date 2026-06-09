import { Button, Card, Grid, Slider, Space, Tabs, Typography } from '@arco-design/web-react'

import { PageHeader } from '@/components/common/PageHeader'
import { ResultViewer } from '@/components/common/ResultViewer'

const tools = ['智能补光', '智能美化', '魔法擦除', '画质升级', '随心变形', '智能抠图']

export function AiEditPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="AI 编辑工具箱"
        description="统一左中右工作区布局，承接服装内容精修、增强与清理任务。"
        breadcrumb={['工作台', 'AI 编辑']}
      />

      <Grid.Row gutter={[16, 16]}>
        <Grid.Col xs={24} xl={5}>
          <Card bordered={false} className="soft-card h-full">
            <Typography.Title heading={6}>工具栏</Typography.Title>
            <div className="space-y-3">
              {tools.map((tool, index) => (
                <button
                  key={tool}
                  className={`w-full rounded-2xl border px-4 py-3 text-left transition ${
                    index === 0
                      ? 'border-[var(--primary)] bg-[var(--primary-soft)]'
                      : 'border-[var(--border-color)] bg-[var(--bg-secondary)]'
                  }`}
                >
                  {tool}
                </button>
              ))}
            </div>
          </Card>
        </Grid.Col>
        <Grid.Col xs={24} xl={13}>
          <ResultViewer
            imageUrl="https://picsum.photos/seed/edit-preview/1200/900"
            title="编辑工作区"
          />
        </Grid.Col>
        <Grid.Col xs={24} xl={6}>
          <Card bordered={false} className="soft-card h-full">
            <Typography.Title heading={6}>参数面板</Typography.Title>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <div>
                <div className="type-body-sm mb-2 text-[var(--text-secondary)]">强度</div>
                <Slider defaultValue={48} />
              </div>
              <div>
                <div className="type-body-sm mb-2 text-[var(--text-secondary)]">细节保留</div>
                <Slider defaultValue={72} />
              </div>
              <Tabs defaultActiveTab="compare" type="rounded">
                <Tabs.TabPane key="compare" title="前后对比">
                  <div className="type-body-sm rounded-2xl bg-[var(--bg-tertiary)] p-4 text-[var(--text-secondary)]">
                    支持原图 / 结果并排查看，适合审阅精修质量。
                  </div>
                </Tabs.TabPane>
                <Tabs.TabPane key="history" title="历史版本">
                  <div className="type-body-sm rounded-2xl bg-[var(--bg-tertiary)] p-4 text-[var(--text-secondary)]">
                    保留最近 5 次编辑步骤，可快速回退。
                  </div>
                </Tabs.TabPane>
              </Tabs>
              <Button type="primary" long>
                应用编辑
              </Button>
            </Space>
          </Card>
        </Grid.Col>
      </Grid.Row>
    </div>
  )
}
