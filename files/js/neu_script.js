var firstTime = true;
var delay = 4600;

Vue.config.devtools = true;

Vue.component('card', {
  template: `
    <div class="card-wrap"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="card">
      <div class="card"
        :style="cardStyle">
        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="card-info">
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    </div>`,
  mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },
  props: ['dataImage'],
  data: () => ({
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: 0
  }),
  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle() {
      const rX = this.mousePX * 30;
      const rY = this.mousePY * -30;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
      };
    },
    cardBgTransform() {
      const tX = this.mousePX * -40;
      const tY = this.mousePY * -40;
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`
      }
    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.dataImage})`
      }
    }
  },
  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width/2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height/2;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(()=>{
        this.mouseX = 0;
        this.mouseY = 0;
      }, 0);
    }
  }
});

const app = new Vue({
  el: '#app'
});

const app_two = new Vue({
  el: '#app_two'
});

function preventScrollOnMenuOpen(){
  //If the dropdown menu on mobile is open
  if ($(".collapse.in").length){
    $("body").css("overflow-y", "no_view");
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
  $(".neu_container").hover(
      function() {
        if($("body").hasClass("dark")) {
          $(this).css('box-shadow', 'none');
          $('.neu_inner').css('box-shadow', 'inset 2px 2px 5px rgba(0,0,0,0.2), inset -5px -5px 10px rgba(255,255,255,0.1)');
        }
        else {
          $(this).css('box-shadow', 'none');
          $('.neu_inner').css('box-shadow', 'inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF');
        }
        $('.title_text').css('transform', 'scale(0.95)');
        $('.hidden_about').css('transform', 'scale(0.95)');
      },
      function() {
        if($("body").hasClass("dark")) {
          $(this).css('box-shadow', '2px 2px 6px rgba(0,0,0,0.2), -2px -2px 6px rgba(255,255,255,0.1)');
          $('.neu_inner').css('box-shadow', 'none');
        }
        else {
          $(this).css('box-shadow', '-5px -5px 20px rgba(255,255,255,1),  5px 5px 20px rgba(186, 190, 204, 1)');
          $('.neu_inner').css('box-shadow', 'none');
        }
        $('.title_text').css('transform', 'scale(1.0)');
        $('.hidden_about').css('transform', 'scale(1.0)');
      }
  );
  $(".skill_item").hover(
      function() {
        if($("body").hasClass("dark")) {
          $(this).css('box-shadow', 'none');
          $(this).find('.skill_item_inner').css('box-shadow', 'inset 2px 2px 5px rgba(0,0,0,0.2), inset -5px -5px 10px rgba(255,255,255,0.1)');
        }
        else {
          $(this).css('box-shadow', 'none');
          $(this).find('.skill_item_inner').css('box-shadow', 'inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF');
        }
        $(this).find('img').css('transform', 'translateZ(0) scale(0.95)');
      },
      function() {
        if($("body").hasClass("dark")) {
          $(this).css('box-shadow', '2px 2px 6px rgba(0,0,0,0.2), -2px -2px 6px rgba(255,255,255,0.1)');
          $(this).find('.skill_item_inner').css('box-shadow', 'none');
        }
        else {
          $(this).css('box-shadow', '-5px -5px 20px rgba(255,255,255,1),  5px 5px 20px rgba(186, 190, 204, 1)');
          $(this).find('.skill_item_inner').css('box-shadow', 'none');
        }
        $(this).find('img').css('transform', 'translateZ(0) scale(1.0)');
      }
  );
  $(".circle").hover(
    function() {
      if($("body").hasClass("dark")) {
        $(this).css('box-shadow', 'none');
        $(this).children().css('box-shadow', 'inset 2px 2px 5px rgba(0,0,0,0.2), inset -5px -5px 10px rgba(255,255,255,0.1)');
      }
      else {
        $(this).css('box-shadow', 'none');
        $(this).children().css('box-shadow', 'inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF');
      }
    },
    function() {
      if($("body").hasClass("dark")) {
        $(this).css('box-shadow', '2px 2px 6px rgba(0,0,0,0.2), -2px -2px 6px rgba(255,255,255,0.1)');
        $(this).children().css('box-shadow', 'none');
      }
      else {
        $(this).css('box-shadow', '-5px -5px 20px rgba(255,255,255,1),  5px 5px 20px rgba(186, 190, 204, 1)');
        $(this).children().css('box-shadow', 'none');
      }
    }
  );
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
  $(".navbar-default").css("background-color", "rgb(23, 23, 23)");
  $(".navbar-collapse").css("background-color", "rgb(23, 23, 23)");
  $(".navbar-default").css("height", "57px");
  $(".navbar-brand img").css('height', '50px');
  $(".navbar-brand img").css('width', '50px');
}
function addTransparentNav(){
  //Make navbar transparent if scroll position is on main section
  $(".navbar-default").css("background-color", "transparent");
  $(".navbar-default").css("border-top", "none");
  $(".navbar-collapse").css("background-color", "none");
  $(".navbar-nav li a").css("margin-top", "40px");
  $(".navbar-default").css("height", "100px");
  $(".navbar-nav li:nth-of-type(2)").css("padding-left", "40px");
  $(".navbar-nav li:nth-of-type(2) .underline").css("left", "55px");
  $(".navbar-nav li a:hover").css("color", "#fff");
  $(".navbar-nav li .navbar-brand").css("margin-top", "25px");
  $(".navbar-brand img").css('height', '70px');
  $(".navbar-brand img").css('width', '70px');
  $(".navbar-brand .first").css('opacity', '1');
  $(".navbar-brand .second").css('opacity', '0');
}
function addWhiteNavDesktop(){
  $(".navbar-default").css("background-color", "rgb(23, 23, 23)");
  $(".navbar-default").css("border-top", "none");
  $(".navbar-default").css("display", "block");
  $(".navbar-collapse").css("background-color", "none");
  $(".navbar-nav li a").css("margin-top", "10px");
  $(".navbar-nav li a").css("opacity", "1");
  $(".navbar-default").css("height", "75px");
  $(".navbar-nav li:nth-of-type(2)").css("padding-left", "10px");
  $(".navbar-nav li:nth-of-type(2) .underline").css("left", "25px");
  $(".navbar-nav li .navbar-brand").css("margin-top", "-5px");
  $(".navbar-brand img").css('height', '50px');
  $(".navbar-brand img").css('width', '50px');
  $(".navbar-brand .first").css('opacity', '0');
  $(".navbar-brand .second").css('opacity', '1');
}

function animateNavbar(){
  //If on mobile
  if($(window).width() < 767){
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
          // $(".no_view-text").css('opacity', '0');
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

  sr.reveal($('.portfolio-image.aml').parent().parent(),  { delay: 400  });
  sr.reveal($('.portfolio-image.tla').parent().parent(),  { delay: 500  });
  sr.reveal($('.portfolio-image.qutrunning').parent().parent(),  { delay: 600 });
  sr.reveal($('.portfolio-image.quteb').parent().parent(),  { delay: 700 });
  sr.reveal($('.portfolio-image.daryl').parent().parent(),  { delay: 800 });
  sr.reveal($('.portfolio-image.aaron').parent().parent(),  { delay: 900 });
  sr.reveal($('.portfolio-image.new').parent().parent(),  { delay: 1000 });

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
        else if (target == "#contact-highlight"){
          target = "#contact";
          setTimeout(function(){
            $('.contact').css('background', '#9b9b9b');
          }, 1200);
          setTimeout(function(){
            $('.contact').css('background', '#fff');
          }, 2000);
        }
        else {
          if($(window).width() < 767){
            $('.navbar-collapse.in').collapse('no_view');
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
  if($(window).width() < 991) {
    $(".main").css("height", $(window).innerHeight());
  }
  else {
    $(".main").css("height", $(window).height() + "px");
  }
  showMain();
  // showMainQuicker();
  // showPortfolio();
});

function hideMainPortfolioClicked(){
  $('.main').addClass('slideUp');
  $('.switch').addClass('no_view');
  $('.graphic_container').addClass('slide');
  $('.top_left_contain').addClass('hide');
  $('.bottom_left_contain').addClass('hide');
  $('.bottom_right_contain').addClass('hide');
  showPortfolio();
}
function hideMainSkillsClicked(){
  $('.main').addClass('slideLeft');
  $('.graphic_container').addClass('slide');
  $('.top_left_contain').addClass('hide');
  $('.bottom_left_contain').addClass('hide');
  $('.bottom_right_contain').addClass('hide');
  showSkills();
}
function showSkills(){
  $('.skills').addClass('show');
  setTimeout(function(){
    $('.skill_item.first').addClass('shadow');
  },1600);
  setTimeout(function(){
    $('.skill_item.second').addClass('shadow');
  },1700);
  setTimeout(function(){
    $('.skill_item.third').addClass('shadow');
  },1800);
  setTimeout(function(){
    $('.skill_item.fourth').addClass('shadow');
  },1900);
  setTimeout(function(){
    $('.skill_item.eighth').addClass('shadow');
  },2000);
  setTimeout(function(){
    $('.skill_item.seventh').addClass('shadow');
  },2100);
  setTimeout(function(){
    $('.skill_item.sixth').addClass('shadow');
  },2200);
  setTimeout(function(){
    $('.skill_item.fifth').addClass('shadow');
  },2300);
  setTimeout(function(){
    $('.skill_item.ninth').addClass('shadow');
  },2400);
  setTimeout(function(){
    $('.skill_item.tenth').addClass('shadow');
  },2500);
  setTimeout(function(){
    $('.skill_item.eleventh').addClass('shadow');
  },2600);
  setTimeout(function(){
    $('.skill_item.twelfth').addClass('shadow');
  },2700);
  setTimeout(function(){
    $('.skills').addClass('anim');
  },3000);
  setTimeout(function(){
    $('.switch').removeClass('no_view');
    $('.exit_btn').removeClass('no_view');
  },4300);
}
function showPortfolio(){
  $('.portfolio').addClass('show');
  setTimeout(function(){
    $('.contain .one').addClass('show');
  },1000);
  setTimeout(function(){
    $('.contain .two').addClass('show');
  },1200);
  setTimeout(function(){
    $('.contain .three').addClass('show');
  },1400);
  setTimeout(function(){
    $('.contain .four').addClass('show');
  },1600);
  setTimeout(function(){
    $('.contain .eight').addClass('show');
  },1800);
  setTimeout(function(){
    $('.contain .seven').addClass('show');
  },2000);
  setTimeout(function(){
    $('.contain .six').addClass('show');
  },2200);
  setTimeout(function(){
    $('.contain .five').addClass('show');
  },2400);
  setTimeout(function(){
    $('.portfolio').addClass('anim');
  },2600); 
  setTimeout(function(){
    $('.switch').removeClass('no_view');
    $('.exit_btn').removeClass('no_view');
  },3600);
}
function hideSkills(){
  $('.main').removeClass('slideLeft');
  $('.skills').removeClass('show');
  $('.skills').removeClass('anim');
  $('.graphic_container').removeClass('slide');
  $('.graphic_container_right').removeClass('show');
  $(".skills").css("left", "100%");
  setTimeout(function(){
    $('.exit_btn').addClass('no_view');
  },400);
  setTimeout(function(){
    $('.top_left_contain').removeClass('hide');
    $('.bottom_left_contain').removeClass('hide');
    $('.bottom_right_contain').removeClass('hide');
    $('.skill_item').removeClass('shadow');
    $('.skill_item').removeAttr('style');
  },1200);
}
function hidePortfolio(){
  setTimeout(function(){
    $('.contain .five').removeClass('show');
  },200);
  setTimeout(function(){
    $('.contain .six').removeClass('show');
  },400);
  setTimeout(function(){
    $('.contain .seven').removeClass('show');
  },600);
  setTimeout(function(){
    $('.contain .eight').removeClass('show');
  },800);
  setTimeout(function(){
    $('.contain .four').removeClass('show');
  },1000);
  setTimeout(function(){
    $('.contain .three').removeClass('show');
  },1200);
  setTimeout(function(){
    $('.contain .two').removeClass('show');
  },1400);
  setTimeout(function(){
    $('.contain .one').removeClass('show');
  },1600);
  setTimeout(function(){
    $('.switch').addClass('no_view');
    $('.exit_btn').addClass('no_view');
    $('.portfolio').removeClass('anim');
  },1800);
   setTimeout(function(){
    $('.portfolio').removeClass('show');
  },2600);
  setTimeout(function(){
    $('.main').removeClass('slideUp');
  },3000);
  setTimeout(function(){
    $('.top_left_contain').removeClass('hide');
    $('.bottom_left_contain').removeClass('hide');
    $('.bottom_right_contain').removeClass('hide');
    $('.switch').removeClass('no_view');
  },4000);
}
function showMainQuicker(){
  if(firstTime == false){
    delay = 1000;
  }
  $('.portfolio').addClass('top');
  $('.white_wrap').css('height', '0%');
  $('.container').removeClass('shrink');
  $('.first').removeClass('shrink');
  $('.second').removeClass('shrink');
  $('.third').removeClass('shrink');
  $('.fourth').removeClass('shrink');
  $(".skills").css("left", "100%");
  $('.main').css('display', 'block');
  // setTimeout(function(){
    $('.main .container').css('opacity', '1');
    $('.neu_container').addClass("shadow");
  // },500);
  // setTimeout(function(){
    $('.neu_container').css('transition', 'box-shadow 0.7s ease');
    $('.title_text').css('transition', 'left 0.8s ease, opacity 1.8s ease, transform 1s ease');
  // },1500);
  // setTimeout(function(){
    $('.logo').css("transform", 'translate(350%, -50%) scale(1.0) translateZ(0)');
    $('.logo').css("opacity", '0');
  // },1700);
  // setTimeout(function(){
    $('.title_text').css("opacity", '1');
    $('.title_text').css("left", '0px');
  // },1800);
  // setTimeout(function(){
    $('.graphic_container').css('opacity', '1');
    $('.graphic_container_outline').css('opacity', '1');
    $('.graphic_container').addClass('expand');
    $('.circle.one').parent().addClass('show');
    $('.line.top_left').css('opacity', '1');
    $('.title_text').css('transition', 'left 0.8s ease, opacity 0.6s ease, transform 1s ease');
  // },3000);
  // setTimeout(function(){
    $('.circle.three').parent().addClass('show');
    $('.line.bottom_right').css('opacity', '1');
  // },3400);
  // setTimeout(function(){
    $('.graphic_container_outline').addClass('expand');
    $('.circle.two').parent().addClass('show');
    $('.line.top_right').css('opacity', '1');
  // },3800);
  // setTimeout(function(){
    $('.circle.four').parent().addClass('show');
    $('.line.bottom_left').css('opacity', '1');
  // },4200);
  setTimeout(function(){
    $('.switch').removeClass('no_view');
    $('.info_icon').css('opacity', '1');
    //Set first time var to false after first run
    firstTime = false;
  },delay);
}
function showMain(){
  if(firstTime == false){
    delay = 1000;
  }
  $('.portfolio').addClass('top');
  $('.white_wrap').css('height', '0%');
  $('.container').removeClass('shrink');
  $('.first').removeClass('shrink');
  $('.second').removeClass('shrink');
  $('.third').removeClass('shrink');
  $('.fourth').removeClass('shrink');
  $(".skills").css("left", "100%");
  $('.main').css('display', 'block');
  setTimeout(function(){
    $('.main .container').css('opacity', '1');
    $('.neu_container').addClass("shadow");
  },500);
  setTimeout(function(){
    $('.neu_container').css('transition', 'box-shadow 0.7s ease');
    $('.title_text').css('transition', 'left 0.8s ease, opacity 1.8s ease, transform 1s ease');
  },1500);
  setTimeout(function(){
    $('.logo').css("transform", 'translate(350%, -50%) scale(1.0) translateZ(0)');
    $('.logo').css("opacity", '0');
  },1700);
  setTimeout(function(){
    $('.title_text').css("opacity", '1');
    $('.title_text').css("left", '0px');
  },1800);
  setTimeout(function(){
    $('.graphic_container').css('opacity', '1');
    $('.graphic_container_outline').css('opacity', '1');
    $('.graphic_container').addClass('expand');
    $('.circle.one').parent().addClass('show');
    $('.line.top_left').css('opacity', '1');
    $('.title_text').css('transition', 'left 0.8s ease, opacity 0.6s ease, transform 1s ease');
  },3000);
  setTimeout(function(){
    $('.circle.three').parent().addClass('show');
    $('.line.bottom_right').css('opacity', '1');
  },3400);
  setTimeout(function(){
    $('.graphic_container_outline').addClass('expand');
    $('.circle.two').parent().addClass('show');
    $('.line.top_right').css('opacity', '1');
  },3800);
  setTimeout(function(){
    $('.circle.four').parent().addClass('show');
    $('.line.bottom_left').css('opacity', '1');
  },4200);
  setTimeout(function(){
    $('.info_icon').css('opacity', '1');
    $('.switch').removeClass('no_view');
    //Set first time var to false after first run
    firstTime = false;
  },delay);
}
function createParallax(){
  // var bg = document.getElementById('scene-0');
  var scene = document.getElementById('scene-1');
  var scene2 = document.getElementById('scene-2');
  var scene3 = document.getElementById('scene-3');
  var scene4 = document.getElementById('scene-4');
  var scene5 = document.getElementById('scene-5');
  var scene6 = document.getElementById('scene-6');
  var scene7 = document.getElementById('scene-7');
  var scene8 = document.getElementById('scene-8');
  var scene9 = document.getElementById('scene-9');
  var scene10 = document.getElementById('scene-10');
  var scene11 = document.getElementById('scene-11');
  // var parallaxInstance = new Parallax(bg);
  var parallaxInstance = new Parallax(scene);
  var parallaxInstance2 = new Parallax(scene2);
  var parallaxInstance3 = new Parallax(scene3);
  var parallaxInstance4 = new Parallax(scene4);
  var parallaxInstance5 = new Parallax(scene5);
  var parallaxInstance6 = new Parallax(scene6);
  var parallaxInstance7 = new Parallax(scene7);
  var parallaxInstance8 = new Parallax(scene8);
  var parallaxInstance9 = new Parallax(scene9);
  var parallaxInstance10 = new Parallax(scene10);
  var parallaxInstance11 = new Parallax(scene11);
}
function fadeOutVideo(){
  var height = ($(window).height() / 1.5);
  $('video').css({
    'opacity': ((height - $(document).scrollTop()) / (height))
  });
}
$( document ).ready(function() {
  $(".bars").removeClass("active");
  setMainElements();
  createGoTopArrow();
  animateNavbar();
  navbarElementHoverAnim();
  // createScrollRevealEffects();
  bindVelocity();


  createParallax();

  $(window).scroll(function() { 
    animateNavbar();   
    preventScrollOnMenuOpen();
  });
  if($(document).scrollTop() > 0){
    $(".navbar-default").css('opacity', '1');
  }
  var theDate = new Date(); 
  $(".year").text(theDate.getFullYear());
  
  // Don't allow clicking or hover effects until animations are complete
  setTimeout(function(){
    hoverEffects();
    $(".switch").click(function () {
      $('.shadow').removeAttr('style');
      $('.show').removeAttr('style');
      $('.circle').removeAttr('style');
      $('.neu_container').css('transition', 'box-shadow 0.7s ease');
      if ($("body").hasClass("dark")) {
        $(".switch").removeClass("switched");
        $(".exit_btn").removeClass("dark");
        $('body').removeClass('dark');
      }
      else {
        $(".switch").addClass("switched");
        $(".exit_btn").addClass("dark");
        $('body').addClass('dark');
      }
    });
    $(".container").click(function(){
      $(".neu_inner").toggleClass("clicked");
    });
    $(".exit_btn").click(function(){
      if($("body").hasClass("portfolioOpen")){
        hidePortfolio();
        $('body').removeClass('portfolioOpen');
      }
      if($("body").hasClass("skillsOpen")){
        hideSkills();
        $('body').removeClass('skillsOpen');
      }
    });
    $('.circle_container.first').on('click', function (e) {
      hideMainPortfolioClicked();
      $('body').addClass('portfolioOpen');
    });
    $('.circle_container.second').on('click', function (e) {
      hideMainSkillsClicked();
      $('body').addClass('skillsOpen');
    });
    // $('.circle_container').on('click', function (e) {
    //   hideMainPortfolioClicked();
    // });
    // $('.circle_container').on('click', function (e) {
    //   hideMainPortfolioClicked();
    // });
  },3100);
});