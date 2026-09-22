import { test, expect } from '@playwright/test';

test('deve exibir o produto pesquisado pelo nome', async ({ page }) => {
  // Acessar a loja
  await page.goto('https://practicesoftwaretesting.com/');

  // Pesquisar o produto
  const searchInput = page.locator('[data-test="search-query"]');

  await searchInput.fill('Protective Gloves');
  await page.locator('[data-test="search-submit"]').click();

  // Validar o termo apresentado na pesquisa
  await expect(
    page.locator('[data-test="search-term"]')
  ).toHaveText('Protective Gloves');

  // Localizar somente o nome do produto
  const produto = page.locator('[data-test="product-name"]').filter({
    hasText: /^\s*Protective Gloves\s*$/,
  });

  await expect(produto).toBeVisible();
});