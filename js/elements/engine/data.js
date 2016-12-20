import welcomeData from 'elements/data/welcome';
import questionsData from 'elements/data/questions';
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
  },

  getResultGame(result) {
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
      title: 'Вы настоящий меломан!',
      count: result.answers,
      time: formatTime(result.time),
      comparison: comparison
    };
  }
};

export default Data;
