import anime from 'animejs/lib/anime.es.js';

const animateShake = targets => {
  const xMax = 16;
  anime({
    targets,
    easing: 'easeInOutSine',
    duration: 550,
    translateX: [
      {
        value: xMax * -1,
      },
      {
        value: xMax,
      },
      {
        value: xMax / -2,
      },
      {
        value: xMax / 2,
      },
      {
        value: 0
      }
    ],
  });
}

export default animateShake