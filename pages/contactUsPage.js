import { expect } from '@playwright/test';
import { SELECTORS } from '../utils/selectors.js';

export class ContactUsPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/');
  }

  async navigateToContactUs() {
    await this.page.click(SELECTORS.contactUs.contactUsButton);
  }

  async fillContactForm(name, email, subject, message, filePath) {
    await this.page.fill(SELECTORS.contactUs.name, name);
    await this.page.fill(SELECTORS.contactUs.email, email);
    await this.page.fill(SELECTORS.contactUs.subject, subject);
    await this.page.fill(SELECTORS.contactUs.message, message);

    if (filePath) {
      await this.page.setInputFiles(SELECTORS.contactUs.fileUpload, filePath);
    }
  }

  async submitForm() {
    // Listen for the confirmation alert and accept it
    this.page.once('dialog', async dialog => {
      console.log(`Dialog message: ${dialog.message()}`); // Debugging log
      await dialog.accept(); // Clicks "OK"
    });
  
    // Click the submit button
    await this.page.click(SELECTORS.contactUs.submitButton);
  }   

  async verifySuccessMessage() {
    await this.page.waitForSelector(SELECTORS.contactUs.successMessage);
  }

  async returnToHome() {
    await this.page.click(SELECTORS.contactUs.homeButton);
  }
}