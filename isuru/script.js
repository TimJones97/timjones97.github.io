$( document ).ready(function() {
  $('body').css('height', $(window).height() + 'px');
  $('body').css('width', $(window).width() + 'px');
  if($(window).width() < 767){
    $(".cracker").hover(
      function() {
        $(".touch-message").text("Close egg").animate({'opacity': 1}, 100);
        $(".background").addClass('active')
      },
      function() {
          $(".touch-message").text("Tap the egg!").animate({'opacity': 1}, 100);
        $(".background").removeClass('active')
      }
    );
  }
  else {
  $(".cracker").hover(
      function() {
        $(".touch-message").css("opacity", "0");
        $(".background").addClass('active')
      },
      function() {
        $(".touch-message").css("opacity", "1");
        $(".background").removeClass('active')
      }
    );
  }
});

$(window).resize(function () { 
  $('body').css('height', $(window).height() + 'px');
  $('body').css('width', $(window).width() + 'px');

});
