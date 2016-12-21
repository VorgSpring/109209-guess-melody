import Engine from 'elements/engine/engine';
import AbstractView from 'elements/template/view';

class WelcomeView extends AbstractView {
  constructor(content) {
    super(content);
  }

  getMarkup() {
    const title =
      `<section class="logo" title="Угадай мелодию">
        <h1>${this.content.title}</h1>
      </section>`;

    const button = `<button class="main-play">${this.content.buttonPlay}</button>`;

    const rules =
      `<h2 class="title main-title">${this.content.rules.title}</h2>
       <p class="text main-text">${this.content.rules.text}</p>`;

    return `<section class="main main--welcome">
        ${title}
        ${button}
        ${rules}
      </section>`;
  }

  bindHandlers() {
    let buttonPlay = this.element.querySelector('.main-play');
    buttonPlay.addEventListener('click', () => Engine.startGame());
  }
}

export default (content) => new WelcomeView(content).element;

// export default (content) => {
//
//   const title = `<section class="logo" title="Угадай мелодию"><h1>${content.title}</h1></section>`;
//
//   const button = `<button class="main-play">${content.buttonPlay}</button>`;
//
//   const rules =
//     `<h2 class="title main-title">${content.rules.title}</h2>
//      <p class="text main-text">${content.rules.text}</p>`;
//
//   const welcomeMarkup =
//     `<section class="main main--welcome">
//       ${title}
//       ${button}
//       ${rules}
//     </section>`;
//
//   const element = getElementFromTemplate(welcomeMarkup);
//
//   let buttonPlay = element.querySelector('.main-play');
//   buttonPlay.addEventListener('click', () => Engine.startGame());
//
//   return element;
// };
