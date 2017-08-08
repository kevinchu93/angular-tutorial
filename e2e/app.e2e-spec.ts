import { MpAppPage } from './app.po';

describe('mp-app App', () => {
  let page: MpAppPage;

  beforeEach(() => {
    page = new MpAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
