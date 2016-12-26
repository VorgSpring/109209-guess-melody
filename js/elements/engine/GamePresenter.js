import imageTimer from 'elements/timer/render';
import startTimer from 'elements/timer/timer';
import Game from 'elements/engine/Game';
import Application from 'elements/engine/Application';
import render from 'elements/engine/render';

class GamePresenter {
  constructor(newGame) {
    this.game = newGame;
    this.onAnswer = this.nextQuestion.bind(this);
    document.addEventListener('onAnswer', this.onAnswer);
  }

  startGame() {
    imageTimer.renderTimer();
    startTimer(120, this.game.tick.bind(this.game), this._endGame.bind(this, false));
    return this.game.question;
  }

  nextQuestion(event) {
    // если ответ не правильный
    if (!event.detail.correct) {
      // уменьшаем жизни
      this.game.die();
      // если жизней не осталось
      if (this.game.state.lives === 0) {
        // заканчиваем игру
        this._endGame(true);
        // выходим из функции
        return;
      }
    } else {
      // если правильный ответ, то увиличиваем колличество правильных ответов
      this.game.correctAnswer();
    }

    // если вопросов больше нет
    if (this.game.hasNextQuestion()) {
      this.game.nextQuestion();
      render(this.game.question);
    } else {
      this._endGame(true);
    }
  }

  restartGame() {
    this.game.restart();
    // если остался анимированный таймер, то удаляем его
    if (document.querySelector('.timer-container')) {
      imageTimer.deleteTimer();
    }
  }

  _endGame(flag) {
    // если нужно удалить анимацию таймера
    // оставляем анимацию только в том случае, если закончилось время игры
    if (flag) {
      imageTimer.deleteTimer();
    }
    let result = this.game.getResultGame();
    document.removeEventListener('onAnswer', this.onAnswer);
    // отрисовываем страницу
    Application.showStats(result);
  }
}

export default (data) => {
  const newGame = new GamePresenter(new Game(data));
  //newGame.restartGame();
  return newGame.startGame();
};
