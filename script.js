let slideIndex = 0;
      let slideTimer;

      function showSlides(n) {
        const slides = document.getElementsByClassName("mySlides");
        if (n === undefined) n = slideIndex;
        for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slideIndex = n;
        if (slideIndex >= slides.length) slideIndex = 0;
        if (slideIndex < 0) slideIndex = slides.length - 1;
        slides[slideIndex].style.display = "block";
      }

      function nextSlide() {
        showSlides(slideIndex + 1);
      }

      function changeSlide(n) {
        showSlides(slideIndex + n);
        resetSlideTimer();
      }

      function resetSlideTimer() {
        clearInterval(slideTimer);
        slideTimer = setInterval(nextSlide, 10000);
      }

      // Initialize slideshow
      document.addEventListener("DOMContentLoaded", function() {
        showSlides(slideIndex);
        slideTimer = setInterval(nextSlide, 10000);
      });