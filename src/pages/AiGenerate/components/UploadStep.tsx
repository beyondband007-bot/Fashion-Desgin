import { IconClose, IconFolder } from '@arco-design/web-react/icon'
import { useDropzone } from 'react-dropzone'

import type { GenerateTaskStatus, UploadedFile } from '@/types/generate'
import { formatFileSize } from '@/utils/format'

import styles from '../index.module.scss'

type UploadStepProps = {
  title?: string
  uploadLabel?: string
  files: UploadedFile[]
  status: GenerateTaskStatus
  maxFiles?: number
  onUpload: (files: File[]) => void
  onRemove: (id: string) => void
}

export function UploadStep({
  title = '衣服平铺图',
  uploadLabel = '衣服图',
  files,
  status,
  maxFiles = 8,
  onUpload,
  onRemove,
}: UploadStepProps) {
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
    <section className={styles.configSection}>
      <div className={styles.configSectionTitle}>{title}</div>

      {files.length === 0 ? (
        <div
          {...getRootProps()}
          className={`${styles.uploadZone}${isDragActive ? ` ${styles.uploadZoneActive}` : ''}`}
          onClick={open}
        >
          <input {...getInputProps()} />
          <div className={styles.uploadIcon}>
            <IconFolder />
          </div>
          <p className={styles.uploadTitle}>{uploadLabel}</p>
          <p className={styles.uploadText}>点击或将图片拖拽至区域</p>
        </div>
      ) : (
        <div className={styles.uploadDone}>
          <div className={styles.uploadMeta}>
            <span>
              已上传 {files.filter((f) => f.progress >= 100).length} / {maxFiles}
            </span>
            <button type="button" className={styles.configSectionLink} onClick={open}>
              继续添加
            </button>
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
