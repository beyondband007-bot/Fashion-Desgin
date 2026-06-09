import { create } from 'zustand'

type CreditState = {
  balance: number
  frozen: number
  expiringSoon: number
  setBalance: (balance: number) => void
}

export const useCreditStore = create<CreditState>((set) => ({
  balance: 12800,
  frozen: 96,
  expiringSoon: 120,
  setBalance: (balance) => set({ balance }),
}))
