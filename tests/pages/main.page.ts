import { $, browser } from '@wdio/globals';
import Page from './page';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
  /**
     * define selectors using getter methods
     */
  get Loading() {
    return browser.react$('Skeleton');
  }

  get todoitems() {
    return browser.react$$('TodoItem');
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
      await browser.setLocalStorage(USER_LOCALSTORAGE_KEY,'admin');
      await this.open();
      await this.Loading.waitForDisplayed({ timeout: 2000 });
      await this.todoitems[0].waitForDisplayed({ timeout: 2000 });
    } catch (e) {
      throw new Error('Не удалось загрузить данные');
    }
  }

  async updateItem(title:string) {
    try {
      await this.loadData();
      const item = this.todoitems[0];
      const input = (await item.$('input'));
      await input.setValue(title);
      await input.waitUntil(async () => (await input.getValue() === title), { timeout: 2000 });
    } catch (e) {
      throw new Error('Не удалось изменить данные');
    }
  }

  async removeTodo() {
    try {
      await this.loadData();
      const itemCount = await this.todoitems.length;
      const item = this.todoitems[0];
      const btn = (await item.$('#deleteBtn'));
      await btn.click();
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
      (await this.addBtn).click();
      (await this.addTodoTitleInput).setValue(title);
      (await this.submitAddBtn).click();
      (await this.addTodoTitleInput).waitForDisplayed({ timeout: 2000 });
      (await browser.$('#overlay')).click();
      const itemCountAfterAdd = await this.todoitems.length;
      if (itemCountAfterAdd - itemCount !== 1) {
        throw new Error('Добавление не произошло, либо было добавлено более одной задачи');
      }
    } catch (e) {
      throw new Error('Не удалось добавить задачу');
    }
  }

  /**
     * overwrite specific options to adapt it to page object
     */
  public open() {
    return super.open('');
  }
}

export default new MainPage();
