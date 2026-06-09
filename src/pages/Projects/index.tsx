import { Button, Card, Drawer, Grid, Typography } from '@arco-design/web-react'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { FilterBar } from '@/components/common/FilterBar'
import { PageHeader } from '@/components/common/PageHeader'
import { mockService } from '@/services/mockService'
import { formatDateTime } from '@/utils/format'

export function ProjectsPage() {
  const { data: projects = [] } = useQuery({
    queryKey: ['projects'],
    queryFn: mockService.getProjects,
  })
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selectedProject = projects.find((item) => item.id === selectedId)

  return (
    <div className="space-y-6">
      <PageHeader
        title="我的项目"
        description="查看任务列表、状态筛选、搜索、批量下载和重生成入口。"
        breadcrumb={['工作台', '我的项目']}
        extra={<Button type="primary">批量下载</Button>}
      />
      <FilterBar />
      <Grid.Row gutter={[16, 16]}>
        {projects.map((project) => (
          <Grid.Col key={project.id} xs={24} md={12} xl={8}>
            <Card
              bordered={false}
              className="soft-card overflow-hidden"
              cover={
                <img
                  alt={project.title}
                  className="aspect-[4/3] object-cover"
                  src={project.cover}
                />
              }
              actions={[
                <Button key="detail" type="text" onClick={() => setSelectedId(project.id)}>
                  查看详情
                </Button>,
                <Button key="regenerate" type="text">
                  重新生成
                </Button>,
              ]}
            >
              <Typography.Title heading={6}>{project.title}</Typography.Title>
              <Typography.Paragraph className="text-muted">{project.summary}</Typography.Paragraph>
              <Typography.Text className="text-subtle">
                最近更新 {formatDateTime(project.updatedAt)} · {project.taskCount} 个任务
              </Typography.Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid.Row>

      <Drawer
        title={selectedProject?.title ?? '项目详情'}
        visible={Boolean(selectedProject)}
        width={420}
        onCancel={() => setSelectedId(null)}
      >
        <Typography.Paragraph>{selectedProject?.summary}</Typography.Paragraph>
        <Typography.Paragraph className="text-muted">
          这里预留任务明细、操作日志、成员协作和导出动作，后续可直接接真实项目详情接口。
        </Typography.Paragraph>
      </Drawer>
    </div>
  )
}
