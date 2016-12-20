const initialGame = {
  lives: 3,
  gameTime: 0,
  currentAnswers: 0
};

const setLives = (game, value) => {
  if (value < 0 || value > 3) {
    throw new RangeError('The number of lives can not be more than 3 and less than 0');
  }

  return Object.assign({}, game, {
    lives: value
  });
};

const setTime = (game, value) => {
  if (value < 0) {
    throw new RangeError('Time cannot be negative');
  }

  return Object.assign({}, game, {
    timer: value
  });
};

const setCurrentAnswers = (game, value) => {
  if (value < 0 || value > 10) {
    throw new RangeError('Answers can not be more than 10 and less than 0');
  }

  return Object.assign({}, game, {
    currentQuestion: value
  });
};

export default {
  initialGame,
  setLives,
  setTime,
  setCurrentAnswers
};
