'use strict';

export const getElementFromTemplate = (markup) => {
  let element = document.createElement('template');
  element.innerHTML = markup;
  console.log(element.content.firstChild);
  return element.content.firstChild;
};
