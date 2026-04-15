import { atom } from 'jotai'
import { positionSchema } from '../lib/api'

export const positionXAtom = atom('')
export const positionYAtom = atom('')
export const nameAtom = atom('')

export const positionResultAtom = atom((get) => {
  const x = get(positionXAtom)
  const y = get(positionYAtom)

  if (x === '' || y === '') return undefined

  return positionSchema.safeParse({ x, y })
})

export const parsedPositionAtom = atom((get) => get(positionResultAtom)?.data)

export const positionXErrorAtom = atom((get) => {
  const result = get(positionResultAtom)
  if (!result || result.success) return undefined
  return 'Input not valid'
})

export const positionYErrorAtom = atom((get) => {
  const result = get(positionResultAtom)
  if (!result || result.success) return undefined
  return 'Input not valid'
})
