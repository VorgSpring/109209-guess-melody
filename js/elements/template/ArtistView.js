import Engine from 'elements/engine/engine';
import AbstractView from 'elements/template/AbstractView';

class ArtistView extends AbstractView {
  constructor(content) {
    super(content);
  }

  getMarkup() {
    const title = `<h2 class="title main-title">${this.content.title}</h2>`;

    const answers = (items) => {
      return items.reduce((result, item, number) => {
        return result +
          `<div class="main-answer-wrapper">
            <input class="main-answer-r" type="radio" id="answer-${number}" name="answer" value="val-${number}" data-index="${number}">
            <label class="main-answer" for="answer-${number}">
            <img class="main-answer-preview" src="${item.img}">
            ${item.name}
            </label>
          </div>`;
      }, '');
    };

    return `<section class="main main--level main--level-artist">
        <div class="main-wrap">
          <div class="main-timer"></div>
            ${title}
          <div class="player-wrapper"></div>
          <form class="main-list">
            ${answers(this.content.answers)}
          </form>
        </div>
      </section>`;
  }

  bindHandlers() {
    const mainWrap = this.element.querySelector('.main-list');

    mainWrap.addEventListener('change', () => {
      let radioChecked = mainWrap.querySelectorAll('input[type="radio"]:checked');
      if (radioChecked.length) {
        const index = radioChecked[0].dataset.index;
        const correct = this.content.answers[index].correct;
        Engine.nextQuestion(correct);
      }
    });
  }

  _onChange() {

  }
}

export default (content) => new ArtistView(content).element;
