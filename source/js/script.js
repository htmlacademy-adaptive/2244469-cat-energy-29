const navToggle = document.querySelector('.main-nav__toggle');
const navList = document.querySelector('.navigation-list');

const sliderButton = document.querySelector('.slider__button');
const slider = document.querySelector('.slider');

navList.classList.remove('navigation-list--no-js');

if (navToggle) {
  navToggle.addEventListener('click', function (importantEvent) {
    if(navList.classList.contains('navigation-list--closed')) {
      importantEvent.preventDefault();
      navList.classList.remove('navigation-list--closed');
      navList.classList.add('navigation-list--opened');
      navToggle.classList.remove('main-nav__toggle--closed');
      navToggle.classList.add('main-nav__toggle--opened');
    } else {
      navList.classList.add('navigation-list--closed');
      navList.classList.remove('navigation-list--opened');
      navToggle.classList.add('main-nav__toggle--closed');
      navToggle.classList.remove('main-nav__toggle--opened');
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
