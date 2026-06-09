import { Button, Card, Form, Input, Tabs, Typography } from '@arco-design/web-react'
import { useNavigate } from 'react-router-dom'

import { useAuthStore } from '@/store/authStore'

export function LoginPage() {
  const navigate = useNavigate()
  const login = useAuthStore((state) => state.login)

  const handleLogin = () => {
    login()
    navigate('/ai-generate')
  }

  return (
    <div className="page-section flex min-h-[calc(100vh-180px)] items-center justify-center py-10">
      <Card bordered={false} className="soft-card w-full max-w-lg p-2">
        <Typography.Title heading={3}>登录平台</Typography.Title>
        <Typography.Paragraph className="text-muted">
          支持验证码登录、密码登录、微信登录占位和企业账号登录。
        </Typography.Paragraph>
        <Tabs defaultActiveTab="sms" type="capsule">
          <Tabs.TabPane key="sms" title="验证码登录">
            <Form layout="vertical" onSubmit={handleLogin}>
              <Form.Item label="手机号" required>
                <Input placeholder="请输入手机号" />
              </Form.Item>
              <Form.Item label="验证码" required>
                <Input placeholder="请输入验证码" />
              </Form.Item>
              <Button type="primary" long htmlType="submit">
                登录
              </Button>
            </Form>
          </Tabs.TabPane>
          <Tabs.TabPane key="password" title="密码登录">
            <Form layout="vertical" onSubmit={handleLogin}>
              <Form.Item label="手机号" required>
                <Input placeholder="请输入手机号" />
              </Form.Item>
              <Form.Item label="密码" required>
                <Input.Password placeholder="请输入密码" />
              </Form.Item>
              <Button type="primary" long htmlType="submit">
                登录
              </Button>
            </Form>
          </Tabs.TabPane>
        </Tabs>
      </Card>
    </div>
  )
}
