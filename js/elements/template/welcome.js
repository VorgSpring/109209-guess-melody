import getElementFromTemplate from 'elements/template/getElement';
import Engine from 'elements/engine/engine';

export default (content) => {

  const title = `<section class="logo" title="Угадай мелодию"><h1>${content.title}</h1></section>`;

  const button = `<button class="main-play">${content.buttonPlay}</button>`;

  const rules =
    `<h2 class="title main-title">${content.rules.title}</h2>
     <p class="text main-text">${content.rules.text}</p>`;

  const welcomeMarkup =
    `<section class="main main--welcome">
      ${title}
      ${button}
      ${rules}
    </section>`;

  const element = getElementFromTemplate(welcomeMarkup);

  let buttonPlay = element.querySelector('.main-play');
  buttonPlay.addEventListener('click', () => Engine.startGame());

  return element;
};
