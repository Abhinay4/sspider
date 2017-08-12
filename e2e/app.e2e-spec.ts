import { SspiderPage } from './app.po';

describe('sspider App', () => {
  let page: SspiderPage;

  beforeEach(() => {
    page = new SspiderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
