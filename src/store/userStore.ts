import { create } from 'zustand'

type UserState = {
  name: string
  company: string
  avatar: string
  setUser: (payload: Pick<UserState, 'name' | 'company' | 'avatar'>) => void
}

export const useUserStore = create<UserState>((set) => ({
  name: '演示用户',
  company: 'BeyondBand Studio',
  avatar: 'https://i.pravatar.cc/120?img=12',
  setUser: (payload) => set(payload),
}))
