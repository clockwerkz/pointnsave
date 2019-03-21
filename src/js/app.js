import '../scss/main.scss';
import VanillaScrollSpy from 'vanillajs-scrollspy';

const menu = document.getElementById('navbar');
const scrollspy = new VanillaScrollSpy(menu, 3000);
scrollspy.init();

const menuIcon = document.querySelector('.navbar__icon');

menuIcon.addEventListener('click', (e)=> {
    menu.classList.toggle('show');
});