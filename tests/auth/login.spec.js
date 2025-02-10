import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage.js';
import testData from '../../data/testData.json';

const loginData = {
    email: 'invalid@example.com', 
    password: 'WrongPassword123'
  };

test.describe('Login Tests', () => {
  
  test('Login User with Correct Email and Password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Navigate to login page
    await loginPage.goto();

    // Enter valid credentials and login
    await loginPage.login(testData.validUser.email, testData.validUser.password);

    // Verify 'Logged in as username' is visible
    await expect(page.locator(`text=Logged in as ${testData.validUser.name}`)).toBeVisible();
  });

  test('Login User with Incorrect Email and Password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Navigate to login page
    await loginPage.goto();

    // Enter invalid credentials and login
    await loginPage.login(loginData.email, loginData.password);

    // Verify error message appears
    await expect(page.locator('text=Your email or password is incorrect!')).toBeVisible();
  });
});