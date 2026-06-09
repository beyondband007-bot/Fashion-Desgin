import { Card, Space, Typography } from '@arco-design/web-react'

import type { SceneProfile } from '@/types/business'

export function SceneSelector({ items }: { items: SceneProfile[] }) {
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
            <Typography.Title heading={6} style={{ marginBottom: 0 }}>
              {item.name}
            </Typography.Title>
            <Typography.Text className="text-subtle">
              {item.category} · {item.light}
            </Typography.Text>
          </Space>
        </Card>
      ))}
    </div>
  )
}
