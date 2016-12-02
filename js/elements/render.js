import welcomeModule from 'elements/welcome';
import artistModule from 'elements/artist';
import genreModule from 'elements/genre';
import resultModule from 'elements/result';

let slides = {
  welcome: welcomeModule,
  artist: artistModule,
  genre: genreModule,
  result: resultModule
};

const render = (slidesName) => {
  let mainElement = document.querySelector('.main');
  mainElement.parentNode.replaceChild(slides[slidesName], mainElement);
};

export default render;
