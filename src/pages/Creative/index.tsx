import { Button, Input, Slider } from '@arco-design/web-react'
import { IconFolder, IconUpload } from '@arco-design/web-react/icon'
import { useQuery } from '@tanstack/react-query'
import { useMemo, useState } from 'react'

import { mockService } from '@/services/mockService'

import styles from './index.module.scss'

const categories = ['全部模板', '环绕展示', '细节展示', '搭配组合', '品牌调性', '社媒传播']

export function CreativePage() {
  const { data: templates = [] } = useQuery({
    queryKey: ['creative-templates'],
    queryFn: mockService.getCreativeTemplates,
  })
  const [category, setCategory] = useState('全部模板')
  const [selectedId, setSelectedId] = useState<string>()
  const [styleMode, setStyleMode] = useState('品牌调性')
  const [angleMode, setAngleMode] = useState('多角度')
  const [count, setCount] = useState(4)

  const filtered = useMemo(() => {
    if (category === '全部模板') return templates
    return templates.filter((item) => item.category === category)
  }, [category, templates])

  const selected = templates.find((item) => item.id === selectedId)

  return (
    <div className={styles.workbench}>
      <aside className={styles.templateSidebar}>
        <div className={styles.sidebarTitle}>创意模板库</div>
        <div className={styles.categoryTabs}>
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={`${styles.categoryTab}${category === item ? ` ${styles.categoryTabActive}` : ''}`}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className={styles.templateGrid}>
          {filtered.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`${styles.templateCard}${selectedId === item.id ? ` ${styles.templateCardActive}` : ''}`}
              onClick={() => setSelectedId(item.id)}
            >
              <img src={item.cover} alt={item.name} />
              <span>{item.name}</span>
              {item.tag ? <em className={styles.templateTag}>{item.tag}</em> : null}
            </button>
          ))}
        </div>
      </aside>

      <div className={styles.configPanel}>
        <div className={styles.configBody}>
          <section className={styles.configBlock}>
            <div className={styles.configLabel}>上传参考图</div>
            <div className={styles.uploadZone}>
              <IconUpload />
              <span>点击或将图片拖拽至区域</span>
            </div>
          </section>

          <section className={styles.configBlock}>
            <div className={styles.configLabel}>风格定制</div>
            <div className={styles.optionGroup}>
              {['品牌调性', '轻奢高级', '城市通勤', '自然假日'].map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`${styles.optionBtn}${styleMode === item ? ` ${styles.optionBtnActive}` : ''}`}
                  onClick={() => setStyleMode(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </section>

          <section className={styles.configBlock}>
            <div className={styles.configLabel}>多角度展示</div>
            <div className={styles.optionGroup}>
              {['正面', '侧面', '细节', '多角度'].map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`${styles.optionBtn}${angleMode === item ? ` ${styles.optionBtnActive}` : ''}`}
                  onClick={() => setAngleMode(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </section>

          <section className={styles.configBlock}>
            <div className={styles.configLabel}>创意强度 · 输出 {count} 张</div>
            <Slider min={1} max={8} value={count} onChange={(v) => setCount(Number(v))} />
          </section>

          <section className={styles.configBlock}>
            <div className={styles.configLabel}>提示词（选填）</div>
            <Input.TextArea
              placeholder="描述希望呈现的品牌风格、表情与场景氛围"
              autoSize={{ minRows: 3, maxRows: 4 }}
            />
          </section>
        </div>
        <div className={styles.configFooter}>
          <Button type="primary" long size="large" icon={<IconFolder />}>
            生成创意图 · {count * 10}
          </Button>
        </div>
      </div>

      <section className={styles.previewArea}>
        <div className={styles.previewHeader}>
          <h2>图组预览</h2>
          <span style={{ color: 'var(--text-tertiary)', fontSize: 13 }}>
            {selected ? `已选模板：${selected.name}` : '请选择创意模板'}
          </span>
        </div>
        {selected ? (
          <div className={styles.resultGrid}>
            {Array.from({ length: count }, (_, index) => (
              <article key={index} className={styles.resultCard}>
                <img
                  src={`https://picsum.photos/seed/${selected.id}-${index}/960/720`}
                  alt={`${selected.name}-${index + 1}`}
                />
                <span>
                  {angleMode} · {styleMode}
                </span>
              </article>
            ))}
          </div>
        ) : (
          <div className={styles.emptyPreview}>选择模板并上传参考图后，在此预览创意图组</div>
        )}
      </section>
    </div>
  )
}
