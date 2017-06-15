import { MarginsPage } from './app.po';

describe('margins App', () => {
  let page: MarginsPage;

  beforeEach(() => {
    page = new MarginsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
