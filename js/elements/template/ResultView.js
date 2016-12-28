import AbstractView from 'elements/template/AbstractView';
import Application from 'elements/engine/Application';

class ResultView extends AbstractView {
  constructor(content) {
    super(content);
  }

  getMarkup() {
    const resultGame =
      `<h2 class="title">${this.content.title}</h2>
      <div class="main-stat">${this.content.stat}</div>
      <span class="main-comparison">${this.content.comparison}</span>`;

    return `<section class="main main--result">
        <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
        ${resultGame}
        <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
      </section>`;
  }

  bindHandlers() {
    let buttonReset = this.element.querySelector('.main-replay');
    super._addEvent(buttonReset, 'click', this._onClick.bind(this));
  }

  _onClick() {
    Application.showWelcome();
    this.clearHandlers();
  }

  clearHandlers() {
    super.clearHandlers.call(this);
  }
}

export default (content) => new ResultView(content).element;
