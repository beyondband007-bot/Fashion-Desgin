import styles from '../index.module.scss'

const samples = [
  {
    id: '1',
    label: '灰色毛衣',
    image:
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: '2',
    label: '蓝色连衣裙',
    image:
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: '3',
    label: '棕色大衣',
    image:
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: '4',
    label: '灰色运动裤',
    image:
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=200&q=80',
  },
]

const features = ['单件商品图', '商品清晰', '商品无遮挡']

export function WorkflowGuide() {
  return (
    <div className={styles.workflowGuide}>
      <div className={styles.workflowSteps}>
        <div className={styles.workflowStep}>
          <div className={styles.workflowStepImg}>
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=240&q=80"
              alt="上传衣服图"
            />
          </div>
          <span>上传衣服图</span>
        </div>
        <div className={styles.workflowArrow}>→</div>
        <div className={styles.workflowStep}>
          <div className={styles.workflowStepImg}>
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=240&q=80"
              alt="选择参考图"
            />
          </div>
          <span>选择参考图</span>
        </div>
        <div className={styles.workflowArrow}>→</div>
        <div className={styles.workflowStep}>
          <div className={styles.workflowStepImg}>
            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=240&q=80"
              alt="生成效果图"
            />
            <span className={styles.workflowSparkle}>✦</span>
          </div>
          <span>生成效果图</span>
        </div>
      </div>

      <div className={styles.workflowSamples}>
        <p className={styles.workflowSamplesTitle}>初次使用？试试这些</p>
        <div className={styles.workflowSampleRow}>
          {samples.map((item) => (
            <button key={item.id} type="button" className={styles.workflowSampleItem}>
              <img src={item.image} alt={item.label} />
            </button>
          ))}
        </div>
      </div>

      <div className={styles.workflowFeatures}>
        {features.map((text) => (
          <span key={text} className={styles.workflowFeature}>
            ✓ {text}
          </span>
        ))}
      </div>
    </div>
  )
}
