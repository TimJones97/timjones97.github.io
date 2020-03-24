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
      $(this).find('.circle_inner p').css('transform', 'translate(-50%,-50%) translateZ(0) scale(0.95)');
      $(this).find('.circle_hidden_contact').css('transform', 'translateZ(0) scale(0.95)');
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
      $(this).find('.circle_inner p').css('transform', 'translate(-50%,-50%) translateZ(0) scale(1.0)');
      $(this).find('.circle_hidden_contact').css('transform', 'translateZ(0) scale(1.0)');
    }
  );
}

$(window).resize(function () { 
  
});

Pace.restart();
Pace.on("done", function(){
  if($(window).width() < 991) {
    $(".main").css("height", $(window).innerHeight());
  }
  else {
    $(".main").css("height", $(window).height() + "px");
  }
  // showMain();
  showMainQuicker();
  // showPortfolio();
});

function hideMainPortfolioClicked(){
  $('.main').addClass('slideDown');
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
  },3600);
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
    $('.contain .five').addClass('show');
  },1800);
  setTimeout(function(){
    $('.contain .six').addClass('show');
  },2000);
  setTimeout(function(){
    $('.portfolio').addClass('anim');
  },2200); 
  setTimeout(function(){
    $('.switch').removeClass('no_view');
    $('.exit_btn').removeClass('no_view');
  },3200);
}
function showContact(){
  $('.circle_hidden_contact').addClass('visible');
  $('.circle_inner').addClass('invisible');
  $(".title_text h1 span").stop().animate({'opacity': 0}, 250, function(){
    $(".title_text h1 span").text("Contact me.").animate({'opacity': 1}, 250);
  });
  $(".title_text h2").stop().animate({'opacity': 0}, 250, function(){
    $(".title_text h2").text("Any questions?").animate({'opacity': 1}, 250);
  });
}
function hideSkills(){
  $('.skill_item').removeAttr('style');
  $('.skill_item').css('pointer-events', 'none');
  setTimeout(function(){
    $('.skill_item.fourth').removeClass('shadow');
  },400);
  setTimeout(function(){
    $('.skill_item.eighth').removeClass('shadow');
  },550);
  setTimeout(function(){
    $('.skill_item.twelfth').removeClass('shadow');
  },700);
  setTimeout(function(){
    $('.skill_item.fourth').removeClass('shadow');
    $('.skill_item.eleventh').removeClass('shadow');
  },850);
  setTimeout(function(){
    $('.skill_item.seventh').removeClass('shadow');
  },1000);
  setTimeout(function(){
    $('.skill_item.third').removeClass('shadow');
  },1150);
  setTimeout(function(){
    $('.skill_item.second').removeClass('shadow');
  },1300);
  setTimeout(function(){
    $('.skill_item.sixth').removeClass('shadow');
  },1450);
  setTimeout(function(){
    $('.skill_item.tenth').removeClass('shadow');
  },1600);
  setTimeout(function(){
    $('.skill_item.ninth').removeClass('shadow');
  },1750);
  setTimeout(function(){
    $('.skill_item.fifth').removeClass('shadow');
  },1900);
  setTimeout(function(){
    $('.skill_item.first').removeClass('shadow');
  },2150);
  setTimeout(function(){
    $('.skills').removeClass('anim');
  },2300);
  setTimeout(function(){
    $('.exit_btn').addClass('no_view');
  },3000);
  setTimeout(function(){
    $('.skills').removeClass('show');
    $('.main').removeClass('slideLeft');
    $(".skills").css("left", "100%");
  },3400);
  setTimeout(function(){
    $('.top_left_contain').removeClass('hide');
    $('.bottom_left_contain').removeClass('hide');
    $('.bottom_right_contain').removeClass('hide');
    $('.skill_item').removeClass('shadow');
    $('.skill_item').removeAttr('style');
  },4000);
}
function hidePortfolio(){
  setTimeout(function(){
    $('.contain .one').removeClass('show');
  },200);
  setTimeout(function(){
    $('.contain .six').removeClass('show');
  },400);
  setTimeout(function(){
    $('.contain .four').removeClass('show');
  },600);
  setTimeout(function(){
    $('.contain .three').removeClass('show');
  },800);
  setTimeout(function(){
    $('.contain .two').removeClass('show');
  },1000);
  setTimeout(function(){
    $('.contain .five').removeClass('show');
  },1200);
  setTimeout(function(){
    $('.switch').addClass('no_view');
    $('.exit_btn').addClass('no_view');
    $('.portfolio').removeClass('anim');
  },1400);
   setTimeout(function(){
    $('.portfolio').removeClass('show');
  },2200);
  setTimeout(function(){
    $('.main').removeClass('slideDown');
  },2400);
  setTimeout(function(){
    $('.top_left_contain').removeClass('hide');
    $('.bottom_left_contain').removeClass('hide');
    $('.bottom_right_contain').removeClass('hide');
    $('.switch').removeClass('no_view');
  },3400);
}
function hideContact(){
  $('.circle_hidden_contact').removeClass('visible');
  $('.circle_inner').removeClass('invisible');
  $(".title_text h1 span").stop().animate({'opacity': 0}, 250, function(){
    $(".title_text h1 span").text("Timothy Jones").animate({'opacity': 1}, 250);
  });
  $(".title_text h2").stop().animate({'opacity': 0}, 250, function(){
    $(".title_text h2").text("UI/UX Designer & Developer").animate({'opacity': 1}, 250);
  });
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
  createParallax();

  $(window).scroll(function() { 
  });
  if($(document).scrollTop() > 0){
    $(".navbar-default").css('opacity', '1');
  }
  var theDate = new Date(); 
  $(".year").text(theDate.getFullYear());
  
  // Don't allow clicking or hover effects until animations are complete
  // setTimeout(function(){
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
      // if($("body").hasClass("contactOpen")){

      //   hideContact();
      //   $('body').removeClass('contactOpen');
      // }
    });
    $('.circle_container.first').on('click', function (e) {
      //Check to see if the contact button has been triggered
      //If yes, do not allow click events to be triggered on Portfolio, Skills
      //and Experience buttons
      if(!$(".circle_inner").hasClass("invisible")){
        hideMainPortfolioClicked();
        $('body').addClass('portfolioOpen');
      }
    });
    $('.circle_container.second').on('click', function (e) {
      if(!$(".circle_inner").hasClass("invisible")){
        hideMainSkillsClicked();
        $('body').addClass('skillsOpen');
      }
    });
    $('.circle_container.third').on('click', function (e) {
      if($(".circle_inner").hasClass("invisible")){
        console.log('yes');
        $('body').removeClass('contactOpen');
        hideContact();
        $('.circle_hidden_contact').removeAttr('style');
      }
      else {
        showContact();
        $('body').addClass('contactOpen');
      }
    });
    // $('.circle_container').on('click', function (e) {
    //   hideMainPortfolioClicked();
    // });
    // $('.circle_container').on('click', function (e) {
    //   hideMainPortfolioClicked();
    // });
  // },3100);
});