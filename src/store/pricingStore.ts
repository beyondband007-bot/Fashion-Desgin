import { create } from 'zustand'

import type { PlanBillingCycle, PricingPlan } from '@/types/business'

type PricingState = {
  billingCycle: PlanBillingCycle
  plans: PricingPlan[]
  setBillingCycle: (cycle: PlanBillingCycle) => void
  setPlans: (plans: PricingPlan[]) => void
}

export const usePricingStore = create<PricingState>((set) => ({
  billingCycle: 'monthly',
  plans: [],
  setBillingCycle: (billingCycle) => set({ billingCycle }),
  setPlans: (plans) => set({ plans }),
}))
