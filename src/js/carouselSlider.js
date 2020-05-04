import '../scss/main.scss';
let timer = null;
const lightImgs = document.querySelectorAll('.slideshow__img--light');
const mobilePhone = document.querySelector('.mobile-phone');

let slideIndex = 1;
document.addEventListener("DOMContentLoaded", ()=> {
  showSlides(slideIndex);
  //startTimer();
})

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


