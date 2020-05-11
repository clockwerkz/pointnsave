import '../scss/main.scss';
import { fadeSlider } from './fadeSlider';
import { createSlider } from './createSlider';
const delay = 8000;

let quoteIndex = 1;
document.addEventListener("DOMContentLoaded", ()=> {
  //showSlides(slideIndex);
  const heroSlider = createSlider(heroSliderSetup);
  const mobilePhoneSlides = fadeSlider(".mobile-phone", 4000, 1);
  const quotesSlides = fadeSlider("#hero", delay, 1);
  mobilePhoneSlides.init(1);
  quotesSlides.init(1);
      window.addEventListener('focus', function() {
        heroSlider.setSlideTimer();
        mobilePhoneSlides.startTimer();
        quotesSlides.startTimer();
    });
    window.addEventListener('blur', function() {
        heroSlider.stopTimer();
        mobilePhoneSlides.stopTimer();
        quotesSlides.stopTimer();
    });
});


const heroSliderSetup = {
  dimension : 100,
  carouselObj : document.querySelector("#hero"),
  delay
}


