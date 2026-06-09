import { Button, Card, Checkbox, Form, Input, Progress, Typography } from '@arco-design/web-react'

export function RegisterPage() {
  return (
    <div className="page-section flex min-h-[calc(100vh-180px)] items-center justify-center py-10">
      <Card bordered={false} className="soft-card w-full max-w-lg p-2">
        <Typography.Title heading={3}>注册账号</Typography.Title>
        <Typography.Paragraph className="text-muted">
          支持验证码注册、协议勾选、密码强度检测和后续企业升级。
        </Typography.Paragraph>
        <Form layout="vertical">
          <Form.Item label="手机号" required>
            <Input placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item label="验证码" required>
            <Input placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item label="密码" required>
            <Input.Password placeholder="请输入 8-20 位密码" />
          </Form.Item>
          <div className="mb-4">
            <div className="type-body-sm mb-2 text-[var(--text-secondary)]">密码强度</div>
            <Progress percent={62} status="normal" />
          </div>
          <Form.Item>
            <Checkbox>我已阅读并同意服务协议与隐私政策</Checkbox>
          </Form.Item>
          <Button type="primary" long>
            注册并开始使用
          </Button>
        </Form>
      </Card>
    </div>
  )
}
