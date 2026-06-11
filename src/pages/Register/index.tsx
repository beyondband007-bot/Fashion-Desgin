import { Button, Checkbox, Form, Input, Progress } from '@arco-design/web-react'
import { useNavigate } from 'react-router-dom'

import loginStyles from '../Login/index.module.scss'
import styles from './index.module.scss'

export function RegisterPage() {
  const navigate = useNavigate()

  return (
    <div className={loginStyles.page}>
      <div className={`${loginStyles.shell} ${styles.registerShell}`}>
        <section className={loginStyles.formPanel}>
          <h2 className={loginStyles.formTitle}>注册账号</h2>
          <p className={loginStyles.formDesc}>完成注册后自动赠送 10 张免费作图额度。</p>
          <Form layout="vertical">
            <Form.Item label="手机号" required>
              <Input placeholder="请输入手机号" maxLength={11} />
            </Form.Item>
            <Form.Item
              label="验证码"
              required
              extra={
                <Button type="text" size="mini">
                  获取验证码
                </Button>
              }
            >
              <Input placeholder="请输入 6 位验证码" maxLength={6} />
            </Form.Item>
            <Form.Item label="密码" required>
              <Input.Password placeholder="8-20 位，需包含大小写字母和数字" />
            </Form.Item>
            <div className={styles.strengthBar}>
              <span>密码强度</span>
              <Progress percent={62} color="#3ccf91" />
            </div>
            <Form.Item label="用户名（选填）">
              <Input placeholder="未填写则默认显示手机号后四位" />
            </Form.Item>
            <div className={styles.agreement}>
              <Checkbox>我已阅读并同意用户协议与隐私政策</Checkbox>
            </div>
            <Button type="primary" long size="large">
              注册并开始使用
            </Button>
            <div className={styles.benefit}>新人福利：注册成功赠送 10 张免费作图额度</div>
          </Form>
          <div className={loginStyles.footerLinks}>
            <button type="button" onClick={() => navigate('/login')}>
              已有账号，去登录
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
