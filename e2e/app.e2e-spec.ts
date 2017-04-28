import { Ng2sharingPage } from './app.po';

describe('ng2sharing App', () => {
  let page: Ng2sharingPage;

  beforeEach(() => {
    page = new Ng2sharingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
