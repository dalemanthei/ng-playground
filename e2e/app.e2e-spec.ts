import { DeletemePage } from './app.po';

describe('deleteme App', () => {
  let page: DeletemePage;

  beforeEach(() => {
    page = new DeletemePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
