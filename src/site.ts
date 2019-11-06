import Page from "./page";

export default class Site {
  private _pages: Array<Page> = [];
  get pages(): Array<Page> {
    return [];
  }

  addPage(page: Page) {
    this._pages.push(page);
  }
}
