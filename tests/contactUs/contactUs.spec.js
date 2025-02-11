import { test, expect } from '@playwright/test';
import { ContactUsPage } from '../../pages/contactUsPage.js';
import testData from '../../data/testData.json';
import path from 'path';

const contactFormData = {
    subject: 'Test Subject', 
    message: 'This is a test message.'
};

test.describe('Contact Us Form Tests', () => { 
  test('Submit Contact Us Form Successfully', async ({ page }) => {
    const contactUsPage = new ContactUsPage(page);
    
    // Navigate to Home Page
    await contactUsPage.goto();

    // Click Contact Us button
    await contactUsPage.navigateToContactUs();

    // Verify 'GET IN TOUCH' is visible
    await expect(page.locator('h2.title.text-center').filter({ hasText: 'Get In Touch' })).toBeVisible();
      
    // Fill Contact Form
    const filePath = path.resolve(__dirname, '../../fixtures/dummy.pdf'); // Sample file for upload
    await contactUsPage.fillContactForm(
      testData.validUser.name, 
      testData.validUser.email, 
      contactFormData.subject, 
      contactFormData.message, 
      filePath
    );

    // Submit Form & Accept Alert
    await contactUsPage.submitForm();

    // Verify Success Message
    await contactUsPage.verifySuccessMessage();

    // Click 'Home' Button & Verify Landing on Home Page
    await contactUsPage.returnToHome();
    await expect(page).toHaveURL(/.*automationexercise\.com/);
  });
});