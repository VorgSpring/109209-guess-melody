import AbstractView from 'elements/template/AbstractView';
import player from 'elements/player';

class ArtistView extends AbstractView {
  constructor(content) {
    super(content);
    this.player = null;
  }

  getMarkup() {
    const title = `<h2 class="title main-title">${this.content.question}</h2>`;

    const answers = (items) => {
      return items.reduce((result, item, number) => {
        return result +
          `<div class="main-answer-wrapper">
            <input class="main-answer-r" type="radio" id="answer-${number}" name="answer" value="val-${number}" data-index="${number}">
            <label class="main-answer" for="answer-${number}">
            <img class="main-answer-preview" src="${item.image.url}" width="${item.image.width}" height="${item.image.height}">
            ${item.title}
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
    const playerWrapper = this.element.querySelector('.player-wrapper');
    this.player = player(playerWrapper, this.content.src, true, false);
    const mainWrap = this.element.querySelector('.main-list');
    super._addEvent(mainWrap, 'change', this._onChange.bind(this));
  }

  _onChange() {
    let radioChecked = this.element.querySelectorAll('input[type="radio"]:checked');
    if (radioChecked.length) {
      const index = radioChecked[0].dataset.index;
      const correct = this.content.answers[index].isCorrect;
      const onAnswerEvent = new CustomEvent('onAnswer', {
        bubbles: true,
        cancelable: true,
        detail: {
          correct
        }
      });
      this.player();
      document.dispatchEvent(onAnswerEvent);
    }
  }

  clearHandlers() {
    super.clearHandlers.call(this);
  }
}

export default (content) => new ArtistView(content).element;
