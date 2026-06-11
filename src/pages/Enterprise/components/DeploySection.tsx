import { Button, Message } from '@arco-design/web-react'
import { IconDownload } from '@arco-design/web-react/icon'

import { deployRequirements } from '@/mock/enterprise'

import styles from '../index.module.scss'

export function DeploySection() {
  const handleDownload = () => {
    Message.success('部署方案 PDF 已开始下载（演示）')
  }

  return (
    <div className={styles.sectionStack}>
      <header className={styles.sectionHeader}>
        <h1>私有化部署 2.0</h1>
        <p>提供完整部署架构、软硬件要求与安全合规说明，支持 POC 验证与灰度上线。</p>
      </header>

      <div className={styles.deployHero}>
        <div className={styles.deployDiagram}>
          <div className={styles.deployNode}>客户端 / ERP</div>
          <div className={styles.deployArrow}>→</div>
          <div className={styles.deployNode}>API 网关</div>
          <div className={styles.deployArrow}>→</div>
          <div className={styles.deployCluster}>
            <span>推理集群</span>
            <span>素材存储</span>
            <span>任务队列</span>
          </div>
        </div>
        <Button type="primary" icon={<IconDownload />} onClick={handleDownload}>
          下载部署方案
        </Button>
      </div>

      <div className={styles.requirementGrid}>
        <article className={styles.requirementCard}>
          <h3>硬件要求</h3>
          <ul>
            {deployRequirements.hardware.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className={styles.requirementCard}>
          <h3>软件环境</h3>
          <ul>
            {deployRequirements.software.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className={styles.requirementCard}>
          <h3>安全合规</h3>
          <ul>
            {deployRequirements.security.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  )
}
