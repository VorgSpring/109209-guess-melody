import {initialGame, setLives, setTime,
  setCorrectAnswers, setCurrentQuestion} from 'elements/data/gamer';

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
}
