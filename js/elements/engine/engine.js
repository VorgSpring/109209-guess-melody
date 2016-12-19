import render from 'elements/engine/render';
import imageTimer from 'elements/timer/render';
import Data from './data';
import Gamer from 'elements/gamer/gamer';

const Engine = {
  // игрок
  gamer: null,
  // таймер игры
  gameTimer: null,

  firstScreen() {
    // создаем игрока
    this.gamer = new Gamer();
    // получаем данные с модели
    let data = Data.getWelcome();
    // отрисовываем страницу
    render('welcome', data);
  },

  startGame() {
    // получаем данные с модели
    let data = Data.getFirstQuestion();
    // отрисовываем страницу
    render(data.templateName, data.contents);
    // заводим таймер
    this._startTimer();
  },

  nextQuestion(correct) {
    // если ответ не правильный
    if (!correct) {
      // уменьшаем жизни
      this.gamer.lives--;
      // если жизней не осталось
      if (this.gamer.lives < 0) {
        // заканчиваем игру
        this._endGame(true);
        // выходим из функции
        return;
      }
    } else {
      // если правильный ответ, то увиличиваем колличество правильных ответов
      this.gamer.currentAnswers++;
    }

    // получаем данные с модели
    let data = Data.getNextQuestion();
    // если вопросов больше нет
    if (data.end) {
      // заканчиваем игру
      this._endGame(true);
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

  _endGame(flag) {
    // если нужно удалить анимацию таймера
    // оставляем анимацию только в том случае, если закончилось время игры
    if (flag) {
      imageTimer.deleteTimer();
    }
    // получаем данные от игрока
    let data = this._getResult();
    // отрисовываем страницу
    render('result', data);
  },

  _startTimer() {
    // отрисовываем анимированный таймер
    imageTimer.renderTimer();
    // запускаем анимацию
    window.initializeCountdown();
    // заводим таймер игры
    this.gameTimer = setInterval(()=> {
      // если прошло 2-е минуты
      if (this.gamer.timeGame === 120) {
        // заканчиваем игру, не удаляем анимированный таймер
        this._endGame(false);
      } else {
        // если время не вышло, то увиличиваем время текущей игры
        this.gamer.timeGame++;
      }
    }, 1000);
  },

  _getResult() {
    // удаляем таймер игры
    clearInterval(this.gameTimer);
    // возвращаем данные от игрока
    return this.gamer.resultGame;
  }
};

export default Engine;
