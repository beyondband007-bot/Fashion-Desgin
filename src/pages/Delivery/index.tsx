import { Button } from '@arco-design/web-react'
import { IconRight } from '@arco-design/web-react/icon'
import { useState } from 'react'

import {
  deliveryAboutPoints,
  deliveryHero,
  deliveryOffices,
  deliverySolutions,
} from '@/mock/delivery'

import styles from './index.module.scss'

const hqOffice = deliveryOffices.find((o) => o.isHQ) ?? deliveryOffices[0]!

export function DeliveryPage() {
  const [activeOffice, setActiveOffice] = useState(hqOffice.id)
  const office = deliveryOffices.find((o) => o.id === activeOffice) ?? hqOffice

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <div className={styles.qrBlock}>
              <div className={styles.qrBox} aria-hidden />
              <span>扫码关注</span>
            </div>
            <h1>{deliveryHero.title}</h1>
            <p>{deliveryHero.description}</p>
            <Button type="primary" size="large" icon={<IconRight />}>
              立即咨询
            </Button>
          </div>
          <div className={styles.heroVisual} aria-hidden>
            <div className={styles.visualGlow} />
            <div className={styles.visualWindow}>
              <div className={styles.visualToolbar}>
                <span />
                <span />
                <span />
              </div>
              <div className={styles.visualBody}>
                <div className={styles.visualCompare}>
                  <img
                    src="https://picsum.photos/seed/delivery-before/200/260"
                    alt=""
                    className={styles.visualBefore}
                  />
                  <img
                    src="https://picsum.photos/seed/delivery-after/200/260"
                    alt=""
                    className={styles.visualAfter}
                  />
                </div>
                <div className={styles.visualAction}>
                  <span className={styles.visualCursor} />
                  智能抠图优化
                </div>
              </div>
            </div>
            <div className={styles.floatingIcon} style={{ top: '12%', left: '8%' }}>
              ◎
            </div>
            <div className={styles.floatingIcon} style={{ top: '20%', right: '6%' }}>
              ✦
            </div>
            <div className={styles.floatingIcon} style={{ bottom: '18%', left: '4%' }}>
              ▣
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className={styles.solutions}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>成片交付服务</h2>
          <p className={styles.sectionDesc}>按品类提供专业化视觉交付方案，48 小时极速出片</p>
          <div className={styles.solutionGrid}>
            {deliverySolutions.map((item) => (
              <article key={item.id} className={styles.solutionCard}>
                <img src={item.cover} alt={item.title} />
                <div className={styles.solutionBody}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button type="button" className={styles.solutionLink}>
                    了解详情
                    <IconRight />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className={styles.about}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>关于我们</h2>
          <ul className={styles.aboutList}>
            {deliveryAboutPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Offices */}
      <section className={styles.offices}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>区域办公室</h2>
          <div className={styles.officeLayout}>
            <div className={styles.mapWrap}>
              <div className={styles.mapBg} />
              {deliveryOffices.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`${styles.mapDot}${item.id === activeOffice ? ` ${styles.mapDotActive}` : ''}${item.isHQ ? ` ${styles.mapDotHq}` : ''}`}
                  style={{ left: `${item.x}%`, top: `${item.y}%` }}
                  title={item.city}
                  onClick={() => setActiveOffice(item.id)}
                />
              ))}
            </div>
            <aside className={styles.officeCard}>
              <h3>{office.city}</h3>
              <p>{office.address}</p>
              {office.phone ? (
                <p>
                  <strong>电话</strong> {office.phone}
                </p>
              ) : null}
              {office.email ? (
                <p>
                  <strong>邮箱</strong> {office.email}
                </p>
              ) : null}
              <Button type="primary" long>
                联系当地团队
              </Button>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
