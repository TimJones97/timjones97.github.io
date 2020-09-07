var isMobile = false;
var egg = false;
var tl;
var controller;
const originalEgg = $('.dvd-wrap').children().first().next().clone();
var coinCounter = 0;

function preventScrollOnMenuOpen(){
  //If the dropdown menu on mobile is open
  if ($(".collapse.in").length){
    $("body").css("overflow-y", "hidden");
    //If user scrolls when menu open 
    //Then closes menu without selection
    //Check if the menu has been closed after 1000msecs
    setTimeout(function(){
      preventScrollOnMenuOpen();
    }, 1500, true);
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
  // $(".brendan").parent().hover(function() {
  //   $(".portfolio-title").stop().animate({
  //       'opacity': 0
  //   }, 200, function() {
  //       $(".portfolio-title").text("Brendan Anning Wedding Celebrant").animate({
  //           'opacity': 1
  //       }, 200);
  //   });
  //   applyEffects($(this).find(".portfolio-image"));
  // }, function() {
  //   $(".portfolio-title").stop().animate({
  //       'opacity': 0
  //   }, 200, function() {
  //       $(".portfolio-title").text("Portfolio").animate({
  //           'opacity': 1
  //       }, 200);
  //   });
  //   resetEffects($(this).find(".portfolio-image"));
  // });
  // $(".aml").parent().hover(function() {
  //   $(".portfolio-title").stop().animate({
  //       'opacity': 0
  //   }, 200, function() {
  //       $(".portfolio-title").text("AML Asset Management").animate({
  //           'opacity': 1
  //       }, 200);
  //   });
  //   applyEffects($(this).find(".portfolio-image"));
  // }, function() {
  //   $(".portfolio-title").stop().animate({
  //       'opacity': 0
  //   }, 200, function() {
  //       $(".portfolio-title").text("Portfolio").animate({
  //           'opacity': 1
  //       }, 200);
  //   });
  //   resetEffects($(this).find(".portfolio-image"));
  // });
  // $(".tla").parent().hover(function() {
  //   $(".portfolio-title").stop().animate({
  //       'opacity': 0
  //   }, 200, function() {
  //       $(".portfolio-title").text("TLA Logistics Management").animate({
  //           'opacity': 1
  //       }, 200);
  //   });
  //   applyEffects($(this).find(".portfolio-image"));
  // }, function() {
  //   $(".portfolio-title").stop().animate({
  //       'opacity': 0
  //   }, 200, function() {
  //       $(".portfolio-title").text("Portfolio").animate({
  //           'opacity': 1
  //       }, 200);
  //   });
  //   resetEffects($(this).find(".portfolio-image"));
  // });
  // $(".qutrunning").parent().hover(function() {
  //   $(".portfolio-title").stop().animate({
  //       'opacity': 0
  //   }, 200, function() {
  //       $(".portfolio-title").text("QUT Running Club").animate({
  //           'opacity': 1
  //       }, 200);
  //   });
  //   applyEffects($(this).find(".portfolio-image"));
  // }, function() {
  //   $(".portfolio-title").stop().animate({
  //       'opacity': 0
  //   }, 200, function() {
  //       $(".portfolio-title").text("Portfolio").animate({
  //           'opacity': 1
  //       }, 200);
  //   });
  //   resetEffects($(this).find(".portfolio-image"));
  // });
  // $(".quteb").parent().hover(function() {
  //   $(".portfolio-title").stop().animate({
  //       'opacity': 0
  //   }, 200, function() {
  //       $(".portfolio-title").text("QUT Exchange Club").animate({
  //           'opacity': 1
  //       }, 200);
  //   });
  //   applyEffects($(this).find(".portfolio-image"));
  // }, function() {
  //   $(".portfolio-title").stop().animate({
  //       'opacity': 0
  //   }, 200, function() {
  //       $(".portfolio-title").text("Portfolio").animate({
  //           'opacity': 1
  //       }, 200);
  //   });
  //   resetEffects($(this).find(".portfolio-image"));
  // });
  // $(".daryl").parent().hover(function() {
  //   $(".portfolio-title").stop().animate({
  //       'opacity': 0
  //   }, 200, function() {
  //       $(".portfolio-title").text("Daryl Murphy Brisbane Entertainer").animate({
  //           'opacity': 1
  //       }, 200);
  //   });
  //   applyEffects($(this).find(".portfolio-image"));
  // }, function() {
  //   $(".portfolio-title").stop().animate({
  //       'opacity': 0
  //   }, 200, function() {
  //       $(".portfolio-title").text("Portfolio").animate({
  //           'opacity': 1
  //       }, 200);
  //   });
  //   resetEffects($(this).find(".portfolio-image"));
  // });
  // $(".aaron").parent().hover(function() {
  //   $(".portfolio-title").stop().animate({
  //       'opacity': 0
  //   }, 200, function() {
  //       $(".portfolio-title").text("Aaron Maybus DJ").animate({
  //           'opacity': 1
  //       }, 200);
  //   });
  //   applyEffects($(this).find(".portfolio-image"));
  // }, function() {
  //   $(".portfolio-title").stop().animate({
  //       'opacity': 0
  //   }, 200, function() {
  //       $(".portfolio-title").text("Portfolio").animate({
  //           'opacity': 1
  //       }, 200);
  //   });
  //   resetEffects($(this).find(".portfolio-image"));
  // });
  // $(".new").parent().hover(function() {
  //   $(".portfolio-title").stop().animate({
  //       'opacity': 0
  //   }, 200, function() {
  //       $(".portfolio-title").text("And more to come.").animate({
  //           'opacity': 1
  //       }, 200);
  //   });
  //   applyEffects($(this).find(".portfolio-image"));
  // }, function() {
  //   $(".portfolio-title").stop().animate({
  //       'opacity': 0
  //   }, 200, function() {
  //       $(".portfolio-title").text("Portfolio").animate({
  //           'opacity': 1
  //       }, 200);
  //   });
  //   resetEffects($(this).find(".portfolio-image"));
  // });
  $("h1").hover(function() {
    $('.cursor').addClass("blend");
  }, function() {
    $('.cursor').removeClass("blend");
  });
  $(".skill-item").hover(function() {
    var thisElement = $(this);
    var delay = 100;
    var removalTime = 1600;
    if($(window).width() / $(window).height() > 2.2 && $(window).width() > 2000){
      delay = 110;
      removalTime = 1900;
    }
    $(this).addClass('triggered');
    thisElement.find('.skill').css("opacity", "0");
    thisElement.find('.skill').css("transform", "scale(0.9)");
    thisElement.find('.hidden-text').css("opacity", "1");
    thisElement.find('.hidden-text').css("transform", "translate(-50%, -50%) scale(1.0)");
    
    setTimeout(function(){
      if(thisElement.hasClass('triggered')){
        coinCounter ++;
        if(coinCounter >= 12){
          $(".skill-item .coin").css('opacity', '1');
          $(".skill-item").css('padding', '0px');
          $(".skills h1").addClass('mushroom');
          setTimeout(function(){
            $(".skill-item .skill").css('content', 'url(./files/img/brick.gif)');
          }, 400);
          setTimeout(function(){
            $('.mario').css('display', 'block');
          }, 1000);
          setTimeout(function(){
            $('.skills').find('.coin').each( function(k, v) {
              var el = this;
                  setTimeout(function () {
                  $(el).css('opacity', '0');
              }, k*delay);
            });
          }, removalTime);
          setTimeout(function(){
            $('.mario').css('display', 'none');
            $('.skills').find('.skill-item .skill').each( function(k, v) {
              var el = this;
                  setTimeout(function () {
                  $(el).removeAttr('style');
              }, k*100);
            });
            $('.skills').find('.skill-item').each( function(k, v) {
              var el = this;
                  setTimeout(function () {
                  $(el).removeAttr('style');
              }, k*100);
            });
            $(".skills h1").removeClass('mushroom');
          }, 4000);
        }
      }
    }, 10);
    setTimeout(function() {
        thisElement.find('.skill').css("opacity", "1");
        thisElement.find('.skill').css("transform", "scale(1.0)");
        thisElement.find('.hidden-text').css("transform", "translate(-50%, -50%) scale(1.1)");
        thisElement.find('.hidden-text').css("opacity", "0");
        thisElement.removeClass('triggered');
    }, 1300);
    }, function() {
      //Wait 1.3 seconds until reducing coin count amount
      setTimeout(function() {
        if(coinCounter != 0){
          coinCounter--;
        }
      }, 1300);
  });
  $('.about').hover(function() {
    $('.cursor').css('display', 'none');
    $('body').addClass('no_cursor');
  }, function() {
    $('.cursor').css('display', 'block');
    $('body').removeClass('no_cursor');
  });
  //Admire the WebGL
  if(isMobile || typeof DeviceMotionEvent.requestPermission === 'function'){
    $('.highlight-orange').hover(function() {
      $('.switch').css('opacity', '0');
      $('.title-text').css('opacity', '0');
      $('.navbar-default').css('opacity', '0');
      $('.video-overlay').css('opacity', '0.2');
    }, function() {
      $('.switch').css('opacity', '1');
      $('.title-text').css('opacity', '1');
      $('.navbar-default').css('opacity', '1');
      $('.video-overlay').css('opacity', '0.5');
    });
  }
  $(document).on('keydown', function(key) {
    //If plus key pressed
    if (key.which == 187) { 
      $('.switch').css('opacity', '0');
      $('.title-text').css('opacity', '0');
      $('.split_upper').css('opacity', '0');
      $('.split_lower').css('opacity', '0');
      $('.navbar-default').css('opacity', '0');
      $('.video-overlay').css('opacity', '0.2');
      $('body').addClass('no_cursor');
    }
    //If minus key pressed
    if (key.which == 189) { 
      $('.switch').css('opacity', '1');
      $('.title-text').css('opacity', '1');
      $('.split_upper').css('opacity', '0.9');
      $('.split_lower').css('opacity', '0.9');
      $('.navbar-default').css('opacity', '1');
      $('.video-overlay').css('opacity', '0.5');
      $('body').removeClass('no_cursor');
    }
  });
  $(".experience-item").unbind().click(function() {
    var thisElement = $(this);
    var thisElementCopy;
    var nextElement = $(this).next();
    var lastElement = $(this).parent().children().last();
    var secondLastElement = $(this).parent().children().last().prev();
    var firstElement = $(this).parent().children().first();
    var originalHeight = $(this).next().outerHeight();
    var parentElement = $(this).parent();

    //If the last element is the element to be removed (animation already triggered with remove class added)
    //Then set the last element to last usable element
    if(lastElement.hasClass('remove_desktop')){
      lastElement = secondLastElement;
    }
    lastElement.addClass('last');
    $('.experience-item').css('pointer-events', 'none');

    //If on mobile
    if($(window).width() < 991){
      //If element is last in list, swap with first
      if(thisElement.hasClass('last')){
        nextElement = firstElement;
      }
      thisElement.addClass('remove_right');
      nextElement.addClass('remove_left');
      if(thisElement.hasClass('last')){
        $('.experience-item').removeClass('last');
        setTimeout(function(){
            thisElement.insertBefore(nextElement);
            nextElement.insertAfter(secondLastElement);
        }, 600, true);
      }
      else {
        setTimeout(function(){
          thisElement.insertAfter(nextElement);
          nextElement.insertBefore(thisElement);
        }, 600, true);
      }
      setTimeout(function(){
        thisElement.removeClass('remove_right');
        nextElement.removeClass('remove_left');
        $('.experience-item').removeClass('last');
        $('.experience-item').css('pointer-events', 'all');
      }, 700, true);
    }
    //If on desktop
    else {
      thisElement.addClass('remove_desktop');
      thisElementCopy = thisElement.clone(true);
      if(thisElement.hasClass('last')){
        setTimeout(function(){
          thisElementCopy.insertBefore(firstElement);
        }, 100, true);
      }
      else {
        setTimeout(function(){
          thisElementCopy.insertAfter(lastElement);
        }, 100, true);
      }
      
      setTimeout(function(){
        if(originalHeight < 130){
          originalHeight = 140;
        }
        $('.experience-item').removeClass('last');
        thisElementCopy.removeClass('remove_desktop');
        $('.experience-item').css('pointer-events', 'all');
      }, 120, true);
      setTimeout(function(){
        //Detach the original element from the DOM
        thisElement.remove();
      }, 500, true);
    }
  });
}
function interactiveCursor(){
  var attachedLarge = false;
  var pollResize;
  //Allow for polling and updating of cursor select size while
  //mouse inactive
  event = $.Event('mousemove');
  event.pageX = 100;
  event.pageY = 100;

  const updateProperties = (elem, state) => {
    elem.style.setProperty('width', `${state.width}px`)
    elem.style.setProperty('height', `${state.height}px`)
    elem.style.setProperty('border-radius', state.radius)
    elem.style.setProperty('scale', state.scale)
    elem.style.setProperty('opacity', state.opacity)
    if(!state.attached){
      elem.style.setProperty('transform', `translate(${state.transformXsubW}px,${state.transformYsubH}px)`)
      elem.style.setProperty('transition', `150ms width cubic-bezier(0.39, 0.575, 0.565, 1),
                                            150ms height cubic-bezier(0.39, 0.575, 0.565, 1),
                                            0.2s transform cubic-bezier(0.39, 0.575, 0.565, 1),
                                            0.2s width cubic-bezier(0.39, 0.575, 0.565, 1),
                                            0.4s height cubic-bezier(0.39, 0.575, 0.565, 1),
                                            0.4s background ease`)
      //Make cursor light when not selecting elements
      $('.cursor').removeClass('light');
    }
    else {
      elem.style.setProperty('transform', `translate(${state.x}px,${state.y}px)`)
      //And white when selecting elements
      $('.cursor').addClass('light');
      if(state.attachedLarge){
        elem.style.setProperty('transition', `150ms width cubic-bezier(0.39, 0.575, 0.565, 1),
                                            150ms height cubic-bezier(0.39, 0.575, 0.565, 1),
                                            0.55s transform cubic-bezier(0.39, 0.575, 0.565, 1),
                                            0.4s width cubic-bezier(0.39, 0.575, 0.565, 1),
                                            0.4s height cubic-bezier(0.39, 0.575, 0.565, 1),
                                            0.4s background ease`)
      }
    }
  }
  document.querySelectorAll('.cursor').forEach(cursor => {
    let onElement

    const createState = e => {
      const defaultState = {
        x: e.clientX,
        y: e.clientY,
        width: 40,
        height: 40,
        radius: '50%',
        opacity: 1,
        transformXsubW: (e.clientX - 20) + 2,
        transformYsubH: (e.clientY - 20) + 2,
        attachedLarge: false,
        attached: false
      }

      const computedState = {}

      if (onElement != null) {
        const { top, left, width, height } = onElement.getBoundingClientRect()
        const radius = window.getComputedStyle(onElement).borderTopLeftRadius

        computedState.x = left
        computedState.y = top
        computedState.width = width
        computedState.height = height
        computedState.radius = radius
        computedState.transformXsubW = (left + width / 2) - 20
        computedState.transformYsubH = (top + height / 2) - 20
        if(attachedLarge){
          computedState.attachedLarge = true
        }
        computedState.attached = true
      }

      return {
        ...defaultState,
        ...computedState
      }
    }

    $(document).mousemove(function(e){
      const state = createState(e)
      updateProperties(cursor, state)
    })

    Array.from(document.getElementsByClassName('portfolio-item')).forEach(elem => {
      elem.addEventListener('mouseenter', e => {
        $('.cursor').addClass("blend_small");
      })
      elem.addEventListener('mouseleave', e => {
        $('.cursor').removeClass("blend_small");
      })
    })
    Array.from(document.getElementsByClassName('switch')).forEach(elem => {
      elem.addEventListener('mouseenter', e => {onElement = elem})
      elem.addEventListener('mouseleave', e => {onElement = undefined})
    })
    Array.from(document.getElementsByClassName('skill-item')).forEach(elem => {
      elem.addEventListener('mouseenter', e => {onElement = elem})
      elem.addEventListener('mouseleave', e => {onElement = undefined})
    })
    Array.from(document.getElementsByClassName('experience-item')).forEach(elem => {
      elem.addEventListener('mouseenter', e => {
        $('.cursor').addClass("blend_small");
      })
      elem.addEventListener('mouseleave', e => {
        $('.cursor').removeClass("blend_small");
      })
    })
    document.getElementById('experience').addEventListener('click', e => {
      //Wait for new elements to be created
      setTimeout(function(){
        Array.from(document.getElementsByClassName('experience-item')).forEach(elem => {
          elem.addEventListener('mouseenter', e => {
            $('.cursor').addClass("blend_small");
          })
          elem.addEventListener('mouseleave', e => {
            $('.cursor').removeClass("blend_small");
          })
        })
      }, 100, true)
    })
    Array.from(document.getElementById('navbar-collapse-x').getElementsByTagName('li')).forEach(elem => {
      elem.addEventListener('mouseenter', e => {onElement = elem.firstElementChild;  attachedLarge = true;
        pollResize = setInterval(function(){
          $(document).trigger(event);
        }, 200);
      })
      elem.addEventListener('mouseleave', e => {onElement = undefined;  attachedLarge = false})
    })
    Array.from(document.getElementsByClassName('contact-item')).forEach(elem => {
      elem.addEventListener('mouseenter', e => {
        $('.cursor').addClass("blend_small");
      })
      elem.addEventListener('mouseleave', e => {
        $('.cursor').removeClass("blend_small");
      })
    })
  })
}
function navbarElementHoverAnim(){
  $(".navbar-nav li").hover(
    function() {
      $(this).children().children().addClass('full-width');
    },
    function() {
      $(this).children().children().removeClass('full-width');
    }
  );
}
//Need to add these into their own classes later
function addLightNav(){
  $(".navbar-default").removeClass('light');
  $(".navbar-default").addClass('light_mobile');
  $(".navbar-default").css("height", "57px");
  $(".navbar-brand img").css('height', '50px');
  $(".navbar-brand img").css('width', '50px');
  $(".navbar-default").css("opacity", "1");
  $(".navbar-nav li a").css("color", "#fff");
}
function addTransparentNav(){
  //Make navbar transparent if scroll position is on main section
  $(".navbar-default").removeClass('light_mobile');
  $(".navbar-default").removeClass('light');
  $(".navbar-default").css("border-top", "none");
  $(".navbar-collapse").css("background-color", "none");
  $(".navbar-nav li a").css("margin-top", "40px");
  $(".navbar-default").css("height", "100px");
  // if($(window).width() < 991){
  //   $(".navbar-nav li:nth-of-type(2)").css("padding-left", "20px");
  // }
  // else {
  //   $(".navbar-nav li:nth-of-type(2)").css("padding-left", "40px");
  // }
  $(".navbar-nav li a:hover").css("color", "#fff");
  $(".navbar-nav li .navbar-brand").css("margin-top", "25px");
}
function addLightNavDesktop(){
  $(".navbar-default").addClass('light');
  $(".navbar-default").css("border-top", "none");
  $(".navbar-default").css("display", "block");
  $(".navbar-collapse").css("background-color", "none");
  $(".navbar-nav li a").css("margin-top", "15px");
  $(".navbar-nav li a").css("opacity", "1");
  $(".navbar-default").css("height", "75px");
  // $(".navbar-nav li:nth-of-type(2)").css("padding-left", "10px");
  $(".navbar-nav li .navbar-brand").css("margin-top", "5px");
  $(".navbar-brand img").css('height', '50px');
  $(".navbar-brand img").css('width', '50px');
}

function animateNavbar(){
  //If on mobile
  var scrollCounter = $(document).scrollTop();
  if($(window).width() < 767){
    addLightNav();
  }
  //If on desktop
  else {
    //Scroll position is in About section
    if(scrollCounter > 1) {
      addLightNavDesktop();
    }
    //Scroll position is in Main section
    else {
      //Make navbar transparent if scroll position is on main section
      addTransparentNav();
    }
  }
}

function showSwitchMobile(){
  if(isMobile){
    $('.bars').click(function(){
      if($('.navbar-collapse').hasClass('in')){
        $('.switch').css('opacity', '0');
      }
      else {
        $('.switch').css('opacity', '1');
      }
    });
  }
}
//Reset the elements that require resizing
function setMainElements(){
  $(".main").css("height", $(window).height() + "px");
  $(".navbar-nav li a").removeAttr("style"); 
  //Set height for skills div so that it doesnt jump when changed to mushroom img
  if(!isMobile){
    $(".skills").css('height', $(".skills").outerHeight() + 'px');
  }
  else{
    $(".skills").css('height', 'auto');
  }
  $(".skills h1").css('min-height', $(".skills h1").height() + 'px');
  $(".skill-item").css('min-height', $(".skill-item").outerHeight() + 'px');
  //Calculate height of contact div to create spacer for fixed element scroll
  $(".contact_spacer").css('height', $(".contact").outerHeight() + 'px');
  $(".contact").css('height', $(".contact_spacer").outerHeight() + 'px');
  $(".contact").css('position', 'fixed');

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
  $(".bars").removeClass("active");
  checkIfMobile();
  if(isMobile){
    $('body').addClass('no_cursor');
  }
  else {
    $('body').removeClass('no_cursor');
  }
  setMainElements();
  // Remove inline width styles 
  $('.fade-third').removeAttr('style');
  $('.fade-fourth').removeAttr('style');
  $(".navbar-default").css('display', 'block');
  $(".navbar-nav li").css('opacity', '1');
  $(".navbar-nav li").css('animation-name', 'unset');
  $(".navbar-nav li").css('-webkit-animation-name', 'unset');
  animateNavbar();
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
        top: 400
      }
    }
  }
  else {
    slideInConfig = {
      origin: 'bottom',
      duration: 600,
      distance: '400px',
      scale: '0.9'
    }
  }
  if($(window).width() > 767) {
    fadeInConfig = {
      duration: 800,
      origin: 'bottom',
      distance: '400px',
      scale: '0.5',
      viewOffset: {
        top: 200
      }
    }
  }
  else {
    fadeInConfig = {
      duration: 1000,
      origin: 'bottom',
      distance: '400px',
      scale: '0.5',
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
        target == "#experience" || target == "#contact" || target == "#about2" || target == "#contact-highlight") {

        //If arrow up or arrow down pressed, convert ID to actual ID instead of toggling menu bar active class
        if(target == "#about2"){
          target = "#about";
        }
        else if (target == "#portfolio2"){
          target = "#portfolio";
        }
        else if (target == "#home2"){
          target = "#home";
        }
        else if (target == "#contact-highlight"){
          target = "#contact";
          setTimeout(function(){
            $('.contact').css('background', '#9b9b9b');
          }, 1200, true);
          setTimeout(function(){
            $('.contact').css('background', '#fff');
          }, 2000, true);
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
        $(target).velocity("scroll", 1000, true);
        // tl.progress(1).pause();
      }
      // controller.destroy(true);
  });
}
Pace.restart();
Pace.on("done", function(){
  if(isMobile) {
    $(".main").css("height", $(window).innerHeight());
  }
  else {
    $(".main").css("height", $(window).height() + "px");
  }
  if ( $('.pace-progress').attr('data-progress-text') == '100%' ) {
    introAnimation();
  } 
});
function checkIfMobile(){
  if($(window).width() < 991) {
    isMobile = true;
  }
}
function introAnimation(){
  var fadeThirdElem, fadeFourthElem;

  if(isMobile){
    $('body').addClass('no_cursor');
  }
  //Lets get this party started!
  setTimeout(function(){
    
    $('.split_upper').addClass("fill");
    $('.split_lower').addClass("fill");
  },1250, true);
  setTimeout(function(){
    $(".background-wrapper").attr("data-anim","true");
    $('.background-wrapper').addClass("active");
  },1600, true);
  // }, 0, true);
  //Fade in the title text
  setTimeout(function(){
    $('.title-text').css("display", "block");
    setTimeout(function(){
      if(!isMobile){
        $(".fade-third").css('width', $(".fade-third").outerWidth() + 'px');
        $(".fade-fourth").css('width', $(".fade-fourth").outerWidth() + 'px');
        fadeThirdElem = $(".fade-third").addClass('hide_desktop').detach();
        fadeFourthElem = $(".fade-fourth").addClass('hide_desktop').detach();
      }
      else {
        $('.fullstop').css('opacity', '0');
      }
    },200, true);
  // },0, true);
  },2400, true);
  //Highlight the abbreviations
  setTimeout(function(){
    $('.highlight-orange').addClass('active');
  },3000, true);
  setTimeout(function(){
    $('.highlight-blue').addClass('active');
  },3200, true);
  //Do not execute nice animation if on mobile
  if(!isMobile){
    setTimeout(function(){
      fadeThirdElem.insertBefore($(".fullstop"));
      fadeFourthElem.insertAfter(fadeThirdElem);
    },3900, true);
    setTimeout(function(){
      fadeThirdElem.removeClass('hide_desktop');
      fadeFourthElem.removeClass('hide_desktop');
      $('.switch').removeClass('no_view');
    },4100, true);
    setTimeout(function(){
      $('.fade').addClass('no_delay');
      $('.fade-second').addClass('no_delay');
      fadeThirdElem.addClass('no_delay');
      fadeFourthElem.addClass('no_delay');
      $('.title-text h1 span').css('transition', 'none')
    },6300, true);
  }
  else {
    setTimeout(function(){
      $('.fullstop').css('opacity', '1');
    },4100, true);
  }
  //Show the navbar
  if($(window).width() < 767){
    $('.navbar-default').css("display", "block");
    $('.navbar-nav li a').css('opacity', '1');
    $('.navbar-default').css("opacity", "0");
    //If the page has already been scrolled and
    //is being refreshed
    if($(document).scrollTop() > 1) {
      //Display the navbar immediately
      addLightNavDesktop();
    }
    else {
      //If not, run the animation
      $('.navbar-default').css("opacity", "0");
      setTimeout(function(){
        $('.navbar-default').css("opacity", "1");
      },6000, true);
    }
  }
  else {
    setTimeout(function(){
      $('.navbar-default').css("display", "block");
    },5600, true);
  }
}
function makeContactVisible(){
  var offset = $(document).scrollTop();
  if (offset <= 1000){
    $('.contact').css('z-index', '-2');
    $('.contact').css('opacity', '0');
  }
  else if(offset >= 1000){
    $('.contact').css('z-index', '-1');
    $('.contact').css('opacity', '1');
  }
  // if($(document).scrollTop() > $('.experience').offset().top){
  //   //Fade in contact div
  //   $('.contact .contact_container').css('opacity', '1');
  //   $('.contact h1').css('opacity', '1');
  //   $('.contact footer').css('opacity', '1');
  // }
  // else {
  //   $('.contact .contact_container').css('opacity', '0');
  //   $('.contact h1').css('opacity', '0');
  //   $('.contact footer').css('opacity', '0');
  // }
}
function showLoaderSplash(allowed){
  var multiplierX = 7;
  var multiplierY = 2.5;
  var firstEgg = $('.dvd-wrap').children().first().next();

  if(!isMobile){
    //Change element colour on viewport bounce
    Array.from(document.getElementsByClassName('main-loader')).forEach(elem => {
      elem.addEventListener('animationiteration', function(e) { /* this is fired at end of animation */
        elem.style.setProperty('filter', 'hue-rotate(' + Math.floor((Math.random() * 359) + 1) + 'deg)');
      });
    })
    Array.from(document.getElementsByClassName('egg-centered')).forEach(elem => {
      elem.addEventListener('animationiteration', function(e) { /* this is fired at end of animation */
        elem.style.setProperty('filter', 'hue-rotate(' + Math.floor((Math.random() * 359) + 1) + 'deg)');
      });
    })
    $('.fullstop').click(function(e){
      showLoaderSplash(true);
    });
    $(document).on('keydown', function(key) { 
      //If d key pressed
      if (key.which == 68) { 
        showLoaderSplash(true);
      }
    });
    //If function is called with keypress or click on element
    //execute function
    if(allowed){
      $('.dvd-wrap').addClass('show');
      $('.helper-text-legend').css('opacity', '1');
      $('.helper-text-legend').click(function(){
        $('.helper-text-legend').css('opacity', '0');
      });
      setTimeout(function(){
        $('.helper-text-legend').css('opacity', '0');
      }, 4000);
      $(document).on( 
        'keydown', function(key) { 
        if(allowed){
          //If escape key is pressed, close window
          if (key.which == 27 || key.which == 221) { 
            var firstElement = $('.dvd-wrap').children().first();
            var secondElement = $('.dvd-wrap').children().first().next();
            $('.dvd-wrap').removeClass('show');

            secondElement.remove();
            originalEgg.removeClass('cracked');
            originalEgg.children().attr('src','./files/img/egg.png');
            originalEgg.css('transform', 'translateX(0px)');
            originalEgg.css('transform', 'unset');
            originalEgg.children().removeAttr('style');
            originalEgg.insertAfter(firstElement);

            if(egg){
              $('.egg-centered').removeClass('opacity');
              $('.main-loader').addClass('opacity');
            }
            else{
              $('.egg-centered').addClass('opacity');
              $('.main-loader').removeClass('opacity');
            }
            var minElements;
            var totalElements = $('.dvd-wrap').children().length;
            for (minElements = 4; minElements <= totalElements; minElements++) {
              $('.dvd-wrap').children().last().remove();
            }
          } 
          //If e key is pressed, show egg
          if (key.which == 69) { 
            if(egg){
              egg = false;
              $('.egg-centered').addClass('opacity');
              $('.main-loader').removeClass('opacity');
            }
            else {
              egg = true;
              $('.main-loader').addClass('opacity');
              $('.egg-centered').removeClass('opacity');
            }
            console.log('egg', egg);
          }
          //If j key is pressed, show egg
          if (key.which == 74) { 
            $('.main-loader .loader-img').attr('src','./files/img/jb.png');
          }
          //If h key is pressed, show legend
          if (key.which == 72) { 
            $('.helper-text-legend').css('opacity', '1');
            setTimeout(function(){
              $('.helper-text-legend').css('opacity', '0');
            }, 3000);
          } 
          //If h key is pressed, show legend
          if (key.which == 66) { 
            $('.show').toggleClass('no_bg');
          } 
          //If m key is pressed, clone and add additional elements
          if (key.which == 77) { 
            var bodyWidth, bodyHeight, bodyWidthHalf, randPosX, randPosY, cloned, clonedEgg, randTime;

            //Keep assigning body width and height as window may be resized
            bodyWidth = $(window).width();
            bodyHeight = $(window).height();
            
            randPosX = Math.floor(Math.random() * bodyWidth) + 1;
            randPosY = Math.floor(Math.random() * bodyHeight) + 1;
            randTime = Math.floor(Math.random() * 40) + 1;

            cloned = $('.dvd-wrap').children().first().clone();
            clonedEgg = $('.dvd-wrap').children().first().next().clone();

            cloned.css('animation', 'x ' + multiplierX + 's linear infinite alternate -' + randTime + 's');
            clonedEgg.css('animation', 'xEgg ' + multiplierX + 's linear infinite alternate -' + randTime + 's');

            cloned.children().css('animation', 'y ' + multiplierY + 's linear infinite alternate -' + randTime + 's');
            clonedEgg.children().css('animation', 'y ' + multiplierY + 's linear infinite alternate -' + randTime + 's');

            if(egg){
              clonedEgg.css('opacity', '0');
            }
            else{
              cloned.css('opacity', '0');
            }
            
            var totalPrevElements = $('.dvd-wrap').children().length;
            
            setTimeout(function(){
              console.log('totalPrevElements: ' + totalPrevElements);

              $('.dvd-wrap').append(cloned);
              $('.dvd-wrap').append(clonedEgg);

              var totalCurrentElements = $('.dvd-wrap').children().length;
              var minElements;

              console.log('totalCurrentElements: ' + totalCurrentElements);

              for (minElements = totalPrevElements + 3; minElements <= totalCurrentElements; minElements++) {
                $('.dvd-wrap').children().last().remove();
              }
              
              Array.from(document.getElementsByClassName('main-loader')).forEach(elem => {
                elem.addEventListener('animationiteration', function(e) { /* this is fired at end of animation */
                  elem.style.setProperty('filter', 'hue-rotate(' + Math.floor((Math.random() * 359) + 1) + 'deg)');
                });
              })
              Array.from(document.getElementsByClassName('egg-centered')).forEach(elem => {
                elem.addEventListener('animationiteration', function(e) { /* this is fired at end of animation */
                  elem.style.setProperty('filter', 'hue-rotate(' + Math.floor((Math.random() * 359) + 1) + 'deg)');
                });
              })
              $(".egg-centered").each(function(index) {
                $(this).click(function(){
                  if(egg){
                    var position = $(this).position();
                    var positionImg = $(this).children().position();
                    $(this).addClass('cracked');
                    $(this).css('transform', 'translateX(' + position.left + 'px)');
                    $(this).children().css('transform', 'translateY(' + positionImg.top + 'px)');
                    $(this).children().attr('src','./files/img/egg_cracked.png');
                    removeElem($(this));
                  }
                }); 
              }); 
            }, 20);
            setTimeout(function(){
              if(egg){
                clonedEgg.css('opacity', '1');
              }
              else{
                cloned.css('opacity', '1');
              }
            }, 50);
          }
          //If r key is pressed, remove additional elements
          if (key.which == 82) { 
            //Check if there are more elements that originally set
            console.log('Total elements: ' + $('.dvd-wrap').children().length);
            if($('.dvd-wrap').children().length >= 5){
              $('.dvd-wrap').children().last().remove();
              $('.dvd-wrap').children().last().remove();
            }
          } 
          //If up key pressed
          if (key.which == 40) { 
            multiplierX = multiplierX * 1.2;
            multiplierY = multiplierX * 0.54;
            $('.dvd-wrap .loader-centered').css('animation', 'x ' + multiplierX + 's linear infinite alternate');
            $('.dvd-wrap .egg-centered').css('animation', 'xEgg ' + multiplierX + 's linear infinite alternate');
            $('.dvd-wrap .loader-img').css('animation', 'y ' + multiplierY + 's linear infinite alternate');
          } 
          //If down key pressed
          if (key.which == 38) { 
            multiplierX = multiplierX * 0.8;
            multiplierY = multiplierX * 0.54;
            $('.dvd-wrap .loader-centered').css('animation', 'x ' + multiplierX + 's linear infinite alternate');
            $('.dvd-wrap .egg-centered').css('animation', 'xEgg ' + multiplierX + 's linear infinite alternate');
            $('.dvd-wrap .loader-img').css('animation', 'y ' + multiplierY + 's linear infinite alternate');
          } 
          //If c key pressed
          if (key.which == 67) {
            $('.dvd-wrap .loader-centered').css('filter', 'hue-rotate(' + Math.floor((Math.random() * 359) + 1) + 'deg)');
            $('.dvd-wrap .egg-centered').toggleClass('hue');
          } 
          if(multiplierX <= 0.1){
            multiplierX = 0.1;
          }
          if(multiplierY <= 0.04){
            multiplierY = 0.04;
          }
        }
      }); 
    }
    $(".egg-centered").each(function(index) {
      $(this).click(function(){
        if(egg){
          var position = $(this).position();
          var positionImg = $(this).children().position();
          $(this).addClass('cracked');
          $(this).css('transform', 'translateX(' + position.left + 'px)');
          $(this).children().css('transform', 'translateY(' + positionImg.top + 'px)');
          $(this).children().attr('src','./files/img/egg_cracked.png');
          removeElem($(this));
        }
      }); 
    }); 
  }
  if($('.dvd-wrap').hasClass('show')){
    $('body').addClass('no_cursor');
  }
  else {
    $('body').removeClass('no_cursor');
  }
}
function removeElem(elem){
  setTimeout(function(){
    elem.remove();
  }, 600);
}
function loadingLine(){
  var isFinished = false;
  var percentageWidth;
  var randomColourSeed = Math.floor((Math.random() * 100) + 1);
  //Set loading line colour to random hue
  // $('.loading-line').css('filter', 'hue-rotate(' + randomColourSeed + 'deg)');
  // $('.second-line').css('filter', 'hue-rotate(' + (randomColourSeed + 40) + 'deg)');
  // $('.third-line').css('filter', 'hue-rotate(' + (randomColourSeed + 60) + 'deg)');
  var loop = setInterval(function(){
    percentageWidth = $('.pace-progress').attr('data-progress-text');
    console.log(percentageWidth);
    if(percentageWidth != '100%'){
      $('.loading-line').css('width', percentageWidth);
    }
    else {
      isFinished = true;
      $('.loading-line').css('width', '100%');
      setTimeout(function(){
        $('.loading-line').css('height', '1px');
        $('.loading-line').css('background-color', '#2b2b2b');
      },500);
      //If user is at top of webpage, run animation
      if ($('.main').visible(true)) {
        setTimeout(function(){
          $('.preloader-wrap').fadeOut(400);
        }, 1300);
      } 
      //If not, simply fade out
      else {
        $('.preloader-wrap').css('top', '0');
        $('.preloader-wrap').css('transition', 'height 0.5s ease');
        setTimeout(function(){
          $('.preloader-wrap').css('height', '0%');
        }, 500);
      }
    }
    if(isFinished){
      clearInterval(loop);
    }
  }, 50);
}

function switchWords(){
  var words = [
      'Programmer',
      'Runner',
      'Developer',
      'Designer',
      'Software Engineer',
      'Traveller',
      'Security Analyst'
      // 'Tim.'
      ], i = 0, counter = 0;
  var switching = setInterval(function(){
    $('.switch-text').fadeOut(function(){
      $(this).html(words[i=(i+1)%words.length]).fadeIn(300);
      counter++;
    });
    // console.log(counter);
    // if(counter == words.length - 2){
    //   setTimeout(function(){
    //     $('.hide-text').fadeOut(50);
    //   }, 300);
    //   clearInterval(switching);
    // }
  }, 1500);
}
function setupScrollMagic(){
  // if(fullDuration){

  // }
  controller = new ScrollMagic.Controller()
  tl = new TimelineLite();
  tl.to(".about-title", 1, {text:"I am",  ease:'Power2.easeOut'});
  tl.to(".hide-text", 1, {text:"a",  ease:'Power2.easeOut'});
  tl.to(".switch-text", 1, {text:"runner     ",  ease:'Power2.easeOut'});
  tl.to(".switch-text", 1, {text:"developer     ",  ease:'Power2.easeOut'});
  tl.to(".switch-text", 1, {text:"designer     ",  ease:'Power2.easeOut'});
  tl.to(".switch-text", 1, {text:"programmer     ",  ease:'Power2.easeOut'});
  tl.to(".switch-text", 1, {text:"researcher",  ease:'Power2.easeOut'});
  tl.to(".hide-text", 0, {text:""});
  tl.to(".switch-text", 1, {text:"creative", ease:'Power2.easeOut'});
  tl.to(".switch-text", 1, {text:"creative    ",  ease:'Power2.easeOut'});


  var scene = new ScrollMagic.Scene({
    triggerElement: ".about", 
    duration: $(window).height() * 6,
    triggerHook: 0
  })
  .setTween(tl)
  .setPin(".about")
  .addTo(controller);
}
function switchBtn(){
  $(".switch").click(function () {
    if ($("body").hasClass("light")) {
      $(".switch").addClass("switched");
      $(".exit_btn").removeClass("light");
      $('body').removeClass('light');
    }
    else {
      $(".switch").removeClass("switched");
      $(".exit_btn").addClass("light");
      $('body').addClass('light');
    }
  });
}
function animateMainText(){
  if(!isMobile){
    $('.overflow-hide').first().css('transform' , 'translateX(-' + $(document).scrollTop() /8 + 'px)');
    $('.overflow-hide').first().next().css('transform' , 'translateX(' + $(document).scrollTop() /8 + 'px)');
    $('.overflow-hide').last().css('transform' , 'translateX(-' + $(document).scrollTop() /16 + 'px)');
    $('.overflow-hide').last().css('animation-name' , 'none');
    $('.overflow-hide').last().css('opacity' , '1');
  }
  else {
    $('.overflow-hide').css('transform', 'none');
  }
}
$( document ).ready(function() {
  if($(window).width() < 991){
    isMobile = true;
  }
  $(".bars").removeClass("active");  
  interactiveCursor();
  setMainElements();
  hoverEffects();
  animateNavbar();
  navbarElementHoverAnim();
  createScrollRevealEffects();
  bindVelocity();
  loadingLine();
  switchBtn();
  showSwitchMobile();
  // setupScrollMagic();
  showLoaderSplash(false);
  $(window).scroll(function() { 
    animateNavbar();   
    makeContactVisible();
    preventScrollOnMenuOpen();
    animateMainText();
  });
  if($(document).scrollTop() > 0){
    $(".navbar-default").css('opacity', '1');
  }
  var theDate = new Date(); 
  $(".year").text(theDate.getFullYear());
});