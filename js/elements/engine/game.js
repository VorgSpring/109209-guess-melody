import {initialGame, setLives, setTime, setCurrentAnswers} from 'elements/data/gamer';

export default class Model {
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

  currentAnswer() {
    this._state = setCurrentAnswers(this._state, this._state.currentAnswers + 1);
  }
}
