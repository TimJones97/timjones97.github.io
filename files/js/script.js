var controller;
var scenes = [];
var activeScenes = [];
var smScene;
var scrollMagicEnabled = false;
var firstTime = true;

function preventScrollOnMenuOpen(){
  //If the dropdown menu on mobile is open
  if ($(".collapse.in").length){
    $("body").css("overflow-y", "hidden");
    //If user scrolls when menu open 
    //Then closes menu without selection
    //Check if the menu has been closed after 1000msecs
    setTimeout(function(){
      preventScrollOnMenuOpen();
    }, 1500);
  } 
  //Prevent scrolling until menu is closed
  else {
    $("body").css("overflow-y", "scroll");
  }
}
function applyEffects(element){
  $(".portfolio-image").not(element).css("-webkit-filter", "blur(5px)");
  $(".portfolio-image").not(element).css("filter", "blur(5px)");
  $(".portfolio-image").not(element).css("opacity", "0.6");
  // element.parent().css("transform", "scale(1.05)");
  // $(".portfolio-image").parent().not(element.parent()).css("transform", "scale(0.95)");
  $(".portfolio-image").not(element).next().css("opacity", "0.3");
}

function resetEffects(element){
  element.removeAttr("style");
  $(".portfolio-image").not(element).removeAttr("style");
  $(".portfolio-image").not(element).next().removeAttr("style");
  // element.parent().removeAttr("style");
  // $(".portfolio-image").parent().not(element.parent()).removeAttr("style");
  // element.prev().prev().removeAttr("style");
}

function hoverEffects() {
  $(".brendan").parent().hover(
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Brendan Anning Wedding Celebrant").animate({'opacity': 1}, 200);
      });
      applyEffects($(this).find(".portfolio-image"));
    },
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Portfolio").animate({'opacity': 1}, 200);
      });
      resetEffects($(this).find(".portfolio-image"));
    }
  );
  $(".aml").parent().hover(
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("AML Asset Management").animate({'opacity': 1}, 200);
      });
      applyEffects($(this).find(".portfolio-image"));
    },
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Portfolio").animate({'opacity': 1}, 200);
      });
      resetEffects($(this).find(".portfolio-image"));
    }
  );
  $(".tla").parent().hover(
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("TLA Logistics Management").animate({'opacity': 1}, 200);
      });
      applyEffects($(this).find(".portfolio-image"));
    },
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Portfolio").animate({'opacity': 1}, 200);
      });
      resetEffects($(this).find(".portfolio-image"));
    }
  );
  $(".qutrunning").parent().hover(
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("QUT Running Club").animate({'opacity': 1}, 200);
      });
      applyEffects($(this).find(".portfolio-image"));
    },
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Portfolio").animate({'opacity': 1}, 200);
      });
      resetEffects($(this).find(".portfolio-image"));
    }
  );
  $(".quteb").parent().hover(
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("QUT Exchange Club").animate({'opacity': 1}, 200);
      });
      applyEffects($(this).find(".portfolio-image"));
    },
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Portfolio").animate({'opacity': 1}, 200);
      });
      resetEffects($(this).find(".portfolio-image"));
    }
  );
  $(".daryl").parent().hover(
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Daryl Murphy Brisbane Entertainer").animate({'opacity': 1}, 200);
      });
      applyEffects($(this).find(".portfolio-image"));
    },
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Portfolio").animate({'opacity': 1}, 200);
      });
      resetEffects($(this).find(".portfolio-image"));
    }
  );
  $(".aaron").parent().hover(
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Aaron Maybus DJ").animate({'opacity': 1}, 200);
      });
      applyEffects($(this).find(".portfolio-image"));
    },
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Portfolio").animate({'opacity': 1}, 200);
      });
      resetEffects($(this).find(".portfolio-image"));
    }
  );
  $(".new").parent().hover(
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("And more to come.").animate({'opacity': 1}, 200);
      });
      applyEffects($(this).find(".portfolio-image"));
    },
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Portfolio").animate({'opacity': 1}, 200);
      });
      resetEffects($(this).find(".portfolio-image"));
    }
  );
  $(".food-interact").hover(
    function() {
      $(".food-background").addClass("active");
    },
    function() {
      $(".food-background").removeClass("active");
    }
  );
  $(".skill-item").hover(function() {
    var thisElement = $(this);
    thisElement.css("opacity", "0");
    setTimeout( function(){
      $('skills').find("skill-item").css('opacity', '0');
      thisElement.css("opacity", "1");
    }, 1000);
  });
  $(".experience-item").click(function() {
    var thisElement = $(this);
    thisElement.css("opacity", "0");
    setTimeout( function(){
      $('experience').find("experience-item").css('opacity', '0');
      thisElement.css("opacity", "1");
    }, 1000);
  });
  // //Make skill item disappear on hover for 800ms
  // $('.skill-item')
  //   .mouseover(function() {
  //     $(this).css("opacity", "0");
  //   })
  //   .mouseout(function() {
  //     setTimeout( function(){
  //       $(this).css("opacity", "1");
  //     }, 3200);
  //   });
}

function navbarElementHoverAnim(){
  $(".navbar-nav li").hover(
    function() {
      $(this).children().next().addClass('full-width');
    },
    function() {
      $(this).children().next().removeClass('full-width');
    }
  );
}
function addWhiteNav(){
  $(".navbar-nav li a").css("color", "black");
  $(".navbar-default").css("background-color", "rgba(0, 0, 0, 0.8)");
  $(".navbar-collapse").css("background-color", "rgba(0, 0, 0, 0.8)");
  $(".navbar-default").css("border-top", "none");
  $(".navbar-default").css("height", "57px");
}
function addTransparentNav(){
  //Make navbar transparent if scroll position is on main section
  $(".navbar-default").css("background-color", "transparent");
  $(".navbar-default").css("border-top", "none");
  $(".navbar-collapse").css("background-color", "none");
  $(".navbar-nav li a").css("margin-top", "40px");
  $(".navbar-default").css("height", "100px");
  $(".navbar-nav li:nth-of-type(2)").css("padding-left", "40px");
  $(".navbar-nav li a:hover").css("color", "#fff");
  $(".navbar-nav li .navbar-brand").css("margin-top", "25px");
  $(".navbar-brand").attr("src", "https://timothyjones.com.au/files/img/logo_nav_ow.png");
}
function addWhiteNavDesktop(){
  $(".navbar-default").css("background-color", "rgba(0, 0, 0, 0.8)");
  $(".navbar-default").css("border-top", "none");
  $(".navbar-default").css("display", "block");
  $(".navbar-collapse").css("background-color", "none");
  $(".navbar-nav li:nth-of-type(2)").css("padding-left", "0px");
  $(".navbar-nav li a").css("margin-top", "10px");
  $(".navbar-nav li a").css("opacity", "1");
  $(".navbar-default").css("height", "75px");
  $(".navbar-nav li .navbar-brand").css("margin-top", "-5px");
  $(".navbar-brand").attr("src", "https://timothyjones.com.au/files/img/logo_nav_wo.png");
}

function animateNavbar(){
  //If on mobile
  if($(window).width() < 767){
    $(".navbar-default").addClass("opaque");
    addWhiteNav();
  }
  //If on desktop
  else {
    //Scroll position is in About section
    if($(document).scrollTop() > 1) {
      addWhiteNavDesktop();     
      $( ".navbar-nav li a" ).each(function( index ) {
        //Set each of the underline to the width of each nav element text
        $(this).next().css('max-width', $(this).width() + 'px');
      });
    }
    //Scroll position is in Main section
    else {
      //Make navbar transparent if scroll position is on main section
      addTransparentNav();
    }
  }
}

function createGoTopArrow(){
  var target = "#home";
  var offset = 0;

  // Set the background arrow dependent on the page scroll location  
  if ($(this).scrollTop() > 70) {        // If page is scrolled more than 70px
    $('.arrow-img').css("background", "url('./files/img/icons/arrow_up.png");    // Change arrow to up
    $('.arrow').css("background", "rgba(0, 0, 0, 0.7)");    // Add background
    if($(window).width() > 767){
      setTimeout(function(){ //Add delay in case of resizing
        $('.arrow').css("bottom", "70px");
      }, 200);
    }
    target = "#home";
  } 
  else {
    $('.arrow-img').css("background", "url('./files/img/icons/arrow_down.png");    // Change arrow to down
    $('.arrow').css("background", "none");    // Remove background
    if($(window).width() > 767){
      setTimeout(function(){
        $('.arrow').css("bottom", "6px");   
      }, 200);
    }
    target = "#about";
  }
  $(window).scroll(function() {
    if ($(this).scrollTop() > 70) {        
      $('.arrow-img').css("background", "url('./files/img/icons/arrow_up.png");   
      $('.arrow').css("background", "rgba(0, 0, 0, 0.7)");  
      if($(window).width() > 767){
        setTimeout(function(){
          $('.arrow').css("bottom", "70px");  
        }, 200);
      }  
      target = "#home";
    } 
    else {
      $('.arrow-img').css("background", "url('./files/img/icons/arrow_down.png");    
      $('.arrow').css("background", "none");
      if($(window).width() > 767){
        setTimeout(function(){
          $('.arrow').css("bottom", "6px");
        }, 200);
      }
      target = "#about";
    }
  });

  $('.arrow').click(function() {      // When arrow is clicked
    //If not on desktop, make offset -51px for mobile screens to line up with top of section headers
    if($(window).width() < 767){
      offset = -52.5;
    }
    else {
      offset = 0;
    }
    $(target).velocity("scroll", { duration: 1000, offset: offset });
  });
}

//Reset the elements that require resizing
function setMainElements(){
  $(".main").css("height", $(window).height() + "px");
  $(".navbar-nav li a").removeAttr("style"); 
  
  //If the window is a square and not rectangular
  if($(window).width() < $(window).height() * 1.7) {
    $("video").css("height", "100vh");
    $("video").css("width", "auto");
  }
  else {
    $("video").css("height", "auto");
    $("video").css("width", "100vw");
  }
  
  //Reset all styles on navbar if on desktop width
  if($(window).width() > 767) {
    $(".navbar-default").removeAttr("style");
    // $(".navbar-nav li a").removeAttr("style");   
    $(".navbar-collapse").removeAttr("style");
    $(".navbar-collapse .navbar-nav").removeClass("transparent");
  }
  else {
    $( ".navbar-nav li a" ).each(function( index ) {
      $(this).css('width', '100%');
    });
  }
}

$(window).resize(function () { 
  // console.log('RESIZED'); 
  $(".bars").removeClass("active");
  setMainElements();
  // if($(document).scrollTop() == 0){
  //   $(".navbar-nav li a").css("margin-top", "40px");
  //   $(".navbar-nav li .navbar-brand").css("margin-top", "25px");
  // }
  // else {
  //   $(".navbar-nav li a").css("margin-top", "10px");
  //   $(".navbar-nav li .navbar-brand").css("margin-top", "-5px");
  // }
  $(".navbar-default").css('display', 'block');
  $(".navbar-nav li").css('opacity', '1');
  $(".navbar-nav li").css('animation-name', 'unset');
  $(".navbar-nav li").css('-webkit-animation-name', 'unset');
  animateNavbar();
  $( ".navbar-nav li a" ).each(function( index ) {
    //Set each of the underline to the width of each nav element text
    $(this).next().css('max-width', $(this).width() + 'px');
  });
});

function createScrollRevealEffects(){
  var slideInConfig;
  var fadeInConfig;
  if($(window).width() > 767) {
    slideInConfig = {
      origin: 'bottom',
      duration: 800,
      distance: '400px',
      scale: '0.5',
      viewOffset: {
        bottom: 700
      },
      //If effect has already occured, remove styles applied by scrollReveal
      //to allow for hover transform effects to still occur
      afterReveal: function() {
        setTimeout(function(){
          $('.portfolio-image').removeAttr("style");
          //Reset the height again after removal
          hoverEffects();
        }, 1000);
      }
    }
  }
  else {
    slideInConfig = {
      origin: 'bottom',
      duration: 600,
      distance: '400px',
      scale: '0.9',
      afterReveal: function() {
        setTimeout(function(){
          $('.portfolio-image').removeAttr("style");
          //Reset the height again after removal
          hoverEffects();
        }, 1000);
      }
    }
  }
  if($(window).width() > 767) {
    fadeInConfig = {
      duration: 800,
      origin: 'bottom',
      distance: '400px',
      scale: '0.5',
      viewOffset: {
        bottom: 700
      },
      afterReveal: function() {
        setTimeout(function(){
          $('.skill-item').removeAttr("style");
          $('.portfolio-item').removeAttr("style");
          hoverEffects();
        }, 400);
      }
    }
  }
  else {
    fadeInConfig = {
      duration: 1000,
      origin: 'bottom',
      distance: '400px',
      scale: '0.5',
      afterReveal: function() {
        setTimeout(function(){
          $('.skill-item').removeAttr("style");
          $('.portfolio-item').removeAttr("style");
          hoverEffects();
        }, 600);
      }
    }
  }

  window.sr = ScrollReveal();

  sr.reveal('.portfolio-item', slideInConfig);
  sr.reveal('.skill-item', fadeInConfig);

  sr.reveal($('.portfolio-image.aml').parent(),  { delay: 400  });
  sr.reveal($('.portfolio-image.tla').parent(),  { delay: 500  });
  sr.reveal($('.portfolio-image.qutrunning').parent(),  { delay: 600 });
  sr.reveal($('.portfolio-image.quteb').parent(),  { delay: 700 });
  sr.reveal($('.portfolio-image.daryl').parent(),  { delay: 800 });
  sr.reveal($('.portfolio-image.aaron').parent(),  { delay: 900 });
  sr.reveal($('.portfolio-image.new').parent(),  { delay: 1000 });

  sr.reveal('.skill-item.one',  { delay: 400  });
  sr.reveal('.skill-item.two',  { delay: 450  });
  sr.reveal('.skill-item.three',  { delay: 500 });
  sr.reveal('.skill-item.four',  { delay: 650 });
  sr.reveal('.skill-item.five',  { delay: 700 });
  sr.reveal('.skill-item.six',  { delay: 750 });
  sr.reveal('.skill-item.seven',  { delay: 800 });
  sr.reveal('.skill-item.eight',  { delay: 850 });
  sr.reveal('.skill-item.nine',  { delay: 900 });
  sr.reveal('.skill-item.ten',  { delay: 950 });
  sr.reveal('.skill-item.eleven',  { delay: 1000 });
  sr.reveal('.skill-item.twelve',  { delay: 1050 });
}

function bindVelocity(){
  // bind click event to all internal page anchors
  $('a[href*="#"]').on('click', function (e) {
      // prevent default action and bubbling
      e.preventDefault();
      e.stopPropagation();
      // set target to anchor's "href" attribute
      var target = $(this).attr('href');

      if(target == "#home" || target == "#home2" || target == "#about" || 
        target == "#portfolio" || target == "#portfolio2" || target == "#skills" || 
        target == "#experience" || target == "#contact" || target == "#about2") {

        //If arrow up or arrow down pressed, convert ID to actual ID instead of toggling menu bar active class
        if(target == "#about2"){
          target = "#about";
        }
        else if (target == "#portfolio2"){
          target = "#portfolio";
        }
        else {
          if($(window).width() < 767){
            $('.navbar-collapse.in').collapse('hide');
            document.getElementById('bars').classList.toggle('active');
          }
        }
      }
      // scroll to each target
      if($(window).width() < 767){
        $(target).velocity("scroll", { duration: 1000, offset: -52.5 });
      }
      else {
        $(target).velocity("scroll", 1000);
      }
  });
}

Pace.restart();
Pace.on("done", function(){
  if ( $('.pace-progress').attr('data-progress-text') == '100%' ) {
      $('.preloader-wrap').fadeOut(1000);
      $(".background-wrapper").attr("data-anim","true");
      $('.background-wrapper').addClass("active");
      if($(window).width() < 767){
        $('.navbar-default').css("display", "block");
        $('.navbar-nav li a').css('opacity', '1');
      }
      else {
        setTimeout(function(){
          $('.navbar-default').css("display", "block");
        },3000);
        setTimeout(function(){
          $( ".navbar-nav li a" ).each(function( index ) {
            //Set each of the underline to the width of each nav element text
            $(this).next().css('max-width', $(this).width() + 'px');
          });
        },3100);
      }
      setTimeout(function(){
        $('.title-text').css("display", "block");
      },1000);
      setTimeout(function(){
        $('.highlight-red').addClass('active');
      },2100);
      setTimeout(function(){
        $('.highlight-purple').addClass('active');
      },2400);
  } 
});
function fadeOutVideo(){
  var height = ($(window).height() / 1.5);
  $('video').css({
    'opacity': ((height - $(document).scrollTop()) / (height))
  });
}
$( document ).ready(function() {

  if($(window).width() < 991) {
    $(".main").css("height", $(window).innerHeight());
  }
  $(".bars").removeClass("active");
  
  setMainElements();
  hoverEffects();
  createGoTopArrow();
  animateNavbar();
  navbarElementHoverAnim();
  createScrollRevealEffects();
  bindVelocity();

  $(window).scroll(function() { 
    animateNavbar();   
    preventScrollOnMenuOpen();
  });
  if($(document).scrollTop() > 0){
    $(".navbar-default").css('opacity', '1');
  }
  var theDate = new Date(); 
  $(".year").text(theDate.getFullYear());
});