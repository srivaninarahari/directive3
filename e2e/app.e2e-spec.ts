import { Directive2Page } from './app.po';

describe('directive2 App', () => {
  let page: Directive2Page;

  beforeEach(() => {
    page = new Directive2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
