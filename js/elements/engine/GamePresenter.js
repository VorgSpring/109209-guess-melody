import imageTimer from 'elements/timer/render';
import startTimer from 'elements/timer/timer';
import Game from 'elements/engine/Game';
import Application from 'elements/engine/Application';
import render from 'elements/engine/render';
import statistics from 'elements/data/statistics';

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  if (minutes === 2) {
    return '02:00';
  } else {
    return `0${minutes}:${seconds}`;
  }
};

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

  _endGame(flag) {
    // если нужно удалить анимацию таймера
    // оставляем анимацию только в том случае, если закончилось время игры
    if (flag) {
      imageTimer.deleteTimer();
    }

    const result = {
      date: Date.now(),
      answers: this.game.state.correctAnswers,
      time: this.game.state.gameTime
    };

    let newStatistics = [];

    statistics.getStatistics().then((data) => {
      newStatistics = data;
      newStatistics.push(result);
      newStatistics.sort((a, b) => {
        return b.answers - a.answers || a.time - b.time;
      });
      // узнаем на каком месте наш результат
      const rank = newStatistics.indexOf(result) + 1;
      const time = formatTime(result.time);
      // высчитываем процент
      const comparison = Math.floor(((newStatistics.length - rank) / newStatistics.length) * 100);
      // возвращяем ответ
      let content = {
        type: 'result',
        title: 'Вы настоящий меломан!',
        stat: `За&nbsp;${time}<br>вы&nbsp;отгадали ${result.answers}&nbsp;мелодии`,
        comparison: `Это&nbsp;лучше чем у&nbsp;${comparison}&nbsp;% игроков`
      };

      document.removeEventListener('onAnswer', this.onAnswer);
      // отрисовываем страницу
      Application.showStats(content);

      statistics.setStatistics(result);
    });
  }
}

export default (data) => {
  const newGame = new GamePresenter(new Game(data));
  return newGame.startGame();
};
