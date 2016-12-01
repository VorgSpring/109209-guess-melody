import getElementFromTemplate from 'elements/getElement';
import render from 'elements/render';
import resultModule from 'elements/result';

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

const genreMarkupNode = getElementFromTemplate(genreMarkup),
  genreForm = genreMarkupNode.querySelector('.genre'),
  genreFormButton = genreForm.querySelector('.genre-answer-send');

genreForm.addEventListener('change', () => {
  let genreCheckboxsChecked = genreMarkupNode.querySelectorAll('input[type="checkbox"]:checked');
  genreFormButton.disabled = !genreCheckboxsChecked.length;
});

genreForm.addEventListener('submit', (event) => {
  event.preventDefault();
  render(resultModule);
});

export default genreMarkupNode;
