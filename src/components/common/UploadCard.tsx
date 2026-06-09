import { Button, Progress, Space, Typography } from '@arco-design/web-react'
import { IconUpload } from '@arco-design/web-react/icon'
import { useDropzone } from 'react-dropzone'

type UploadCardProps = {
  title: string
  description: string
}

export function UploadCard({ title, description }: UploadCardProps) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: true,
    accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.webp'] },
  })

  return (
    <div className="soft-card p-5">
      <div
        {...getRootProps()}
        className={`rounded-2xl border border-dashed px-6 py-10 text-center transition ${
          isDragActive
            ? 'border-[var(--primary)] bg-[var(--primary-soft)]'
            : 'border-[var(--border-color)]'
        }`}
      >
        <input {...getInputProps()} />
        <Space direction="vertical" size="medium">
          <Button icon={<IconUpload />} shape="circle" />
          <Typography.Title heading={6} style={{ marginBottom: 0 }}>
            {title}
          </Typography.Title>
          <Typography.Paragraph className="text-muted" style={{ marginBottom: 0 }}>
            {description}
          </Typography.Paragraph>
        </Space>
      </div>
      <div className="mt-4 space-y-3">
        <div className="rounded-xl bg-[var(--bg-tertiary)] p-3">
          <div className="type-body-sm mb-2 flex items-center justify-between">
            <span>批量上传队列</span>
            <span className="text-subtle">3 / 8</span>
          </div>
          <Progress percent={42} />
        </div>
      </div>
    </div>
  )
}
