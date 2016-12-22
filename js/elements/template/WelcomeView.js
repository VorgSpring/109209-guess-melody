import Engine from 'elements/engine/engine';
import AbstractView from 'elements/template/AbstractView';

class WelcomeView extends AbstractView {
  constructor(content) {
    super(content);
  }

  getMarkup() {
    const title =
      `<section class="logo" title="Угадай мелодию">
        <h1>${this.content.title}</h1>
      </section>`;

    const button = `<button class="main-play">${this.content.buttonPlay}</button>`;

    const rules =
      `<h2 class="title main-title">${this.content.rules.title}</h2>
       <p class="text main-text">${this.content.rules.text}</p>`;

    return `<section class="main main--welcome">
        ${title}
        ${button}
        ${rules}
      </section>`;
  }

  bindHandlers() {
    let buttonPlay = this.element.querySelector('.main-play');
    super._addEvent(buttonPlay, 'click', this._onClick);
  }

  _onClick() {
    Engine.startGame();
  }

  clearHandlers() {
    super.clearHandlers.call(this);
  }
}

export default (content) => new WelcomeView(content).element;
