$('.counter').counterUp({
    delay: 10,
    time: 1000
});




// -----------aos  animation--------
AOS.init();







// ----------------slick slider-----------




$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',

    
    
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows:false,
    
  });



  // test slick slider---------
  $('.test_profiles').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1 ,
  prevArrow:'<i class="fa-solid arrow pre fa-arrow-left"></i>',
  nextArrow:'<i class="fa-solid arrow  nxt fa-arrow-right"></i>',
});