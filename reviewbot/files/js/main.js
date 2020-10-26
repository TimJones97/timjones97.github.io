var data;
var sorted = false;
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
    // Store the rating in a variable
    var rating = 0;
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
									html += '<div class="rating" data-rating="' + Math.round(colData) + '">';
									// Add up ratings for average later
									ratingTotal += Math.round(colData);
									rating = Math.round(colData);
									reviewCount++;
									for (i = 0; i < colData; i++) {
									  html += '<img class="star" src="./files/img/star.png">';
									}
									if(rating < 5){
										for (j = rating; rating < 5; rating++) {
										  html += '<img class="star" src="./files/img/star_empty.png">';
										}
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

		// Show average ratings 
		var average = ratingTotal / reviewCount;
  		var averageRounded = Math.round((average + Number.EPSILON) * 100) / 100;
		$(csvDisplay).next().find('span').html(averageRounded);

		//Show retrieval time
		var date = new Date(retrievalDate + ' GMT');
		var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		$('.updated_time span').html(days[date.getDay()] + " " + date.toLocaleTimeString());

		//Add it all to the DOM
		$(csvDisplay).append(html);
  	}
}	
function createSlickSlider(){
	$('.slider').slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    autoplay: false,
	    responsive: [
	        {
	            breakpoint: 9999,
	            settings: "unslick"
	        },
	        {
	            breakpoint: 992,
	            settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
	            }
	        }
	    ]
	});
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
		setRatings();
		sortRatingsOnClick();
	}, 1000);
	createSlickSlider();
});

function setRatings(){
	//Attaches a data attribute to the parent elements for sorting
	$('.rating').each(function(){
		$(this).parent().attr('data-rating', $(this).attr('data-rating'));
		$(this).removeAttr('data-rating')
	});
}
function changeSortStatus(thisElem){
	if(!sorted){
		thisElem.next().addClass('show');
		thisElem.next().find('.first_identifier').html('worst');
		thisElem.next().find('.second_identifier').html('best');
		sorted = true;
		setTimeout(function(){
			thisElem.next().removeClass('show');
		}, 1200);
	}
	else {
		thisElem.next().addClass('show');
		thisElem.next().find('.first_identifier').html('best');
		thisElem.next().find('.second_identifier').html('worst');
		sorted = false;
		setTimeout(function(){
			thisElem.next().removeClass('show');
		}, 1200);
	}
	// if($(window).width() < 991){
 //  		$('h4').addClass('show');
	// }
	// else {
 //  		$('h4').removeClass('show');
	// }
}
function sortRatingsOnClick(){
	$('#sort_btn_1').click(function(){
		$('#csv-display-1 .store_review').append($('#csv-display-1 .store_review .review').sort(function(a,b){
			if(!sorted){
			   return a.getAttribute('data-rating')-b.getAttribute('data-rating');
			}
			else {
			   return b.getAttribute('data-rating')-a.getAttribute('data-rating');
			}
		}));
		changeSortStatus($(this));
	});
	$('#sort_btn_2').click(function(){
		$('#csv-display-2 .store_review').append($('#csv-display-2 .store_review .review').sort(function(a,b){
		   	if(!sorted){
			   return a.getAttribute('data-rating')-b.getAttribute('data-rating');
			}
			else {
			   return b.getAttribute('data-rating')-a.getAttribute('data-rating');
			}
		}));
		changeSortStatus($(this));
	});
	$('#sort_btn_3').click(function(){
		$('#csv-display-3 .store_review').append($('#csv-display-3 .store_review .review').sort(function(a,b){
		   	if(!sorted){
				return a.getAttribute('data-rating')-b.getAttribute('data-rating');
			}
			else {
				return b.getAttribute('data-rating')-a.getAttribute('data-rating');
			}
		}));
		changeSortStatus($(this));
	});
}
//Listen for keypress events
$(document).on('keydown', function(key) { 
  //If space key pressed
  if (key.which == 32 && $(window).width() > 991) { 
  	key.preventDefault();
  	key.stopPropagation();
  	if($('h4').hasClass('show')){
  		$('h4').removeClass('show');
  		$('.sort_btn').removeClass('show');
  	}
  	else {
  		$('h4').addClass('show');
  		$('.sort_btn').addClass('show');
  	}
  }
});
//Listen for resize events
$(window).resize(function(){
	$('#csv-display-3').removeAttr('style');
	//Do not show average and sort buttons on resize
	$('h4').removeClass('show');
	$('.sort_btn').removeClass('show');
	//Wait 100ms for resize event to finish
	setTimeout(function(){
		$('#csv-display-3').css('height', $('#csv-display-1').outerHeight() + 'px');
		if($(window).width() < 991){
			$('.slider')[0].slick.refresh();
		}
	}, 100);
});