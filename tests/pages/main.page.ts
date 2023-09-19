import { browser } from '@wdio/globals';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
  /**
     * define selectors using getter methods
     */

  get todoitems() {
    return browser.$$('#todoItem');
  }

  get addBtn() {
    return browser.$('#addBtn');
  }

  get submitAddBtn() {
    return browser.$('#submitAddBtn');
  }

  get addTodoTitleInput() {
    return browser.$('#titleInput');
  }

  async loadData() {
    try {
      await this.addBtn.waitForDisplayed({ timeout: 2000 });
    } catch (e) {
      throw new Error('Не удалось загрузить данные');
    }
  }

  async updateItem(title:string) {
    try {
      await this.loadData();
      const itemCount = await this.todoitems.length;
      const item = this.todoitems[itemCount - 1];
      const input = (await item.$('input'));
      await input.setValue(title);
      await browser.pause(2000);
      await input.waitUntil(async () => (await input.getValue() === title), { timeout: 2000 });
    } catch (e) {
      throw new Error('Не удалось изменить данные');
    }
  }

  async removeLastTodo() {
    try {
      await this.loadData();
      const itemCount = await this.todoitems.length;
      const item = this.todoitems[itemCount - 1];
      const btn = (await item.$('#deleteBtn'));
      await btn.click();
      await browser.pause(2000);
      const itemCountAfterDelete = await this.todoitems.length;
      if (itemCount - itemCountAfterDelete !== 1) {
        throw new Error('Удаление не произошло, либо был удалена более, чем одна задача');
      }
    } catch (e) {
      throw new Error('Не удалось удалить задачу');
    }
  }

  async addTodo(title:string) {
    try {
      await this.loadData();
      const itemCount = await this.todoitems.length;
      await this.addBtn.click();
      await this.addTodoTitleInput.setValue(title);
      await this.submitAddBtn.click();
      await this.addTodoTitleInput.waitForDisplayed({ timeout: 2000 });
      await browser.$('#overlay').click({ x: 300, y: 300 });
      await browser.waitUntil(async () => (await this.todoitems.length === itemCount + 1), { timeout: 2000 });
    } catch (e) {
      throw new Error('Не удалось добавить задачу');
    }
  }

  open() {
    return super.open('');
  }
}

export default new MainPage();
