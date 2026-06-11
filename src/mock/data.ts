import dayjs from 'dayjs'

import type {
  AssetItem,
  CreditTransaction,
  ModelProfile,
  PricingPlan,
  ProjectItem,
  SceneProfile,
  TaskRecord,
} from '@/types/business'
import type { FeatureCardItem, StatCardItem } from '@/types/app'

const image = (seed: string) => `https://picsum.photos/seed/${seed}/960/720`

export const mockHomeStats: StatCardItem[] = [
  { label: '服务 KA 品牌', value: '500+', icon: 'shop' },
  { label: '累计生成', value: '3000万+', icon: 'image' },
  { label: 'GMV 提升', value: '200%', icon: 'rise' },
  { label: '效率提升', value: '10倍+', icon: 'thunder' },
  { label: '交付周期缩短', value: '15天→2天', icon: 'clock' },
  { label: '成本降低', value: '80%', icon: 'fall' },
]

export const mockBrands = [
  { name: '李宁', enName: 'LI-NING' },
  { name: '太平鸟', enName: 'PEACEBIRD' },
  { name: '波司登', enName: 'BOSIDENG' },
  { name: '森马', enName: 'SEMIR' },
  { name: '骆驼', enName: 'CAMEL' },
  { name: 'UR', enName: 'UR' },
  { name: '欧时力', enName: 'ochirly' },
  { name: '茵曼', enName: 'INMAN' },
]

export const mockSuccessCases = [
  {
    id: 'case-1',
    brand: '波司登',
    cover: image('case-bosideng'),
    gmvIncrease: '+32%',
    costReduction: '-65%',
    summary: '羽绒服季前上新，AI 商拍替代 80% 外拍需求。',
  },
  {
    id: 'case-2',
    brand: '太平鸟',
    cover: image('case-peacebird'),
    gmvIncrease: '+28%',
    costReduction: '-58%',
    summary: '多 SKU 并行生成，详情页素材交付周期缩短至 2 天。',
  },
  {
    id: 'case-3',
    brand: '森马',
    cover: image('case-semir'),
    gmvIncrease: '+24%',
    costReduction: '-52%',
    summary: '直播与主图素材统一风格，降低跨团队沟通成本。',
  },
]

export const mockCoreFeatures: FeatureCardItem[] = [
  {
    title: 'AI 在线生成',
    description: '上传服装图，一键生成专业模特商拍图，支持批量生成。',
    tags: [],
    icon: 'apps',
    cover: image('feat-generate'),
    path: '/ai-generate',
  },
  {
    title: 'AI 编辑工具箱',
    description: '智能抠图、背景替换、光影优化，快速精修商拍图。',
    tags: [],
    icon: 'edit',
    cover: image('feat-edit'),
    path: '/ai-edit',
  },
  {
    title: '视频生成',
    description: '静态图转动态视频，多模板一键生成，适配电商详情页。',
    tags: [],
    icon: 'video',
    cover: image('feat-video'),
    path: '/video',
  },
  {
    title: '成片交付',
    description: '专业团队审核把关，确保输出质量，按时交付商用素材。',
    tags: [],
    icon: 'safe',
    cover: image('feat-delivery'),
    path: '/delivery',
  },
  {
    title: 'AI 创意生图',
    description: '基于品牌调性探索视觉方向，快速验证创意与风格。',
    tags: [],
    icon: 'image',
    cover: image('feat-creative'),
    path: '/creative',
  },
]

export const mockModels: ModelProfile[] = [
  {
    id: 'model-1',
    name: 'Lena',
    region: '欧美',
    style: '高街简约',
    tags: ['女装', '针织', '电商主图'],
    cover: image('model-1'),
  },
  {
    id: 'model-2',
    name: 'Mia',
    region: '亚洲',
    style: '轻奢都市',
    tags: ['通勤', '套装', '品牌视觉'],
    cover: image('model-2'),
  },
  {
    id: 'model-3',
    name: 'Noah',
    region: '欧美',
    style: '男装运动',
    tags: ['男装', '户外', '直播详情'],
    cover: image('model-3'),
  },
]

export const mockScenes: SceneProfile[] = [
  {
    id: 'scene-1',
    name: '极简影棚',
    category: '棚拍',
    light: '柔光主灯',
    cover: image('scene-1'),
  },
  {
    id: 'scene-2',
    name: '通勤空间',
    category: '室内',
    light: '自然光',
    cover: image('scene-2'),
  },
  {
    id: 'scene-3',
    name: '品牌门店',
    category: '商业',
    light: '暖光氛围',
    cover: image('scene-3'),
  },
]

export const mockTasks: TaskRecord[] = [
  {
    id: 'task-1',
    title: '夏季女装主图批量生成',
    type: '衣服图',
    status: 'running',
    createdAt: dayjs().subtract(10, 'minute').toISOString(),
    progress: 68,
    credits: 48,
    thumbnail: image('task-1'),
  },
  {
    id: 'task-2',
    title: '衬衫人台转真人',
    type: '人台图',
    status: 'queued',
    createdAt: dayjs().subtract(45, 'minute').toISOString(),
    progress: 22,
    credits: 36,
    thumbnail: image('task-2'),
  },
  {
    id: 'task-3',
    title: '秋冬羽绒服视频预览',
    type: '视频',
    status: 'success',
    createdAt: dayjs().subtract(2, 'hour').toISOString(),
    progress: 100,
    credits: 96,
    thumbnail: image('task-3'),
  },
  {
    id: 'task-4',
    title: '连衣裙真人图替换',
    type: '真人图',
    status: 'success',
    createdAt: dayjs().subtract(6, 'hour').toISOString(),
    progress: 100,
    credits: 40,
    thumbnail: image('task-4'),
  },
  {
    id: 'task-5',
    title: '智能抠图批量处理',
    type: '编辑',
    status: 'failed',
    createdAt: dayjs().subtract(1, 'day').toISOString(),
    progress: 0,
    credits: 20,
    thumbnail: image('task-5'),
  },
  {
    id: 'task-6',
    title: '春季上新创意图组',
    type: '创意生图',
    status: 'running',
    createdAt: dayjs().subtract(20, 'minute').toISOString(),
    progress: 45,
    credits: 60,
    thumbnail: image('task-6'),
  },
]

export const mockProjects: ProjectItem[] = [
  {
    id: 'project-1',
    title: '618 女装上新',
    summary: '覆盖主图、详情页、短视频素材。',
    status: 'running',
    updatedAt: dayjs().subtract(1, 'hour').toISOString(),
    taskCount: 24,
    cover: image('project-1'),
  },
  {
    id: 'project-2',
    title: '海外站秋季 Lookbook',
    summary: '面向欧美市场的品牌风格图组。',
    status: 'success',
    updatedAt: dayjs().subtract(5, 'hour').toISOString(),
    taskCount: 12,
    cover: image('project-2'),
  },
]

export const mockAssets: AssetItem[] = [
  {
    id: 'asset-1',
    name: '羊毛大衣原图',
    category: '服装素材',
    tags: ['外套', '秋冬'],
    favorite: true,
    cover: image('asset-1'),
    updatedAt: dayjs().subtract(1, 'day').toISOString(),
  },
  {
    id: 'asset-2',
    name: '城市街景场景',
    category: '场景',
    tags: ['街拍', '品牌'],
    favorite: false,
    cover: image('asset-2'),
    updatedAt: dayjs().subtract(2, 'day').toISOString(),
  },
  {
    id: 'asset-3',
    name: '模特授权图组',
    category: '模特',
    tags: ['授权', '常用'],
    favorite: true,
    cover: image('asset-3'),
    updatedAt: dayjs().subtract(3, 'day').toISOString(),
  },
]

export const mockTransactions: CreditTransaction[] = [
  {
    id: 'credit-1',
    title: 'AI 生成消费',
    delta: -48,
    type: 'consume',
    createdAt: dayjs().subtract(30, 'minute').toISOString(),
  },
  {
    id: 'credit-2',
    title: '套餐充值到账',
    delta: 1000,
    type: 'recharge',
    createdAt: dayjs().subtract(1, 'day').toISOString(),
  },
  {
    id: 'credit-3',
    title: '任务失败返还',
    delta: 24,
    type: 'refund',
    createdAt: dayjs().subtract(2, 'day').toISOString(),
  },
]

export const mockPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: '新人体验',
    description: '适合首次验证 AI 生成流程的个人与小团队。',
    monthlyPrice: 0,
    yearlyPrice: 0,
    seats: '1 个账号',
    features: ['100 积分', '基础模特库', '标准输出分辨率'],
  },
  {
    id: 'basic',
    name: '基础会员',
    description: '面向稳定上新的电商团队。',
    monthlyPrice: 99,
    yearlyPrice: 990,
    seats: '3 个账号',
    features: ['500 积分', '批量生成', '项目管理', '优先队列'],
  },
  {
    id: 'advanced',
    name: '高级会员',
    description: '适合品牌内容团队与直播素材团队。',
    monthlyPrice: 299,
    yearlyPrice: 2990,
    seats: '10 个账号',
    features: ['1500 积分', '视频生成', '专属场景', '数据导出'],
  },
  {
    id: 'pro',
    name: '专业会员',
    description: '适合多品牌、多店铺的集中管理。',
    monthlyPrice: 599,
    yearlyPrice: 5990,
    seats: '20 个账号',
    features: ['4000 积分', '高级审阅流', '团队协作', '客服优先'],
  },
  {
    id: 'enterprise',
    name: '企业版',
    description: '适合大型服饰品牌的定制化与私有化部署需求。',
    monthlyPrice: 0,
    yearlyPrice: 0,
    seats: '定制',
    highlight: true,
    features: ['API 对接', '私有化部署', '品牌模型训练', '专属成功团队'],
  },
]

export const mockCreativeTemplates = [
  { id: 'tpl-1', name: '多角度展示', category: '环绕展示', cover: image('creative-1'), tag: '热门' },
  { id: 'tpl-2', name: '细节特写', category: '细节展示', cover: image('creative-2') },
  { id: 'tpl-3', name: '搭配组合', category: '搭配组合', cover: image('creative-3'), tag: 'NEW' },
  { id: 'tpl-4', name: '品牌大片', category: '品牌调性', cover: image('creative-4') },
  { id: 'tpl-5', name: '社媒海报', category: '社媒传播', cover: image('creative-5') },
  { id: 'tpl-6', name: '直播封面', category: '直播素材', cover: image('creative-6') },
]

export const mockDeliverySteps = [
  { step: '01', title: '提交需求', desc: '填写需求说明并上传参考素材' },
  { step: '02', title: '团队评估', desc: '专业团队评估方案与交付周期' },
  { step: '03', title: '确认方案', desc: '确认风格、数量与报价后启动制作' },
  { step: '04', title: '制作交付', desc: '48 小时内交付高清商用成片' },
]

export const mockDeliveryCases = [
  { id: 'dc-1', title: '品牌 Lookbook', before: image('delivery-before-1'), after: image('delivery-after-1') },
  { id: 'dc-2', title: '电商主图组', before: image('delivery-before-2'), after: image('delivery-after-2') },
  { id: 'dc-3', title: '直播视觉包', before: image('delivery-before-3'), after: image('delivery-after-3') },
]

export const mockEnterprisePartners = ['千牛', '1688', '抖店', '京东', 'Shopify', 'Temu']

export const mockAssetFolders = ['全部素材', 'Logo', '参考图', '模特', '场景', '品牌包']

export const mockCurrentPlan = {
  name: '高级会员',
  expiresAt: dayjs().add(18, 'day').toISOString(),
  credits: 1280,
  concurrency: 4,
  billingCycle: 'monthly' as const,
}
