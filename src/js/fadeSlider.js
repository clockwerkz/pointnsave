export const fadeSlider = (target, delay, slideIndex) => {
    const el = target +"  .mySlides";
    console.log(el);
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
      var slides = document.querySelectorAll(el);
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
  
    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
  
  // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function startTimer() {
      if (timer === null) {
        timer = setInterval(function() {
          showSlides(slideIndex+1);
        }, delay);
      }
    }
    
    function stopTimer() {
      clearInterval(timer);
      timer = null;
    }
  
    function init(n) {
      showSlides(1);
      startTimer();
      document.querySelector(target+' .next').addEventListener('click', function() {
        stopTimer();
        plusSlides(1);
        startTimer();
      });
      document.querySelector(target+' .prev').addEventListener('click', function() {
        stopTimer();
        plusSlides(-1);
        startTimer();
      });
    }
  
    return { 
      init,
      plusSlides,
      startTimer,
      stopTimer
    }
  }