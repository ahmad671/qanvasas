(function($) {
  
  "use strict";

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    /* 
   One Page Navigation & wow js
   ========================================================================== */
    //Initiat WOW JS
    new WOW().init();

    // one page navigation 
    $('.main-navigation').onePageNav({
            currentClass: 'active'
    }); 

    $(window).on('load', function() {
       
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });

        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 200) {
                $('.fixed-top').addClass('menu-bg');
            } else {
                $('.fixed-top').removeClass('menu-bg');
            }
        });

    });

    // Slick Nav 
    $('.mobile-menu').slicknav({
      prependTo: '.navbar-header',
      parentTag: 'span',
      allowParentLinks: true,
      duplicate: false,
      label: '',
    });


/* 
   CounterUp
   ========================================================================== */
    $('.counter').counterUp({
      time: 1000
    });

/* 
   MixitUp
   ========================================================================== */
  $('#portfolio').mixItUp();

/* 
   Touch Owl Carousel
   ========================================================================== */
    var owl = $(".touch-slider");
    owl.owlCarousel({
      navigation: false,
      pagination: true,
      slideSpeed: 1000,
      stopOnHover: true,
      autoPlay: true,
      items: 2,
      itemsDesktop : [1199,2],
      itemsDesktopSmall: [1024, 2],
      itemsTablet: [600, 1],
      itemsMobile: [479, 1]
    });

    $('.touch-slider').find('.owl-prev').html('<i class="fa fa-chevron-left"></i>');
    $('.touch-slider').find('.owl-next').html('<i class="fa fa-chevron-right"></i>');

/* 
   Sticky Nav
   ========================================================================== */
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.header-top-area').addClass('menu-bg');
        } else {
            $('.header-top-area').removeClass('menu-bg');
        }
    });

/* 
   VIDEO POP-UP
   ========================================================================== */
    $('.video-popup').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    });


  /* 
   SMOOTH SCROLL
   ========================================================================== */
    var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';

    $('a.scrollto').on('bind', 'click.smoothscroll', function (event) {
        event.preventDefault();
        var target = this.hash;
        
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, scrollAnimationTime, scrollAnimation, function () {
            window.location.hash = target;
        });
    });

/* 
   Back Top Link
   ========================================================================== */
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click',function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    })

/* Nivo Lightbox
  ========================================================*/   
   $('.lightbox').nivoLightbox({
    effect: 'fadeScale',
    keyboardNav: true,
  });


/* stellar js
  ========================================================*/
  $.stellar({
    horizontalScrolling: true,
    verticalOffset: 40,
    responsive: true
  });

/* 
   Page Loader
   ========================================================================== */
  $('#loader').fadeOut();

}(jQuery));

/* 
   News Blog
   ========================================================================== */

$(document).ready(function() {
    $("#news-slider").owlCarousel({
        items:3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[1000,2],
        itemsMobile:[650,1],
        pagination:false,
        navigationText:false,
        autoPlay:true
    });
});

/* 
  Testimonial
  ========================================================================== */

  // vars
  'use strict'
  var	testim = document.getElementById("testim"),
      testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
      testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
      testimLeftArrow = document.getElementById("left-arrow"),
      testimRightArrow = document.getElementById("right-arrow"),
      testimSpeed = 4500,
      currentSlide = 0,
      currentActive = 0,
      testimTimer,
      touchStartPos,
      touchEndPos,
      touchPosDiff,
      ignoreTouch = 30;
  ;
  
  window.onload = function() {
  
      // Testim Script
      function playSlide(slide) {
          for (var k = 0; k < testimDots.length; k++) {
              testimContent[k].classList.remove("active");
              testimContent[k].classList.remove("inactive");
              testimDots[k].classList.remove("active");
          }
  
          if (slide < 0) {
              slide = currentSlide = testimContent.length-1;
          }
  
          if (slide > testimContent.length - 1) {
              slide = currentSlide = 0;
          }
  
          if (currentActive != currentSlide) {
              testimContent[currentActive].classList.add("inactive");            
          }
          testimContent[slide].classList.add("active");
          testimDots[slide].classList.add("active");
  
          currentActive = currentSlide;
      
          clearTimeout(testimTimer);
          testimTimer = setTimeout(function() {
              playSlide(currentSlide += 1);
          }, testimSpeed)
      }
  
      testimLeftArrow.addEventListener("click", function() {
          playSlide(currentSlide -= 1);
      })
  
      testimRightArrow.addEventListener("click", function() {
          playSlide(currentSlide += 1);
      })    
  
      for (var l = 0; l < testimDots.length; l++) {
          testimDots[l].addEventListener("click", function() {
              playSlide(currentSlide = testimDots.indexOf(this));
          })
      }
  
      playSlide(currentSlide);
  
      // keyboard shortcuts
      document.addEventListener("keyup", function(e) {
          switch (e.keyCode) {
              case 37:
                  testimLeftArrow.click();
                  break;
                  
              case 39:
                  testimRightArrow.click();
                  break;
  
              case 39:
                  testimRightArrow.click();
                  break;
  
              default:
                  break;
          }
      })
      
      testim.addEventListener("touchstart", function(e) {
          touchStartPos = e.changedTouches[0].clientX;
      })
    
      testim.addEventListener("touchend", function(e) {
          touchEndPos = e.changedTouches[0].clientX;
        
          touchPosDiff = touchStartPos - touchEndPos;
        
          console.log(touchPosDiff);
          console.log(touchStartPos);	
          console.log(touchEndPos);	
  
        
          if (touchPosDiff > 0 + ignoreTouch) {
              testimLeftArrow.click();
          } else if (touchPosDiff < 0 - ignoreTouch) {
              testimRightArrow.click();
          } else {
            return;
          }
        
      })
  }

