import getElementFromTemplate from 'elements/template/getElement';
import Engine from 'elements/engine/engine';

export default (content) => {

  const title = `<h2 class="title main-title">${content.title}</h2>`;

  const answers = (items) => {
    return items.reduce((result, item) => {
      return result +
        `<div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id=${item.id} name="answer" value=${item.value} />
          <label class="main-answer" for=${item.id}>
          <img class="main-answer-preview" src="">
          ${item.name}
          </label>
        </div>`;
    }, '');
  };

  const artistMarkup =
    `<section class="main main--level main--level-artist">
      <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
        <circle
          cx="390" cy="390" r="370"
          class="timer-line"
          style="filter: url(../#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center">
        </circle>
  
        <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
          <span class="timer-value-mins">02</span><!--
          --><span class="timer-value-dots">:</span><!--
          --><span class="timer-value-secs">00</span>
        </div>
      </svg>
  
      <div class="main-wrap">
        <div class="main-timer"></div>
          ${title}
        <div class="player-wrapper"></div>
        <form class="main-list">
          ${answers(content.answers)}
        </form>
      </div>
    </section>`;

  const element = getElementFromTemplate(artistMarkup);

  const mainWrap = element.querySelector('.main-list');

  mainWrap.addEventListener('change', () => {
    let radioChecked = mainWrap.querySelectorAll('input[type="radio"]:checked');
    if (radioChecked.length) {
      Engine.nextQuestion();
    }
  });

  return element;
};
