import { Tabs, Tag } from '@arco-design/web-react'
import { useState } from 'react'

import {
  apiEndpoints,
  sdkExamples,
  type ApiEndpoint,
  type SdkLanguage,
} from '@/mock/enterprise'

import styles from '../index.module.scss'

const methodColor: Record<ApiEndpoint['method'], string> = {
  GET: 'green',
  POST: 'arcoblue',
  PUT: 'orangered',
  DELETE: 'red',
}

const sdkTabs: { key: SdkLanguage; label: string }[] = [
  { key: 'python', label: 'Python' },
  { key: 'java', label: 'Java' },
  { key: 'nodejs', label: 'Node.js' },
]

export function ApiDocSection() {
  const [activeEndpoint, setActiveEndpoint] = useState(apiEndpoints[0]!.id)
  const [sdkLang, setSdkLang] = useState<SdkLanguage>('python')

  const endpoint = apiEndpoints.find((e) => e.id === activeEndpoint) ?? apiEndpoints[0]!

  return (
    <div className={styles.sectionStack}>
      <header className={styles.sectionHeader}>
        <h1>API 文档 2.0</h1>
        <p>接口说明、参数定义与多语言 SDK 调用示例，快速完成系统对接。</p>
      </header>

      <div className={styles.apiLayout}>
        <div className={styles.apiList}>
          <h3 className={styles.apiListTitle}>接口列表</h3>
          {apiEndpoints.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`${styles.apiItem}${item.id === activeEndpoint ? ` ${styles.apiItemActive}` : ''}`}
              onClick={() => setActiveEndpoint(item.id)}
            >
              <Tag size="small" color={methodColor[item.method]}>
                {item.method}
              </Tag>
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        <div className={styles.apiDetail}>
          <div className={styles.apiDetailHead}>
            <Tag color={methodColor[endpoint.method]}>{endpoint.method}</Tag>
            <code className={styles.apiPath}>{endpoint.path}</code>
          </div>
          <h3>{endpoint.name}</h3>
          <p className={styles.apiDesc}>{endpoint.desc}</p>

          <h4 className={styles.paramTitle}>请求参数</h4>
          <table className={styles.paramTable}>
            <thead>
              <tr>
                <th>参数名</th>
                <th>类型</th>
                <th>必填</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              {endpoint.params.map((param) => (
                <tr key={param.name}>
                  <td>
                    <code>{param.name}</code>
                  </td>
                  <td>{param.type}</td>
                  <td>{param.required ? '是' : '否'}</td>
                  <td>{param.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h4 className={styles.paramTitle}>调用示例</h4>
          <Tabs activeTab={sdkLang} onChange={(key) => setSdkLang(key as SdkLanguage)}>
            {sdkTabs.map((tab) => (
              <Tabs.TabPane key={tab.key} title={tab.label}>
                <pre className={styles.codeBlock}>
                  <code>{sdkExamples[tab.key]}</code>
                </pre>
              </Tabs.TabPane>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  )
}
