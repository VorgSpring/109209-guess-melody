import timerModule from 'elements/template/TimerView';

const renderTimer = () => {
  let timer = timerModule();
  let mainElement = document.querySelector('.app');
  mainElement.appendChild(timer);
};

const deleteTimer = () => {
  let timerContainer = document.querySelector('.timer-container');
  timerContainer.parentNode.removeChild(timerContainer);
};

export default {
  renderTimer,
  deleteTimer
};
