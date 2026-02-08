const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginpage');
const { InventoryPage } = require('../pages/inventorypage');
const { CartPage } = require('../pages/cartpage');

test('User can add product to cart and see it in cart page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addBackpackToCart();
  await inventoryPage.goToCart();

  const itemName = await cartPage.getCartItemName();
  expect(itemName).toBe('Sauce Labs Backpack');
});
