import { useQuery } from '@tanstack/react-query'
import { fetchShops } from '../lib/api

const MAX_RETRIES = 3

export function useShops() {
  const query = useQuery({
    queryKey: ['shops'],
    queryFn: fetchShops,
    retry: MAX_RETRIES,
  })

  return query
}
