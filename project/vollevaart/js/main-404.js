$(window).bind('load resize', function(){

	var height404 = $(window).height(),
	width404 = $(window).width(),
	container404 = $('.contents-img404 .container');

	if (width404 > 495 && height404 > 610){//
		container404.css({
			height: height404,
		}); 
	} else if (width404 > 495 && height404 < 610) {//
		container404.css({
			height: 610,
		});
	} else if (width404 < 491 && height404 > 370) {//
		container404.css({
			height: height404,
		});
	} else if (width404 < 491 && height404 < 370) {//
		container404.css({
			height: 370,
		});
	}



});