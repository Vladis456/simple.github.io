const burgerButton = document.querySelector('.nav__burger');
const navList = document.querySelector('.nav__list');
const body = document.querySelector('body');
const searchButton = document.querySelector('.nav__search');
const searchInput = document.querySelector('.nav__search-input');
const navActions = document.querySelector('.nav__actions');
burgerButton.addEventListener(('click'), () => {
    const isActive = navList.classList.contains('nav__list--active')
    if (!isActive) {
        navList.classList.add('nav__list--active');
        burgerButton.classList.add('burger--active');
        burgerButton.setAttribute('aria-expanded', 'true');
        body.style.overflow = 'hidden';
    } else {
        navList.classList.remove('nav__list--active');
        burgerButton.classList.remove('burger--active');
        burgerButton.setAttribute('aria-expanded', 'false');
        body.style.overflow = 'scroll';
    }
})

document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener(('click'), () => {
        navList.classList.remove('nav__list--active');
        burgerButton.classList.remove('burger--active');
        burgerButton.setAttribute('aria-expanded', 'false');
        body.style.overflow = 'scroll';
    })
})
searchButton.addEventListener(('click'), ()=> {
    searchInput.classList.add('nav__search-input--active');
    navActions.style.gap='7px';
})