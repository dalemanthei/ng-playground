import { NgPlaygroundPage } from './app.po';

describe('ng-playground App', () => {
  let page: NgPlaygroundPage;

  beforeEach(() => {
    page = new NgPlaygroundPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular Playground');
  });
});
