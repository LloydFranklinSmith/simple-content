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
    if (pageIndex > -1 && pageIndex < this._pages.length) {
      this._currentPage = pageIndex;
    }
  }

  selectNextPage() {
    if (this._pages.length - 1 > this._currentPage) {
      this._currentPage++;
    }
  }

  selectPreviousPage() {
    if (this.currentPage > 0) {
      this._currentPage--;
    }
  }
}
