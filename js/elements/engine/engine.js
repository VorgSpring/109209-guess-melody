import render from 'elements/engine/render';
import imageTimer from 'elements/timer/render';
import Data from 'elements/engine/data';
import game from 'elements/engine/game';

const Engine = {
  game: null,

  firstScreen() {
    // получаем данные с модели
    let data = Data.getWelcome();
    // отрисовываем страницу
    render('welcome', data);
  },

  startGame() {
    document.addEventListener('timeLeft', this._endGame.bind(this));
    document.addEventListener('secondPassed', this._setTime.bind(this));
    this.game = game.initialGame;
    // получаем данные с модели
    let data = Data.getFirstQuestion();
    // отрисовываем страницу
    render(data.templateName, data.contents);
    imageTimer.renderTimer();
    // заводим таймер
    window.initializeCountdown();
  },

  nextQuestion(correct) {
    // если ответ не правильный
    if (!correct) {
      // уменьшаем жизни
      game.setLives(this.game, this.game.lives--);
      // если жизней не осталось
      if (this.game.lives < 0) {
        // заканчиваем игру
        this._endGame(null, true);
        // выходим из функции
        return;
      }
    } else {
      // если правильный ответ, то увиличиваем колличество правильных ответов
      game.setCurrentAnswers(this.game, this.game.currentAnswers++);
    }

    // получаем данные с модели
    let data = Data.getNextQuestion();
    // если вопросов больше нет
    if (data.end) {
      // заканчиваем игру
      this._endGame(null, true);
    } else {
      // если вопросы есть, то отрисовываем страницу
      render(data.templateName, data.contents);
    }
  },

  restartGame() {
    Data.restart();
    // если остался анимированный таймер, то удаляем его
    if (document.querySelector('.timer-container')) {
      imageTimer.deleteTimer();
    }
    this.firstScreen();
  },

  _endGame(event, flag) {
    // если нужно удалить анимацию таймера
    // оставляем анимацию только в том случае, если закончилось время игры
    if (flag) {
      imageTimer.deleteTimer();
    }
    let result = {
      answers: this.game.currentAnswers,
      time: this.game.gameTime
    };
    // получаем данные от игрока
    let data = Data.getResultGame(result);
    // отрисовываем страницу
    render('result', data);
  },

  _setTime() {
    game.setTime(this.game, this.game.gameTime++);
  }
};

export default Engine;
