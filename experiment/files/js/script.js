function writeLiveReload(){
	if(location.host == ''){
		document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');
	}
}
function hoverChangeCursorColour(){
	$('.background-text.orange').hover(
		function() {
			$(".circle").addClass("orange");
	  	}, function() {
			$(".circle").removeClass("orange");
		}
	);
	$('.background-text.blue').hover(
		function() {
			$(".circle").addClass("blue");
	  	}, function() {
			$(".circle").removeClass("blue");
		}
	);
	$('.background-text.pink').hover(
		function() {
			$(".circle").addClass("pink");
	  	}, function() {
			$(".circle").removeClass("pink");
		}
	);
}
$(document).ready(function(){
	hoverChangeCursorColour();
});
$(document).on("click mousemove","body",function(e){ 
	var x = e.clientX;
	var y = e.clientY;
	var newposX = x - 250;
	var newposY = y - 250; 
	if(newposY < 100 && newposX > ($(window).width() - 500)){
		$(".circle").addClass("tiny");
		newposX = x;
		newposY = y; 
	}
	else {
		$(".circle").removeClass("tiny");
	}
	$(".circle").css("transform","translate3d("+newposX+"px,"+newposY+"px,0px)");
});

