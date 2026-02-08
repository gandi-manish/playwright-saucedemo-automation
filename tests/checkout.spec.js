const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginpage');
const { InventoryPage } = require('../pages/inventorypage');
const { CartPage } = require('../pages/cartpage');
const { CheckoutPage } = require('../pages/checkoutpage');

test('User can complete checkout successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Login
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  // Add product
  await inventoryPage.addBackpackToCart();
  await inventoryPage.goToCart();

  // Verify cart
  const item = await cartPage.getCartItemName();
  expect(item).toBe('Sauce Labs Backpack');

  // Checkout
  await checkoutPage.startCheckout();
  await checkoutPage.fillUserInfo('Maneesh', 'Gandi', '12345');
  await checkoutPage.finishOrder();

  // Validate success
  const message = await checkoutPage.getSuccessMessage();
  expect(message).toBe('Thank you for your order!');
});
