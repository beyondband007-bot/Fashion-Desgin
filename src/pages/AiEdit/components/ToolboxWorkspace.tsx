import { Button } from '@arco-design/web-react'
import { IconFolder, IconUpload } from '@arco-design/web-react/icon'

import type { ToolboxToolKey } from './ToolboxSidebar'

import styles from '../index.module.scss'

const toolMeta: Record<
  ToolboxToolKey,
  {
    title: string
    productCaption: string
    modelCaption: string
    productSeed: string
    modelSeed: string
    productBeforeFilter?: string
    modelBeforeFilter?: string
  }
> = {
  relight: {
    title: '智能补光',
    productCaption: '自动优化商品光影与曝光，让展示图更通透。',
    modelCaption: '智能补光模特与服装区域，提升人物层次感。',
    productSeed: 'fashion-product-light',
    modelSeed: 'fashion-model-light',
    productBeforeFilter: 'brightness(0.78) contrast(0.9) saturate(0.82)',
    modelBeforeFilter: 'brightness(0.8) contrast(0.92) saturate(0.85)',
  },
  beautify: {
    title: '智能美化',
    productCaption: '一键优化商品质感与细节，让主图更精致。',
    modelCaption: '智能美化人像与服装呈现，提升整体观感。',
    productSeed: 'fashion-product-beautify',
    modelSeed: 'fashion-model-beautify',
    productBeforeFilter: 'brightness(0.92) contrast(0.88) saturate(0.9)',
    modelBeforeFilter: 'brightness(0.9) contrast(0.9) saturate(0.88)',
  },
  erase: {
    title: '魔法擦除',
    productCaption: '一键去除商品图杂物与干扰背景。',
    modelCaption: '快速消除背景与局部瑕疵，保留主体。',
    productSeed: 'fashion-product-erase',
    modelSeed: 'fashion-model-erase',
    productBeforeFilter: 'brightness(0.95) contrast(0.95)',
    modelBeforeFilter: 'brightness(0.95) contrast(0.95)',
  },
  upscale: {
    title: '画质升级',
    productCaption: 'AI 增强商品图清晰度与质感，适合详情页放大。',
    modelCaption: 'AI 增强人像细节与边缘锐度，减少模糊感。',
    productSeed: 'fashion-product-hd',
    modelSeed: 'fashion-model-hd',
    productBeforeFilter: 'blur(1.2px) contrast(0.88)',
    modelBeforeFilter: 'blur(1.2px) contrast(0.88)',
  },
  deform: {
    title: '随心变形',
    productCaption: '灵活调整商品展示形态与角度，优化版式表现。',
    modelCaption: '支持模特姿态与局部形态调整，提升可用素材范围。',
    productSeed: 'fashion-product-deform',
    modelSeed: 'fashion-model-deform',
  },
  cutout: {
    title: '智能抠图',
    productCaption: 'AI 智能识别，精准抠出图中商品主体。',
    modelCaption: 'AI 智能识别，精准抠出图中模特主体。',
    productSeed: 'fashion-product-cutout',
    modelSeed: 'fashion-model-cutout',
    productBeforeFilter: 'brightness(0.94) saturate(0.95)',
    modelBeforeFilter: 'brightness(0.94) saturate(0.95)',
  },
}

type ExampleBlockProps = {
  seed: string
  typeLabel: string
  caption: string
  beforeFilter?: string
}

function ExampleBlock({ seed, typeLabel, caption, beforeFilter }: ExampleBlockProps) {
  const src = `https://picsum.photos/seed/${seed}/360/480`

  return (
    <article className={styles.exampleCard}>
      <div className={styles.exampleType}>{typeLabel}</div>
      <div className={styles.exampleCompare}>
        <div className={styles.exampleSide}>
          <span className={styles.exampleLabel}>处理前</span>
          <img
            src={src}
            alt={`${typeLabel}处理前`}
            className={`${styles.exampleImage} ${styles.exampleImageBefore}`}
            style={beforeFilter ? { filter: beforeFilter } : undefined}
          />
        </div>
        <span className={styles.exampleArrow} aria-hidden="true">
          →
        </span>
        <div className={styles.exampleSide}>
          <span className={styles.exampleLabel}>处理后</span>
          <img src={src} alt={`${typeLabel}处理后`} className={styles.exampleImage} />
        </div>
      </div>
      <p className={styles.exampleCaption}>{caption}</p>
    </article>
  )
}

type ToolboxWorkspaceProps = {
  tool: ToolboxToolKey
}

export function ToolboxWorkspace({ tool }: ToolboxWorkspaceProps) {
  const meta = toolMeta[tool]

  return (
    <section className={styles.workspace}>
      <div className={styles.panel}>
        <h1 className={styles.panelTitle}>{meta.title}</h1>

        <div className={styles.panelActions}>
          <Button className={styles.selectBtn ?? ''} icon={<IconFolder />}>
            从我的项目中选择
          </Button>
          <Button type="primary" className={styles.uploadBtn ?? ''} icon={<IconUpload />}>
            本地上传
          </Button>
        </div>

        <p className={styles.panelHint}>请点击上方按钮选择图片，或将图片拖拽到当前区域进行上传。</p>
        <p className={styles.panelSpec}>支持 500×500 到 4096×4096 尺寸的图片。</p>

        <div className={styles.examples}>
          <ExampleBlock
            seed={meta.productSeed}
            typeLabel="商品图示例"
            caption={meta.productCaption}
            {...(meta.productBeforeFilter ? { beforeFilter: meta.productBeforeFilter } : {})}
          />
          <ExampleBlock
            seed={meta.modelSeed}
            typeLabel="模特图示例"
            caption={meta.modelCaption}
            {...(meta.modelBeforeFilter ? { beforeFilter: meta.modelBeforeFilter } : {})}
          />
        </div>
      </div>
    </section>
  )
}
