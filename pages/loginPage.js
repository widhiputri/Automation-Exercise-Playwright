import { SELECTORS } from '../utils/selectors.js';

export class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(email, password) {
    await this.page.fill(SELECTORS.login.email, email);
    await this.page.fill(SELECTORS.login.password, password);
    await this.page.click(SELECTORS.login.submitButton);
  }
}