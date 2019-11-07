import Page from "./page";

export default class Site {
  private _pages: Array<Page> = [];
  private _currentPage = 0;

  get currentPage() {
    return this._currentPage;
  }

  get pages(): Array<Page> {
    return this._pages;
  }

  addPage(page: Page) {
    return this._pages.push(page) - 1;
  }

  selectPage(pageIndex: number) {
    this._currentPage = pageIndex;
  }
}
