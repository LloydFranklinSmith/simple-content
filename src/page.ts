export default class Page {
  private _title = "";
  private _content = "";
  get title() {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  set content(value) {
    this._content = value;
  }

  get content() {
    return this._content;
  }
}
