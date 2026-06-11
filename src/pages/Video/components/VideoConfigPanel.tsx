import { Button, Input, Radio } from '@arco-design/web-react'
import { IconClose, IconFolder, IconInfoCircle, IconPlayArrow } from '@arco-design/web-react/icon'
import { useDropzone } from 'react-dropzone'
import { useState } from 'react'

import type { VideoMode } from '../types'

import styles from '../index.module.scss'

type VideoConfigPanelProps = {
  mode: VideoMode
}

export function VideoConfigPanel({ mode }: VideoConfigPanelProps) {
  const [modelImage, setModelImage] = useState<string>()
  const [refVideo, setRefVideo] = useState<string>()
  const [orientation, setOrientation] = useState<'video' | 'model'>('video')
  const [prompt, setPrompt] = useState('')
  const [genMode, setGenMode] = useState<'standard' | 'hq'>('standard')

  const modelDrop = useDropzone({
    accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.webp'] },
    multiple: false,
    onDrop: (files) => {
      const file = files[0]
      if (file) setModelImage(URL.createObjectURL(file))
    },
  })

  const videoDrop = useDropzone({
    accept: { 'video/*': ['.mp4', '.mov', '.webm'] },
    multiple: false,
    onDrop: (files) => {
      const file = files[0]
      if (file) setRefVideo(file.name)
    },
  })

  const canGenerate = Boolean(modelImage && (mode === 'image' || refVideo))
  const cost = canGenerate ? 1 : 0

  return (
    <div className={styles.configPanel}>
      <section className={styles.configBlock}>
        <div className={styles.configLabel}>
          <span>模特图</span>
          <IconInfoCircle />
        </div>
        {modelImage ? (
          <div className={styles.previewBox}>
            <img src={modelImage} alt="模特图" />
            <button
              type="button"
              className={styles.previewRemove}
              onClick={() => setModelImage(undefined)}
            >
              <IconClose />
            </button>
          </div>
        ) : (
          <div {...modelDrop.getRootProps()} className={styles.uploadZoneLarge}>
            <input {...modelDrop.getInputProps()} />
            <div className={styles.uploadFolderIcon}>
              <IconFolder />
            </div>
            <p>点击或拖拽照片到此区域</p>
          </div>
        )}
      </section>

      {mode === 'action' ? (
        <section className={styles.configBlock}>
          <div className={styles.configLabel}>
            <span>参考视频</span>
            <IconInfoCircle />
          </div>
          {refVideo ? (
            <div className={styles.videoPreview}>
              <IconPlayArrow />
              <span>{refVideo}</span>
              <button type="button" onClick={() => setRefVideo(undefined)}>
                移除
              </button>
            </div>
          ) : (
            <div {...videoDrop.getRootProps()} className={styles.uploadZoneSmall}>
              <input {...videoDrop.getInputProps()} />
              <span className={styles.uploadLink}>选择视频 &gt;</span>
              <p>点击/拖拽上传</p>
            </div>
          )}
        </section>
      ) : null}

      {mode === 'action' ? (
        <section className={styles.configBlock}>
          <div className={styles.configLabel}>
            <span>人物朝向选择</span>
            <IconInfoCircle />
          </div>
          <Radio.Group
            type="button"
            value={orientation}
            onChange={setOrientation}
            className={styles.segmentGroup ?? ''}
          >
            <Radio value="video">与参考视频一致</Radio>
            <Radio value="model">与模特图一致</Radio>
          </Radio.Group>
        </section>
      ) : null}

      <section className={styles.configBlock}>
        <div className={styles.configLabel}>
          <span>提示词输入</span>
          <em>（选填）</em>
          <IconInfoCircle />
        </div>
        <Input.TextArea
          value={prompt}
          onChange={setPrompt}
          placeholder="描述你希望主体发生的变化，例如：将主体的姿势更改为正面站立，双手叉腰，保持服装不变"
          autoSize={{ minRows: 3, maxRows: 5 }}
          className={styles.promptInput ?? ''}
        />
      </section>

      <section className={styles.configBlock}>
        <div className={styles.configLabel}>
          <span>生成模式</span>
          <IconInfoCircle />
        </div>
        <Radio.Group
          type="button"
          value={genMode}
          onChange={setGenMode}
          className={styles.segmentGroup ?? ''}
        >
          <Radio value="standard">标准模式</Radio>
          <Radio value="hq">高品质模式</Radio>
        </Radio.Group>
      </section>

      <div className={styles.configFooter}>
        <Button
          type="primary"
          long
          size="large"
          disabled={!canGenerate}
          className={styles.generateBtn ?? ''}
        >
          生成 {cost}
        </Button>
      </div>
    </div>
  )
}
