import statistics from './statistics';

export default class Gamer {
  constructor() {
    // жизни
    this.lives = 3;
    // время игры
    this.timeGame = 0;
    // правильные ответы
    this.currentAnswers = 0;
  }

  get resultGame() {
    // формируем объект
    const result = {
      time: this.timeGame,
      answers: this.currentAnswers
    };
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
      count: this.currentAnswers,
      time: this.formatTime,
      comparison: `${comparison}%`
    };
  }

  get formatTime() {
    const minutes = Math.floor(this.timeGame / 60);
    let seconds = this.timeGame % 60;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    if (minutes === 2) {
      return '02:00';
    } else {
      return `0${minutes}:${seconds}`;
    }
  }
}
