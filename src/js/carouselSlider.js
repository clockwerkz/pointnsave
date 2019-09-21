import '../scss/main.scss';
let timer = null;
const lightImgs = document.querySelectorAll('.slideshow__img--light');
const darkImgs = document.querySelectorAll('.slideshow__img--dark');
const mobilePhone = document.querySelector('.mobile-phone');

let slideIndex = 1;
showSlides(slideIndex);
startTimer();

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
  var slides = document.getElementsByClassName("mySlides");
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


document.querySelector('.next').addEventListener('click', function() {
  stopTimer();
  plusSlides(1);
  startTimer();
});
document.querySelector('.prev').addEventListener('click', function() {
  stopTimer();
  plusSlides(-1);
  startTimer();
});

var checkbox = document.querySelector(".toggle-switch");

function toggleSwitchText() {
  const switchText = document.querySelectorAll('.switch__text');
  switchText.forEach((txt)=> {
    if (txt.classList.contains('switch__text--active')) {
      txt.classList.remove('switch__text--active');
    } else {
      txt.classList.add('switch__text--active');
    }
  });
}

checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        mobilePhone.classList.add('mobile-phone--dark');
        mobilePhone.classList.remove('mobile-phone--light');
        lightImgs.forEach((img)=> {
          img.classList.remove('show');
          img.classList.add('hide');
        });
        darkImgs.forEach((img)=> {
          img.classList.remove('hide');
          img.classList.add('show');
        });
    } else {
      mobilePhone.classList.add('mobile-phone--light');
      mobilePhone.classList.remove('mobile-phone--dark');
      lightImgs.forEach((img)=> {
        img.classList.remove('hide');
        img.classList.add('show');
      });
      darkImgs.forEach((img)=> {
        img.classList.remove('show');
        img.classList.add('hide');
      });
    }
    toggleSwitchText();
});
