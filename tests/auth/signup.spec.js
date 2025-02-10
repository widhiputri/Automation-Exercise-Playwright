import { test, expect } from '@playwright/test';
import { SignupPage } from '../../pages/signupPage.js';
import testData from '../../data/testData.json';

const signupData = {
  name: 'Test User',
  email: `test${Date.now()}@example.com`, // Unique email for each test run
  password: 'Test@1234',
  dayOfBirth: '10',
  monthOfBirth: 'June',
  yearOfBirth: '1990',
  newsletter: true,
  specialOffers: true,
  firstName: 'Test',
  lastName: 'User',
  company: 'Test Company',
  address: '123 Test Street',
  addressLineTwo: 'Suite 100',
  country: 'Singapore',
  state: 'Test State',
  city: 'Test City',
  zipcode: '123456',
  mobileNumber: '1234567890'
};

test.describe('Signup Tests', () => {
  test('Register New User', async ({ page }) => {
    const signupPage = new SignupPage(page);

    // Navigate to signup page
    await signupPage.goto();

    // Enter signup details and submit
    await signupPage.enterSignupDetails(signupData.name, signupData.email);
    await signupPage.clickSignup();

    // Verify 'ENTER ACCOUNT INFORMATION' is visible
    await expect(page.locator('text=ENTER ACCOUNT INFORMATION')).toBeVisible();

    // Complete and submit the signup form
    await signupPage.completeSignupForm(signupData);
    await signupPage.submitForm();

    // Verify 'ACCOUNT CREATED!' is visible
    await expect(page.locator('text=ACCOUNT CREATED!')).toBeVisible();

    // Click continue and verify user is logged in
    await signupPage.clickContinue();
    await expect(page.locator(`text=Logged in as ${signupData.name}`)).toBeVisible();

    // Delete the account
    await signupPage.deleteAccount();

    // Verify 'ACCOUNT DELETED!' is visible
    await expect(page.locator('text=ACCOUNT DELETED!')).toBeVisible();
  });

  test('Register User with Existing Email', async ({ page }) => {
    const signupPage = new SignupPage(page);

    // Navigate to signup page
    await signupPage.goto();

    // Enter existing email and submit
    await signupPage.enterSignupDetails(testData.validUser.email, testData.validUser.password);
    await signupPage.clickSignup();

    // Verify error message appears
    await expect(page.locator('text=Email Address already exist!')).toBeVisible();
  });
});