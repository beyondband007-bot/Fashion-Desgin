import { Button, Table } from '@arco-design/web-react'
import { useQuery } from '@tanstack/react-query'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { frontendApi } from '@/api/frontend'
import { useCreditStore } from '@/store/creditStore'
import { formatCredit, formatCreditType, formatDateTime } from '@/utils/format'

import styles from './index.module.scss'

const timeFilters = ['全部', '今天', '本周', '本月']
const typeFilters = ['全部', '任务扣费', '充值', '失败退款']

export function CreditsPage() {
  const navigate = useNavigate()
  const { balance, frozen, expiringSoon } = useCreditStore()
  const { data: transactions = [] } = useQuery({
    queryKey: ['credit-transactions'],
    queryFn: frontendApi.getTransactions,
  })
  const [timeFilter, setTimeFilter] = useState('全部')
  const [typeFilter, setTypeFilter] = useState('全部')

  const filtered = useMemo(
    () =>
      transactions.filter((item) => {
        const matchType = typeFilter === '全部' || formatCreditType(item.type) === typeFilter
        return matchType
      }),
    [transactions, typeFilter],
  )

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1>积分查询</h1>
          <p>查看当前余额、积分流水、筛选记录并导出明细。</p>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <Button onClick={() => navigate('/pricing')}>导出流水</Button>
          <Button type="primary" onClick={() => navigate('/pricing')}>
            立即充值
          </Button>
        </div>
      </div>

      <div className={styles.summaryGrid}>
        <article className={`${styles.summaryCard} ${styles.summaryCardPrimary}`}>
          <span>当前可用积分</span>
          <strong>{formatCredit(balance)}</strong>
        </article>
        <article className={styles.summaryCard}>
          <span>冻结积分</span>
          <strong>{formatCredit(frozen)}</strong>
        </article>
        <article className={styles.summaryCard}>
          <span>即将过期</span>
          <strong>{formatCredit(expiringSoon)}</strong>
        </article>
      </div>

      <div className={styles.filters}>
        {timeFilters.map((item) => (
          <button
            key={item}
            type="button"
            className={`${styles.filterChip}${timeFilter === item ? ` ${styles.filterChipActive}` : ''}`}
            onClick={() => setTimeFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className={styles.filters}>
        {typeFilters.map((item) => (
          <button
            key={item}
            type="button"
            className={`${styles.filterChip}${typeFilter === item ? ` ${styles.filterChipActive}` : ''}`}
            onClick={() => setTypeFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className={styles.tableCard}>
        <Table
          border={false}
          pagination={{ pageSize: 8 }}
          rowKey="id"
          columns={[
            {
              title: '时间',
              dataIndex: 'createdAt',
              render: (value: string) => formatDateTime(value),
            },
            { title: '说明', dataIndex: 'title' },
            {
              title: '类型',
              dataIndex: 'type',
              render: (value: 'consume' | 'recharge' | 'refund') => (
                <span
                  className={`${styles.typeTag} ${
                    value === 'consume'
                      ? styles.typeConsume
                      : value === 'recharge'
                        ? styles.typeRecharge
                        : styles.typeRefund
                  }`}
                >
                  {formatCreditType(value)}
                </span>
              ),
            },
            {
              title: '积分变动',
              dataIndex: 'delta',
              render: (value: number) => (
                <span className={value >= 0 ? styles.deltaPositive : styles.deltaNegative}>
                  {value >= 0 ? `+${value}` : value}
                </span>
              ),
            },
            {
              title: '余额',
              render: () => formatCredit(balance),
            },
          ]}
          data={filtered}
        />
      </div>
    </div>
  )
}
