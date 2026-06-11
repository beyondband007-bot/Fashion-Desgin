import { Button } from '@arco-design/web-react'
import { IconUpload } from '@arco-design/web-react/icon'
import { useQuery } from '@tanstack/react-query'
import { useMemo, useState } from 'react'

import { frontendApi } from '@/api/frontend'
import { formatDateTime } from '@/utils/format'

import styles from './index.module.scss'

const categories = ['全部', 'Logo', '参考图', '模特', '场景']
const folders = ['全部素材', 'Logo', '参考图', '模特', '场景', '品牌库']

export function AssetsPage() {
  const { data: assets = [] } = useQuery({
    queryKey: ['assets'],
    queryFn: frontendApi.getAssets,
  })
  const { data: models = [] } = useQuery({
    queryKey: ['models'],
    queryFn: frontendApi.getWorkbenchModels,
  })
  const { data: scenes = [] } = useQuery({
    queryKey: ['scenes'],
    queryFn: frontendApi.getWorkbenchScenes,
  })

  const [folder, setFolder] = useState('全部素材')
  const [category, setCategory] = useState('全部')

  const filtered = useMemo(() => {
    return assets.filter((asset) => {
      const matchFolder =
        folder === '全部素材' ||
        (folder === 'Logo' && asset.category.includes('Logo')) ||
        asset.category.includes(folder.replace('全部', ''))
      const matchCategory = category === '全部' || asset.category.includes(category)
      return matchFolder && matchCategory
    })
  }, [assets, category, folder])

  return (
    <div className={styles.page}>
      <aside className={styles.folderSidebar}>
        <div className={styles.folderTitle}>文件夹</div>
        {folders.map((item) => (
          <button
            key={item}
            type="button"
            className={`${styles.folderItem}${folder === item ? ` ${styles.folderItemActive}` : ''}`}
            onClick={() => setFolder(item)}
          >
            {item}
          </button>
        ))}
      </aside>

      <div className={styles.main}>
        <div className={styles.header}>
          <h1>素材管理</h1>
          <Button type="primary">新建文件夹</Button>
        </div>

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

        <div className={styles.uploadCard}>
          <IconUpload />
          <span>上传 Logo、参考图、品牌素材，支持拖拽与批量入库。</span>
        </div>

        <div className={styles.assetGrid}>
          {filtered.map((asset) => (
            <article key={asset.id} className={styles.assetCard}>
              <img src={asset.cover} alt={asset.name} />
              <div className={styles.assetBody}>
                <h3>{asset.name}</h3>
                <p>
                  {asset.category} · {formatDateTime(asset.updatedAt)}
                </p>
                <div className={styles.tags}>
                  {asset.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                  {asset.favorite ? <span className={styles.tag}>已收藏</span> : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className={styles.favoriteSection}>
          <h2>常用收藏</h2>
          <div className={styles.favoriteGrid}>
            {models.slice(0, 3).map((model) => (
              <article key={model.id} className={styles.favoriteCard}>
                <img src={model.avatar} alt={model.name} />
                <span>我的模特 · {model.name}</span>
              </article>
            ))}
            {scenes.slice(0, 2).map((scene) => (
              <article key={scene.id} className={styles.favoriteCard}>
                <img src={scene.image} alt={scene.name} />
                <span>我的场景 · {scene.name}</span>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
