import type { Position } from '../utils/distance'

interface Props {
  name: string
  position: Position
  isHighlighted?: boolean
  distance?: number
}

export function ShopItem({ name, position, distance, isHighlighted }: Props) {
  return (
    <li className={`mb-4 p-4 rounded ${isHighlighted ? 'text-blue-500' : 'text-black'}`}>
      <h2 className="text-xl font-semibold">{name}</h2>
      <p>
        {position.x}, {position.y} {distance && `- ${distance}`}
      </p>
    </li>
  )
}
