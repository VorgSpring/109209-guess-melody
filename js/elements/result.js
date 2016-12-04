import getElementFromTemplate from 'elements/getElement';
import render from 'elements/render';

const result = {
  title: 'Угадай мелодию',
  result: {
    title: 'Вы настоящий меломан!',
    status: 'За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали 4&nbsp;мелодии',
    comparison: 'Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков'
  },
  buttonReset: 'Сыграть ещё раз'
};

export default (content) => {

  const title = `<section class="logo" title="Угадай мелодию"><h1>${content.title}</h1></section>`;

  const result = `<h2 class="title">${content.result.title}</h2>
    <div class="main-stat">${content.result.status}</div>
    <span class="main-comparison">${content.result.comparison}</span>`;

  const button = `<span role="button" tabindex="0" class="main-replay">${content.buttonReset}</span>`;

  const resultMarkup =
    `<section class="main main--result">
    ${title}
    ${result}
    ${button}
  </section>`;

  const element = getElementFromTemplate(resultMarkup);

  let buttonReset = element.querySelector('.main-replay');
  buttonReset.addEventListener('click', () => render('welcome'));

  return element;
}
