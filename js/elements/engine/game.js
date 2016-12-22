import {initialGame, setLives, setTime, setCorrectAnswers} from 'elements/data/gamer';

export default class Game {
  constructor(state = initialGame) {
    this._state = state;
  }

  get state() {
    return this._state;
  }

  die() {
    this._state = setLives(this._state, this._state.lives - 1);
  }

  tick() {
    this._state = setTime(this._state, this._state.gameTime + 1);
  }

  correctAnswer() {
    this._state = setCorrectAnswers(this._state, this._state.currentAnswers + 1);
  }
}
