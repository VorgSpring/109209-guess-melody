import Engine from 'elements/engine/engine';
import AbstractView from 'elements/template/AbstractView';

class GenreView extends AbstractView {
  constructor(content) {
    super(content);
  }

  getMarkup() {
    const title = `<h2 class="title">${this.content.title}</h2>`;

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
    const form = this.element.querySelector('.genre');
    const formButton = form.querySelector('.genre-answer-send');

    form.addEventListener('change', () => {
      let checkboxsChecked = form.querySelectorAll('input[type="checkbox"]:checked');
      formButton.disabled = !checkboxsChecked.length;
    });

    form.addEventListener('submit', () => {
      event.preventDefault();
      let checkboxs = form.querySelectorAll('input[type="checkbox"]:checked');
      let correct = true;
      for (let checkbox of checkboxs) {
        const index = checkbox.dataset.index;
        correct = this.content.answers[index].correct;
        if (!correct) {
          break;
        }
      }
      let correctAnswers = this.content.answers.filter((item) => {
        return item.correct;
      });

      if (checkboxs.length !== correctAnswers.length) {
        correct = false;
      }
      Engine.nextQuestion(correct);
    });
  }
}

export default (content) => new GenreView(content).element;
