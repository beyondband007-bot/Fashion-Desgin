import { Modal } from '@arco-design/web-react'

type PreviewDialogProps = {
  visible: boolean
  imageUrl: string
  onCancel: () => void
}

export function PreviewDialog({ visible, imageUrl, onCancel }: PreviewDialogProps) {
  return (
    <Modal visible={visible} footer={null} onCancel={onCancel} style={{ width: 860 }}>
      <img alt="preview" className="w-full rounded-2xl object-cover" src={imageUrl} />
    </Modal>
  )
}
