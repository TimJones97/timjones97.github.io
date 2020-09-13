$( document ).ready(function() {
  $('body').css('height', $(window).height() + 'px');
  $('body').css('width', $(window).width() + 'px');
  if($(window).width() < 767){
    $(".cracker").hover(
      function() {
        $(".touch-message").text("Close egg").animate({'opacity': 1}, 100);
        // $(".touch-message").css('background', 'rgba(255,255,255,0.5)');
        $(".background").addClass('active')
        $('.background').css('opacity', '0.5');
      },
      function() {
          $(".touch-message").text("Tap the egg!").animate({'opacity': 1}, 100);
        $(".background").removeClass('active')
        $('.background').css('opacity', '0');
        // $(".touch-message").css('background', 'none');
      }
    );
  }
  else {
  $(".cracker").hover(
      function() {
        $(".touch-message").css("opacity", "0");
        $(".background").addClass('active')
        $('.background').css('opacity', '0.5');
      },
      function() {
        $(".touch-message").css("opacity", "1");
        $(".background").removeClass('active')
        $('.background').css('opacity', '0');
      }
    );
  }
});

$(window).resize(function () { 
  $('body').css('height', $(window).height() + 'px');
  $('body').css('width', $(window).width() + 'px');

});
