import { SELECTORS } from '../utils/selectors';
import { expect } from '@playwright/test';

export class SignupPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/login'); // Uses baseURL from playwright.config.js
  }

  async enterSignupDetails(name, email) {
    await this.page.fill(SELECTORS.signup.name, name);
    await this.page.fill(SELECTORS.signup.email, email);
  }

  async clickSignup() {
    await this.page.click(SELECTORS.signup.submitButton);
  }

  async completeSignupForm(data) {
    await this.page.check(SELECTORS.signupForm.title);
    await this.page.fill(SELECTORS.signupForm.password, data.password);
    await this.page.selectOption(SELECTORS.signupForm.dayOfBirth, { label: data.dayOfBirth });
    await this.page.selectOption(SELECTORS.signupForm.monthOfBirth, { label: data.monthOfBirth });
    await this.page.selectOption(SELECTORS.signupForm.yearOfBirth, { label: data.yearOfBirth });

    if (data.newsletter) {
      await this.page.check(SELECTORS.signupForm.newsletter);
    }
    if (data.specialOffers) {
      await this.page.check(SELECTORS.signupForm.specialOffers);
    }

    await this.page.fill(SELECTORS.signupForm.firstName, data.firstName);
    await this.page.fill(SELECTORS.signupForm.lastName, data.lastName);
    await this.page.fill(SELECTORS.signupForm.company, data.company);
    await this.page.fill(SELECTORS.signupForm.address, data.address);
    await this.page.fill(SELECTORS.signupForm.addressLineTwo, data.addressLineTwo);
    await this.page.selectOption(SELECTORS.signupForm.countryDropdown, { label: data.country });
    await this.page.fill(SELECTORS.signupForm.state, data.state);
    await this.page.fill(SELECTORS.signupForm.city, data.city);
    await this.page.fill(SELECTORS.signupForm.zipcode, data.zipcode);
    await this.page.fill(SELECTORS.signupForm.mobileNumber, data.mobileNumber);
  }

  async submitForm() {
    await this.page.click(SELECTORS.signupForm.createAccountButton);
  }

  async clickContinue() {
    await this.page.click(SELECTORS.signupForm.continueButton);
  }

  async deleteAccount() {
    await this.page.click(SELECTORS.signupForm.deleteAccount);
  }
}