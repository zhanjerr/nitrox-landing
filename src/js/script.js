;(function($){
    'use strict';

     /* ==========================================================================
       tab
    ========================================================================== */
    $(".tab-menu>.tab-list>a").on('click', function (e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $(".tab>.tab-content").removeClass("active");
        $(".tab>.tab-content").eq(index).addClass("active");
    });
    /* ==========================================================================

    ========================================================================== */
    var $vdoPop = $('.video');
    if($vdoPop.length > 0){
       $vdoPop.magnificPopup({
          type: 'iframe',
              iframe: {
                  markup: '<style>.mfp-iframe-holder .mfp-content {max-width: 900px;height:500px}</style>' +
                      '<div class="mfp-iframe-scaler" >' +
                      '<div class="mfp-close"></div>' +
                      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                      '</div></div>'
              }
          });
    }


    /* ==========================================================================
       Counter Up
    ========================================================================== */
    var $counter = $('.counter');
    if($counter.length > 0){
        $counter.counterUp({
            delay: 20,
            time: 5000
        });
    }

/* ==========================================================================
        Parallax
    ========================================================================== */
    var $parallax = $('.parallaxie');
    if($parallax.length > 0){
        $parallax.parallaxie({
            speed: 0.5,
        });
    }

/* ==========================================================================
    Screenshot carousel
========================================================================== */
    var $loop = $('.loop')
    if($loop.length > 0){
        $loop.owlCarousel({
        center: true,
        loop:true,
        nav: false,
        dots: false,
        autoplay:true,
        autoplayTimeout:2000,
        margin:25,
        responsive:{
            300:{
                items:3,
                margin:10
            },
            768:{
                items:3,
                margin:60
            },
            991:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });
    }



/* ==========================================================================
    Testimonial Carousel
========================================================================== */

  var quoteCarousel = $('#quote')
    if(quoteCarousel.length > 0){
        quoteCarousel.owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:2500,
        margin: 10,
        nav: false,
        dots: false,
        responsive:{
            300:{
                items:1,
            },
            768:{
                items:2,
            }
        }
    })
  }


    /* ==========================================================================
        Wow
    ========================================================================== */
    new WOW().init();


  /* ==========================================================================
      Beta Sign-up Form
    ========================================================================== */
    $('.subscribe form').submit(function(e) {
        e.preventDefault();
        var postdata = {
            feedback:{
                source: 'Nitrox beta sign-up',
                body: {
                    name: '',
                    email: $('.subscribe input').val()
                }
            }
        };
        $.ajax({
            type: 'POST',
            url: 'https://zachlevy-api-production.herokuapp.com/feedbacks',
            data: postdata,
            dataType: 'json',
            success: function(msg,textStatus,jqXHR) {
                if(jqXHR.status===201){
                    $('.success-message').hide();
                    $('.error-message').hide();
                    $('.error-message').html('Thank you, we will be in touch!');
                    $('.error-message').fadeIn('fast', function(){
                        $('.subscribe form').addClass('animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                            $(this).removeClass('animated shake');
                        });
                    });
                }
                else{
                    $('.success-message').hide();
                    $('.error-message').hide();
                    $('.error-message').html('Opps something went wrong, please try again...');
                    $('.error-message').fadeIn('fast', function(){
                        $('.subscribe form').addClass('animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                            $(this).removeClass('animated shake');
                        });
                    });
                }
            },
            error:function(msg,textStatus,jqXHR) {
                $('.success-message').hide();
                $('.error-message').hide();
                $('.error-message').html('Opps something went wrong, please try again...');
                $('.error-message').fadeIn('fast', function(){
                    $('.subscribe form').addClass('animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                        $(this).removeClass('animated shake');
                    });
                });
            }
        });
    });
    /* ==========================================================================
        Menu click scroll
    ========================================================================== */

    var $navItem = $('.nav a, .demo a');
    if($navItem.length > 0 ){
        $navItem.on('click', function (e) {
            $(document).off("scroll");
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
                || location.hostname == this.hostname) {

                var target = $(this.hash),
                headerHeight = $(".navbar").height()-2; // Get fixed header height

                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

                if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top - headerHeight
                    }, 1000);
                    return false;
                }
            }
        });
    }



})(jQuery);