import { Button, Form, Input, Tabs } from '@arco-design/web-react'
import { useNavigate } from 'react-router-dom'

import { useAuthStore } from '@/store/authStore'

import styles from './index.module.scss'

export function LoginPage() {
  const navigate = useNavigate()
  const login = useAuthStore((state) => state.login)

  const handleLogin = () => {
    login()
    navigate('/ai-generate')
  }

  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.promo}>
          <h1>登录 AI 商拍平台</h1>
          <p>注册即送 10 张免费作图额度，支持手机号、微信与企业账号多种登录方式。</p>
          <div className={styles.promoList}>
            <div>AI 在线生成 · 衣服图 / 真人图 / 人台图 / 模特替换</div>
            <div>AI 编辑工具箱 · 补光 / 美化 / 擦除 / 画质升级</div>
            <div>视频生成 · 1080P 商品展示视频一键输出</div>
          </div>
        </section>

        <section className={styles.formPanel}>
          <h2 className={styles.formTitle}>欢迎回来</h2>
          <p className={styles.formDesc}>使用手机号验证码或密码登录你的账号。</p>
          <Tabs defaultActiveTab="sms" type="capsule">
            <Tabs.TabPane key="sms" title="验证码登录">
              <Form layout="vertical" onSubmit={handleLogin}>
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
                <Button type="primary" long htmlType="submit" size="large">
                  登录
                </Button>
              </Form>
            </Tabs.TabPane>
            <Tabs.TabPane key="password" title="密码登录">
              <Form layout="vertical" onSubmit={handleLogin}>
                <Form.Item label="手机号" required>
                  <Input placeholder="请输入手机号" maxLength={11} />
                </Form.Item>
                <Form.Item label="密码" required>
                  <Input.Password placeholder="请输入密码" />
                </Form.Item>
                <Button type="primary" long htmlType="submit" size="large">
                  登录
                </Button>
              </Form>
            </Tabs.TabPane>
            <Tabs.TabPane key="enterprise" title="企业账号">
              <Form layout="vertical" onSubmit={handleLogin}>
                <Form.Item label="企业账号" required>
                  <Input placeholder="请输入企业账号" />
                </Form.Item>
                <Form.Item label="密码" required>
                  <Input.Password placeholder="请输入密码" />
                </Form.Item>
                <Button type="primary" long htmlType="submit" size="large">
                  企业登录
                </Button>
              </Form>
            </Tabs.TabPane>
          </Tabs>

          <div className={styles.wechatBox}>
            <div />
            <span>微信扫码登录</span>
          </div>

          <div className={styles.footerLinks}>
            <button type="button" onClick={() => navigate('/register')}>
              还没有账号？免费注册
            </button>
            <button type="button">忘记密码</button>
          </div>
        </section>
      </div>
    </div>
  )
}
