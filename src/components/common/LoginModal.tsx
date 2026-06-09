import { Button, Checkbox, Form, Input, Message, Modal, Tabs } from '@arco-design/web-react'
import { useNavigate } from 'react-router-dom'

import { useAuthStore } from '@/store/authStore'

export function LoginModal() {
  const navigate = useNavigate()
  const visible = useAuthStore((state) => state.loginModalOpen)
  const close = useAuthStore((state) => state.closeLoginModal)
  const login = useAuthStore((state) => state.login)
  const redirectPath = useAuthStore((state) => state.redirectPath)
  const setRedirectPath = useAuthStore((state) => state.setRedirectPath)

  const onFinish = () => {
    login()
    Message.success('登录成功，已进入演示模式')
    if (redirectPath) {
      navigate(redirectPath)
      setRedirectPath(undefined)
    }
  }

  return (
    <Modal
      visible={visible}
      footer={null}
      onCancel={close}
      title="登录服装内容工作台"
      style={{ width: 480 }}
    >
      <Tabs defaultActiveTab="sms" type="rounded">
        <Tabs.TabPane key="sms" title="验证码登录">
          <Form layout="vertical" onSubmit={onFinish}>
            <Form.Item label="手机号" field="mobile" rules={[{ required: true }]}>
              <Input placeholder="请输入手机号" />
            </Form.Item>
            <Form.Item label="验证码" field="code" rules={[{ required: true }]}>
              <Input
                addAfter={
                  <Button type="text" size="small">
                    获取验证码
                  </Button>
                }
                placeholder="请输入验证码"
              />
            </Form.Item>
            <Form.Item field="agreement" rules={[{ type: 'boolean', true: true }]}>
              <Checkbox>我已阅读并同意服务协议与隐私政策</Checkbox>
            </Form.Item>
            <Button type="primary" long htmlType="submit">
              登录并进入工作台
            </Button>
          </Form>
        </Tabs.TabPane>
        <Tabs.TabPane key="password" title="密码登录">
          <Form layout="vertical" onSubmit={onFinish}>
            <Form.Item label="手机号" field="mobile" rules={[{ required: true }]}>
              <Input placeholder="请输入手机号" />
            </Form.Item>
            <Form.Item label="密码" field="password" rules={[{ required: true }]}>
              <Input.Password placeholder="请输入密码" />
            </Form.Item>
            <Button type="primary" long htmlType="submit">
              登录
            </Button>
          </Form>
        </Tabs.TabPane>
        <Tabs.TabPane key="enterprise" title="企业账号">
          <Form layout="vertical" onSubmit={onFinish}>
            <Form.Item label="企业邮箱" field="email" rules={[{ required: true }]}>
              <Input placeholder="请输入企业邮箱" />
            </Form.Item>
            <Form.Item label="密码" field="password" rules={[{ required: true }]}>
              <Input.Password placeholder="请输入密码" />
            </Form.Item>
            <Button type="primary" long htmlType="submit">
              企业登录
            </Button>
          </Form>
        </Tabs.TabPane>
      </Tabs>
    </Modal>
  )
}
