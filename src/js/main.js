require('smoothscroll-polyfill').polyfill();

(function ($) {

  "use strict";

  /* --------------------------------------------------- */
  /* Preloader
  ------------------------------------------------------ */
  $(window).on('load', function () {
    // will first fade out the loading animation
    $("#loader").fadeOut("slow", function () {

      // will fade out the whole DIV that covers the website.
      $("#preloader").delay(300).fadeOut("slow");

    });
  });


  /* --------------------------------------------------- */
  /*  Particle JS
  ------------------------------------------------------ */
  $('.home-particles').particleground({
    dotColor: '#fff',
    lineColor: '#555555',
    particleRadius: 6,
    curveLines: true,
    density: 10000,
    proximity: 110
  });


  /*----------------------------------------------------*/
  /* Smooth Scrolling
  ------------------------------------------------------*/
  $('.smoothscroll').on('click', function (e) {
    e.preventDefault();
    const targetId = this.hash;
    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
  });

})(jQuery);