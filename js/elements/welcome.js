import getElementFromTemplate from 'elements/getElement';
import render from 'elements/render';
import artistModule from 'elements/artist';

const welcomeMarkup =
  `<section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;2 минуты дать
      максимальное количество правильных ответов.<br>
      На&nbsp;каждую мелодию всего 3 варианта ответа.<br>
      Удачи!
    </p>
  </section>`;

const welcomeMarkupNode = getElementFromTemplate(welcomeMarkup);

let buttonPlay = welcomeMarkupNode.querySelector('.main-play');
buttonPlay.addEventListener('click', () => render(artistModule));

export default welcomeMarkupNode;

