import assert from 'assert';
import {initialGame, setLives, setTime, setCorrectAnswers} from '../elements/data/gamer';

describe('Test game module', () => {
  let obj = initialGame;

  describe('Test method setLives', () => {

    it('The number of lives can be less than 0', () => {
      assert.throws(() => setLives(obj, -1));
    });
    it('The number of lives can be more than 3', () => {
      assert.throws(() => setLives(obj, 5));
    });
    it('The number of lives can not be changed', () => {
      assert.equal(setLives(obj, 2).lives, 2);
    });
  });

  describe('Test method setTime', () => {
    it('Time can be negative', () => {
      assert.throws(() => setTime(obj, -120));
    });
    it('Timer can not be changed', () => {
      assert.equal(setTime(obj, 10).gameTime, 10);
    });
  });

  describe('Test method setCorrectAnswers', () => {
    it('Answers can be less than 0', () => {
      assert.throws(() => setCorrectAnswers(obj, -5));
    });
    it('Answers can be more than 10', () => {
      assert.throws(() => setCorrectAnswers(obj, 11));
    });
    it('Answers can not be changed', () => {
      assert.equal(setCorrectAnswers(obj, 10).currentAnswers, 10);
    });
  });
});
