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

      return 'perspective( 1000px ) translate3d( 0, 0px, 100px ) rotateX('+ degX +') rotateY('+ degY +')';
    } );
  } )
    .on( "mouseout", "#card", function() {
    $( this ).removeAttr( 'style' )
  } );
})();

/*----------------------------------------------------------------------------------*/


$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
       $('#go-top:hidden').stop(true, true).fadeIn();
    } else {
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
$( document ).ready(function() {
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
    console.log('added');
    $('.card-img').addClass('touch');
  }
  else if( is_safari || is_edge_or_ie  ){
    $('.card-img').removeClass('touch');
    console.log('remove');
  }
});