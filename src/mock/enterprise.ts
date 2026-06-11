export type PlanTier = 'standard' | 'pro' | 'enterprise'

export type CompareRow = {
  item: string
  standard: string
  pro: string
  enterprise: string
}

export const enterpriseCapabilities = [
  {
    id: 'api',
    title: 'API 对接',
    desc: '标准化 REST 接口，支持任务创建、素材回传、状态回调与 Webhook 通知，快速接入现有 ERP / PIM 系统。',
    icon: '⚡',
  },
  {
    id: 'private',
    title: '私有化部署',
    desc: '支持企业内网与混合云部署，数据不出域，满足金融级安全与合规审计要求。',
    icon: '🔒',
  },
  {
    id: 'model',
    title: '定制模特训练',
    desc: '基于品牌调性训练专属 AI 模特，统一视觉形象，支持多 SKU 批量出图。',
    icon: '🎯',
  },
  {
    id: 'team',
    title: '专属成功团队',
    desc: '提供方案设计、上线陪跑、性能调优与持续运营支持，7×12 小时响应。',
    icon: '👥',
  },
]

export const planCompareRows: CompareRow[] = [
  { item: 'API 接入', standard: '不支持', pro: '部分开放', enterprise: '完整支持' },
  { item: '私有化部署', standard: '不支持', pro: '不支持', enterprise: '支持' },
  { item: '品牌模型训练', standard: '不支持', pro: '不支持', enterprise: '支持' },
  { item: '图组并发', standard: '1 组', pro: '4 组', enterprise: '定制' },
  { item: '专属成功团队', standard: '通用支持', pro: '优先支持', enterprise: '专属顾问' },
  { item: 'SLA 保障', standard: '—', pro: '99.5%', enterprise: '99.9%' },
  { item: '数据隔离', standard: '共享', pro: '逻辑隔离', enterprise: '物理隔离' },
]

export type ApiEndpoint = {
  id: string
  name: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  path: string
  desc: string
  params: { name: string; type: string; required: boolean; desc: string }[]
}

export const apiEndpoints: ApiEndpoint[] = [
  {
    id: 'create-task',
    name: '创建生成任务',
    method: 'POST',
    path: '/v2/tasks/create',
    desc: '提交 AI 商拍生成任务，支持试衣、换色、背景替换等多种模式。',
    params: [
      { name: 'mode', type: 'string', required: true, desc: '生成模式：tryon | recolor | background' },
      { name: 'garment_url', type: 'string', required: true, desc: '服装图片 URL' },
      { name: 'model_id', type: 'string', required: false, desc: '模特 ID，不传则使用默认' },
      { name: 'scene_id', type: 'string', required: false, desc: '场景 ID' },
      { name: 'callback_url', type: 'string', required: false, desc: '任务完成回调地址' },
    ],
  },
  {
    id: 'task-status',
    name: '查询任务状态',
    method: 'GET',
    path: '/v2/tasks/{task_id}',
    desc: '根据 task_id 查询任务进度与结果。',
    params: [
      { name: 'task_id', type: 'string', required: true, desc: '任务唯一标识' },
    ],
  },
  {
    id: 'list-models',
    name: '获取模特列表',
    method: 'GET',
    path: '/v2/models',
    desc: '获取企业可用模特库，含定制模特与公共模特。',
    params: [
      { name: 'page', type: 'integer', required: false, desc: '页码，默认 1' },
      { name: 'page_size', type: 'integer', required: false, desc: '每页数量，默认 20' },
    ],
  },
  {
    id: 'upload-asset',
    name: '上传素材',
    method: 'POST',
    path: '/v2/assets/upload',
    desc: '上传服装、参考图等素材至企业素材库。',
    params: [
      { name: 'file', type: 'file', required: true, desc: '素材文件，支持 JPG/PNG/WEBP' },
      { name: 'folder', type: 'string', required: false, desc: '目标文件夹名称' },
    ],
  },
]

export type SdkLanguage = 'python' | 'java' | 'nodejs'

export const sdkExamples: Record<SdkLanguage, string> = {
  python: `import photostudio

client = photostudio.Client(api_key="YOUR_API_KEY")

task = client.tasks.create(
    mode="tryon",
    garment_url="https://example.com/garment.jpg",
    model_id="model_001",
    callback_url="https://your-server.com/callback",
)

print(task.id, task.status)`,
  java: `import ai.photostudio.PhotoStudioClient;
import ai.photostudio.model.CreateTaskRequest;

PhotoStudioClient client = PhotoStudioClient.builder()
    .apiKey("YOUR_API_KEY")
    .build();

CreateTaskRequest request = CreateTaskRequest.builder()
    .mode("tryon")
    .garmentUrl("https://example.com/garment.jpg")
    .modelId("model_001")
    .build();

var task = client.tasks().create(request);
System.out.println(task.getId());`,
  nodejs: `import { PhotoStudio } from '@photostudio/sdk';

const client = new PhotoStudio({ apiKey: 'YOUR_API_KEY' });

const task = await client.tasks.create({
  mode: 'tryon',
  garmentUrl: 'https://example.com/garment.jpg',
  modelId: 'model_001',
  callbackUrl: 'https://your-server.com/callback',
});

console.log(task.id, task.status);`,
}

export const deployRequirements = {
  hardware: [
    'GPU 服务器：NVIDIA A100 / A10 或同等级算力，≥ 2 卡',
    'CPU：≥ 32 核，内存 ≥ 128 GB',
    '存储：SSD ≥ 2 TB，支持对象存储扩展',
    '网络：内网带宽 ≥ 10 Gbps',
  ],
  software: [
    '操作系统：CentOS 7.9+ / Ubuntu 20.04 LTS',
    '容器：Docker 24+ / Kubernetes 1.26+',
    '数据库：PostgreSQL 14+ / Redis 7+',
    '对象存储：MinIO / 企业私有 OSS',
  ],
  security: [
    '支持 LDAP / SSO 单点登录集成',
    '全链路 HTTPS 加密与 API 签名鉴权',
    '操作审计日志与数据访问权限分级',
    '符合等保二级及以上合规要求',
  ],
}

export const customServiceSteps = [
  { step: '01', title: '需求调研', desc: '梳理品牌视觉规范、SKU 结构与出图场景' },
  { step: '02', title: '样本采集', desc: '收集品牌模特参考图与历史商拍素材' },
  { step: '03', title: '模型训练', desc: '基于 LoRA / 全量微调训练专属 AI 模特' },
  { step: '04', title: '验收上线', desc: 'A/B 对比验收后部署至企业生产环境' },
]

export const enterprisePartners = [
  { id: 'qianniu', name: '千牛', desc: '淘宝/天猫商家工作台' },
  { id: '1688', name: '1688', desc: '阿里巴巴批发平台' },
  { id: 'douyin', name: '抖店', desc: '抖音电商商家后台' },
  { id: 'jd', name: '京东', desc: '京东 POP 商家平台' },
  { id: 'shopify', name: 'Shopify', desc: '独立站跨境电商' },
  { id: 'temu', name: 'Temu', desc: '跨境出海平台' },
]

export type EnterpriseSection =
  | 'intro'
  | 'api'
  | 'deploy'
  | 'custom'
  | 'contact'
  | 'partners'

export const enterpriseNavItems: { key: EnterpriseSection; label: string }[] = [
  { key: 'intro', label: '方案介绍' },
  { key: 'api', label: 'API 文档 2.0' },
  { key: 'deploy', label: '私有化部署 2.0' },
  { key: 'custom', label: '定制服务 2.0' },
  { key: 'contact', label: '联系销售' },
  { key: 'partners', label: '合作平台' },
]
