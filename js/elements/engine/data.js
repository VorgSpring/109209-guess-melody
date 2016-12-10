import welcomeData from 'elements/data/welcome';
import questionsData from 'elements/data/questions';
import resultData from 'elements/data/result';

const Data = {
  currentQuestion: 0,

  getWelcome() {
    return welcomeData;
  },

  getFirstQuestion() {
    return {
      templateName: questionsData[this.currentQuestion].type,
      contents: questionsData[this.currentQuestion].content
    };
  },

  getNextQuestion() {
    this.currentQuestion++;

    if(this.currentQuestion === questionsData.length) {
      return this._getResult();
    }

    return {
      templateName: questionsData[this.currentQuestion].type,
      contents: questionsData[this.currentQuestion].content
    };
  },

  restart() {
    this.currentQuestion = 0;
  },

  _getResult() {
    return {
      end: resultData
    }
  }
};

export default Data;
