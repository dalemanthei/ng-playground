import { browser, by, element } from 'protractor';

export class NgPlaygroundPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root mat-toolbar span')).getText();
  }
}
