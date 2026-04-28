import { useFlashcard } from '../hooks/useFlashcard'
import type { FlashCard } from '../data/chapters'
import styles from './FlashcardDeck.module.css'

interface Props {
  cards: FlashCard[]
}

export function FlashcardDeck({ cards }: Props) {
  const { current, index, isRevealed, total, reveal, next, prev, reset } =
    useFlashcard(cards)

  return (
    <div className={styles.deck}>
      <div
        className={`${styles.card} ${isRevealed ? styles.revealed : ''}`}
        onClick={reveal}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && reveal()}
        aria-label={isRevealed ? 'Answer revealed' : 'Click to reveal answer'}
      >
        <p className={styles.question}>{current.q}</p>

        <div className={styles.answerWrap} aria-hidden={!isRevealed}>
          <div className={styles.divider} />
          <p className={styles.answer}>{current.a}</p>
        </div>

        {!isRevealed && (
          <p className={styles.hint}>
            <span>tap to reveal</span>
          </p>
        )}
      </div>

      <div className={styles.nav}>
        <button className={styles.navBtn} onClick={prev} aria-label="Previous card">
          ← Prev
        </button>

        <div className={styles.counter}>
          <span className={styles.current}>{index + 1}</span>
          <span className={styles.sep}>/</span>
          <span className={styles.total}>{total}</span>
        </div>

        <button className={styles.navBtn} onClick={next} aria-label="Next card">
          Next →
        </button>
      </div>

      <button className={styles.resetBtn} onClick={reset} aria-label="Reset all cards">
        Reset deck
      </button>
    </div>
  )
}
