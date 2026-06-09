import { Skeleton, Spin } from '@arco-design/web-react'

export function LoadingPage() {
  return (
    <div className="app-shell flex min-h-screen items-center justify-center px-6">
      <div className="soft-card w-full max-w-xl p-8">
        <div className="mb-6 flex items-center gap-3">
          <Spin />
          <span>页面加载中...</span>
        </div>
        <Skeleton text={{ rows: 6 }} animation />
      </div>
    </div>
  )
}
