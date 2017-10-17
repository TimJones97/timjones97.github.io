/* Scroll Postion for CSS Animations */
var safariOrEdge = false;
var controller;
var scenes = [];
var activeScenes = [];

var smScene;
var wipeAnimation;
var parallax;
var parallax2;
var parallax3;
var parallax4;
var parallax5;
var parallax6;
var parallax7;
var scene;
var scene2;
var scene3;
var scene4;
var scene5;
var scene6;
var scene7;

var scrollMagicEnabled = false;
var fullPageCreated = false;
var paddingSize = "10px";

var options = {
    loopBottom: true,
    navigation: false,
    loopTop: true,
    paddingTop: paddingSize,
    paddingBottom: paddingSize,
    scrollingSpeed: 1000
};
/*----------------------------------------------------------------------------------*/
(function() {
  $( document )
    .on( "mousemove", "#banner", function( event ) {

    var elmnt = document.getElementById("parallax");

    var halfW = ( elmnt.clientWidth / 2 );
    var halfH = ( elmnt.clientHeight / 2 );
    var coorX = ( halfW - ( event.pageX - elmnt.offsetLeft ) );
    var coorY = ( halfH - ( event.pageY - elmnt.offsetTop ) );
    var degX, degY;
  if($(window).width() > 2000 && $(window).height() > 1000){
    degX  = ( ( coorY / halfH ) * 20 ) + 'deg'; // max. degree = 10
  }
  if(safariOrEdge && $(window).width() > 2000 && $(window).height() > 1000){
    degX  = ( ( coorY / halfH ) * 12 ) + 'deg'; // max. degree = 10
  }
  else {
    degX  = ( ( coorY / halfH ) * 12 ) + 'deg'; // max. degree = 10
  }
    degY  = ( ( coorX / halfW ) * -10 ) + 'deg'; // max. degree = 10
    $('.card-img').css( 'transform', function() {

      return 'perspective( 1200px ) translate3d( 0, 0px, 285px ) rotateX('+ degX +') rotateY('+ degY +')';
    } );
  } )
  //   .on( "mouseout", ".container", function() {
  //   $('.card').removeAttr( 'style' )
  //     .children( '.card__summary' )
  //     .removeAttr( 'style' );
  // } );
})();
if($( window ).width() < 991 ){
  (function() {
    $( document )
      .on( "mousemove", "#banner-mb", function( event ) {

      var elmnt = document.getElementById("parallax-mb");

      var halfW = ( elmnt.clientWidth / 2 );
      var halfH = ( elmnt.clientHeight / 2 );
      var coorX = ( halfW - ( event.pageX - elmnt.offsetLeft ) );
      var coorY = ( halfH - ( event.pageY - elmnt.offsetTop ) );
      var degX, degY;
    if($(window).width() > 2000 && $(window).height() > 1000){
      degX  = ( ( coorY / halfH ) * 20 ) + 'deg'; // max. degree = 10
    }
    if(safariOrEdge && $(window).width() > 2000 && $(window).height() > 1000){
      degX  = ( ( coorY / halfH ) * 12 ) + 'deg'; // max. degree = 10
    }
    else {
      degX  = ( ( coorY / halfH ) * 12 ) + 'deg'; // max. degree = 10
    }
      degY  = ( ( coorX / halfW ) * -10 ) + 'deg'; // max. degree = 10
      $('.card-img-mb').css( 'transform', function() {

        return 'perspective( 1200px ) translate3d( 0, 0px, 285px ) rotateX('+ degX +') rotateY('+ degY +')';
      } );
    } )
    //   .on( "mouseout", ".container", function() {
    //   $('.card').removeAttr( 'style' )
    //     .children( '.card__summary' )
    //     .removeAttr( 'style' );
    // } );
  })();
}
(function() {
  $( document )
    .on( "mousemove", "#card", function( event ) {

    var elmnt = document.getElementById("parallax");

    var halfW = ( elmnt.clientWidth / 1.5 );
    var halfH = ( elmnt.clientHeight / 2.5 );
    var coorX = ( halfW - ( event.pageX - elmnt.offsetLeft ) );
    var coorY = ( halfH - ( event.pageY - elmnt.offsetTop ) );

    var degX  = ( ( coorY / halfH ) * 0 ) + 'deg'; // max. degree = 10
    var degY  = ( ( coorX / halfW ) * -15 ) + 'deg'; // max. degree = 10

    $( this ).css( 'transform', function() {

      return 'perspective( 1200px ) translate3d( 0, 0px, 100px ) rotateX('+ degX +') rotateY('+ degY +')';
    } );
  } )
    .on( "mouseout", "#card", function() {
    $( this ).removeAttr( 'style' )
  } );
})();

/*----------------------------------------------------------------------------------*/

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
  }
}

$( document ).ready(function() {
  checkSafariOrEdge();
  setupParallax();
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
      // animate to first panel
      .to("#slideContainer", 0.5, {delay: -0.5})
      // animate to second panel
      .to("#slideContainer", 1,   {x: "-33.333333%"})  // move in to first panel
      // animate to third panel
      .to("#slideContainer", 1,   {x: "-50%"})
      // animate to forth panel
      .to("#slideContainer", 1,   {x: "-66.666666%"})
      // animate to fifth panel
      .to(".panel-lg", 0.5, {z: 0, delay: -0.5});

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
  resizePanels();
});

$(window).resize(function () { 
  if ($( window ).width() < 991) {
    // $('#pinContainer').css("height", ($(window).innerHeight() * 5));
    $(".section").css("padding-left", "20px");
    $(".section").css("padding-right", "20px");
    $(".panel-lg .container").css("width", $(window).innerWidth() -40);
    $(".container").css("height", $(window).innerHeight() - 55);
    createFullpage();
  }
  else {   
    $(".panel-lg .container").css("width", $(window).innerWidth() - 120);
    // $(".panel").css("height", $(window).innerHeight());
    if(fullPageCreated == true) {
      fullPageCreated = false;
        $.fn.fullpage.destroy('all');
      }
      if( scrollMagicEnabled == false ){
      wipeAnimation = new TimelineMax()
    // animate to second panel
    .to("#slideContainer", 1,   {x: "-25%"})  // move in to first panel
    // animate to third panel
    .to("#slideContainer", 1,   {x: "-50%"})
    // animate to forth panel
    .to("#slideContainer", 1,   {x: "-75%"})

    controller = new ScrollMagic.Controller();  
    smScene = new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
      triggerHook: "onLeave",
      duration: "450%"
    })
    .setPin("#pinContainer")
    .setTween(wipeAnimation)
    .addTo(controller);
      }
    // destroyScrollMagic();
    // addScrollMagic();
    $(".container").css("height", "100%");
    // $('#pinContainer').css("width", $(window).innerWidth() * 4);
  }
  if ($( window ).width() > 2000 ) {
    $(".line-horizontal").css("margin-top", ($(window).innerHeight() / 2.25 ) * -1);
  }
  else {
    $(".line-horizontal").css("top", "0px");
    $(".line-horizontal").css("margin-top", ($(window).innerHeight() / 2 ) * -1);
  }
  if(!safariOrEdge && $(window).width() > 991){
    $('.card-img').addClass('touch');
  }
  else{
    $('.card-img').removeClass('touch');
    // $('.card-img').addClass('fixed');
  }
  onWindowResizeRecreateParallax();
  resizePanels();
});
/**
 * Set/Remove the padding for the fullpage slider responsively
 * @param  {object} slider The slider container
 * @returns  {null}
 */
function setupParallax() {

  // Turn on parallax for elements on desktop
  if ($( window ).width() > 991) {
    $('.header-title').attr('data-depth', '0.1');
    $('.skills-block').attr('data-depth', '0.1');
    $('.portfolio-block').attr('data-depth', '0.1');
    $('.languages-block').attr('data-depth', '0.1');
    $('#interactive-anim').attr('data-depth', '0.5');
  }
  // And off for mobile
  else{
    $('.header-title').attr('data-depth', '0.0');
    $('.skills-block').attr('data-depth', '0.0');
    $('.portfolio-block').attr('data-depth', '0.0');
    $('.languages-block').attr('data-depth', '0.0');
    $('#interactive-anim').attr('data-depth', '0.0');
  }
    scene = document.getElementById('scene');
    parallax = new Parallax(scene);
    scene2 = document.getElementById('scene-2');
    parallax2 = new Parallax(scene2);
    scene3 = document.getElementById('scene-3');
    parallax3 = new Parallax(scene3);
    scene4 = document.getElementById('scene-4');
    parallax4 = new Parallax(scene4);
    scene5 = document.getElementById('scene-5');
    parallax5 = new Parallax(scene5);        
    scene6 = document.getElementById('scene-6');
    parallax6 = new Parallax(scene6);  
    scene7 = document.getElementById('scene-7');
    parallax7 = new Parallax(scene7);     
  // }
  // else {
    // scene6 = document.getElementById('scene-6');
    // parallax6 = new Parallax(scene6);
    // scene7 = document.getElementById('scene-7');
    // parallax7 = new Parallax(scene7);
    // scene8 = document.getElementById('scene-8');
    // parallax8 = new Parallax(scene8);
    // scene9 = document.getElementById('scene-9');
    // parallax9 = new Parallax(scene9);
    // scene10 = document.getElementById('scene-10');
    // parallax10 = new Parallax(scene10);
  // }
}
function createFullpage() {
    if (fullPageCreated == false) {
        fullPageCreated = true;
        $('#slideContainer').fullpage(options);
    }
    else {
      $(".section").css("height", window.innerHeight);
      $('#fullpage').fullpage.reBuild();
    }
}
/**
 * Set/Remove the padding for the fullpage slider responsively
 * @param  {object} slider The slider container
 * @returns  {null}
 */
function resizePanels() {
  console.log('RESIZED');
  if ($( window ).width() >= 991) {
    //Initialise all panels with height respective to device
    $('.panel').css({
          'height':($(window).innerHeight())
      });
      $('.panel-lg').css({
          'height':($(window).innerHeight())
      });
      $('#slideContainer').css({
          'height':($(window).innerHeight() * 4)
      });
    }
    else {
      // $('#pinContainer').css({
      //     'width': 'auto'
      // });
      // $('#pinContainer').css({
      //     'height': 'auto'
      // });
      $('.panel').css({
          'height': ($(window).innerHeight() - 15)
      });
      $('.panel-lg').css({
          'height': ($(window).innerHeight() - 15)
      });
      // $('#slideContainer').css({
      //     'height':($(window).innerHeight() * 4)
      // });
    }
  } 
/**
 * Set/Remove the padding for the fullpage slider responsively
 * @param  {object} slider The slider container
 * @returns  {null}
 */
function onWindowResizeRecreateParallax() {
    
    parallax.destroy();
    parallax = null;
    parallax2.destroy();
    parallax2 = null;
    parallax3.destroy();
    parallax3 = null;
    parallax4.destroy();
    parallax4 = null;
    parallax5.destroy();
    parallax5 = null;
    parallax6.destroy();
    parallax6 = null;
    // parallax7.destroy();
    parallax7 = null;
    setupParallax();
    // $('#slideContainer').fullpage(options);
}
/**
 * Set/Remove the padding for the fullpage slider responsively
 * @param  {object} slider The slider container
 * @returns  {null}
 */
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
var width = 100,
    perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
    time = parseInt((EstimatedTime/1000)%60)*100;


// Percentage Increment Animation
var PercentageID = $("#percent"),
    start = 0,
    end = 100,
    duration = time;
    animateValue(PercentageID, start, end, duration);
    
function animateValue(id, start, end, duration) {
  
  var range = end - start,
      current = start,
      increment = end > start? 1 : -1,
      stepTime = Math.abs(Math.floor(duration / range)),
      obj = $(id);
    
  var timer = setInterval(function() {
    current += increment;
    $(obj).text(current + "%");
      //obj.innerHTML = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

// Fading Out Loadbar on Finised
setTimeout(function(){
  $('.preloader-wrap').slideUp(200);
  // Make sure that the header animation doesn't start until page load finishes
  $(".title-text").each(function(index){
    
    // $colorBlue = "rgb(255, 156, 70)";
    $colorBlue = "rgb(70, 204, 255)";
    $colorPurple = "rgb(150, 70, 255)";
    
    //create a timeline
    var displayTl = new TimelineLite();
    displayTl
            .fromTo(this, 
                    0.3,
                   {autoAlpha: 0, x: 150},
                   {autoAlpha: 1, ease:Power1.easeOut, x: 0}
                   )
            .fromTo(this.getElementsByClassName("underline"), 
                    0.3,
                   {autoAlpha: 0, x: 350},
                   {autoAlpha: 1, ease:Power1.easeOut, x: 0}
                   )
            .staggerTo(this.getElementsByClassName("fade"), 
                    0.3,
                   {opacity: 1},
                    0.3
                   )
            .staggerTo(this.getElementsByClassName("highlight-blue"), 
                    0.3,
                   {color: $colorBlue},
                    0.3
                   )
            .staggerTo(this.getElementsByClassName("highlight-purple"), 
                    0.3,
                   {color: $colorPurple},
                    0.3
                   )
    //build a scene
    var contentScene = new ScrollMagic.Scene({
        triggerElement: ".panel"
    })
    .setTween(displayTl)
//        .addIndicators()
    .addTo(controller);        
  });
}, time);