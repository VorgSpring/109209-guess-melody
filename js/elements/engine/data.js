import welcomeData from 'elements/data/welcome';
import questionsData from 'elements/data/questions';

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

    if (this.currentQuestion === questionsData.length) {
      return {
        end: true
      };
    }

    return {
      templateName: questionsData[this.currentQuestion].type,
      contents: questionsData[this.currentQuestion].content
    };
  },

  restart() {
    this.currentQuestion = 0;
  }
};

export default Data;
