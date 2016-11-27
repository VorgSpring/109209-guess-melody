import {welcomeModule} from 'elements/welcome';
import {artistModule} from 'elements/artist';
import {genreModule} from 'elements/genre';
import {resultModule} from 'elements/result';

(function () {
  let slides = [
    welcomeModule,
    artistModule,
    genreModule,
    resultModule
  ];
  let current = -1;

  let select = (index) => {
    current = index;
    let mainElement = document.querySelector('.main');
    mainElement.parentNode.replaceChild(slides[index], mainElement);
  };

  document.onkeydown = (evt) => {
    evt.preventDefault();

    switch (evt.keyCode) {
      case 37: current--;
        break;
      case 39: current++;
        break;
    }

    select(current);
  };

  select(0);
})();

