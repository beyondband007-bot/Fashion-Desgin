const img = (seed: string, w = 960, h = 720) => `https://picsum.photos/seed/${seed}/${w}/${h}`

export const heroContent = {
  title: 'AI商拍 一站式解决方案',
  subtitle: '服装图智能生成 / 商品图优化 / AI模特换装 / 电商主图生成',
}

export const quickEntries = [
  {
    id: 'generate',
    title: 'AI 在线生成',
    desc: '上传服装图，一键生成专业模特商拍图，支持批量出图。',
    cta: '立即体验',
    path: '/ai-generate',
    image: img('home-quick-generate', 320, 240),
    variant: 'default' as const,
  },
  {
    id: 'edit',
    title: '图片实时精修',
    desc: '智能抠图、背景替换、光影优化，快速精修商拍细节。',
    cta: '开始精修',
    path: '/ai-edit',
    image: img('home-quick-edit', 320, 240),
    variant: 'default' as const,
  },
  {
    id: 'delivery',
    title: '提需求拿成品',
    desc: '提交拍摄需求，专业团队审核交付，按时拿到可商用成片。',
    cta: '提交需求',
    path: '/delivery',
    image: img('home-quick-delivery', 480, 280),
    variant: 'emphasis' as const,
  },
]

export const mainFeatures = [
  {
    title: 'AI 试衣',
    desc: '虚拟试穿还原真实穿着效果，快速验证款式上身表现。',
    image: img('home-feat-tryon', 400, 480),
    path: '/ai-generate/clothes',
  },
  {
    title: '模特精修',
    desc: '肤质、光影、姿态智能优化，输出高质感人像商拍。',
    image: img('home-feat-retouch', 400, 480),
    path: '/ai-edit',
  },
  {
    title: '服装上身',
    desc: '平铺图、人台图一键上身，适配电商主图与详情页。',
    image: img('home-feat-wear', 400, 480),
    path: '/ai-generate/mannequin',
  },
  {
    title: 'AI 模特',
    desc: '多风格虚拟模特库，覆盖女装、男装与童装场景。',
    image: img('home-feat-model', 400, 480),
    path: '/ai-generate/model',
  },
]

export const toolEntries = [
  { title: '智能生成', path: '/ai-generate', seed: 'tool-gen' },
  { title: '智能换装', path: '/ai-generate/clothes', seed: 'tool-dress' },
  { title: '神似图', path: '/creative', seed: 'tool-like' },
  { title: '模特换装', path: '/ai-generate/model', seed: 'tool-model' },
  { title: '适配场景', path: '/ai-generate', seed: 'tool-scene' },
  { title: '去水印', path: '/ai-edit', seed: 'tool-watermark' },
  { title: '智能抠图', path: '/ai-edit', seed: 'tool-cutout' },
  { title: '成品尺寸', path: '/ai-generate', seed: 'tool-size' },
  { title: 'AI 图库', path: '/assets', seed: 'tool-gallery' },
  { title: '智能补光', path: '/ai-edit', seed: 'tool-light' },
]

export const caseTabs = ['全部', '女装', '男装', '童装', '鞋包配饰']

export const showcaseCase = {
  title: '女装品牌上身案例',
  desc: '某女装品牌使用 AI 商拍替代传统外拍，覆盖主图、详情页与广告投放素材，上新周期从 15 天缩短至 2 天，素材成本显著下降。',
  stats: [
    { value: '300%', label: '效率提升' },
    { value: '75%', label: '成本降低' },
  ],
  image: img('home-case-women', 560, 720),
  cta: '查看案例详情',
}

export const enterpriseTasks = [
  { name: '模特换装', progress: 86, status: '处理中', statusType: 'processing' as const },
  { name: '背景融合', progress: 100, status: '已完成', statusType: 'success' as const },
  { name: '高清增强', progress: 64, status: '处理中', statusType: 'processing' as const },
  { name: '批量生成', progress: 42, status: '排队中', statusType: 'queued' as const },
]

export const testimonials = [
  {
    content:
      '接入 AI 商拍后，我们的上新节奏明显加快，详情页素材不再需要等外拍档期，团队可以专注在选款和运营上。',
    name: '林晓雯',
    role: '某女装品牌电商负责人',
    avatar: img('avatar-1', 80, 80),
    rating: 5,
  },
  {
    content:
      '批量出图能力非常适合多 SKU 场景，模特换装和场景适配效果稳定，已经纳入日常素材生产流程。',
    name: '张铭',
    role: '服饰供应链运营总监',
    avatar: img('avatar-2', 80, 80),
    rating: 5,
  },
  {
    content:
      '成片交付模式解决了我们对品质的最后把关，AI 提效 + 人工审核的组合非常适合品牌方。',
    name: '王悦',
    role: '跨境电商视觉主管',
    avatar: img('avatar-3', 80, 80),
    rating: 5,
  },
]

export const galleryTabs = ['女装', '男装', '童装', '鞋包', '配饰']

export const galleryItems = [
  { id: 'g1', category: '女装', image: img('gallery-w1', 400, 520), thumb: img('gallery-w1-in', 64, 64) },
  { id: 'g2', category: '女装', image: img('gallery-w2', 400, 520), thumb: img('gallery-w2-in', 64, 64) },
  { id: 'g3', category: '男装', image: img('gallery-m1', 400, 520), thumb: img('gallery-m1-in', 64, 64) },
  { id: 'g4', category: '男装', image: img('gallery-m2', 400, 520), thumb: img('gallery-m2-in', 64, 64) },
  { id: 'g5', category: '童装', image: img('gallery-k1', 400, 520), thumb: img('gallery-k1-in', 64, 64) },
  { id: 'g6', category: '童装', image: img('gallery-k2', 400, 520), thumb: img('gallery-k2-in', 64, 64) },
  { id: 'g7', category: '鞋包', image: img('gallery-s1', 400, 520), thumb: img('gallery-s1-in', 64, 64) },
  { id: 'g8', category: '鞋包', image: img('gallery-s2', 400, 520), thumb: img('gallery-s2-in', 64, 64) },
]

export const heroBackground = img('home-hero-fashion', 1920, 720)
