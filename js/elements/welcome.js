import getElementFromTemplate from 'elements/getElement';
import render from 'elements/render';

const welcome = {
  title: 'Угадай мелодию',
  buttonPlay: 'Начать игру',
  rules: {
    title: 'Правила игры',
    text: `Правила просты&nbsp;— за&nbsp;2 минуты дать
      максимальное количество правильных ответов.<br>
      На&nbsp;каждую мелодию всего 3 варианта ответа.<br>
      Удачи!`
  }
};

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
  buttonPlay.addEventListener('click', () => render('artist'));

  return element;
}
