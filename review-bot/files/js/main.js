var data;
$.ajax({
  type: "GET",  
  url: "https://jb-review-bot.s3-ap-southeast-2.amazonaws.com/reviews1.csv",
  dataType: "text",       
  success: function(response)  
  {
	data = $.csv.toArrays(response);
	generateHtmlTable(data, 1);
  }   
});
$.ajax({
  type: "GET",  
  url: "https://jb-review-bot.s3-ap-southeast-2.amazonaws.com/reviews2.csv",
  dataType: "text",       
  success: function(response)  
  {
	data = $.csv.toArrays(response);
	generateHtmlTable(data, 2);
  }   
});
$.ajax({
  type: "GET",  
  url: "https://jb-review-bot.s3-ap-southeast-2.amazonaws.com/reviews3.csv",
  dataType: "text",       
  success: function(response)  
  {
	data = $.csv.toArrays(response);
	generateHtmlTable(data, 3);
  }   
});
function generateHtmlTable(data, number) {
    var html = '<div class="store_review">';
    var isEmpty = false;
    var ratingTotal = 0;
    var reviewCount = 0;
    var retrievalDate = "";
  	if(typeof(data[0]) === 'undefined') {
        return null;
  	} else {
		$.each(data, function( index, row ) {
			if(index != 0){
				html += '<div class="review">';
				$.each(row, function( index, colData ) {
					if(index == 1 || index == 2 || index == 4 || index == 5){
						if(index == 1 && colData == ''){
							isEmpty = true;
						}
						else if (index == 1 && colData != ''){
							isEmpty = false;
						}
						if(!isEmpty) {
							if(index == 1 || index == 2 || index == 4 || index == 5){
								if(index == 1){
									html += '<p class="caption">';
									html += colData;
									html += '</p>';
								}
								if(index == 2){
									html += '<p class="time">';
									html += colData;
									html += '</p>';
								}
								if(index == 4){
									html += '<div class="rating">';
									// Add up ratings for average later
									ratingTotal += Math.round(colData);
									reviewCount++;
									for (i = 0; i < colData; i++) {
									  html += '<img class="star" src="./files/img/star.png">';
									}
									html += '</div>';
								}
								if(index == 5){
									html += '<p class="person">';
									html += colData;
									html += '</p>';
								}
							}
						}
					}
					if(index == 3){
						retrievalDate = colData;
					}
				});
				html += '</div>';
			}
		});

		var csvDisplay = '#csv-display-' + number;
		// console.log(ratingTotal + " total ratings");
		// console.log(reviewCount + " total reviewCount");

		// Show average ratings 
  		var average = ratingTotal / reviewCount;
		$(csvDisplay).next().find('span').html(average);

		//Show retrieval time
		var date = new Date(retrievalDate + ' GMT');
		var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		$('.updated_time span').html(days[date.getDay()] + " " + date.toLocaleTimeString());

		//Add it all to the DOM
		$(csvDisplay).append(html);
  	}
}	
$(document).ready(function(){
	setTimeout(function(){
		$('#maskoverlay').css('opacity', '0');
	}, 1500);
	setTimeout(function(){
		$('#maskoverlay').css('display', 'none');
	}, 2200);
	setTimeout(function(){
		$('.review').each(function(){
	  		if($(this).has('.caption').length == 0){
	  			$(this).remove();
	  		}
  		});
		$('#csv-display-3').css('height', $('#csv-display-1').outerHeight() + 'px');
	}, 1000);
});

$(document).on('keydown', function(key) { 
  //If space key pressed
  if (key.which == 32) { 
  	$('h4').toggleClass('show');
  }
});

$(window).resize(function(){
	$('#csv-display-3').removeAttr('style');
	setTimeout(function(){
		$('#csv-display-3').css('height', $('#csv-display-1').outerHeight() + 'px');
	}, 100);
});