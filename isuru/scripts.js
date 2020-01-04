$( document ).ready(function() {
  $('body').css('height', $(window).height() + 'px');
  $('body').css('width', $(window).width() + 'px');
  if($(window).width() < 767){
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
