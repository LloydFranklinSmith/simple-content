import Page from "./page";

export default class Site {
  private _pages: Array<Page> = [];
  get pages(): Array<Page> {
    return this._pages;
  }

  addPage(page: Page) {
    return this._pages.push(page) - 1;
  }
}
