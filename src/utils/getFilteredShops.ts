import type { Shop } from '../lib/api'
import { euclideanDistance, type Position } from './distance'

export function getFilteredShops(shops: Shop[], name: string, position?: Position) {
  if (!position) {
    return shops
  }

  return shops
    .filter((shop) => shop.name.toLowerCase().includes(name.toLowerCase()))
    .map((shop) => ({
      ...shop,
      distance: euclideanDistance(shop.position, position),
    }))
    .toSorted((a, b) => a.distance - b.distance)
}

export type FilteredShop = ReturnType<typeof getFilteredShops>[number]
