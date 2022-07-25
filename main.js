const hamb = document.querySelector('.hamb-field');
const navBgOverlay = document.querySelector('.nav__bgOverlay');
const navList = document.querySelector('.nav__list');


// Поменять кнопку на крестик;
// Добавить тень при открытии меню;
// Запретить скрол и нажатия на странице при открытом меню;

const openMenu = (e) => {
  e.preventDefault();
  hamb.classList.toggle('active');
  navBgOverlay.classList.toggle('active');
  navList.classList.toggle('show')
    ? document.body.style = 'visibility: visible; width: 100vw; height: 100vh; overflow: hidden;'
    : document.body.style = 'overflow-x: hidden;'
}


// Закрыть меню при клике вне области меню;
// Открыть-закрыть меню при нажатии на кнопку;

navBgOverlay.addEventListener('click', openMenu)
hamb.addEventListener('click', openMenu);


//AOS

AOS.init({
  offset: 200, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom'
});

