export const getElementFromTemplate = (markup) => {
  let element = document.createElement('template');
  element.innerHTML = markup;
  return element.content.firstChild;
};
