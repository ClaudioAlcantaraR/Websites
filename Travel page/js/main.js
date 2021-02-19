$(document).ready(function () {
  //navbar toggler
  $('#navbar-toggler').click(function () {
    $('.navbar-nav').slideToggle(600);
  });

  //fixed navbar

  $(window).scroll(function () {
    let position = $(window).scrollTop();
    if (position >= 100) {
      $('.navbar-wrapper').addClass('fxd-navbar-wrapper');
      $('.navbar-toggler').css('color', '#e7e7e7');
      $('.nav-link').css('color', '#343434');
    } else {
      $('.navbar-wrapper').removeClass('fxd-navbar-wrapper');
      $('.navbar-toggler').css('color', '#e7e7e7');
      $('.nav-link').css('color', '#e7e7e7');
    }
  })

  // Slick

  $('.gallery').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.test-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true
  })
});