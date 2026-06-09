import { create } from 'zustand'

import type { TaskRecord } from '@/types/business'

type TaskState = {
  recentTasks: TaskRecord[]
  setRecentTasks: (tasks: TaskRecord[]) => void
}

export const useTaskStore = create<TaskState>((set) => ({
  recentTasks: [],
  setRecentTasks: (recentTasks) => set({ recentTasks }),
}))
