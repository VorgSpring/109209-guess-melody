import assert from 'assert';
import game from '../elements/engine/game';

describe('Test game module', () => {
  let obj = game.initialGame;

  describe('Test method setLives', () => {

    it('The number of lives can be less than 0', () => {
      assert.throws(() => game.setLives(obj, -1));
    });
    it('The number of lives can be more than 3', () => {
      assert.throws(() => game.setLives(obj, 5));
    });
    it('The number of lives can not be changed', () => {
      assert.equal(game.setLives(obj, 2).lives, 2);
    });
  });

  describe('Test method setTime', () => {
    it('Time can be negative', () => {
      assert.throws(() => game.setTime(obj, -120));
    });
    it('Timer can not be changed', () => {
      assert.equal(game.setTime(obj, 10).gameTime, 10);
    });
  });

  describe('Test method setCurrentAnswers', () => {
    it('Answers can be less than 0', () => {
      assert.throws(() => game.setCurrentAnswers(obj, -5));
    });
    it('Answers can be more than 10', () => {
      assert.throws(() => game.setCurrentAnswers(obj, 11));
    });
    it('Answers can not be changed', () => {
      assert.equal(game.setCurrentAnswers(obj, 10).currentAnswers, 10);
    });
  });
});
