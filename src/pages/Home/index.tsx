import { Button, Collapse } from '@arco-design/web-react'
import { IconCustomerService, IconRight } from '@arco-design/web-react/icon'
import { useQuery } from '@tanstack/react-query'
import { Link, useNavigate } from 'react-router-dom'

import heroComposite from '@/assets/img/hero-composite.png'
import { useAuthGuard } from '@/hooks/useAuthGuard'
import { mockPlans } from '@/mock/data'
import { mockService } from '@/services/mockService'

import './home.scss'

const faqs = [
  {
    q: '生成的图片可以商用吗？',
    a: '可以。平台生成的商拍图支持电商详情、广告投放等商用场景，具体授权范围以套餐说明为准。',
  },
  {
    q: '支持哪些服装类型？',
    a: '支持上装、下装、连衣裙、外套等常见品类，也支持配饰与鞋靴类素材生成。',
  },
  {
    q: '生成一张图需要多久？',
    a: '标准分辨率下单张约 30 秒至 2 分钟，批量任务会进入优先队列处理。',
  },
  { q: '如何联系客服？', a: '可通过「立即咨询」入口或企业版专属成功团队获取一对一支持。' },
  {
    q: '可以批量生成吗？',
    a: '可以。上传多张服装图后可批量生成商拍图，高级套餐支持优先队列加速。',
  },
]

const featureSymbols = ['▣', '✎', '▶', '✉', '☆']

const statSymbols: Record<string, string> = {
  shop: '♕',
  image: '▣',
  rise: '↗',
  thunder: '⚡',
  clock: '⏱',
  fall: '◎',
}

const planCreditHint: Record<string, string> = {
  starter: '20 积分',
  basic: '200 积分/月',
  advanced: '800 积分/月',
  pro: '2000 积分/月',
  enterprise: '专属服务',
}

export function HomePage() {
  const navigate = useNavigate()
  const { guard } = useAuthGuard()
  const { data } = useQuery({ queryKey: ['home-config'], queryFn: mockService.getHomeConfig })

  const heroTitle = data?.heroTitle ?? '3 步生成专业商拍大片'
  const heroNumber = heroTitle.match(/^(\d+)/)?.[1] ?? '3'
  const heroTitleRest = heroTitle.replace(/^\d+\s*/, '')

  return (
    <div className="home-page">
      <section className="ps-hero">
        <div className="ps-container ps-hero__inner">
          <div className="ps-hero__copy">
            <div className="ps-pill">✦ {data?.heroBadge}</div>
            <h1 className="ps-hero__title">
              <span className="ps-hero__num">{heroNumber}</span>
              {heroTitleRest}
            </h1>
            <p className="ps-hero__sub">{data?.heroSubtitle}</p>
            <div className="ps-hero__points">
              {(data?.heroHighlights ?? []).map((item) => (
                <span key={item}>
                  <i className="ps-check">✓</i>
                  {item}
                </span>
              ))}
            </div>
            <div className="ps-hero__actions">
              <Button type="primary" size="large" onClick={() => guard('/ai-generate')}>
                立即生成
                <IconRight />
              </Button>
              <Button
                size="large"
                type="outline"
                icon={<IconCustomerService />}
                onClick={() => navigate('/delivery')}
                className="ps-hero__consult-btn"
              >
                立即咨询
              </Button>
            </div>
          </div>
          <div className="ps-hero__visual" aria-hidden="true">
            <img className="ps-hero__composite" alt="" src={heroComposite} />
          </div>
        </div>
      </section>

      <div className="ps-main">
        <div className="ps-brand-strip">
          <div className="ps-container">
            <h2 className="ps-section-title">500+ KA 品牌的共同选择</h2>
            <div className="ps-brand-list">
              {(data?.brands ?? []).map((brand) => (
                <div
                  key={brand.name}
                  className={`ps-brand${brand.enName === 'INMAN' ? ' ps-brand--accent' : ''}`}
                >
                  {brand.enName ?? brand.name}
                  <small>{brand.name}</small>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section id="features" className="ps-section">
          <div className="ps-container">
            <div className="ps-section-head">
              <h2>核心功能</h2>
              <p>一站式 AI 商拍解决方案，满足您的所有需求</p>
            </div>
            <div className="ps-feature-grid">
              {(data?.features ?? []).map((feature, index) => (
                <article key={feature.title} className="ps-feature-card">
                  <div>
                    <div className="ps-feature-icon">{featureSymbols[index] ?? '▣'}</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                    <button
                      type="button"
                      className="ps-feature-link"
                      onClick={() => {
                        if (feature.path) {
                          guard(feature.path)
                        }
                      }}
                    >
                      {feature.path === '/delivery' ? '立即咨询 →' : '立即使用 →'}
                    </button>
                  </div>
                  <div className="ps-feature-image">
                    {feature.cover ? <img alt={feature.title} src={feature.cover} /> : null}
                  </div>
                </article>
              ))}
            </div>
            <div className="ps-stats-bar">
              {(data?.stats ?? []).map((item) => (
                <div key={item.label} className="ps-stat">
                  <div className="ps-stat-icon">{statSymbols[item.icon ?? 'shop'] ?? '♕'}</div>
                  <div>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ps-section">
          <div className="ps-container">
            <div className="ps-section-head">
              <h2>成功案例</h2>
              <p>真实品牌数据，验证 AI 商拍业务价值</p>
            </div>
            <div className="ps-cases">
              {(data?.cases ?? []).map((item) => (
                <article key={item.id} className="ps-case-card">
                  <img alt={item.brand} src={item.cover} />
                </article>
              ))}
            </div>
            <div className="ps-cases-more">
              <Button type="outline" onClick={() => guard('/projects')}>
                查看更多
              </Button>
            </div>
          </div>
        </section>

        <section id="pricing" className="ps-section ps-pricing-section">
          <div className="ps-container ps-pricing-band">
            <aside className="ps-dark-panel">
              <h3>新人专享体验</h3>
              <p>免费体验 20 积分</p>
              <ul>
                <li>体验所有核心功能</li>
                <li>生成高清商拍效果图</li>
              </ul>
              <Button type="primary" long onClick={() => navigate('/pricing')}>
                立即领取
              </Button>
            </aside>

            <div className="ps-plans-box">
              <div className="ps-plans-head">
                <div>
                  <h3>选择适合您的套餐</h3>
                  <p>多种套餐选择，满足不同需求</p>
                </div>
                <Button type="primary" onClick={() => navigate('/pricing')}>
                  查看详情
                  <IconRight />
                </Button>
              </div>
              <div className="ps-plans">
                {mockPlans.map((plan) => (
                  <article
                    key={plan.id}
                    className="ps-plan"
                    role="button"
                    tabIndex={0}
                    onClick={() =>
                      plan.id === 'enterprise' ? navigate('/enterprise') : navigate('/pricing')
                    }
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        if (plan.id === 'enterprise') {
                          navigate('/enterprise')
                        } else {
                          navigate('/pricing')
                        }
                      }
                    }}
                  >
                    <h4>{plan.name}</h4>
                    <div className="ps-price">
                      {plan.id === 'enterprise' ? (
                        '定制报价'
                      ) : plan.monthlyPrice === 0 ? (
                        <>
                          ¥0<small> 起</small>
                        </>
                      ) : (
                        <>
                          ¥{plan.monthlyPrice}
                          <small>/月</small>
                        </>
                      )}
                    </div>
                    <p>{planCreditHint[plan.id] ?? plan.features[0]}</p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="ps-dark-panel">
              <h3>企业合作</h3>
              <p>定制化方案，专属服务团队</p>
              <ul>
                <li>API 接口对接</li>
                <li>私有化部署</li>
              </ul>
              <Button type="primary" long onClick={() => navigate('/enterprise')}>
                联系我们
              </Button>
            </aside>
          </div>
        </section>

        <section className="ps-section ps-faq" id="faq">
          <div className="ps-container">
            <div className="ps-section-head">
              <h2>常见问题</h2>
            </div>
            <Collapse bordered={false} expandIconPosition="right" className="ps-faq-collapse">
              {faqs.map((item, index) => (
                <Collapse.Item key={String(index)} name={String(index)} header={item.q}>
                  {item.a}
                </Collapse.Item>
              ))}
            </Collapse>
            <Link to="/delivery" className="ps-more-link">
              更多问题 →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
