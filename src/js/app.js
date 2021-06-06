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

const navBar = document.querySelector('nav');

const handleScroll = debounce((e)=> {
    console.log(window.scrollY);
}, 250)

menuIcon.addEventListener('click', (e)=> {
    document.querySelector('.navbar-mobile__wrapper').classList.toggle('show');
});

menuIconClose.addEventListener('click', (e)=> {
    document.querySelector('.navbar-mobile__wrapper').classList.toggle('show');
});

document.getElementById("dashboard-selection").addEventListener("change", (e)=>{
    const linkRedirect = `https://www.youtube.com/embed/${e.target.value}`;
    const dashboardEmbeddedVideo = document.getElementById("dashboard-video");
    console.log(linkRedirect);
    dashboardEmbeddedVideo.src = linkRedirect;
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

//Modal 

const modalWrapper = document.querySelector('.modal__wrapper');

const privacyPolicy = document.getElementById('privacy-policy');

const termsOfService = document.getElementById('terms-of-service');


modalWrapper.addEventListener('click', closeModal);

termsOfService.addEventListener('click', (e)=>{
    e.preventDefault();
    openModal();
});

privacyPolicy.addEventListener('click', (e)=>{
    e.preventDefault();
    openModal();
    document.getElementById('privacy-modal').classList.add('modal__body--show');
});

termsOfService.addEventListener('click', (e)=>{
    e.preventDefault();
    openModal();
    document.getElementById('terms-of-service-modal').classList.add('modal__body--show');
});

const modalCloseBtns = document.querySelectorAll('.btn--modal-close');
modalCloseBtns.forEach(btn => btn.addEventListener('click',closeModal));



function closeModal() {
    modalWrapper.classList.add('modal__wrapper--hide');
    document.getElementById('privacy-modal').classList.remove('modal__body--show');
    document.getElementById('terms-of-service-modal').classList.remove('modal__body--show');
    document.querySelector('body').classList.remove('disable-scroll');
}

function openModal() {
    modalWrapper.classList.remove('modal__wrapper--hide');
    document.querySelector('body').classList.add('disable-scroll');
}


function debounce(func, wait, immediate) {
    var timeout;
  
    return function executedFunction() {
      var context = this;
      var args = arguments;
          
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
  
      var callNow = immediate && !timeout;
      
      clearTimeout(timeout);
  
      timeout = setTimeout(later, wait);
      
      if (callNow) func.apply(context, args);
    };
  };

  
