// $(document).ready(function () {

// // main js Start
//   // type your code 
// // main js end
// });


$(window).scroll(function(){
  $('header').toggleClass('scrolled', $(this).scrollTop() > 100);
});

$(window).scroll(function(){
  $('.navbar-nav li').toggleClass('scrolled', $(this).scrollTop() > 100);
});


var loader = document.getElementById('preloader');
function preLoader(){
  loader.style.display = 'none';

}

$('.dot-list').owlCarousel({
  loop:true,
  autoplayHoverPause:true,
  margin: 30,                              
  nav:false,
  autoplay: true,
  dots: true,
  smartSpeed:1000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      700:{
          items:2
      },
      1000:{
          items:3
      }
  }
});

jQuery(document).ready(function( $ ){
  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });


});

