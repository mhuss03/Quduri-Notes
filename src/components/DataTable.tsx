import type { ScholarTable } from '../data/chapters'
import styles from './DataTable.module.css'

interface Props {
  table: ScholarTable
  title?: string
}

export function DataTable({ table, title }: Props) {
  return (
    <div className={styles.wrap}>
      {title && <p className={styles.label}>{title}</p>}
      <div className={styles.scroll}>
        <table className={styles.table}>
          <thead>
            <tr>
              {table.headers.map(h => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr key={i}>
                {row.cols.map((col, j) => (
                  <td key={j} data-header={table.headers[j]}>
                    <span
                      className={
                        col.startsWith('✓')
                          ? styles.ok
                          : col.startsWith('✗')
                          ? styles.bad
                          : col.startsWith('~')
                          ? styles.partial
                          : col === 'ḥarām'
                          ? styles.haram
                          : col === 'ḥalāl'
                          ? styles.halal
                          : undefined
                      }
                    >
                      {col}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
