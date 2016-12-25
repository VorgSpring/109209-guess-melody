import AbstractView from 'elements/template/AbstractView';
import Application from 'elements/engine/Application';

class WelcomeView extends AbstractView {
  constructor(content) {
    super(content);
  }

  getMarkup() {
    return `<section class="main main--welcome">
        <section class="logo" title="Угадай мелодию">
            <h1>Угадай мелодию</h1>
        </section>
        <button class="main-play">Начать игру</button>
        <h2 class="title main-title">Правила игры</h2>
        <p class="text main-text">
            Правила просты&nbsp;— за&nbsp;2 минуты дать
            максимальное количество правильных ответов.<br>
            На&nbsp;каждую мелодию всего 3 варианта ответа.<br>
            Удачи!
        </p>
      </section>`;
  }

  bindHandlers() {
    let buttonPlay = this.element.querySelector('.main-play');
    super._addEvent(buttonPlay, 'click', this._onClick);
  }

  _onClick() {
    Application.showGame();
  }

  clearHandlers() {
    super.clearHandlers.call(this);
  }
}

export default (content) => new WelcomeView(content).element;
