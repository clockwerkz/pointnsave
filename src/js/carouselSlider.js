import '../scss/main.scss';
let timer = null;

let slideIndex = 1;
document.addEventListener("DOMContentLoaded", ()=> {
  showSlides(slideIndex);
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


