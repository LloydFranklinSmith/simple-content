export default class Page {
  _title = "";
  _content = "";
  get title() {
    return this._title;
  }

  set title(value: string) {
    this.title = value;
  }

  set content(value) {
    this._content = value;
  }

  get content() {
    return this._content;
  }
}
