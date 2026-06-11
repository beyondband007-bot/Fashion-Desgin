import {
  mockAssets,
  mockAssetFolders,
  mockBrands,
  mockCoreFeatures,
  mockCreativeTemplates,
  mockCurrentPlan,
  mockDeliveryCases,
  mockDeliverySteps,
  mockEnterprisePartners,
  mockHomeStats,
  mockModels,
  mockPlans,
  mockProjects,
  mockScenes,
  mockSuccessCases,
  mockTasks,
  mockTransactions,
} from '@/mock/data'
import {
  mockCreditInfo,
  mockRecentResults,
  mockWorkbenchModels,
  mockWorkbenchScenes,
} from '@/mock/generate'

const delay = async <T>(data: T, timeout = 240): Promise<T> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(data), timeout)
  })

export const mockService = {
  getHomeConfig: () =>
    delay({
      heroBadge: 'AI 驱动的服装电商内容生产平台',
      heroTitle: '3 步生成专业商拍大片',
      heroSubtitle: '极低成本 · 极高效率 · 极致效果',
      heroHighlights: [
        'AI 模特试衣，真实自然',
        '批量生成，效率翻倍',
        '高清画质，商用无忧',
        '多场景适配，一键出片',
      ],
      stats: mockHomeStats,
      features: mockCoreFeatures,
      brands: mockBrands,
      cases: mockSuccessCases,
    }),
  getModels: () => delay(mockModels),
  getScenes: () => delay(mockScenes),
  getTasks: () => delay(mockTasks),
  getProjects: () => delay(mockProjects),
  getAssets: () => delay(mockAssets),
  getTransactions: () => delay(mockTransactions),
  getPlans: () => delay(mockPlans),
  getCreativeTemplates: () => delay(mockCreativeTemplates),
  getDeliveryMeta: () =>
    delay({ steps: mockDeliverySteps, cases: mockDeliveryCases }),
  getEnterpriseMeta: () => delay({ partners: mockEnterprisePartners }),
  getAssetFolders: () => delay(mockAssetFolders),
  getCurrentPlan: () => delay(mockCurrentPlan),
  getWorkbenchModels: () => delay(mockWorkbenchModels),
  getWorkbenchScenes: () => delay(mockWorkbenchScenes),
  getRecentResults: () => delay(mockRecentResults),
  getCreditInfo: () => delay(mockCreditInfo),
}
