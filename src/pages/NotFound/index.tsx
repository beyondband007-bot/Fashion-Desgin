import { Button, Result } from '@arco-design/web-react'
import { useNavigate } from 'react-router-dom'

export function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className="page-section flex min-h-[calc(100vh-180px)] items-center justify-center py-10">
      <Result
        status="404"
        subTitle="页面不存在或暂未开放。"
        extra={
          <Button type="primary" onClick={() => navigate('/')}>
            返回首页
          </Button>
        }
      />
    </div>
  )
}
