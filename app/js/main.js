$(function(){
  $('.product__slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/arrow-right.svg" alt=""></button>',
  });
  document.body.addEventListener('scroll', function() {
    var el = $('header');
    var className = 'fixed';
    if (document.body.scrollTop > 131 ) {
    if (!el.hasClass(className))
    el.addClass(className);
    }
    else {
    if (el.hasClass(className))
    el.removeClass(className);
    }
    });
    
})