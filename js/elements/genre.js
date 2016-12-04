import getElementFromTemplate from 'elements/getElement';
import render from 'elements/render';

const genre = {
  title: 'Выберите инди-рок треки',
  answers: [
    {
      id: 'a-1',
      value: 'answer-1'
    },
    {
      id: 'a-2',
      value: 'answer-2'
    },
    {
      id: 'a-3',
      value: 'answer-3'
    },
    {
      id: 'a-4',
      value: 'answer-4'
    }
  ],
  formButton: 'Ответить'
};

export default (content) => {

  const title = `<h2 class="title">${content.title}</h2>`;

  const answers = (items) => {
    return items.reduce((result, item) => {
      return result +
        `<div class="genre-answer">
      <div class="player-wrapper"></div>
      <input type="checkbox" name="answer" value=${item.value} id=${item.id}>
      <label class="genre-answer-check" for=${item.id}></label>
    </div>`;
    }, '');
  };

  const button = `<button class="genre-answer-send" type="submit" disabled>${content.formButton}</button>`;

  const genreMarkup =
    `<section class="main main--level main--level-genre">
    ${title}
    <form class="genre">
      ${answers(content.answers)}
      ${button}
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
    render('result');
  });

  return element;
}
