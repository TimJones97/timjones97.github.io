/* Scroll Postion for CSS Animations */

/*----------------------------------------------------------------------------------*/

(function() {
  $( document )
    .on( "mousemove", "body", function( event ) {

    var elmnt = document.getElementById("card");

    var halfW = ( elmnt.clientWidth / 2 );
    var halfH = ( elmnt.clientHeight / 2 );
    var coorX = ( halfW - ( event.pageX - elmnt.offsetLeft ) );
    var coorY = ( halfH - ( event.pageY - elmnt.offsetTop ) );

    var degX  = ( ( coorY / halfH ) * 10 ) + 'deg'; // max. degree = 10
    var degY  = ( ( coorX / halfW ) * -10 ) + 'deg'; // max. degree = 10

    $('.parallax').css( 'transform', function() {

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
    .on( "mousemove", ".svg-wrapper-1", function( event ) {


    $('.qut-running-logo').css( '-webkit-filter', function() {
      return 'grayscale(0)';
    } )
    $('.qut-running-logo').css( 'filter', function() {
      return 'grayscale(0)';
    } );
  } )
    .on( "mouseout", ".svg-wrapper-1", function() {
    $('.qut-running-logo').removeAttr( 'style' )
  } );
})();
(function() {
  $( document )
    .on( "mousemove", ".svg-wrapper-2", function( event ) {

    $('.aml-logo').css( '-webkit-filter', function() {
      return 'grayscale(0)';
    } )
    $('.aml-logo').css( 'filter', function() {
      return 'grayscale(0)';
    } );
  } )
    .on( "mouseout", ".svg-wrapper-2", function() {
    $('.aml-logo').removeAttr( 'style' )
  } );
})();
(function() {
  $( document )
    .on( "mousemove", ".svg-wrapper-3", function( event ) {

    $('.qut-eb-logo').css( '-webkit-filter', function() {
      return 'grayscale(0)';
    } )
    $('.qut-eb-logo').css( 'filter', function() {
      return 'grayscale(0)';
    } );
  } )
    .on( "mouseout", ".svg-wrapper-3", function() {
    $('.qut-eb-logo').removeAttr( 'style' )
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

/*Broswer Height */
$(window).ready(function(){
    $(function(){
        $('.container_gradient').css({'height':(($(window).height()-0))+'px'});

        $(window).resize(function(){
        $('.container_gradient').css({'height':(($(window).height()-0))+'px'});
        });
    });
});

/*Broswer Width */
$(window).ready(function(){
    $(function(){
        $('.container_gradient').css({'width':(($(window).width()-0))+'px'});

        $(window).resize(function(){
        $('.container_gradient').css({'width':(($(window).width()-0))+'px'});
        });
    });
});


/*----------------------------------------------------------------------------------*/

/*year*/
var currentYear = (new Date).getFullYear();
$(document).ready(function() {
	$("#year").text( (new Date).getFullYear() );
});

/*yearC*/
var currentYear = (new Date).getFullYear();
$(document).ready(function() {
	$("#yearC").text( (new Date).getFullYear() );
});

/*----------------------------------------------------------------------------------*/

/*scroll*/
$(document).ready(function() {
 
	$("a.Smooth").click(function() {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top + "px"
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});
 
});

/*----------------------------------------------------------------------------------*/
