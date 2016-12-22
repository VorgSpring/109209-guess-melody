export default class AbstractView {
  constructor(content) {
    this.content = content;
  }

  get element() {
    if (!this._element) {
      this._element = document.createElement('template');
      this._element.innerHTML = this.getMarkup();
      this.bindHandlers();
    }
    return this._element.content.firstChild;
  }

  getMarkup() {
    throw new Error('Abstract method should be implemented');
  }

  bindHandlers() {
    // By default there is nothing to bind
  }

  clearHandlers() {
    // By default nothing to clear
  }
}
