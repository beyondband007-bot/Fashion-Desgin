import { enterprisePartners } from '@/mock/enterprise'

import styles from '../index.module.scss'

export function PartnersSection() {
  return (
    <div className={styles.sectionStack}>
      <header className={styles.sectionHeader}>
        <h1>合作平台</h1>
        <p>已与主流电商与跨境平台完成接入，支持一键同步商拍素材至店铺后台。</p>
      </header>

      <div className={styles.partnerGrid}>
        {enterprisePartners.map((item) => (
          <article key={item.id} className={styles.partnerCard}>
            <span className={styles.partnerLogo}>{item.name.slice(0, 1)}</span>
            <div>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
            <span className={styles.partnerStatus}>已接入</span>
          </article>
        ))}
      </div>
    </div>
  )
}
