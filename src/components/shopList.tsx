import { useAtomValue } from 'jotai'
import { nameAtom, parsedPositionAtom } from '../atoms/filters'
import { useShops } from '../hooks/useShops'
import { cn } from '../lib/cn'
import { getFilteredShops } from '../utils/getFilteredShops'
import { ShopItem } from './shopItem'

interface Props {
  className?: string
}

const MAX_HIGHLIGHTED = 3

export function ShopList({ className }: Props) {
  const name = useAtomValue(nameAtom)
  const inputPosition = useAtomValue(parsedPositionAtom)
  const { data: shops, isPending, isError } = useShops()

  if (isPending) {
    return <p className="text-gray-500">Loading...</p>
  }

  if (isError) {
    return <p className="text-red-500">Error: Unable to fetch shops.</p>
  }

  const filteredShops = getFilteredShops(shops, name, inputPosition)

  return (
    <ul className={cn('w-full p-2 border rounded-lg', className)}>
      {filteredShops.map(({ id, ...rest }, index) => (
        <ShopItem key={id} {...rest} isHighlighted={inputPosition && index < MAX_HIGHLIGHTED} />
      ))}
    </ul>
  )
}
