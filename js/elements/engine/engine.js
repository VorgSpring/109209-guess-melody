import render from 'elements/engine/render';
import Data from './data';

const Engine = {
  firstScreen() {
    let data = Data.getWelcome();
    render('welcome', data);
  },

  startGame() {
    let data = Data.getFirstQuestion();
    render(data.templateName, data.contents);
  },

  nextQuestion() {
    let data = Data.getNextQuestion();
    if (data.end) {
      this._endGame(data.end);
    } else {
      render(data.templateName, data.contents);
    }
  },

  restartGame() {
    Data.restart();
    this.firstScreen();
  },

  _endGame(data) {
    render('result', data);
  }
};

export default Engine;
