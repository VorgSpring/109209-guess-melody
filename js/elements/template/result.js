import Engine from 'elements/engine/engine';
import AbstractView from 'elements/template/view';

class ResultView extends AbstractView {
  constructor(content) {
    super(content);
  }

  getMarkup() {
    const resultGame =
      `<h2 class="title">${this.content.title}</h2>
      <div class="main-stat">За&nbsp;${this.content.time}<br>вы&nbsp;отгадали ${this.content.count}&nbsp;мелодии</div>
      <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${this.content.comparison}&nbsp;% игроков</span>`;

    return `<section class="main main--result">
        <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
        ${resultGame}
        <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
      </section>`;
  }

  bindHandlers() {
    let buttonReset = this.element.querySelector('.main-replay');
    buttonReset.addEventListener('click', () => Engine.restartGame());
  }
}

export default (content) => new ResultView(content).element;

// export default (content) => {
//
//   const resultGame = `<h2 class="title">${content.title}</h2>
//     <div class="main-stat">За&nbsp;${content.time}<br>вы&nbsp;отгадали ${content.count}&nbsp;мелодии</div>
//     <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${content.comparison}&nbsp;% игроков</span>`;
//
//   const resultMarkup =
//     `<section class="main main--result">
//       <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
//       ${resultGame}
//       <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
//     </section>`;
//
//   const element = getElementFromTemplate(resultMarkup);
//
//   let buttonReset = element.querySelector('.main-replay');
//   buttonReset.addEventListener('click', () => Engine.restartGame());
//
//   return element;
// };
