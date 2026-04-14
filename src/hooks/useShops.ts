import { useQuery } from '@tanstack/react-query'
import { fetchShops } from '../lib/api'

export function useShops()  {
  const { data, status } = useQuery({
    queryKey: ['shops'],
    queryFn: fetchShops,
  })

  return { shops: data, status }
}
