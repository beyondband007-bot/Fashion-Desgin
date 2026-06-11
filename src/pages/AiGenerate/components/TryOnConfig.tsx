import type {
  GenerateMode,
  GenerateTaskStatus,
  OutputConfig,
  UploadedFile,
  WorkbenchModel,
  WorkbenchScene,
} from '@/types/generate'

import { ModelStep } from './ModelStep'
import { OutputConfigStep } from './OutputConfigStep'
import { ReferenceStep } from './ReferenceStep'
import { SceneStep } from './SceneStep'
import { UploadStep } from './UploadStep'

type TryOnConfigProps = {
  mode: GenerateMode
  files: UploadedFile[]
  status: GenerateTaskStatus
  models: WorkbenchModel[]
  scenes: WorkbenchScene[]
  output: OutputConfig
  selectedModelId: string | undefined
  selectedSceneId: string | undefined
  onUpload: (files: File[]) => void
  onRemove: (id: string) => void
  onSelectModel: (id: string) => void
  onSelectScene: (id: string) => void
  onOutputChange: (config: OutputConfig) => void
  onOpenModelDrawer: () => void
  onOpenSceneDrawer: () => void
}

export function TryOnConfig({
  mode,
  files,
  status,
  models,
  scenes,
  output,
  selectedModelId,
  selectedSceneId,
  onUpload,
  onRemove,
  onSelectModel,
  onSelectScene,
  onOutputChange,
  onOpenModelDrawer,
  onOpenSceneDrawer,
}: TryOnConfigProps) {
  const uploadTitle = mode === 'real' ? '上装 / 下装图' : '衣服平铺图'
  const uploadLabel = mode === 'real' ? '搭配图' : '衣服图'

  return (
    <>
      <UploadStep
        title={uploadTitle}
        uploadLabel={uploadLabel}
        files={files}
        status={status}
        onUpload={onUpload}
        onRemove={onRemove}
      />
      <ReferenceStep />
      <ModelStep
        models={models}
        selectedId={selectedModelId}
        onSelect={onSelectModel}
        onOpenDrawer={onOpenModelDrawer}
      />
      <SceneStep
        scenes={scenes}
        selectedId={selectedSceneId}
        onSelect={onSelectScene}
        onOpenDrawer={onOpenSceneDrawer}
      />
      <OutputConfigStep config={output} onChange={onOutputChange} />
    </>
  )
}
