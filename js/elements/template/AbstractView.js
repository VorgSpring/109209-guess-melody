export default class AbstractView {
  constructor(content) {
    this.content = content;
    this.activeEvents = [];
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

  _addEvent(element, typeEvent, eventFunction) {
    element.addEventListener(typeEvent, eventFunction);
    this.activeEvents.push({
      element,
      typeEvent,
      eventFunction
    });
  }

  clearHandlers() {
    this.activeEvents.forEach((item) => {
      item.element.removeEventListener(item.typeEvent, item.eventFunction);
    });
    this.activeEvents = [];
  }
}
