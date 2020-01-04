$( document ).ready(function() {
  $('body').css('height', $(window).height() + 'px');
  $('body').css('width', $(window).width() + 'px');
  if($(window).width() < 767){
    $(".cracker").hover(
      function() {
        $(".touch-message").stop().animate({'opacity': 0}, 200, function(){
          $(".touch-message").text("Close egg").animate({'opacity': 1}, 200);
        });
      },
      function() {
        $(".touch-message").stop().animate({'opacity': 0}, 200, function(){
          $(".touch-message").text("Tap the egg!").animate({'opacity': 1}, 200);
        });
      }
    );
  }
  else {
  $(".cracker").hover(
      function() {
        $(".touch-message").css("opacity", "0");
      },
      function() {
        $(".touch-message").css("opacity", "1");
      }
    );
  }
});

$(window).resize(function () { 
  $('body').css('height', $(window).height() + 'px');
  $('body').css('width', $(window).width() + 'px');
  
});
