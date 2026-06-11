const image = (seed: string, w = 640, h = 480) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`

export const deliveryHero = {
  title: '欢迎来到 PhotoStudio® AI',
  description:
    'PhotoStudio AI 是专为时尚行业打造的 AI 视觉内容生产平台，以 AIGC 技术为核心，为服装电商、品牌方与内容团队提供从试衣、商拍、精修到成片交付的一站式服务。我们致力于用 AI 降低拍摄成本、缩短交付周期，让每一张商拍图都具备专业质感与品牌一致性。',
}

export const deliveryAboutPoints = [
  '中国首家专为时尚行业提供人工智能视觉内容与技术服务的创新型科技企业，深耕服装电商与品牌视觉领域。',
  '以 AIGC 技术为核心，构建覆盖试衣、商拍、视频、精修与成片交付的完整产品矩阵。',
  '服务 500+ KA 品牌与数万电商卖家，累计生成数千万张商用级视觉素材。',
  '持续投入模型训练与行业场景优化，推动 AI 商拍从实验工具走向规模化生产基础设施。',
]

export const deliverySolutions = [
  {
    id: 'women',
    title: '女装解决方案',
    description: '连衣裙、套装、针织等女装品类的一站式商拍与成片交付，支持多风格、多场景批量出图。',
    cover: image('delivery-women', 480, 320),
  },
  {
    id: 'children',
    title: '童装解决方案',
    description: '童装上新季高频素材需求，快速生成详情页、主图与直播封面，保障童趣风格与品质统一。',
    cover: image('delivery-children', 480, 320),
  },
  {
    id: 'men',
    title: '男装解决方案',
    description: '商务、休闲、运动等男装线视觉标准化生产，支持 Lookbook、电商主图与广告投放素材。',
    cover: image('delivery-men', 480, 320),
  },
]

export type DeliveryOffice = {
  id: string
  city: string
  address: string
  phone?: string
  email?: string
  x: number
  y: number
  isHQ?: boolean
}

export const deliveryOffices: DeliveryOffice[] = [
  {
    id: 'hz',
    city: '杭州（总部）',
    address: '浙江省杭州市余杭区五常街道文一西路 969 号',
    phone: '400-888-0000',
    email: 'contact@photostudio.ai',
    x: 72,
    y: 38,
    isHQ: true,
  },
  { id: 'sh', city: '上海', address: '上海市浦东新区张江高科技园区', x: 76, y: 40 },
  { id: 'gz', city: '广州', address: '广东省广州市天河区珠江新城', x: 71, y: 48 },
  { id: 'sz', city: '深圳', address: '广东省深圳市南山区科技园', x: 70, y: 49 },
  { id: 'bj', city: '北京', address: '北京市朝阳区望京 SOHO', x: 71, y: 32 },
]
