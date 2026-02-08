const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginpage');

test.describe('Login Tests', () => {

  test('Standard user should login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory.html/);
    await expect(page).toHaveURL(/cart.html/);

  });

});

test('User should see error for invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('invalid_user', 'wrong_password');

  const error = await loginPage.getErrorMessage();
  expect(error).toContain('Username and password do not match');
});

