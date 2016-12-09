import { DaspPage } from './app.po';

describe('dasp App', function() {
  let page: DaspPage;

  beforeEach(() => {
    page = new DaspPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
