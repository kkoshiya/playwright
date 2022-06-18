const { test, expect } = require("@playwright/test");

test.describe('Kyle tests', () => {

  test('valid email test', async ({ page }) => {
    await page.goto('https://netflix.com/');
    await page.locator('a:has-text("Sign In")').click();
    await expect(page).toHaveURL('https://www.netflix.com/login');

    await page.locator('text=Email or phone number').click();
    await page.locator('input[name="userLoginId"]').fill('kylekoshiya@yahoo.com');
    await page.locator('input[name="password"]').click();
    await page.locator('input[name="password"]').fill('fakepassword');
    await page.locator('button:has-text("Sign In")').click();

    await expect(page).toHaveURL('https://www.netflix.com/login');
    await expect(page.locator('text= Sorry, we can\'t find an account with this email address.')).toBeVisible();
  });

  test('valid password test', async ({ page }) => {
    await page.goto('https://netflix.com/');
    await page.locator('a:has-text("Sign In")').click();
    await expect(page).toHaveURL('https://www.netflix.com/login');

    await page.locator('text=Email or phone number').click();
    await page.locator('input[name="userLoginId"]').fill('danli@gmail.com'); // random email - I just kepy trying common names till one worked
    await page.locator('input[name="password"]').click();
    await page.locator('input[name="password"]').fill('fakepassword');
    await page.locator('button:has-text("Sign In")').click();
    
    await expect(page).toHaveURL('https://www.netflix.com/login');
    await expect(page.locator('text= Incorrect password. Please try again or you can reset your password.')).toBeVisible();
  });

});
