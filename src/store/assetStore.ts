import { create } from 'zustand'

import type { AssetItem } from '@/types/business'

type AssetState = {
  assets: AssetItem[]
  setAssets: (assets: AssetItem[]) => void
}

export const useAssetStore = create<AssetState>((set) => ({
  assets: [],
  setAssets: (assets) => set({ assets }),
}))
