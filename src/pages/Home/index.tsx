import { Button, Input, Progress } from '@arco-design/web-react'
import { IconArrowRight, IconRight, IconStarFill } from '@arco-design/web-react/icon'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuthGuard } from '@/hooks/useAuthGuard'

import {
  caseTabs,
  enterpriseTasks,
  galleryItems,
  galleryTabs,
  heroBackground,
  heroContent,
  mainFeatures,
  quickEntries,
  showcaseCase,
  testimonials,
  toolEntries,
} from './data'
import './home.scss'

export function HomePage() {
  const navigate = useNavigate()
  const { guard } = useAuthGuard()
  const [caseTab, setCaseTab] = useState(caseTabs[1])
  const [galleryTab, setGalleryTab] = useState(galleryTabs[0])
  const [ctaInput, setCtaInput] = useState('')

  const filteredGallery = useMemo(
    () => galleryItems.filter((item) => item.category === galleryTab),
    [galleryTab],
  )

  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return
    const timer = window.setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    }, 80)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero__bg" style={{ backgroundImage: `url(${heroBackground})` }} />
        <div className="home-hero__mask" />
        <div className="home-container home-hero__inner">
          <h1 className="home-hero__title">{heroContent.title}</h1>
          <p className="home-hero__subtitle">{heroContent.subtitle}</p>
        </div>
      </section>

      <section className="home-quick">
        <div className="home-container home-quick__grid">
          {quickEntries.map((item) => (
            <article
              key={item.id}
              className={`home-quick-card home-quick-card--${item.variant}`}
            >
              <div className="home-quick-card__body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button
                  type="button"
                  className="home-link-btn"
                  onClick={() => guard(item.path)}
                >
                  {item.cta}
                  <IconArrowRight />
                </button>
              </div>
              <div className="home-quick-card__media">
                <img src={item.image} alt="" loading="lazy" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section" id="features">
        <div className="home-container">
          <div className="home-section-head">
            <h2>全链路 AI 商拍图生成</h2>
            <p>从试衣、精修到批量出图，覆盖服装电商内容生产全流程</p>
          </div>
          <div className="home-feature-grid">
            {mainFeatures.map((feature) => (
              <article
                key={feature.title}
                className="home-feature-card"
                role="button"
                tabIndex={0}
                onClick={() => guard(feature.path)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') guard(feature.path)
                }}
              >
                <div className="home-feature-card__image">
                  <img src={feature.image} alt={feature.title} loading="lazy" />
                </div>
                <div className="home-feature-card__content">
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                  <span className="home-feature-card__link">
                    了解更多
                    <IconRight />
                  </span>
                </div>
              </article>
            ))}
          </div>
          <div className="home-tool-grid">
            {toolEntries.map((tool) => (
              <button
                key={tool.title}
                type="button"
                className="home-tool-card"
                onClick={() => guard(tool.path)}
              >
                <div className="home-tool-card__icon">
                  <img src={`https://picsum.photos/seed/${tool.seed}/80/80`} alt="" />
                </div>
                <span>{tool.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section--muted" id="cases">
        <div className="home-container">
          <div className="home-section-head">
            <h2>真实成片交付案例</h2>
            <p>来自真实品牌场景的数据验证与业务价值</p>
          </div>
          <div className="home-tabs">
            {caseTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`home-tab${caseTab === tab ? ' home-tab--active' : ''}`}
                onClick={() => setCaseTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <article className="home-case-card">
            <div className="home-case-card__media">
              <img src={showcaseCase.image} alt={showcaseCase.title} loading="lazy" />
            </div>
            <div className="home-case-card__content">
              <h3>{showcaseCase.title}</h3>
              <p>{showcaseCase.desc}</p>
              <div className="home-case-card__stats">
                {showcaseCase.stats.map((stat) => (
                  <div key={stat.label} className="home-stat-pill">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
              <Button type="primary" size="large" onClick={() => navigate('/delivery')}>
                {showcaseCase.cta}
              </Button>
            </div>
          </article>
        </div>
      </section>

      <section className="home-enterprise">
        <div className="home-container home-enterprise__inner">
          <div className="home-enterprise__copy">
            <span className="home-enterprise__label">企业版能力</span>
            <h2>企业级批量化出图 重塑生产力边界</h2>
            <ul>
              <li>支持多账号协作与权限管理</li>
              <li>批量任务队列与优先加速通道</li>
              <li>API 对接与私有化部署可选</li>
              <li>专属客户成功团队全程跟进</li>
            </ul>
            <Button type="primary" size="large" onClick={() => navigate('/enterprise')}>
              了解企业版
              <IconRight />
            </Button>
          </div>
          <div className="home-enterprise__panel">
            <div className="home-enterprise__panel-head">
              <span>生成任务面板</span>
              <span className="home-enterprise__panel-badge">实时同步</span>
            </div>
            <div className="home-enterprise__summary">
              <div>
                <strong>128</strong>
                <span>今日任务</span>
              </div>
              <div>
                <strong>96.8%</strong>
                <span>成功率</span>
              </div>
              <div>
                <strong>2.4min</strong>
                <span>平均耗时</span>
              </div>
            </div>
            <div className="home-enterprise__tasks">
              {enterpriseTasks.map((task) => (
                <div key={task.name} className="home-task-row">
                  <div className="home-task-row__meta">
                    <span>{task.name}</span>
                    <span className={`home-task-status home-task-status--${task.statusType}`}>
                      {task.status}
                    </span>
                  </div>
                  <Progress
                    percent={task.progress}
                    showText={false}
                    color="#1677ff"
                    trailColor="rgba(255,255,255,0.08)"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-container">
          <div className="home-section-head">
            <h2>用户评价</h2>
            <p>来自服装电商、品牌方与内容团队的真实反馈</p>
          </div>
          <div className="home-review-grid">
            {testimonials.map((item) => (
              <article key={item.name} className="home-review-card">
                <div className="home-review-card__stars">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <IconStarFill key={String(i)} />
                  ))}
                </div>
                <p>{item.content}</p>
                <footer>
                  <img src={item.avatar} alt="" />
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section--gallery">
        <div className="home-container">
          <div className="home-section-head">
            <h2>优秀案例</h2>
            <p>覆盖女装、男装、童装与配饰等多品类商拍场景</p>
          </div>
          <div className="home-tabs">
            {galleryTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`home-tab${galleryTab === tab ? ' home-tab--active' : ''}`}
                onClick={() => setGalleryTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="home-gallery-grid">
            {filteredGallery.map((item) => (
              <article key={item.id} className="home-gallery-card">
                <img src={item.image} alt="" loading="lazy" />
                <div className="home-gallery-card__badge">
                  <img src={item.thumb} alt="" />
                  <span>输入素材</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="home-container home-cta__inner">
          <h2>AI 生图，秒出大片！让爆单快人一步！</h2>
          <div className="home-cta__form">
            <Input
              size="large"
              placeholder="输入您的商拍需求，例如：夏季连衣裙主图批量生成"
              value={ctaInput}
              onChange={setCtaInput}
            />
            <Button type="primary" size="large" onClick={() => guard('/ai-generate')}>
              立即体验
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
