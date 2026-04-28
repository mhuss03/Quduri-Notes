import type { Rule } from '../data/chapters'
import styles from './RuleCard.module.css'

interface Props {
  rule: Rule
  index?: number
}

export function RuleCard({ rule, index = 0 }: Props) {
  return (
    <div
      className={`${styles.card} ${styles[rule.accent]}`}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <h3 className={styles.title}>{rule.title}</h3>
      <p className={styles.body}>{rule.body}</p>
    </div>
  )
}
