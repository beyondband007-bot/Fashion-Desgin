import { Table } from '@arco-design/web-react'

import { enterpriseCapabilities, planCompareRows } from '@/mock/enterprise'

import styles from '../index.module.scss'

export function IntroSection() {
  return (
    <div className={styles.sectionStack}>
      <header className={styles.sectionHeader}>
        <h1>方案介绍</h1>
        <p>
          面向中大型服饰品牌，提供 API 对接、私有化部署、定制模特训练与专属成功团队，满足高并发、高安全与高定制需求。
        </p>
      </header>

      <div className={styles.capabilityGrid}>
        {enterpriseCapabilities.map((item) => (
          <article key={item.id} className={styles.capabilityCard}>
            <span className={styles.capabilityIcon}>{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>

      <div className={styles.compareBlock}>
        <h2 className={styles.blockTitle}>套餐对比</h2>
        <p className={styles.blockDesc}>个人版、专业版与企业版核心能力对照</p>
        <Table
          border
          pagination={false}
          rowKey="item"
          className={styles.compareTable ?? ''}
          columns={[
            { title: '能力项', dataIndex: 'item' },
            { title: '个人版', dataIndex: 'standard' },
            { title: '专业版', dataIndex: 'pro' },
            {
              title: '企业版',
              dataIndex: 'enterprise',
              render: (val: string) => <strong className={styles.enterpriseCell ?? ''}>{val}</strong>,
            },
          ]}
          data={planCompareRows}
        />
      </div>
    </div>
  )
}
