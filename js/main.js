(function () {

  var template = document.querySelector('template');

  var loadTemplate = function (templateName) {
    var content = template.content ? template.content : template;
    return content.querySelector(templateName).cloneNode(true);
  };


  var slides = [
    loadTemplate('.main--welcome'),
    loadTemplate('.main--level-artist'),
    loadTemplate('.main--level-genre'),
    loadTemplate('.main--result')
  ];
  var current = -1;

  var select = function (index) {
    current = index;
    var mainElement = document.querySelector('.main');
    mainElement.parentNode.replaceChild(slides[index], mainElement);
  };

  document.onkeydown = function (evt) {
    evt.preventDefault();

    switch (evt.keyCode) {
      case 37: current--; break;
      case 39: current++; break;
    }

    select(current);
  };

  select(0);
})();

