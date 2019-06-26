var controller;
var scenes = [];
var activeScenes = [];
var smScene;
var scrollMagicEnabled = false;
var firstTime = true;

$( document ).ready(function() {

  //Ensure that the portfolio boxes are same as width for square shape
  $(".portfolio-item").css("height", $(".portfolio-item").width());

  if($(window).width() < 991) {
    $(".main").css("height", $(window).innerHeight());
  }

  setMainElements();
  createGoTopArrow();
  hoverEffects();
  animateNavbar();
  createScrollRevealEffects();
  bindVelocity();

  $(window).scroll(function() { 
    animateNavbar();
    //If the dropdown menu on mobile is open
    if ($(".in").length){
      $("body").css("overflow-y", "hidden");
    } 
    //Prevent scrolling until menu is closed
    else {
      $("body").css("overflow-y", "scroll");
    }
  });
  //Ensure that the arrow-down and navbar elements have an opacity of 1 at all times
  setTimeout(function(){
    $(".navbar-collapse .navbar-nav").removeClass("transparent");
    if($(window).width() < 767){
      $(".navbar-default").addClass("opaque");
      $(".navbar-brand").addClass("opaque");
      $(".navbar-collapse .navbar-nav").removeClass("opaque");
      $(".navbar-collapse .navbar-nav").addClass("transparent");
    }
    else{
      $(".navbar-default").addClass("opaque");
      $(".navbar-brand").removeClass("opaque");
      $(".navbar-collapse .navbar-nav").addClass("opaque");
      $(".navbar-collapse .navbar-nav").removeClass("transparent");
    }
    $(".arrow-down").addClass("opaque");
  }, 6000);

  //Ensure page always loads from top
  setTimeout(function(){
    var scrollTop = $(this).scrollTop();
    $("html, body").animate({
        scrollTop: 0
    }, 0);
  }, 200);
  var theDate = new Date(); 
  $(".year").text(theDate.getFullYear());
});

function applyEffects(element){
  element.css("transform", "scale(0.95)");
  element.css("box-shadow", "-1px 3px 26px 0px rgba(0,0,0,0.75)");
}

function resetEffects(element){
  element.css("transform", "scale(1)");
  element.css("box-shadow", "none");
}
function hoverEffects() {
  $(".aml").hover(
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("AML Advisory").animate({'opacity': 1}, 200);
      });
      applyEffects($(this));
    },
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Portfolio").animate({'opacity': 1}, 200);
      });
      resetEffects($(this));
    }
  );
  $(".tla").hover(
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("The Logistics Alliance").animate({'opacity': 1}, 200);
      });
      applyEffects($(this));
    },
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Portfolio").animate({'opacity': 1}, 200);
      });
      resetEffects($(this));
    }
  );
  $(".qutrunning").hover(
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("QUT Running").animate({'opacity': 1}, 200);
      });
      applyEffects($(this));
    },
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Portfolio").animate({'opacity': 1}, 200);
      });
      resetEffects($(this));
    }
  );
  $(".quteb").hover(
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("QUT Exchange").animate({'opacity': 1}, 200);
      });
      applyEffects($(this));
    },
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Portfolio").animate({'opacity': 1}, 200);
      });
      resetEffects($(this));
    }
  );
  $(".daryl").hover(
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Daryl Murphy Entertainment").animate({'opacity': 1}, 200);
      });
      applyEffects($(this));
    },
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Portfolio").animate({'opacity': 1}, 200);
      });
      resetEffects($(this));
    }
  );
  $(".aaron").hover(
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Aaron Maybus Entertainer").animate({'opacity': 1}, 200);
      });
      applyEffects($(this));
    },
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Portfolio").animate({'opacity': 1}, 200);
      });
      resetEffects($(this));
    }
  );
}

function addWhiteNav(){
  $(".navbar-nav li a").css("color", "black");
  $(".navbar-default").css("background-color", "rgba(255,255,255,0.9)");
  $(".navbar-collapse").css("background-color", "rgba(255,255,255,0.9)");
  $(".navbar-default").css("border-bottom", "1px solid rgb(220, 66, 34)");
  $(".bars .line").css("stroke", "#3b3b3b");
}
function addBlackNav(){
  $(".navbar-nav li a").css("color", "white");
  $(".navbar-default").css("background-color", "rgba(0,0,0,0.9)");
  $(".navbar-collapse").css("background-color", "rgba(0,0,0,0.9)");
  $(".navbar-default").css("border-bottom", "1px solid rgb(220, 66, 34)");
  $(".bars .line").css("stroke", "#fff");
}
function addTransparentNav(){
  //Make navbar transparent if scroll position is on main section
  $(".navbar-nav li a").css("color", "white");
  $(".navbar-default").css("background-color", "transparent");
  $(".navbar-default").css("border-top", "none");
  $(".navbar-collapse").css("background-color", "none");
}
function addWhiteNavDesktop(){
  $(".navbar-nav li a").css("color", "black");
  $(".navbar-default").css("background-color", "#fff");
  $(".navbar-default").css("border-top", "1px solid rgb(220, 66, 34)");
  $(".navbar-collapse").css("background-color", "none");
}
function addBlackNavDesktop(){
  $(".navbar-nav li a").css("color", "white");
  $(".navbar-default").css("background-color", "rgb(27, 27, 27)");
  $(".navbar-default").css("border-top", "1px solid rgb(220, 66, 34)");
  $(".navbar-collapse").css("background-color", "none");
}

function animateNavbar(){
  //If on mobile
  if($(window).width() < 767){
    $(".navbar-default").addClass("opaque");
    $(".navbar-nav").removeClass("fade-last");
    //Scroll position is in About section
    var offset = 500;
    if($(window).width() > 479){
      offset = 50;
    }
    if($(window).height() > 479){
      offset = 500;
    }
    if($(document).scrollTop() > 300) {
      addWhiteNav();
    }
    //Scroll position is in Main section
    else {
      addBlackNav();
    }
    //Scroll position is in Portfolio section
    if($(document).scrollTop() > (($(".about").outerHeight()) + offset)) {
      addBlackNav();
    }
    //Scroll position is in Skills section
    if($(document).scrollTop() > (($(".about").outerHeight() + $(".portfolio").outerHeight()) + offset)) {
      addWhiteNav();
    }
    //Scroll position is in Experience section
    if($(document).scrollTop() > (($(".about").outerHeight() + $(".portfolio").outerHeight() + $(".skills").outerHeight()) + offset)) {
      addBlackNav();
    }
    //Scroll position is in Contact section
    if($(document).scrollTop() > (($(".about").outerHeight() + $(".portfolio").outerHeight() + $(".skills").outerHeight() + $(".experience").outerHeight()) + offset)) {
      addWhiteNav();
    }
  }
  //If on desktop
  else {
    $(".navbar-nav").addClass("fade-last");
    //Scroll position is in About section
    if($(document).scrollTop() > 10) {
      addWhiteNavDesktop();
    }
    //Scroll position is in Main section
    else {
      //Make navbar transparent if scroll position is on main section
      addTransparentNav();
    }
    //Scroll position is in Portfolio section
    if($(document).scrollTop() > (($(".about").outerHeight()) + 10)) {
      addBlackNavDesktop();
    }
    //Scroll position is in Skills section
    if($(document).scrollTop() > (($(".about").outerHeight() + $(".portfolio").outerHeight())  + 10)) {
      addWhiteNavDesktop();     
    }
    //Scroll position is in Experience section
    if($(document).scrollTop() > (($(".about").outerHeight() + $(".portfolio").outerHeight() + $(".skills").outerHeight())  + 10)) {
      addBlackNavDesktop();
    }
    //Scroll position is in Experience section
    if($(document).scrollTop() > (($(".about").outerHeight() + $(".portfolio").outerHeight() + $(".skills").outerHeight() + $(".experience").outerHeight())  + 10)) {
      addWhiteNavDesktop();
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
      $('.arrow').css("bottom", "70px");
    }
    target = "#home";
  } 
  else {
    $('.arrow-img').css("background", "url('./files/img/icons/arrow_down.png");    // Change arrow to down
    $('.arrow').css("background", "none");    // Remove background
    if($(window).width() > 767){
      $('.arrow').css("bottom", "6px");   
    }
    target = "#about";
  }
  $(window).scroll(function() {
    if ($(this).scrollTop() > 70) {        
      $('.arrow-img').css("background", "url('./files/img/icons/arrow_up.png");   
      $('.arrow').css("background", "rgba(0, 0, 0, 0.7)");  
      if($(window).width() > 767){
        $('.arrow').css("bottom", "70px");  
      }  
      target = "#home";
    } 
    else {
      $('.arrow-img').css("background", "url('./files/img/icons/arrow_down.png");    
      $('.arrow').css("background", "none");
      if($(window).width() > 767){
        $('.arrow').css("bottom", "6px");
      }
      target = "#about";
    }
  });

  

  $('.arrow').click(function() {      // When arrow is clicked
    //If not on desktop, make offset -51px for mobile screens to line up with top of section headers
    if($(window).width() < 767){
      offset = -51;
    }
    else {
      offset = 0;
    }
    $(target).velocity("scroll", { duration: 1000, offset: offset });
  });
}

//Reset the elements that require resizing
function setMainElements(){

  //Reset all styles on navbar if on desktop width
  if($(window).width() > 767) {
    $(".navbar-default").removeAttr("style");
    $(".navbar-nav li a").removeAttr("style");
    $(".navbar-collapse").removeAttr("style");
    $(".ribbon").css("animation", "none");
    $(".navbar-collapse .navbar-nav").removeClass("transparent");
  }

  var delay = 1000;

  //Check if the page has only loaded once, if yes then set elements after 1000 ms
  if(!firstTime){
    //If page has already loaded and this is new execution, set delay as 400 ms
    delay = 250;
  }
  //Debounce the height change function for the portfolio items and navbar animations
  setTimeout(function(){
    animateNavbar();
    $(".ribbon").css("top", "50%");
    $(".main").css("height", $(window).innerHeight());

    if($(window).width() < 991) {
      $(".title-text").css("top", "53%");
      $(".title-text").css("transform", "translate(0%, -53%");
    }
    else {
      $(".title-text").css("top", "49%");
      $(".title-text").css("transform", "translate(0%, -49%");
    }
    if($(window).width() < 767) {
      if($(window).height() > 450) {
        $(".title-text").css("top", "54%");
      }
      //For VERY long phones in landscape 
      else if($(window).height() < 300) {
        $(".title-text").css("top", "52%");
      }
      else {
        $(".title-text").css("top", "58%");
        $(".title-text").css("transform", "translate(0%, -58%");
      }
      //If not first time this function is executed, apply styles 
      if(!firstTime){
        $(".navbar-collapse .navbar-nav").removeClass("opaque");
        $(".navbar-collapse .navbar-nav").addClass("transparent");
      }
    }
    if($(window).width() < 479){
      $(".title-text").css("top", "52%");
      $(".title-text").css("transform", "translate(0%, -52%");
    }
    else{
      if(!firstTime){
        $(".navbar-collapse .navbar-nav").addClass("opaque");
        $(".navbar-collapse .navbar-nav").removeClass("transparent");
      }
    }
    $(".portfolio-item").css("height", $(".portfolio-item").width());
    //Set firstTime as false after first execution of function
    firstTime = false;
  }, delay);
  setTimeout(function(){
    $(".navbar-default").css("z-index", "102");
  }, delay);
}

$(window).resize(function () { 
  console.log('RESIZED'); 
  setMainElements();
});

function createScrollRevealEffects(){
  var fadeInFirst = {
    delay: 400,
    move: 0
  }
  var fadeInSecond = {
    delay: 600,
    move: 0
  }
  var fadeInThird = {
    delay: 800,
    move: 0
  }
  var fadeInFourth = {
    delay: 1000,
    move: 0
  }
  var fadeInFifth = {
    delay: 1200,
    move: 0
  }
  var fadeInSixth = {
    delay: 1400,
    move: 0
  }
  ScrollReveal().reveal('.fadeInFirst', fadeInFirst);
  ScrollReveal().reveal('.fadeInSecond', fadeInSecond);
  ScrollReveal().reveal('.fadeInThird', fadeInThird);
  ScrollReveal().reveal('.fadeInFourth', fadeInFourth);
  ScrollReveal().reveal('.fadeInFifth', fadeInFifth);
  ScrollReveal().reveal('.fadeInSixth', fadeInSixth);
}

function bindVelocity(){
  // bind click event to all internal page anchors
  $('a[href*="#"]').on('click', function (e) {
      // prevent default action and bubbling
      e.preventDefault();
      e.stopPropagation();
      // set target to anchor's "href" attribute
      var target = $(this).attr('href');

      if(target == "#home" || target == "#about" || target == "#portfolio" 
        || target == "#skills" || target == "#experience" || 
        target == "#contact" || target == "#about2") {

        //If arrow up or arrow down pressed, convert ID to actual ID instead of toggling menu bar active class
        if(target == "#about2"){
          target = "#about";
        }
        else {
          $('.navbar-collapse.in').collapse('hide');
          document.getElementById('bars').classList.toggle('active')
        }
      }
      // scroll to each target
      if($(window).width() < 767){
        $(target).velocity("scroll", { duration: 1000, offset: -51 });
      }
      else {
        $(target).velocity("scroll", 1000);
      }
  });
}
function destroyScrollMagic() {
  wipeAnimation = null;
  smScene.destroy();
  smScene = null;
  controller.destroy();
  controller = null;
  console.log('destroyed');
}

var controller = new ScrollMagic.Controller();
var scenes = [];
var activeScenes = [];

scenes.push(function(){
return new ScrollMagic.Scene({
  triggerElement: '#pinContainer',
  triggerHook: 'onLeave'
})
.setPin('#pin')
.addTo(controller);
});

function addScenes(newScenes) {
// reset active scenes
activeScenes = [];
// loop over each scene and add/re-add
newScenes.forEach(function (newScene, index) {
  if (typeof newScene === 'function') {
    // add the new scene
    var newScene = newScene();
    // push it to our active scenes array
    activeScenes.push(newScene);
  }
});
}

// debounced re-size event - less destroying and re-adding scenes
var timeoutDuration = 400;
var resizeTimeout = null;
window.addEventListener('resize', function(event) {
if (resizeTimeout) {
  clearTimeout(resizeTimeout);
}
resizeTimeout = setTimeout(function() {
  // loop over each active scene
  activeScenes.forEach(function (scene, index) {
    // make sure scene wasn't null
    if (scene) {
      // destroy active scene
      scene.destroy(true);
    }
  });
  // after we have destroyed old scenes, re-add them
  addScenes(scenes);
}, timeoutDuration);
});

// add initial scenes
addScenes(scenes);

Pace.on("done", function(){
    $('.preloader-wrap').fadeOut(1000);


    // Make sure that the header animation doesn't start until page load finishes
    setTimeout(function(){

      $(".title-text").each(function(index){
      
      // $colorBlue = "rgb(255, 156, 70)";
      $colorOrange = "rgb(255, 149, 1)";
      $colorRed = "rgb(220, 66, 34)";
      
      //create a timeline
      var displayTl = new TimelineLite();
      displayTl
              .fromTo(this, 
                     0.6,
                     {autoAlpha: 0, x: 150},
                     {autoAlpha: 1, ease:Power1.easeOut, x: 0}
                     )
              .staggerTo(this.getElementsByClassName("fade"), 
                      1,
                     {opacity: 1},
                      0.5
                     )
              .staggerTo(this.getElementsByClassName("highlight-blue"), 
                      0.5,
                     {color: $colorOrange},
                      0.5
                     )
              .staggerTo(this.getElementsByClassName("highlight-purple"), 
                      0.5,
                     {color: $colorRed},
                      0.5
                     )
      //build a scene
      var contentScene = new ScrollMagic.Scene({
          triggerElement: ".panel"
      })
      .setTween(displayTl)
      .addTo(controller);        
    });
  }, 700);

  var delay = 4200;
  if($(document).scrollTop() > 10 || $(window).width() < 767) {
    if($(window).width() < 767 && $(document).scrollTop() > 10){
      //If on mobile and the screen is past 10px scroll position, 
      //make the arrow opaque instead of waiting for fade in animation
      $(".arrow").addClass("opaque");
    }
    $(".fade-last").css("opacity", "1");
    $(".navbar-brand").addClass("opaque");
  }
  else {    
    setTimeout(function(){
      $(".navbar-default").each(function(index){
        var displayT2 = new TimelineLite();
        displayT2
                .fromTo(this, 
                       0.5,
                       {autoAlpha: 0, x: 0},
                       {autoAlpha: 1, ease:Power1.easeOut, x: 0},
                       0.5,
                       )
                .staggerTo(this.getElementsByClassName("navbar-brand"), 
                        0.5,
                       {opacity: 1},
                        0.5
                       )
                .staggerTo(this.getElementsByClassName("navbar-nav"), 
                        0.5,
                       {opacity: 1},
                        0.5
                       )
                
        //build a scene
        var contentScene = new ScrollMagic.Scene({
            triggerElement: ".panel"
        })
        .setTween(displayT2)
        .addTo(controller);
      });
    }, 3200);

    
  }
  //Less delay for arrow to fade in if on mobile
  if($(window).width() < 767) {
    delay = 3200;
  }
  setTimeout(function(){
      $(".arrow").each(function(index){
        var displayT2 = new TimelineLite();
        displayT2
                .fromTo(this, 
                       0.5,
                       {autoAlpha: 0, x: 0},
                       {autoAlpha: 1, ease:Power1.easeOut, x: 0},
                       0.5
                       )
        //build a scene
        var contentScene = new ScrollMagic.Scene({
            triggerElement: ".panel"
        })
        .setTween(displayT2)
        .addTo(controller);
      });
    }, delay);
});