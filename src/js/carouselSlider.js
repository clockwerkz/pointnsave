import '../scss/main.scss';
const delay = 8000;

let timer = null;

let slideIndex = 1;
document.addEventListener("DOMContentLoaded", ()=> {
  showSlides(slideIndex);
  createSlider(heroSliderSetup);
  startTimer();
})

function createSlideshow(el) {
  let slideIndex = 1;
  let timer = null;
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  function showSlides(n) {
    var i;
    var slides = document.querySelectorAll(".mobile-phone .mySlides");
    if (n > slides.length) {
        slideIndex = 1
      } else if (n < 1) {
          slideIndex = slides.length
      } else {
          slideIndex = n;
      }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }
  
  function startTimer() {
    if (timer === null) {
      timer = setInterval(function() {
        showSlides(slideIndex+1);
      }, 4000);
    }
  }
  
  function stopTimer() {
    clearInterval(timer);
    timer = null;
  }
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.querySelectorAll(".mobile-phone .mySlides");
  if (n > slides.length) {
      slideIndex = 1
    } else if (n < 1) {
        slideIndex = slides.length
    } else {
        slideIndex = n;
    }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function startTimer() {
  if (timer === null) {
    timer = setInterval(function() {
      showSlides(slideIndex+1);
    }, 4000);
  }
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}


document.querySelector('.mobile-phone .next').addEventListener('click', function() {
  stopTimer();
  plusSlides(1);
  startTimer();
});
document.querySelector('.mobile-phone .prev').addEventListener('click', function() {
  stopTimer();
  plusSlides(-1);
  startTimer();
});



const heroSliderSetup = {
  dimension : 100,
  carouselObj : document.querySelector("#hero")
}

function createSlider ( { dimension, carouselObj } )  {
  const slider = carouselObj.querySelector('.carousel__panels');
  const quotes = ["asdda qqwe da eqw asdqwqd d sadad asdqwe qqwdcbh ger", "vjrt sasd adwq cfsfasd cdgdgf csdd qwdq fwegs zaasd", "sdhmgfd jyjer fasfs ff g xdv ser gwef rhd gs rsgd dsfdd", "efsa gsdv dsdsafwe fsa fwegas segesg"]
  const authors = ["Arcadia Chamber of Commerce","Chino Valley Chamber", "NOCC", "Sweet Shade"];
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





