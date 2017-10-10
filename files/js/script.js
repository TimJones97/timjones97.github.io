/* Scroll Postion for CSS Animations */

/*----------------------------------------------------------------------------------*/

(function() {
  $( document )
    .on( "mousemove", ".container", function( event ) {

    var elmnt = document.getElementById("parallax");

    var halfW = ( elmnt.clientWidth / 2 );
    var halfH = ( elmnt.clientHeight / 3.5 );
    var coorX = ( halfW - ( event.pageX - elmnt.offsetLeft ) );
    var coorY = ( halfH - ( event.pageY - elmnt.offsetTop ) );

    var degX  = ( ( coorY / halfH ) * 17 ) + 'deg'; // max. degree = 10
    var degY  = ( ( coorX / halfW ) * -10 ) + 'deg'; // max. degree = 10

    $('.card-img').css( 'transform', function() {

      return 'perspective( 1000px ) translate3d( 0, 0px, 230px ) rotateX('+ degX +') rotateY('+ degY +')';
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

    var halfW = ( elmnt.clientWidth / 2 );
    var halfH = ( elmnt.clientHeight / 3.5 );
    var coorX = ( halfW - ( event.pageX - elmnt.offsetLeft ) );
    var coorY = ( halfH - ( event.pageY - elmnt.offsetTop ) );

    var degX  = ( ( coorY / halfH ) * 17 ) + 'deg'; // max. degree = 10
    var degY  = ( ( coorX / halfW ) * -10 ) + 'deg'; // max. degree = 10

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

