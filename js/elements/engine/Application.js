import createWelcome from 'elements/template/WelcomeView';
import newGame from 'elements/engine/GamePresenter';
import showStats from 'elements/template/ResultView';

const changeView = (element) => {
  const main = document.querySelector('.main');
  main.innerHTML = '';
  main.parentNode.replaceChild(element, main);
};

export default class Application {

  static showWelcome() {
    changeView(createWelcome());
  }

  static showGame() {
    changeView(newGame());
  }

  static showStats(stats) {
    changeView(showStats(stats));
  }
}
