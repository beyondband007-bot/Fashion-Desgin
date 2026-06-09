import { Avatar, Card, Space, Tag, Typography } from '@arco-design/web-react'

import type { ModelProfile } from '@/types/business'

export function ModelSelector({ items }: { items: ModelProfile[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <Card
          key={item.id}
          bordered={false}
          className="soft-card"
          cover={<img alt={item.name} className="aspect-[4/3] object-cover" src={item.cover} />}
        >
          <Space direction="vertical" size="small">
            <Space align="center">
              <Avatar size={40}>{item.name.slice(0, 1)}</Avatar>
              <div>
                <Typography.Title heading={6} style={{ marginBottom: 2 }}>
                  {item.name}
                </Typography.Title>
                <Typography.Text className="text-subtle">
                  {item.region} · {item.style}
                </Typography.Text>
              </div>
            </Space>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </Space>
        </Card>
      ))}
    </div>
  )
}
