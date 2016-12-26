import newGame from 'elements/engine/GamePresenter';
import render from 'elements/engine/render';

let questionsData;

export default class Application {

  static showWelcome() {
    render({
      type: 'welcome'
    });
  }

  static showGame() {
    render(newGame(questionsData));
  }

  static showStats(stats) {
    render(stats);
  }

  static set data(data) {
    questionsData = data;
  }
}
