import welcomeModule from 'elements/template/welcome';
import artistModule from 'elements/template/artist';
import genreModule from 'elements/template/genre';
import resultModule from 'elements/template/result';

let slides = {
  welcome: welcomeModule,
  artist: artistModule,
  genre: genreModule,
  result: resultModule
};

const render = (slidesName, data) => {
  let mainElement = document.querySelector('.main');
  mainElement.parentNode.replaceChild(slides[slidesName](data), mainElement);
};

export default render;
