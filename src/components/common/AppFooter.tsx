import { IconApps } from '@arco-design/web-react/icon'
import { Link } from 'react-router-dom'

const footerLinks = {
  product: [
    { label: 'AI 在线生成', path: '/ai-generate' },
    { label: 'AI 编辑工具箱', path: '/ai-edit' },
    { label: '视频生成', path: '/video' },
    { label: '成片交付', path: '/delivery' },
    { label: 'AI 创意圈', path: '/creative' },
  ],
  solutions: [
    { label: '服装电商', path: '/enterprise' },
    { label: '品牌视觉', path: '/creative' },
    { label: '直播素材', path: '/video' },
    { label: '企业版', path: '/enterprise' },
  ],
  resources: [
    { label: '套餐中心', path: '/pricing' },
    { label: '积分充值', path: '/credits' },
    { label: '常见问题', path: '/#faq' },
    { label: '使用指南', path: '/delivery' },
  ],
  about: [
    { label: '关于我们', path: '/enterprise' },
    { label: '商务合作', path: '/enterprise' },
    { label: '加入我们', path: '/delivery' },
    { label: 'support@fashion-ai.com', path: 'mailto:support@fashion-ai.com' },
  ],
}

export function AppFooter() {
  return (
    <footer className="app-footer app-footer--dark">
      <div className="page-section app-footer__inner">
        <div className="app-footer__top">
          <div className="app-footer__brand">
            <Link to="/" className="app-footer__logo">
              <span className="app-footer__logo-icon">
                <IconApps />
              </span>
              Fashion Design AI
            </Link>
            <p className="app-footer__desc">
              AI 驱动的服装电商内容生产平台，3 步生成专业商拍大片，服务 500+ KA 品牌。
            </p>
          </div>
          <div className="app-footer__grid">
            <div>
              <div className="app-footer__title">产品</div>
              {footerLinks.product.map((item) => (
                <Link key={item.label} to={item.path} className="app-footer__link">
                  {item.label}
                </Link>
              ))}
            </div>
            <div>
              <div className="app-footer__title">解决方案</div>
              {footerLinks.solutions.map((item) => (
                <Link key={item.label} to={item.path} className="app-footer__link">
                  {item.label}
                </Link>
              ))}
            </div>
            <div>
              <div className="app-footer__title">资源中心</div>
              {footerLinks.resources.map((item) => (
                <Link key={item.label} to={item.path} className="app-footer__link">
                  {item.label}
                </Link>
              ))}
            </div>
            <div>
              <div className="app-footer__title">关于我们</div>
              {footerLinks.about.map((item) =>
                item.path.startsWith('mailto:') ? (
                  <a key={item.label} href={item.path} className="app-footer__link">
                    {item.label}
                  </a>
                ) : (
                  <Link key={item.label} to={item.path} className="app-footer__link">
                    {item.label}
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
        <div className="app-footer__bottom">
          <span>Copyright © 2026 Fashion Design AI. All rights reserved.</span>
          <span>京ICP备2026000000号-1</span>
        </div>
      </div>
    </footer>
  )
}
