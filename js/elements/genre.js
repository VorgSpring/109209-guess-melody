import getElementFromTemplate from 'elements/getElement';
import render from 'elements/render';

const genreMarkup =
  `<section class="main main--level main--level-genre">
    <h2 class="title">Выберите инди-рок треки</h2>
    <form class="genre">
      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-1">
        <label class="genre-answer-check" for="a-1"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-2">
        <label class="genre-answer-check" for="a-2"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-3">
        <label class="genre-answer-check" for="a-3"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-4">
        <label class="genre-answer-check" for="a-4"></label>
      </div>

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
  render('result');
});

export default element;
