import { test, expect } from '@playwright/test'

test('placeholder – app loads', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('Coffee Shops')).toBeVisible()
})
