import { $, browser } from '@wdio/globals';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AuthPage extends Page {
  /**
     * define selectors using getter methods
     */

  get loginInput() {
    return browser.$('#loginInput');
  }

  get passwordInput() {
    return browser.$('#passwordInput');
  }

  get submitBtn() {
    return browser.$('#submitBtn');
  }

  get mainPageAddBtn() {
    return browser.$('#addBtn');
  }

  async login() {
    try {
      await this.open();
      await this.loginInput.waitForDisplayed({ timeout: 1000 });
      await this.loginInput.setValue('user');
      await this.passwordInput.setValue('123');
      await this.submitBtn.click();
      await this.mainPageAddBtn.waitForDisplayed({ timeout: 3000 });
    } catch (e) {
      throw new Error('Не удалось авторизоваться');
    }
  }

  /**
     * overwrite specific options to adapt it to page object
     */
  public open() {
    return super.open('');
  }
}

export default new AuthPage();
