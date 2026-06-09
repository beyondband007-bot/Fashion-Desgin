import { Button, Card, Grid, Tag, Typography } from '@arco-design/web-react'
import { useQuery } from '@tanstack/react-query'

import { FilterBar } from '@/components/common/FilterBar'
import { PageHeader } from '@/components/common/PageHeader'
import { UploadCard } from '@/components/common/UploadCard'
import { mockService } from '@/services/mockService'

export function AssetsPage() {
  const { data: assets = [] } = useQuery({ queryKey: ['assets'], queryFn: mockService.getAssets })

  return (
    <div className="space-y-6">
      <PageHeader
        title="素材管理"
        description="围绕上传、文件夹、标签、收藏、搜索和分类建立企业素材库。"
        breadcrumb={['工作台', '素材管理']}
        extra={<Button type="primary">新建文件夹</Button>}
      />
      <FilterBar />
      <Grid.Row gutter={[16, 16]}>
        <Grid.Col xs={24} xl={7}>
          <UploadCard title="上传新素材" description="支持图片拖拽上传、批量入库和标签化管理。" />
        </Grid.Col>
        <Grid.Col xs={24} xl={17}>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {assets.map((asset) => (
              <Card
                key={asset.id}
                bordered={false}
                className="soft-card overflow-hidden"
                cover={
                  <img alt={asset.name} className="aspect-[4/3] object-cover" src={asset.cover} />
                }
              >
                <Typography.Title heading={6}>{asset.name}</Typography.Title>
                <Typography.Paragraph className="text-muted">{asset.category}</Typography.Paragraph>
                <div className="flex flex-wrap gap-2">
                  {asset.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Grid.Col>
      </Grid.Row>
    </div>
  )
}
