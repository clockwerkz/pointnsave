import '../scss/main.scss';
import { fadeSlider } from './fadeSlider';
const delay = 8000;

let quoteIndex = 1;
document.addEventListener("DOMContentLoaded", ()=> {
  //showSlides(slideIndex);
  const mobilePhoneSlides = fadeSlider(".mobile-phone", 4000, 1);
  mobilePhoneSlides.init(1);
  createSlider(heroSliderSetup);
});


const heroSliderSetup = {
  dimension : 100,
  carouselObj : document.querySelector("#hero")
}

function createSlider ( { dimension, carouselObj } )  {
  const slider = carouselObj.querySelector('.carousel__panels');
  const quotesText = ["asdda qqwe da eqw asdqwqd d sadad asdqwe qqwdcbh ger", "vjrt sasd adwq cfsfasd cdgdgf csdd qwdq fwegs zaasd", "sdhmgfd jyjer fasfs ff g xdv ser gwef rhd gs rsgd dsfdd", "efsa gsdv dsdsafwe fsa fwegas segesg"]
  const authorsText = ["Arcadia Chamber of Commerce","Chino Valley Chamber", "NOCC", "Sweet Shade"];
  const quote = document.getElementById("quote");
  const author = document.getElementById("quote-author");
  let quoteIdx = 1;
  let transX = -(dimension);
  let objWidth = dimension;
  let upperLimit = -(dimension*4);
  let lowerLimit = 0;
  let reset=false;
  let setTransition = false;
  let timerObj=null;


  let leftControl = carouselObj.querySelector('.carousel__control--left-control');
  let rightControl = carouselObj.querySelector('.carousel__control--right-control');

  leftControl.addEventListener('click', ()=>{
    if (timerObj) {
      clearInterval(timerObj);
      timerObj=null;
    }
    if (transX>= lowerLimit) return;
    setAnimationTransition();
    transX+=objWidth;
    setTranslate(transX);
    setSlideTimer();
  });

  const changeQuote = () => {
    let i = quoteIdx++ % quotesText.length;
    quote.textContent = quotesText[i];
    author.textContent = authorsText[i];
  }
  
  rightControl.addEventListener('click', ()=>{
    if (timerObj) {
      clearInterval(timerObj);
      timerObj=null;
    }
    if (transX<=upperLimit) return;
    setAnimationTransition();
    transX-=objWidth;
    setTranslate(transX);
    setSlideTimer();
  });
  
  
  slider.addEventListener('transitionend', ()=> {
    if (transX<=upperLimit) {
      setAnimationTransition(false);
      transX=lowerLimit-objWidth;
      setTranslate(transX);
    } else if (transX>= lowerLimit) {
      setAnimationTransition(false);
      transX=upperLimit+100;
      setTranslate(transX);
    }
  });
  
  const setSlideTimer = () => {
    if (!timerObj) {
      timerObj = setInterval(()=> {
        changeQuote();
        setAnimationTransition();
        transX-=objWidth;
        setTranslate(transX);
      }, delay);
    }
  }
  
  const setTranslate = (value) => {
      slider.style.transform = `translateX(${value}%)`;
  }
  
  const setAnimationTransition = (animated=true) => 
    slider.style.transition = (animated ? 'transform 0.75s ease-in-out' : 'none');
  
  
  setSlideTimer();
}
