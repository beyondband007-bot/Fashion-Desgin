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
    { label: '优秀案例', path: '/#cases' },
    { label: '使用指南', path: '/delivery' },
  ],
  about: [
    { label: '关于我们', path: '/enterprise' },
    { label: '商务合作', path: '/enterprise' },
    { label: '加入我们', path: '/delivery' },
    { label: '隐私政策', path: '/enterprise' },
  ],
}

export function AppFooter() {
  return (
    <footer className="app-footer app-footer--light">
      <div className="page-section app-footer__inner">
        <div className="app-footer__top">
          <div className="app-footer__brand">
            <Link to="/" className="app-footer__logo">
              <span className="app-footer__logo-icon">
                <IconApps />
              </span>
              AI商拍
            </Link>
            <p className="app-footer__desc">
              AI 驱动的服装电商内容生产平台，覆盖试衣、精修、批量出图与成片交付。
            </p>
            <div className="app-footer__qr-row">
              <div className="app-footer__qr">
                <div className="app-footer__qr-box" aria-hidden="true" />
                <span>官方微信</span>
              </div>
              <div className="app-footer__qr">
                <div className="app-footer__qr-box" aria-hidden="true" />
                <span>官方社群</span>
              </div>
            </div>
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
              {footerLinks.about.map((item) => (
                <Link key={item.label} to={item.path} className="app-footer__link">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="app-footer__contact">
            <div className="app-footer__title">联系我们</div>
            <p>商务合作：business@fashion-ai.com</p>
            <p>技术支持：support@fashion-ai.com</p>
            <p>服务热线：400-888-2026</p>
            <p>工作时间：周一至周五 9:00 - 18:00</p>
          </div>
        </div>
        <div className="app-footer__bottom">
          <span>Copyright © 2026 AI商拍. All rights reserved.</span>
          <span>京ICP备2026000000号-1</span>
        </div>
      </div>
    </footer>
  )
}
