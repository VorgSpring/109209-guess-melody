import welcomeModule from 'elements/template/WelcomeView';
import artistModule from 'elements/template/ArtistView';
import genreModule from 'elements/template/GenreView';
import resultModule from 'elements/template/ResultView';

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
