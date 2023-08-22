const navToggle = document.querySelector('.main-nav__toggle');
const mainNav = document.querySelector('.main-nav');

const sliderButton = document.querySelector('.slider__button');
const slider = document.querySelector('.slider');

mainNav.classList.remove('main-nav--no-js');

if (navToggle) {
  navToggle.addEventListener('click', function (importantEvent) {
    if(mainNav.classList.contains('main-nav--closed')) {
      importantEvent.preventDefault();
      mainNav.classList.remove('main-nav--closed');
      mainNav.classList.add('main-nav--opened');
    } else {
      mainNav.classList.add('main-nav--closed');
      mainNav.classList.remove('main-nav--opened');
    }
  });
}

if (sliderButton) {
  sliderButton.addEventListener('click', () => {
    const stateBefore = document.querySelector('.slider--state-before');
    const stateAfter = document.querySelector('.slider--state-after');
    if (stateBefore || stateAfter) {
      slider.classList.toggle('slider--state-before');
      slider.classList.toggle('slider--state-after');
    } else {
      slider.classList.add('slider--state-after');
    }
  })
}
