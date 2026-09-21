import { test, expect } from '@playwright/test';

test('Vai exibir o nome do produto pesquisado', async ({ page }) => {
  // Acessar a loja
  await page.goto('https://practicesoftwaretesting.com/');

  // Pesquisar o produto
  const searchInput = page.locator('[data-test="search-query"]');

  await searchInput.fill('Protective Gloves');
  await page.locator('[data-test="search-submit"]').click();

  // Validar que o produto está visível
  await expect(
    page.getByText('Protective Gloves', { exact: true })
  ).toBeVisible();
});