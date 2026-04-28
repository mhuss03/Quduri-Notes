import { useState, useCallback } from 'react'
import type { FlashCard } from '../data/chapters'

export function useFlashcard(cards: FlashCard[]) {
  const [index, setIndex] = useState(0)
  const [revealed, setRevealed] = useState<Set<number>>(new Set())

  const current = cards[index]
  const isRevealed = revealed.has(index)
  const total = cards.length

  const reveal = useCallback(() => {
    setRevealed(prev => new Set(prev).add(index))
  }, [index])

  const next = useCallback(() => {
    setIndex(i => (i + 1) % cards.length)
  }, [cards.length])

  const prev = useCallback(() => {
    setIndex(i => (i - 1 + cards.length) % cards.length)
  }, [cards.length])

  const reset = useCallback(() => {
    setIndex(0)
    setRevealed(new Set())
  }, [])

  return { current, index, isRevealed, total, reveal, next, prev, reset }
}
