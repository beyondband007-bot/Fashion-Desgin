import { Skeleton } from '@arco-design/web-react'

export function LoadingBlock() {
  return (
    <div className="soft-card p-5">
      <Skeleton text={{ rows: 4 }} animation />
    </div>
  )
}
