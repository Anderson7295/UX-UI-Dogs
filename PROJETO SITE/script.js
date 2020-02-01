$(document).ready(function(){
    $('header button').on('click', function(){
        $('.menu, header button').toggleClass('active');
    });
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:15,
      center:true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      responsiveClass:true,
      dotsEach: true,
      responsive:{
        0:{
          items:1,
          singleItem:true
        },
        600:{
          items:2,
        },
        1000:{
          items:3,
          nav:false
        },
      }
  })
});
