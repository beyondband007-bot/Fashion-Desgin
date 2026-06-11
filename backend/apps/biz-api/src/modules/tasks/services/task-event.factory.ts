import type {
  TaskRealtimeEventDto,
  TaskStatus,
  TaskSummaryDto,
  TransitionTaskRequestDto,
} from '../../../../../../packages/shared-types/src'
import { createId } from '../../../../../../packages/shared-kernel/src/utils/id'

export function buildTaskRealtimeEvent(input: {
  occurredAt: string
  task: TaskSummaryDto
  eventType: TaskRealtimeEventDto['event_type']
  fromStatus?: TaskStatus | null
  toStatus?: TaskStatus | null
}): TaskRealtimeEventDto {
  return {
    event_id: createId('evt'),
    event_type: input.eventType,
    occurred_at: input.occurredAt,
    from_status: input.fromStatus ?? null,
    to_status: input.toStatus ?? input.task.status,
    task: input.task,
  }
}

export function mapTaskTransitionEventType(
  status: TransitionTaskRequestDto['status'],
): TaskRealtimeEventDto['event_type'] {
  if (status === 'processing') {
    return 'task.updated'
  }

  if (status === 'completed') {
    return 'task.completed'
  }

  return 'task.failed'
}
