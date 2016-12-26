import {initialGame, setLives, setTime,
  setCorrectAnswers, setCurrentQuestion} from 'elements/data/gamer';
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

export default class Game {
  constructor(data, state = initialGame) {
    this._state = state;
    this.data = data;
  }

  get state() {
    return this._state;
  }

  get question() {
    if (!this.hasNextQuestion(this._state.currentQuestion)) {
      throw new RangeError('This game has no this question');
    }

    return this.data[this._state.currentQuestion];
  }

  hasNextQuestion() {
    return typeof this.data[this._state.currentQuestion + 1] !== 'undefined';
  }

  nextQuestion() {
    this._state = setCurrentQuestion(this._state, this._state.currentQuestion + 1);
  }

  die() {
    this._state = setLives(this._state, this._state.lives - 1);
  }

  tick() {
    this._state = setTime(this._state, this._state.gameTime + 1);
  }

  correctAnswer() {
    this._state = setCorrectAnswers(this._state, this._state.correctAnswers + 1);
  }

  getResultGame() {
    const result = {
      answers: this._state.correctAnswers,
      time: this._state.gameTime
    };
    // вставляем в статистику
    statistics.push(result);
    // сортируем статистику
    statistics.sort((a, b) => {
      return b.answers - a.answers || a.time - b.time;
    });
    // узнаем на каком месте наш результат
    const rank = statistics.indexOf(result) + 1;
    // высчитываем процент
    const comparison = Math.floor(((statistics.length - rank) / statistics.length) * 100);
    // возвращяем ответ
    return {
      type: 'result',
      title: 'Вы настоящий меломан!',
      count: result.answers,
      time: formatTime(result.time),
      comparison: comparison
    };
  }

  restart() {
    this._state = initialGame;
  }
}
