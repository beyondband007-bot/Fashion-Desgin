import { Button } from '@arco-design/web-react'
import { IconClose, IconUpload } from '@arco-design/web-react/icon'
import { useDropzone } from 'react-dropzone'

import type { GenerateTaskStatus, UploadedFile } from '@/types/generate'
import { formatFileSize } from '@/utils/format'

import styles from '../index.module.scss'

type UploadStepProps = {
  files: UploadedFile[]
  status: GenerateTaskStatus
  maxFiles?: number
  onUpload: (files: File[]) => void
  onRemove: (id: string) => void
}

export function UploadStep({ files, status, maxFiles = 8, onUpload, onRemove }: UploadStepProps) {
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    multiple: true,
    accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.webp'] },
    onDrop: onUpload,
    noClick: files.length > 0,
    noKeyboard: true,
  })

  const uploading = status === 'uploading'
  const uploadProgress =
    files.length > 0 ? Math.round(files.reduce((sum, f) => sum + f.progress, 0) / files.length) : 0

  return (
    <section className={styles.stepCard}>
      <div className={styles.stepHead}>
        <h3 className={styles.stepTitle}>1. 上传服装素材</h3>
        <p className={styles.stepDesc}>支持平铺图、挂拍图、人台图，多图可批量生成</p>
      </div>

      {files.length === 0 ? (
        <div
          {...getRootProps()}
          className={`${styles.uploadZone}${isDragActive ? ` ${styles.uploadZoneActive}` : ''}`}
        >
          <input {...getInputProps()} />
          <div className={styles.uploadIcon}>
            <IconUpload />
          </div>
          <p className={styles.uploadText}>拖拽图片到此处，或点击上传</p>
          <p className={styles.uploadHint}>支持格式：JPG / PNG，建议 ≥ 1024px</p>
          <Button type="primary" onClick={open}>
            选择图片
          </Button>
        </div>
      ) : (
        <div className={styles.uploadDone}>
          <div className={styles.uploadMeta}>
            <span>
              已上传 {files.filter((f) => f.progress >= 100).length} / {maxFiles}
            </span>
            <Button type="text" size="small" onClick={open}>
              继续添加
            </Button>
          </div>
          {uploading ? (
            <div className={styles.uploadProgress}>
              <div className={styles.uploadProgressBar}>
                <div
                  className={styles.uploadProgressFill}
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
              <span className={styles.uploadProgressText}>上传中 {uploadProgress}%</span>
            </div>
          ) : null}
          <div className={styles.uploadGrid}>
            {files.map((file) => (
              <div key={file.id} className={styles.uploadThumb}>
                <img src={file.url} alt={file.name} />
                <button
                  type="button"
                  className={styles.uploadRemove}
                  aria-label="删除"
                  onClick={() => onRemove(file.id)}
                >
                  <IconClose />
                </button>
                <div className={styles.uploadThumbMeta}>
                  <span>{formatFileSize(file.size)}</span>
                </div>
              </div>
            ))}
          </div>
          <div {...getRootProps()} style={{ display: 'none' }}>
            <input {...getInputProps()} />
          </div>
        </div>
      )}
    </section>
  )
}
