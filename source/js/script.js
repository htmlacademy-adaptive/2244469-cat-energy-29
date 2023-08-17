const navToggle = document.querySelector('.main-nav__toggle');
const mainNav = document.querySelector('.main-nav');

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
