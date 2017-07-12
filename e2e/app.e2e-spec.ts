import { NgexpPage } from './app.po';

describe('ngexp App', () => {
  let page: NgexpPage;

  beforeEach(() => {
    page = new NgexpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
