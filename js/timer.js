// Окружность уменьшается за счет штриховки. Фактически, обводка состоит
// из одного длинного штриха, а пропуск за счет расстояния до следующего
// штриха. Задача правильной заливки состоит в том, чтобы правильно
// задать расстояние до следующего штриха.
//
// Из радиуса можно рассчитать длину окружности. При известной длине окружности,
// количестве шагов и номере текущего шага в анимации можно понять, на сколько
// нужно уменьшать длину окружности на текущем шаге. Для этого надо вычесть
// из нее длину одного шага умноженную на номер текущего шага.
//
// Длина окружности = 2πR
// Длина шага = Длина окружности / Количество шагов
// Пропуск = Длина шага * Номер шага
const redrawCircle = (circle, radius, animation) => {
  const length = 2 * Math.PI * radius;
  const stepLength = length / animation.steps;
  const lengthToClear = stepLength * animation.step;

  circle.setAttributeNS(null, 'r', radius.toString());
  circle.setAttributeNS(null, 'stroke-dasharray', length.toString());
  circle.setAttributeNS(null, 'stroke-dashoffset', lengthToClear.toString());

  return circle;
};


const addLeadingZero = (val) => val < 10 ? `0${val}` : val;


const redrawTimer = (timer, animation) => {
  const total = animation.stepDuration * animation.steps;
  const passed = animation.stepDuration * animation.step;
  const timeLeft = window.formatTime(total, passed);

  timer.querySelector('.timer-value-mins').textContent = addLeadingZero(timeLeft.minutes);
  timer.querySelector('.timer-value-secs').textContent = addLeadingZero(timeLeft.seconds);

  return timer;
};


window.initializeCountdown = () => {
  const element = document.querySelector('.timer-line');
  const radius = parseInt(element.getAttributeNS(null, 'r'), 10);
  const timer = document.querySelector('.timer-value');

  return window.animation.animate(window.animation.getAnimation(0, 1000, 4), (animation) => {
    redrawCircle(element, radius, animation);
    redrawTimer(timer, animation);
  }, () => timer.classList.add('timer-value--finished'));
};
