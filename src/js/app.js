import '../scss/main.scss';
import VanillaScrollSpy from 'vanillajs-scrollspy';

const menu = document.getElementById('navbar');
const menuMobile = document.getElementById('navbar__mobile');
const scrollspy = new VanillaScrollSpy(menu, 3000);
scrollspy.init();
const scrollspyMobile = new VanillaScrollSpy(menuMobile, 3000);
scrollspyMobile.init();

const menuIcon = document.querySelector('.navbar__icon');
const menuIconClose = document.querySelector('.navbar-mobile__close');
const selectorBtns = document.querySelectorAll('.selector__button');
const industryInfo = document.querySelectorAll('.industry-info');

menuIcon.addEventListener('click', (e)=> {
    document.querySelector('.navbar-mobile__wrapper').classList.toggle('show');
});

menuIconClose.addEventListener('click', (e)=> {
    document.querySelector('.navbar-mobile__wrapper').classList.toggle('show');
});

selectorBtns.forEach(btn => btn.addEventListener('click', (e)=> {
    selectorBtns.forEach(selector => selector.classList.remove('selected'));
    e.target.classList.add('selected');
    const itemShown = document.querySelector('.industry-info--show');
    if (itemShown) {

        itemShown.classList.remove('industry-info--show');
    }
    console.log(e.target.dataset.value);
    document.getElementById(e.target.dataset.value).classList.add('industry-info--show');
}));