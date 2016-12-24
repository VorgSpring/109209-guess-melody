import questionsData from 'elements/data/questions';

export const initialGame = {
  lives: 3,
  gameTime: 0,
  correctAnswers: 0,
  currentQuestion: 0
};

export const setLives = (game, value) => {
  if (value < 0 || value > 3) {
    throw new RangeError('The number of lives can not be more than 3 and less than 0');
  }

  return Object.assign({}, game, {
    lives: value
  });
};

export const setTime = (game, value) => {
  if (value < 0) {
    throw new RangeError('Time cannot be negative');
  }

  return Object.assign({}, game, {
    gameTime: value
  });
};

export const setCorrectAnswers = (game, value) => {
  if (value < 0 || value > 10) {
    throw new RangeError('Answers can not be more than 10 and less than 0');
  }

  return Object.assign({}, game, {
    correctAnswers: value
  });
};

export const setCurrentQuestion = (game, value) => {
  if (value < 0 || value > 10) {
    throw new RangeError('Question can not be more than 10 and less than 0');
  }

  return Object.assign({}, game, {
    currentQuestion: value
  });
};

export const hasQuestion = (numberOfQuestion) => {
  return typeof questionsData[numberOfQuestion] !== 'undefined';
};

export const getQuestion = (numberOfQuestion) => {
  if (!hasQuestion(numberOfQuestion)) {
    throw new RangeError('This game has no this question');
  }

  return questionsData[numberOfQuestion];
};
