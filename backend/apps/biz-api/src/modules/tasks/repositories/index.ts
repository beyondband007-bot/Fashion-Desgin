import { MemoryTaskRepository } from './memory-task.repository'
import { PrismaTaskRepository } from './prisma-task.repository'

const taskRepositoryDriver = process.env.TASK_REPOSITORY_DRIVER ?? 'memory'

export const taskRepository =
  taskRepositoryDriver === 'prisma' ? new PrismaTaskRepository() : new MemoryTaskRepository()

export { taskRepositoryDriver }

