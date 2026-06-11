import type { GenerateTaskStatus, UploadedFile } from '@/types/generate'

import { ReferenceStep } from './ReferenceStep'
import { UploadStep } from './UploadStep'

type SameStyleConfigProps = {
  files: UploadedFile[]
  status: GenerateTaskStatus
  onUpload: (files: File[]) => void
  onRemove: (id: string) => void
}

export function SameStyleConfig({ files, status, onUpload, onRemove }: SameStyleConfigProps) {
  return (
    <>
      <UploadStep files={files} status={status} onUpload={onUpload} onRemove={onRemove} />
      <ReferenceStep />
    </>
  )
}
