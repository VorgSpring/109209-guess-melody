import AbstractView from 'elements/template/AbstractView';
import player from 'elements/player';

class GenreView extends AbstractView {
  constructor(content) {
    super(content);
    this.players = [];
  }

  getMarkup() {
    const title = `<h2 class="title">${this.content.question}</h2>`;

    const answers = (items) => {
      return items.reduce((result, item, number) => {
        return result +
          `<div class="genre-answer">
            <div class="player-wrapper"></div>
            <input type="checkbox" name="answer" value="answer-${number}" id="a-${number}" data-index="${number}">
            <label class="genre-answer-check" for="a-${number}"></label>
          </div>`;
      }, '');
    };

    return `<section class="main main--level main--level-genre">
        ${title}
        <form class="genre">
          ${answers(this.content.answers)}
          <button class="genre-answer-send" type="submit" disabled>Ответить</button>
        </form>
      </section>`;
  }

  bindHandlers() {
    this.content.answers.forEach((item, number) => {
      const playerWrapper = this.element.querySelectorAll('.player-wrapper')[number];
      this.players.push(player(playerWrapper, item.src));
    });
    const form = this.element.querySelector('.genre');
    super._addEvent(form, 'change', this._onChange);
    super._addEvent(form, 'submit', this._onSubmit.bind(this));
  }

  _onChange() {
    const formButton = this.querySelector('.genre-answer-send');
    const checkboxsChecked = this.querySelectorAll('input[type="checkbox"]:checked');
    formButton.disabled = !checkboxsChecked.length;
  }

  _onSubmit(event) {
    event.preventDefault();
    let checkboxs = this.element.querySelectorAll('input[type="checkbox"]:checked');
    let correct = true;
    for (let checkbox of checkboxs) {
      const index = checkbox.dataset.index;
      correct = this.content.answers[index].genre === this.content.answers.genre;
      if (!correct) {
        break;
      }
    }
    let correctAnswers = this.content.answers.filter((item) => {
      return item.genre === this.content.answers.genre;
    });

    if (checkboxs.length !== correctAnswers.length) {
      correct = false;
    }

    const onAnswerEvent = new CustomEvent('onAnswer', {
      bubbles: true,
      cancelable: true,
      detail: {
        correct
      }
    });
    this.players.forEach((player) => {
      player();
    });
    document.dispatchEvent(onAnswerEvent);
  }

  clearHandlers() {
    super.clearHandlers.call(this);
  }
}

export default (content) => new GenreView(content).element;
