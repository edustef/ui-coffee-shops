import { useState, useEffect, type Dispatch, type SetStateAction } from 'react'

export function useDebounceValue<T>(
  initialValue: T,
  delay: number,
): [T, Dispatch<SetStateAction<T>>] {
  const [rawValue, setRawValue] = useState(initialValue)
  const [debouncedValue, setDebouncedValue] = useState(initialValue)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(rawValue), delay)
    return () => clearTimeout(timer)
  }, [rawValue, delay])

  return [debouncedValue, setRawValue]
}
