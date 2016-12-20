import getElementFromTemplate from 'elements/template/getElement';
import Engine from 'elements/engine/engine';

export default (content) => {

  const title = `<h2 class="title">${content.title}</h2>`;

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

  const genreMarkup =
    `<section class="main main--level main--level-genre">
      ${title}
      <form class="genre">
        ${answers(content.answers)}
        <button class="genre-answer-send" type="submit" disabled>Ответить</button>
      </form>
    </section>`;

  const element = getElementFromTemplate(genreMarkup);
  const form = element.querySelector('.genre');
  const formButton = form.querySelector('.genre-answer-send');

  form.addEventListener('change', () => {
    let checkboxsChecked = element.querySelectorAll('input[type="checkbox"]:checked');
    formButton.disabled = !checkboxsChecked.length;
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let checkboxs = element.querySelectorAll('input[type="checkbox"]:checked');
    let correct = true;
    for (let checkbox of checkboxs) {
      const index = checkbox.dataset.index;
      correct = content.answers[index].correct;
      if (!correct) {
        break;
      }
    }
    Engine.nextQuestion(correct);
  });

  return element;
};
