import { describe, it, expect, vi, afterEach } from 'vitest'
import { getToken, fetchShops } from './api'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('getToken', () => {
  it('returns the token from the API response', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => ({ token: 'abc123' }),
    } as Response)

    const token = await getToken()

    expect(token).toBe('abc123')
    expect(fetch).toHaveBeenCalledWith('https://api-challenge.agilefreaks.com/v1/tokens', {
      method: 'POST',
      headers: { Accept: 'application/json' },
    })
  })

  it('throws when the response is not ok', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
    } as Response)

    await expect(getToken()).rejects.toThrow('HTTP 500: Internal Server Error')
  })
})

describe('fetchShops', () => {
  it('fetches shops using a token from getToken', async () => {
    const mockShops = [
      {
        id: 1,
        name: 'Shop A',
        x: 1,
        y: 2,
        created_at: '2025-01-01T00:00:00Z',
        updated_at: '2025-01-01T00:00:00Z',
      },
    ]

    vi.spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ token: 'test-token' }),
      } as Response)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockShops,
      } as Response)

    const shops = await fetchShops()

    expect(shops).toEqual([
      {
        id: 1,
        name: 'Shop A',
        position: { x: 1, y: 2 },
        createdAt: '2025-01-01T00:00:00Z',
        updatedAt: '2025-01-01T00:00:00Z',
      },
    ])
    expect(fetch).toHaveBeenNthCalledWith(
      2,
      'https://api-challenge.agilefreaks.com/v1/coffee_shops?token=test-token',
      { headers: { Accept: 'application/json' } },
    )
  })

  it('throws when the schema validation fails', async () => {
    vi.spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ token: 'test-token' }),
      } as Response)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => [{ invalid: 'data' }],
      } as Response)

    await expect(fetchShops()).rejects.toThrow()
  })
})
