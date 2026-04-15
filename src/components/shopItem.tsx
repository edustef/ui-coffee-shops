import type { Position } from '../utils/distance'

interface Props {
  name: string
  position: Position
  isHighlighted?: boolean
  distance?: number
}

const fmt = new Intl.NumberFormat(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

export function ShopItem({ name, position, distance, isHighlighted }: Props) {
  return (
    <li className={`p-4 rounded ${isHighlighted ? 'text-blue-500' : 'text-black'}`}>
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-lg">
        {fmt.format(position.x)}, {fmt.format(position.y)}
        {distance != null && ` · ${fmt.format(distance)}`}
      </p>
    </li>
  )
}
