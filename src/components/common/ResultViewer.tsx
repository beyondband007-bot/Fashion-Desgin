import { Button, Space, Typography } from '@arco-design/web-react'

type ResultViewerProps = {
  title?: string
  imageUrl: string
}

export function ResultViewer({ title = '生成结果预览', imageUrl }: ResultViewerProps) {
  return (
    <div className="soft-card overflow-hidden">
      <div className="flex items-center justify-between border-b border-[var(--border-color)] px-5 py-4">
        <div>
          <Typography.Title heading={6} style={{ marginBottom: 2 }}>
            {title}
          </Typography.Title>
          <Typography.Text className="text-subtle">支持放大、下载与前后对比</Typography.Text>
        </div>
        <Space>
          <Button type="outline">前后对比</Button>
          <Button type="primary">下载结果</Button>
        </Space>
      </div>
      <div className="bg-[var(--bg-tertiary)] p-5">
        <img alt={title} className="mx-auto aspect-[4/3] rounded-2xl object-cover" src={imageUrl} />
      </div>
    </div>
  )
}
