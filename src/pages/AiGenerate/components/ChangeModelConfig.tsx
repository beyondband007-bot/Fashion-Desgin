import { Switch } from '@arco-design/web-react'
import { IconClose, IconInfoCircle, IconRight, IconUpload, IconUser } from '@arco-design/web-react/icon'
import { useState } from 'react'
import { useDropzone } from 'react-dropzone'

import type { GenerateTaskStatus, UploadedFile, WorkbenchScene } from '@/types/generate'

import styles from '../index.module.scss'

type ChangeModelConfigProps = {
  files: UploadedFile[]
  status: GenerateTaskStatus
  scenes: WorkbenchScene[]
  selectedSceneId: string | undefined
  onUpload: (files: File[]) => void
  onRemove: (id: string) => void
  onOpenModelDrawer: () => void
  onOpenSceneDrawer: () => void
  onSelectScene: (id: string) => void
}

export function ChangeModelConfig({
  files,
  status,
  scenes,
  selectedSceneId,
  onUpload,
  onRemove,
  onOpenModelDrawer,
  onOpenSceneDrawer,
  onSelectScene,
}: ChangeModelConfigProps) {
  const [referenceOpen, setReferenceOpen] = useState(true)
  const [backgroundOpen, setBackgroundOpen] = useState(false)
  const [skinOptimize, setSkinOptimize] = useState(false)
  const [lightEnhance, setLightEnhance] = useState(false)
  const [expression, setExpression] = useState<'original' | 'reference'>('original')

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    multiple: false,
    accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.webp'] },
    onDrop: onUpload,
    noClick: files.length > 0,
    noKeyboard: true,
  })

  const uploading = status === 'uploading'
  const selectedScene = scenes.find((s) => s.id === selectedSceneId)

  return (
    <div className={styles.changeModelConfig}>
      <section className={styles.configSection}>
        <div className={styles.configSectionTitle}>模特图</div>

        {files.length === 0 ? (
          <div
            {...getRootProps()}
            className={`${styles.modelUploadZone}${isDragActive ? ` ${styles.uploadZoneActive}` : ''}`}
            onClick={open}
          >
            <input {...getInputProps()} />
            <div className={styles.modelUploadIcon}>
              <IconUser />
            </div>
            <p className={styles.modelUploadText}>
              <strong>模特图</strong>
              <span>点击或将图片拖拽至区域</span>
            </p>
          </div>
        ) : (
          <div className={styles.uploadDone}>
            <div className={styles.modelPreview}>
              <img src={files[0]?.url} alt={files[0]?.name} />
              <button
                type="button"
                className={styles.uploadRemove}
                aria-label="删除"
                onClick={() => files[0] && onRemove(files[0].id)}
              >
                <IconClose />
              </button>
            </div>
            {uploading ? <span className={styles.uploadProgressText}>上传中…</span> : null}
            <div {...getRootProps()} style={{ display: 'none' }}>
              <input {...getInputProps()} />
            </div>
          </div>
        )}
      </section>

      <section className={styles.configSection}>
        <button
          type="button"
          className={styles.configCollapseHead}
          onClick={() => setReferenceOpen((value) => !value)}
        >
          <span>模特参考图</span>
          <span className={styles.configCollapseArrow}>{referenceOpen ? '▴' : '▾'}</span>
        </button>
        {referenceOpen ? (
          <div className={styles.modelRefPanel}>
            <button type="button" className={styles.modelRefSelect} onClick={onOpenModelDrawer}>
              选择模特 <IconRight />
            </button>
            <button type="button" className={styles.modelRefUpload}>
              <IconUpload />
              <span>点击上传</span>
            </button>
          </div>
        ) : null}
      </section>

      <section className={styles.configSection}>
        <button
          type="button"
          className={styles.configCollapseHead}
          onClick={() => setBackgroundOpen((value) => !value)}
        >
          <span>
            背景
            <em className={styles.optionalTag}>非必选</em>
          </span>
          <span className={styles.configCollapseArrow}>{backgroundOpen ? '▴' : '▾'}</span>
        </button>
        {backgroundOpen ? (
          <div className={styles.configSectionBody}>
            <button type="button" className={styles.bgSelectBtn} onClick={onOpenSceneDrawer}>
              {selectedScene ? selectedScene.name : '选择背景'}
              <IconRight />
            </button>
            <div className={styles.bgThumbRow}>
              {scenes.slice(0, 3).map((scene) => (
                <button
                  key={scene.id}
                  type="button"
                  className={`${styles.bgThumb}${selectedSceneId === scene.id ? ` ${styles.bgThumbActive}` : ''}`}
                  onClick={() => onSelectScene(scene.id)}
                >
                  <img src={scene.image} alt={scene.name} />
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </section>

      <section className={styles.configSection}>
        <div className={styles.switchRowHint}>
          <span className={styles.switchLabel}>
            人像皮肤优化
            <IconInfoCircle />
          </span>
          <span className={styles.switchControl}>
            {!skinOptimize ? <span className={styles.switchOffText}>关闭</span> : null}
            <Switch size="small" checked={skinOptimize} onChange={setSkinOptimize} />
          </span>
        </div>
        <div className={styles.switchRowHint}>
          <span className={styles.switchLabel}>
            光影增强
            <IconInfoCircle />
          </span>
          <span className={styles.switchControl}>
            {!lightEnhance ? <span className={styles.switchOffText}>关闭</span> : null}
            <Switch size="small" checked={lightEnhance} onChange={setLightEnhance} />
          </span>
        </div>
      </section>

      <section className={styles.configSection}>
        <div className={styles.configSectionTitle}>表情</div>
        <div className={styles.toggleGroup}>
          <button
            type="button"
            className={`${styles.toggleBtn}${expression === 'original' ? ` ${styles.toggleBtnActive}` : ''}`}
            onClick={() => setExpression('original')}
          >
            按原模特
          </button>
          <button
            type="button"
            className={`${styles.toggleBtn}${expression === 'reference' ? ` ${styles.toggleBtnActive}` : ''}`}
            onClick={() => setExpression('reference')}
          >
            按模特参考图
          </button>
        </div>
      </section>
    </div>
  )
}
