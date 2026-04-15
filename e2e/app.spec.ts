import { test, expect } from '@playwright/test'

test('shops load and are displayed', async ({ page }) => {
  await page.goto('/')
  const shopItems = page.locator('ul li')
  await expect(shopItems.first()).toBeVisible({ timeout: 10000 })
  expect(await shopItems.count()).toBeGreaterThan(0)
})

test('filtering by name narrows the list', async ({ page }) => {
  await page.goto('/')
  const shopItems = page.locator('ul li')
  await expect(shopItems.first()).toBeVisible({ timeout: 10000 })
  const initialCount = await shopItems.count()

  await page.getByLabel('X').pressSequentially('0')
  await page.getByLabel('Y').pressSequentially('0')
  await page.getByLabel('Name').pressSequentially('Blue Bottle SF')

  await expect(shopItems).toHaveCount(1)
  expect(initialCount).toBeGreaterThan(1)
})
