import { browser, by, element } from 'protractor';

export class AppPage {

  getElementAndClick(): void {
    element(by.css('scam1-root nav div div a')).click();
  }

  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('scam1-root nav div div a')).getText();
  }
}
