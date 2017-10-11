/* Scroll Postion for CSS Animations */

/*----------------------------------------------------------------------------------*/

(function() {
  $( document )
    .on( "mousemove", "#banner", function( event ) {

    var elmnt = document.getElementById("parallax");

    var halfW = ( elmnt.clientWidth / 2 );
    var halfH = ( elmnt.clientHeight / 3.5 );
    var coorX = ( halfW - ( event.pageX - elmnt.offsetLeft ) );
    var coorY = ( halfH - ( event.pageY - elmnt.offsetTop ) );

    var degX  = ( ( coorY / halfH ) * 17 ) + 'deg'; // max. degree = 10
    var degY  = ( ( coorX / halfW ) * -10 ) + 'deg'; // max. degree = 10

    $('.card-img').css( 'transform', function() {

      return 'perspective( 1000px ) translate3d( 0, 0px, 285px ) rotateX('+ degX +') rotateY('+ degY +')';
    } );
  } )
  //   .on( "mouseout", ".container", function() {
  //   $('.card').removeAttr( 'style' )
  //     .children( '.card__summary' )
  //     .removeAttr( 'style' );
  // } );
})();

(function() {
  $( document )
    .on( "mousemove", "#card", function( event ) {

    var elmnt = document.getElementById("parallax");

    var halfW = ( elmnt.clientWidth / 1.5 );
    var halfH = ( elmnt.clientHeight / 2 );
    var coorX = ( halfW - ( event.pageX - elmnt.offsetLeft ) );
    var coorY = ( halfH - ( event.pageY - elmnt.offsetTop ) );

    var degX  = ( ( coorY / halfH ) * 10 ) + 'deg'; // max. degree = 10
    var degY  = ( ( coorX / halfW ) * -30 ) + 'deg'; // max. degree = 10

    $( this ).css( 'transform', function() {

      return 'perspective( 1000px ) translate3d( 0, 0px, 230px ) rotateX('+ degX +') rotateY('+ degY +')';
    } );
  } )
    .on( "mouseout", "#card", function() {
    $( this ).removeAttr( 'style' )
  } );
})();

/*----------------------------------------------------------------------------------*/

/*Broswer Height */
$(window).ready(function(){
    $(function(){
        $('.container').css({'height':(($(window).height()-0))+'px'});

        $(window).resize(function(){
        $('.container').css({'height':(($(window).height()-0))+'px'});
        });
    });
});

/*Broswer Width */
$(window).ready(function(){
    $(function(){
        $('.container').css({'width':(($(window).width()-0))+'px'});

        $(window).resize(function(){
        $('.container').css({'width':(($(window).width()-0))+'px'});
        });
    });
});

$(window).scroll(function () {
      // Get the height of the banner,
      // and then set your menu.
      var bannerHeight = $('.div-block-about-overview').height();

    if ($(this).scrollTop() > 500) {
      $('.navbar-about-topics:hidden').stop(true, true).fadeIn();      
      $('.div-block-64:hidden').stop(true, true).fadeIn();
       $('#go-top:hidden').stop(true, true).fadeIn();
      
    } else {
      $('.navbar-about-topics').stop(true, true).fadeOut();
      $('.div-block-64').stop(true, true).fadeOut();     
      $('#go-top').stop(true, true).fadeOut();
    } 
});

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
