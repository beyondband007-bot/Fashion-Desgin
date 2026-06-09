import { Breadcrumb, Space, Typography } from '@arco-design/web-react'

type PageHeaderProps = {
  title: string
  description: string
  breadcrumb?: string[]
  extra?: React.ReactNode
}

export function PageHeader({ title, description, breadcrumb, extra }: PageHeaderProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        {breadcrumb ? (
          <Breadcrumb className="mb-3">
            {breadcrumb.map((item) => (
              <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
        ) : null}
        <Typography.Title heading={3} style={{ marginBottom: 8 }}>
          {title}
        </Typography.Title>
        <Typography.Paragraph className="text-muted" style={{ marginBottom: 0 }}>
          {description}
        </Typography.Paragraph>
      </div>
      {extra ? <Space wrap>{extra}</Space> : null}
    </div>
  )
}
