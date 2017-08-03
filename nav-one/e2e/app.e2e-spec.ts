import { NavOnePage } from './app.po';

describe('nav-one App', () => {
  let page: NavOnePage;

  beforeEach(() => {
    page = new NavOnePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
