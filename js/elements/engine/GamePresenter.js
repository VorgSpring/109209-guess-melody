import imageTimer from 'elements/timer/render';
import artistModule from 'elements/template/ArtistView';
import genreModule from 'elements/template/GenreView';
import game from 'elements/engine/Game';
import Application from 'elements/engine/Application';

class GamePresenter {
  constructor(newGame = game) {
    this.game = newGame;
    this.screens = {
      artist: artistModule,
      genre: genreModule,
    };

    document.addEventListener('timeLeft', this._endGame.bind(this, false));
    document.addEventListener('secondPassed', this.game.tick.bind(this.game));
    document.addEventListener('onAnswer', this.nextQuestion.bind(this))
  }

  changeContentView(data) {
    const root = document.querySelector('.main');
    root.parentNode.replaceChild(this.screens[data.type](data.content), root);
  }

  startGame() {
    imageTimer.renderTimer();
    window.initializeCountdown();
    const data = this.game.question;
    return this.screens[data.type](data.content);
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
      this.changeContentView(this.game.question)
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
    // отрисовываем страницу
    Application.showStats(result)
  }
}

const newGame = new GamePresenter();

export default () => {
  newGame.restartGame();
  return newGame.startGame();
};
