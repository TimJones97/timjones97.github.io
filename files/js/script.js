/* Scroll Postion for CSS Animations */
var safariOrEdge = false;
var controller;
var scenes = [];
var activeScenes = [];

var smScene;

var scrollMagicEnabled = false;

/*----------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------*/
checkSafariOrEdge();
var ofs, x, y;
$('.contact-btn').on('mouseenter', function(e){
  ofs = $(this).offset();
  x = (e.pageX - ofs.left);
  y = (e.pageY - ofs.top);
var name = $(this).text().toLowerCase().split(' ')[0];
  
$(this).append('<div class="blob ' + name + '" style="left:' + x + 'px; top: ' + y + 'px;"></div>');
  
var blob = $(this).find('.blob');
setTimeout(function(){
    blob.addClass("expand");
},20);
});

$('.contact-btn').on('mouseleave', function(e){
  ofs = $(this).offset();
  x = (e.pageX - ofs.left);
  y = (e.pageY - ofs.top);
  var blob = $(this).find('.blob');
  blob.css({'left':x, 'top':y});
  blob.removeClass("expand");
  setTimeout(function(){
      blob.remove();
  },800);
});

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
  checkSafariOrEdge();


  if ($( window ).width() < 991) {
        $(".section").css("padding-left", "20px");
        $(".section").css("padding-right", "20px");
        createFullpage(); 
      $(".panel-lg .container").css("width", $(window).innerWidth() -40);
      $(".container").css("height", $(window).innerHeight() - 55);
  }
  else {
    // destroyScrollMagic();
    if ($( window ).width() > 2000 ) {
      $(".line-horizontal").css("margin-top", ($(window).innerHeight() / 2.25 ) * -1);
    }
    else {
      $(".line-horizontal").css("top", "0px");
      $(".line-horizontal").css("margin-top", ($(window).innerHeight() / 2 )* -1);
    }
    // $(".panel-lg .container").css("width", $(window).innerWidth() - 120);
  
    // $(".panel").css("margin-left", $(".dots-horizontal").width());
    wipeAnimation = new TimelineMax()

      //add fake slide for delay for scroll
      .to("#slideContainer", 0, {delay: -0.2})

      // animate to first panel
      .to("#slideContainer", 0.5,   {x: "-33.333333%"})  // move in to first panel
      // animate to second panel
      .to("#slideContainer", 0.5,   {x: "-50%"})
      // animate to third panel
      .to("#slideContainer", 0.5,   {x: "-66.666666%"})

      //add fake slide for delay for scroll
      .to("#slideContainer", 1, {delay: -0.7});

    controller = new ScrollMagic.Controller();  

    smScene = new ScrollMagic.Scene({
    triggerElement: "#pinContainer",
    triggerHook: "onLeave",
    duration: "450%"
    })
    .setPin("#pinContainer")
    // .addIndicators() // add indicators (requires plugin)
    .setTween(wipeAnimation)
    .addTo(controller);
    scrollMagicEnabled = true;
  }
  if(!safariOrEdge && $(window).width() > 991){
    $('.card-img').addClass('touch');
  }
  else{
    $('.card-img').removeClass('touch');
    // $('.card-img').addClass('fixed');
  }
  $(".portfolio-item").css("height", $(".portfolio-item").width());
  hoverEffects();
  animateNavbar();
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
  });
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
$(window).scroll(function() { 
  animateNavbar();
});

function animateNavbar(){
  console.log(($(".first").height() + $(".second").height()) + 10);
  console.log($(document).scrollTop());
  if($(document).scrollTop() > 10) {
    $(".fade-last").css("opacity", "1");
    $(".navbar-nav li a").css("color", "black");
    $(".navbar-default").css("background-color", "#fff");
  }
  else {
    $(".navbar-nav li a").css("color", "white");
    $(".navbar-default").css("background-color", "transparent");
  }
  if($(document).scrollTop() > (($(".second").height()) + 10)) {
    $(".navbar-nav li a").css("color", "white");
    $(".navbar-default").css("background-color", "rgb(27, 27, 27)");
  }
  if($(document).scrollTop() > (($(".second").height() + $(".third").height()) + 10)) {
    $(".navbar-nav li a").css("color", "black");
    $(".navbar-default").css("background-color", "#fff");
  }
}
$(window).resize(function () { 
  console.log('RESIZED');
  if ($( window ).width() < 991) {
    // $('#pinContainer').css("height", ($(window).innerHeight() * 5));
    $(".section").css("padding-left", "20px");
    $(".section").css("padding-right", "20px");
    $(".panel-lg .container").css("width", $(window).innerWidth() -40);
    $(".container").css("height", $(window).innerHeight() - 55);
  }
  //Debounce the height change function for the portfolio items
  setTimeout(function(){
    $(".portfolio-item").css("height", $(".portfolio-item").width());
  }, 200);
});

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

// Pace.on("done", function(){
//     $('.preloader-wrap').fadeOut(1000);

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
              .staggerTo(this.getElementsByClassName("fade-last"), 
                      0.5,
                     {opacity: 1},
                      0.5
                     )
      //build a scene
      var contentScene = new ScrollMagic.Scene({
          triggerElement: ".panel"
      })
      .setTween(displayTl)
      .addTo(controller);        
    });
  }, 1000);
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
  }, 4000);
// });


//collapse the navbar upon selection from hamburger menu
$(document).on('click','.navbar-collapse.in',function(e) {
  if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
      $(this).collapse('hide');
  }
});
