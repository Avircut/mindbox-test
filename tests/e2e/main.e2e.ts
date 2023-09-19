import MainPage from '../pages/main.page';
import AuthPage from '../pages/auth.page';

describe('MainPage', () => {
  it('Should load data', async () => {
    await AuthPage.login();
    await MainPage.loadData();
  });
});

describe('MainPage', () => {
  it('Should add new todo', async () => {
    await MainPage.addTodo('E2E Test');
  });
});

describe('MainPage', () => {
  it('Should update last added todo', async () => {
    await MainPage.updateItem('E2E Changed');
  });
});

describe('MainPage', () => {
  it('Should remove last added todo', async () => {
    await MainPage.removeLastTodo();
  });
});
