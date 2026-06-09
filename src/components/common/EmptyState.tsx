import { Button, Empty, type ButtonProps } from '@arco-design/web-react'

type EmptyStateProps = {
  title: string
  description: string
  actionText?: string
  onAction?: ButtonProps['onClick']
}

export function EmptyState({ title, description, actionText, onAction }: EmptyStateProps) {
  return (
    <div className="soft-card flex min-h-64 items-center justify-center p-8">
      <div className="text-center">
        <Empty description={description} />
        <div className="mb-3 type-h5 font-semibold">{title}</div>
        {actionText && onAction ? (
          <Button type="primary" onClick={onAction}>
            {actionText}
          </Button>
        ) : null}
      </div>
    </div>
  )
}
