function writeLiveReload(){
	if(location.host == ''){
		document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');
	}
}
$(document).on("click mousemove",".box",function(e){ 
	var x = e.clientX;
	var y = e.clientY;
	var newposX = x - 60;
	var newposY = y - 60; $(".circle").css("transform","translate3d("+newposX+"px,"+newposY+"px,0px)");
});