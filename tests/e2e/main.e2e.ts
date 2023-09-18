import MainPage from '../pages/main.page';

describe('MainPage', () => {
  it('Should load data', async () => {
    await MainPage.loadData();
  });
});
