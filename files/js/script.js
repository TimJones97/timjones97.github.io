var safariOrEdge = false;
var controller;
var scenes = [];
var activeScenes = [];
var smScene;
var scrollMagicEnabled = false;

checkSafariOrEdge();

function checkSafariOrEdge() {
  //Detect browser and disable transition on card-img if on Safari or IE/Edge
  var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
  var is_safari = navigator.userAgent.indexOf("Safari") > -1;
  var is_edge_or_ie;    
  
  var ua = window.navigator.userAgent;
  var trident = ua.indexOf('Trident/');
  var edge = ua.indexOf('Edge/');
  if (trident > 0 || edge > 0) {
    is_edge_or_ie = true;
  }
  if ((is_chrome)&&(is_safari)) {
      is_safari=false;
  }
  if($( window ).width() > 1000 && !is_safari && !is_edge_or_ie){
    // console.log('added');   
    safariOrEdge = false;
  }
  else if( is_safari || is_edge_or_ie  ){
    safariOrEdge = true;
    // $(".card-img-mb").css("transition", "transform 0.2s ease");
    console.log('is_edge');
  }
  if(is_chrome){
    console.log('is_chrome');
  }
}

$( document ).ready(function() {

  //Ensure that the portfolio and contact boxes are same as width for square shape
  $(".portfolio-item").css("height", $(".portfolio-item").width());
  // $(".contact-item").css("height", $(".contact-item").outerWidth());

  if($(window).width() < 991) {
    $(".main").css("height", $(window).innerHeight());
  }

  // checkSafariOrEdge();
  hoverEffects();
  animateNavbar();
  createScrollRevealEffects();
  bindVelocity();
  createGoTopArrow();
  setMainElements();

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
  //Ensure that the arrow-down element has opacity of 1 at all times
  setTimeout(function(){
    $(".arrow-down").addClass("opaque");
  }, 5000);
  //Ensure page always loads from top
  // setTimeout(function(){
  //   var scrollTop = $(this).scrollTop();
  //   $("html, body").animate({
  //       scrollTop: 0
  //   }, 0);
  // }, 200);
  
  var theDate = new Date(); 
  $(".year").text(theDate.getFullYear());
});

function hoverEffects() {
  $(".aml").hover(
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("AML Advisory").animate({'opacity': 1}, 200);
      });
      $(this).css("transform", "scale(1.05, 1.05)");
      $(this).css("box-shadow", "-1px 3px 26px 0px rgba(0,0,0,0.75)");
    },
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Portfolio").animate({'opacity': 1}, 200);
      });
      $(this).css("transform", "scale(1, 1)");
      $(this).css("box-shadow", "none");
    }
  );
  $(".tla").hover(
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("The Logistics Alliance").animate({'opacity': 1}, 200);
      });
      $(this).css("transform", "scale(1.05, 1.05)");
      $(this).css("box-shadow", "-1px 3px 26px 0px rgba(0,0,0,0.75)");
    },
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Portfolio").animate({'opacity': 1}, 200);
      });
      $(this).css("transform", "scale(1, 1)");
      $(this).css("box-shadow", "none");
    }
  );
  $(".qutrunning").hover(
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("QUT Running").animate({'opacity': 1}, 200);
      });
      $(this).css("transform", "scale(1.05, 1.05)");
      $(this).css("box-shadow", "-1px 3px 26px 0px rgba(0,0,0,0.75)");
    },
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Portfolio").animate({'opacity': 1}, 200);
      });
      $(this).css("transform", "scale(1, 1)");
      $(this).css("box-shadow", "none");
    }
  );
  $(".quteb").hover(
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("QUT Exchange").animate({'opacity': 1}, 200);
      });
      $(this).css("transform", "scale(1.05, 1.05)");
      $(this).css("box-shadow", "-1px 3px 26px 0px rgba(0,0,0,0.75)");
    },
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Portfolio").animate({'opacity': 1}, 200);
      });
      $(this).css("transform", "scale(1, 1)");
      $(this).css("box-shadow", "none");
    }
  );
  $(".daryl").hover(
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Daryl Murphy Entertainment").animate({'opacity': 1}, 200);
      });
      $(this).css("transform", "scale(1.05, 1.05)");
      $(this).css("box-shadow", "-1px 3px 26px 0px rgba(0,0,0,0.75)");
    },
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Portfolio").animate({'opacity': 1}, 200);
      });
      $(this).css("transform", "scale(1, 1)");
      $(this).css("box-shadow", "none");
    }
  );
  $(".aaron").hover(
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Aaron Maybus Entertainer").animate({'opacity': 1}, 200);
      });
      $(this).css("transform", "scale(1.05, 1.05)");
      $(this).css("box-shadow", "-1px 3px 26px 0px rgba(0,0,0,0.75)");
    },
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Portfolio").animate({'opacity': 1}, 200);
      });
      $(this).css("transform", "scale(1, 1)");
      $(this).css("box-shadow", "none");
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
  $(".navbar-default").css("background-color", "rgba(0,0,0,0.8)");
  $(".navbar-collapse").css("background-color", "rgba(0,0,0,0.8)");
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
  if($(window).width() < 767 ){
    $(".navbar-nav").removeClass("fade-last");
    //Scroll position is in About section
    if($(document).scrollTop() > 300) {
      addWhiteNav();
    }
    //Scroll position is in Main section
    else {
      addBlackNav();
    }
    //Scroll position is in Portfolio section
    if($(document).scrollTop() > (($(".about").outerHeight()) + 400)) {
      addBlackNav();
    }
    //Scroll position is in Skills section
    if($(document).scrollTop() > (($(".about").outerHeight() + $(".portfolio").outerHeight()) + 500)) {
      addWhiteNav();
    }
    //Scroll position is in Experience section
    if($(document).scrollTop() > (($(".about").outerHeight() + $(".portfolio").outerHeight() + $(".skills").outerHeight()) + 500)) {
      addBlackNav();
    }
    //Scroll position is in Contact section
    if($(document).scrollTop() > (($(".about").outerHeight() + $(".portfolio").outerHeight() + $(".skills").outerHeight() + $(".experience").outerHeight()) + 600)) {
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
  // ===== Scroll to Top ==== 
  $(window).scroll(function() {
    if ($(this).scrollTop() > 70) {        // If page is scrolled more than 50px
      $('.arrow-down').fadeOut(200);    // Fade in the arrow
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
      $('.arrow-down').fadeIn(200);    // Fade in the arrow
    }
  });
  $('#return-to-top').click(function() {      // When arrow is clicked
      $("#home").velocity("scroll", 1000);
  });
}

//Reset the elements that require resizing
function setMainElements(){

  //Reset all styles on navbar
  $(".navbar-default").removeAttr("style");
  $(".navbar-nav li a").removeAttr("style");
  $(".navbar-collapse").removeAttr("style");
  $(".ribbon").css("animation", "none");

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
      $(".arrow-down").css("z-index", "100");
    }
    if($(window).width() < 767) {
      $(".title-text").css("top", "58%");
      $(".title-text").css("transform", "translate(0%, -58%");
      $(".arrow-down").css("z-index", "20");
    }
    if($(window).width() < 479){
      $(".title-text").css("top", "52%");
      $(".title-text").css("transform", "translate(0%, -52%");
      $(".arrow-down").css("z-index", "20");
    }
    
    $(".portfolio-item").css("height", $(".portfolio-item").width());
    // $(".contact-item").css("height", $(".contact-item").outerWidth());
  }, 400);
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
  if($(document).scrollTop() > 10) {
    $(".fade-last").css("opacity", "1");
  }
  else {
    setTimeout(function(){
      $(".navbar-nav").each(function(index){
        var displayT2 = new TimelineLite();
        displayT2
                .fromTo(this, 
                       0.6,
                       {autoAlpha: 0, x: 150},
                       {autoAlpha: 1, ease:Power1.easeOut, x: 0}
                       )
                .staggerTo(this.getElementsByClassName("fade-last"), 
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
    }, 3900);
    setTimeout(function(){
      $(".arrow-down").each(function(index){
        var displayT3 = new TimelineLite();
        displayT3
                .fromTo(this, 
                       0.6,
                       {autoAlpha: 0, x: 150},
                       {autoAlpha: 1, ease:Power1.easeOut, x: 0}
                       )
                .staggerTo(this.getElementsByClassName(".arrow-down"), 
                        0.5,
                       {opacity: 1},
                        0.5
                       )
        //build a scene
        var contentScene = new ScrollMagic.Scene({
            triggerElement: ".panel"
        })
        .setTween(displayT3)
        .addTo(controller);
      });          
    }, 4200);
  }
});