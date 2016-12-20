import getElementFromTemplate from 'elements/template/getElement';
import Engine from 'elements/engine/engine';

export default (content) => {

  const resultGame = `<h2 class="title">${content.title}</h2>
    <div class="main-stat">За&nbsp;${content.time}<br>вы&nbsp;отгадали ${content.count}&nbsp;мелодии</div>
    <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${content.comparison}&nbsp;% игроков</span>`;

  const resultMarkup =
    `<section class="main main--result">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      ${resultGame}
      <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </section>`;

  const element = getElementFromTemplate(resultMarkup);

  let buttonReset = element.querySelector('.main-replay');
  buttonReset.addEventListener('click', () => Engine.restartGame());

  return element;
};
