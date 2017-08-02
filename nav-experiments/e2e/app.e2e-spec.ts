import { NavExperimentsPage } from './app.po';

describe('nav-experiments App', () => {
  let page: NavExperimentsPage;

  beforeEach(() => {
    page = new NavExperimentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
