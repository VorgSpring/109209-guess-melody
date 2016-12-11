import getElementFromTemplate from 'elements/template/getElement';
import Engine from 'elements/engine/engine';

export default (content) => {

  const title = `<section class="logo" title="Угадай мелодию"><h1>${content.title}</h1></section>`;

  const resultGame = `<h2 class="title">${content.result.title}</h2>
    <div class="main-stat">${content.result.status}</div>
    <span class="main-comparison">${content.result.comparison}</span>`;

  const button = `<span role="button" tabindex="0" class="main-replay">${content.buttonReset}</span>`;

  const resultMarkup =
    `<section class="main main--result">
      ${title}
      ${resultGame}
      ${button}
    </section>`;

  const element = getElementFromTemplate(resultMarkup);

  let buttonReset = element.querySelector('.main-replay');
  buttonReset.addEventListener('click', () => Engine.restartGame());

  return element;
};
