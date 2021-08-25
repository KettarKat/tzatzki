$(function(){
  $('.product__slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/arrow-right.svg" data-bw="images/icons/arrow-right.svg" data-color="images/icons/arrow-hover-right.svg" alt=""></button>',
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/arrow-left.svg" data-bw="images/icons/arrow-left.svg" data-color="images/icons/arrow-hover-left.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        }
      }
    ]
  });
  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
        elem = $(".features__inner"); 
    if(windowWidth < 680){
      elem.addClass('features__inner-slider');
    }
    else{
      elem.removeClass('features__inner-slider');
    }
  }
  checkWidth(); 
  $(window).trigger('resize', function(){
    checkWidth(); 
  });
  $('.slick-arrow').on('mouseleave', function() {
    $(this).find('img').attr('src', function(){
        return $(this).data('bw');
    });
});
$('.slick-arrow').on('mouseover', function() {
    $(this).find('img').attr('src', function(){
        return $(this).data('color');
    });
});
  document.body.addEventListener('scroll', function() {
    var el = $('header');
    var className = 'fixed';
    if (document.body.scrollTop > 81 ) {
    if (!el.hasClass(className))
    el.addClass(className);
    }
    else {
    if (el.hasClass(className))
    el.removeClass(className);
    }
    });
    $('.menu__links').on('click', function(){
      $('.dropdown__menu-fixed').addClass('active');
    });
    $('.banner__slick').slick({
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      responsive: [
        {
          breakpoint: 680,
          settings: {
            dots: false,
          }
        }
      ]
    });
    $('input, select').styler();
    $(".delivery").on('click', function(){
      $(".order__product-delivery").toggleClass("active");
      $(".order__product-address").toggleClass("disabled");
    });
    $(".pickup").on('click', function(){
      $(".order__product-delivery").toggleClass("active");
      $(".order__product-address").toggleClass("disabled");
    });
    
    $('.header__menu-btn').on('click', function() {
      $('.menu__list').slideToggle();
      $('.header__menu-btn').toggleClass('active');
    })
    $('#gallery .thumbs a').on('click', function(e) {
      e.preventDefault();
      var url = $(this).children('img').attr('src');
      $('#gallery .full img').animate({
        opacity: 0
      }, 280, function() {
        $('#gallery .full img').attr('src', url);
        $('#gallery .full img').animate({
          opacity: 1
        }, 280);
      });
    });
    var mixer = mixitup('.shop__inner-box');   
      thumbs.onclick = function(event) {
      let thumbnail = event.target.closest('a');
      if (!thumbnail) return;
      showThumbnail(thumbnail.href, thumbnail.title);
      event.preventDefault();
    }
});