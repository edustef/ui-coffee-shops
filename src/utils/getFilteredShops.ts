import type { Shop } from '../lib/api'
import { euclideanDistance, type Position } from './distance'

export function getFilteredShops(shops: Shop[], name: string, position?: Position) {
  const filtered = shops.filter((shop) => shop.name.toLowerCase().includes(name.toLowerCase()))

  if (!position) {
    return filtered
  }

  return filtered
    .map((shop) => ({
      ...shop,
      distance: euclideanDistance(shop.position, position),
    }))
    .toSorted((a, b) => a.distance - b.distance)
}
