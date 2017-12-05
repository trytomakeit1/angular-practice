import { AnaPage } from './app.po';

describe('ana App', function() {
  let page: AnaPage;

  beforeEach(() => {
    page = new AnaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
