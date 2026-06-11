import type { TaskDetailDto, TaskSummaryDto } from '../../../../../../packages/shared-types/src'

export function toTaskSummary(task: TaskDetailDto): TaskSummaryDto {
  const {
    user_id,
    owner_type,
    owner_id,
    parent_task_id,
    quote_id,
    model_id,
    scene_id,
    template_id,
    config_version,
    config,
    input_asset_ids,
    output_asset_ids,
    ...summary
  } = task

  void user_id
  void owner_type
  void owner_id
  void parent_task_id
  void quote_id
  void model_id
  void scene_id
  void template_id
  void config_version
  void config
  void input_asset_ids
  void output_asset_ids

  return summary
}

