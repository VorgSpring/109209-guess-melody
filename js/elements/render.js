const render = (page) => {
  let mainElement = document.querySelector('.main');
  mainElement.parentNode.replaceChild(page, mainElement);
};

export default render;