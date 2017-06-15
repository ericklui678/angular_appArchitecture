import { AppArchitecturePage } from './app.po';

describe('app-architecture App', () => {
  let page: AppArchitecturePage;

  beforeEach(() => {
    page = new AppArchitecturePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
