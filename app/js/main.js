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
})