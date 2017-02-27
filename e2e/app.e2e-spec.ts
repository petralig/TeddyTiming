import { NallekarkitTestiPage } from './app.po';

describe('nallekarkit-testi App', () => {
  let page: NallekarkitTestiPage;

  beforeEach(() => {
    page = new NallekarkitTestiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
