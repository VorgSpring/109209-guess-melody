import newGame from 'elements/engine/GamePresenter';
import render from 'elements/engine/render';

export default class Application {

  static showWelcome() {
    render('welcome');
  }

  static showGame() {
    const data = newGame();
    render(data.type, data.content);
  }

  static showStats(stats) {
    render('result', stats);
  }
}
