import { Button, Form, Input, Message } from '@arco-design/web-react'
import { useEffect } from 'react'

import styles from '../index.module.scss'

type Props = {
  defaultRemark?: string
}

export function ContactSection({ defaultRemark = '' }: Props) {
  const [form] = Form.useForm()

  useEffect(() => {
    if (defaultRemark) {
      form.setFieldValue('remark', defaultRemark)
    }
  }, [defaultRemark, form])

  const handleSubmit = async () => {
    try {
      await form.validate()
      Message.success('咨询已提交，专属顾问将在 1 个工作日内联系您')
      form.resetFields()
    } catch {
      Message.warning('请完善必填信息')
    }
  }

  return (
    <div className={styles.sectionStack}>
      <header className={styles.sectionHeader}>
        <h1>联系销售</h1>
        <p>填写企业信息，我们的专属顾问将为您提供定制化方案与报价。</p>
      </header>

      <div className={styles.contactLayout}>
        <Form
          form={form}
          layout="vertical"
          {...(styles.contactForm ? { className: styles.contactForm } : {})}
        >
          <Form.Item label="企业名称" field="company" rules={[{ required: true, message: '请输入企业名称' }]}>
            <Input placeholder="请输入企业名称" />
          </Form.Item>
          <Form.Item label="联系人" field="contact" rules={[{ required: true, message: '请输入联系人' }]}>
            <Input placeholder="请输入联系人姓名" />
          </Form.Item>
          <Form.Item
            label="手机号"
            field="phone"
            rules={[
              { required: true, message: '请输入手机号' },
              { match: /^1\d{10}$/, message: '请输入有效手机号' },
            ]}
          >
            <Input placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item label="需求说明" field="remark">
            <Input.TextArea placeholder="请描述团队规模、业务场景与期望能力" rows={4} />
          </Form.Item>
          <Button type="primary" size="large" long onClick={handleSubmit}>
            提交企业版咨询
          </Button>
        </Form>

        <aside className={styles.contactAside}>
          <h3>我们能帮您</h3>
          <ul>
            <li>评估 API 对接与私有化部署可行性</li>
            <li>定制模特训练方案与 POC 验证</li>
            <li>提供企业版报价与 SLA 保障说明</li>
            <li>安排技术团队进行架构评审</li>
          </ul>
          <div className={styles.contactInfo}>
            <p>
              <strong>商务邮箱</strong> business@photostudio.ai
            </p>
            <p>
              <strong>服务热线</strong> 400-888-0000
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}
