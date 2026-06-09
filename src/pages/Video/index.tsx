import { Button, Card, Grid, Select, Space, Typography } from '@arco-design/web-react'
import { useQuery } from '@tanstack/react-query'

import { PageHeader } from '@/components/common/PageHeader'
import { ResultViewer } from '@/components/common/ResultViewer'
import { UploadCard } from '@/components/common/UploadCard'
import { TaskCard } from '@/components/common/TaskCard'
import { mockService } from '@/services/mockService'

export function VideoPage() {
  const { data: tasks = [] } = useQuery({
    queryKey: ['video-tasks'],
    queryFn: mockService.getTasks,
  })

  return (
    <div className="space-y-6">
      <PageHeader
        title="视频生成"
        description="把服装静态图扩展为商品展示视频，支持模板、风格、时长和分辨率配置。"
        breadcrumb={['工作台', '视频生成']}
      />

      <Grid.Row gutter={[16, 16]}>
        <Grid.Col xs={24} xl={7}>
          <div className="space-y-4">
            <UploadCard
              title="上传视频源素材"
              description="支持服装主图、模特图和细节图批量拖拽上传。"
            />
            <Card bordered={false} className="soft-card">
              <Typography.Title heading={6}>视频参数</Typography.Title>
              <Space direction="vertical" style={{ width: '100%' }}>
                <Select
                  placeholder="模板选择"
                  options={[
                    { label: '商品轮播模板', value: 'carousel' },
                    { label: '模特展示模板', value: 'model' },
                    { label: '品牌氛围模板', value: 'brand' },
                  ]}
                />
                <Select
                  placeholder="风格选择"
                  options={[
                    { label: '简洁电商', value: 'clean' },
                    { label: '轻奢品牌', value: 'premium' },
                    { label: '促销快节奏', value: 'promo' },
                  ]}
                />
                <Select
                  placeholder="时长"
                  options={[
                    { label: '8 秒', value: '8' },
                    { label: '15 秒', value: '15' },
                    { label: '30 秒', value: '30' },
                  ]}
                />
                <Select
                  placeholder="分辨率"
                  options={[
                    { label: '720P', value: '720' },
                    { label: '1080P', value: '1080' },
                  ]}
                />
                <Button type="primary" long>
                  开始生成视频
                </Button>
              </Space>
            </Card>
          </div>
        </Grid.Col>
        <Grid.Col xs={24} xl={17}>
          <div className="space-y-6">
            <ResultViewer
              imageUrl="https://picsum.photos/seed/video-preview/1280/720"
              title="视频预览"
            />
            <Card bordered={false} className="soft-card">
              <Typography.Title heading={6}>最近任务状态</Typography.Title>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {tasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            </Card>
          </div>
        </Grid.Col>
      </Grid.Row>
    </div>
  )
}
