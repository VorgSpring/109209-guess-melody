(function () {

  let template = document.querySelector('template');

  let loadTemplate = (templateName) => {
    let content = template.content ? template.content : template;
    return content.querySelector(templateName).cloneNode(true);
  };


  let slides = [
    loadTemplate('.main--welcome'),
    loadTemplate('.main--level-artist'),
    loadTemplate('.main--level-genre'),
    loadTemplate('.main--result')
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
      case 37: current--; break;
      case 39: current++; break;
    }

    select(current);
  };

  select(0);
})();

