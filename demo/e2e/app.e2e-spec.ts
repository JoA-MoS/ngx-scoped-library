import { MyNgxLibraryDemoPage } from './app.po';

describe('ngx-scoped-library-demo App', () => {
  let page: MyNgxLibraryDemoPage;

  beforeEach(() => {
    page = new MyNgxLibraryDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
