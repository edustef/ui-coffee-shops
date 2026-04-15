import { describe, it, expect } from 'vitest'
import { getFilteredShops } from './getFilteredShops'
import type { Shop } from '../lib/api'

function makeShop(overrides: Partial<Shop> & { position: Shop['position'] }): Shop {
  return {
    id: 1,
    name: 'Shop',
    createdAt: '2025-01-01T00:00:00Z',
    updatedAt: '2025-01-01T00:00:00Z',
    ...overrides,
  }
}

const mockShops: Shop[] = [
  makeShop({ position: { x: 10, y: 10 } }),
  makeShop({ position: { x: 3, y: 4 } }),
  makeShop({ position: { x: 1, y: 1 } }),
  makeShop({ position: { x: 5, y: 5 } }),
  makeShop({ position: { x: 20, y: 20 } }),
]

describe('getFilteredShops', () => {
  it('returns shops sorted by distance to the given position', () => {
    const result = getFilteredShops(mockShops, '', { x: 0, y: 0 })

    expect(result.map((s) => s.position)).toEqual([
      { x: 1, y: 1 },
      { x: 3, y: 4 },
      { x: 5, y: 5 },
      { x: 10, y: 10 },
      { x: 20, y: 20 },
    ])
  })

  it('works with negative coordinates', () => {
    const shops = [
      makeShop({ position: { x: -1, y: -1 } }),
      makeShop({ position: { x: -10, y: -10 } }),
      makeShop({ position: { x: -3, y: -3 } }),
    ]

    const result = getFilteredShops(shops, '', { x: -2, y: -2 })

    expect(result.map((s) => s.position)).toEqual([
      { x: -1, y: -1 },
      { x: -3, y: -3 },
      { x: -10, y: -10 },
    ])
  })

  it('returns empty array when no shops exist', () => {
    const result = getFilteredShops([], '', { x: 0, y: 0 })

    expect(result).toEqual([])
  })

  it('filters shops by name (case-insensitive)', () => {
    const shops = [
      makeShop({ name: 'Blue Bottle', position: { x: 1, y: 1 } }),
      makeShop({ name: 'Starbucks', position: { x: 2, y: 2 } }),
      makeShop({ name: 'Blue Fox', position: { x: 3, y: 3 } }),
    ]

    const result = getFilteredShops(shops, 'blue', { x: 0, y: 0 })

    expect(result).toHaveLength(2)
    expect(result.map((s) => s.name)).toEqual(['Blue Bottle', 'Blue Fox'])
  })

  it('returns all shops unfiltered when no position is given', () => {
    const result = getFilteredShops(mockShops, '')

    expect(result).toHaveLength(mockShops.length)
  })
})
