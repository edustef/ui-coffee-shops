import { atom } from 'jotai'
import { z } from 'zod'
import { positionSchema } from '../lib/api'

export const positionXAtom = atom('')
export const positionYAtom = atom('')
export const nameAtom = atom('')

const numberSchema = z.coerce.number()

export const positionXErrorAtom = atom((get) => {
  const x = get(positionXAtom)
  if (x === '') return undefined
  const result = numberSchema.safeParse(x)
  return result.success ? undefined : 'Must be a number'
})

export const positionYErrorAtom = atom((get) => {
  const y = get(positionYAtom)
  if (y === '') return undefined
  const result = numberSchema.safeParse(y)
  return result.success ? undefined : 'Must be a number'
})

export const positionResultAtom = atom((get) => {
  const x = get(positionXAtom)
  const y = get(positionYAtom)

  if (x === '' || y === '') return undefined

  return positionSchema.safeParse({ x, y })
})

export const parsedPositionAtom = atom((get) => get(positionResultAtom)?.data)
