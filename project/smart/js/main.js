
$(window).bind('load resize', function(){
	viewport_set();
});


//меню
$('.min-menu').on("click", function(){
	$('header').toggleClass("min-hide");
});



//изменение viewport
var viewport = document.querySelector('#viewport'),
	viewports = {
		default: viewport.getAttribute('content'),
		small: 'width=device-width, initial-scale=1, user-scalable=no'
	};

	// console.log(viewports);

var viewport_set = function() {
	screen.width <= 320 ?  viewport.setAttribute( 'content', viewports.small) : viewport.setAttribute( 'content', viewports.default );
	// screen.width <= 320 ?  $('header').addClass("min-hide") : $('header').removeClass("min-hide");
};
//При загрузке
viewport_set();




/*
 * Replace all SVG images with inline SVG
 */
jQuery('img.svg').each(function(){
	var $img = jQuery(this);
	var imgID = $img.attr('id');
	var imgClass = $img.attr('class');
	var imgURL = $img.attr('src');

	jQuery.get(imgURL, function(data) {
		var $svg = jQuery(data).find('svg');

		if(typeof imgID !== 'undefined') {
			$svg = $svg.attr('id', imgID);
		}

		if(typeof imgClass !== 'undefined') {
			$svg = $svg.attr('class', imgClass+' replaced-svg');
		}
		$svg = $svg.removeAttr('xmlns:a');
		$img.replaceWith($svg);

	}, 'xml');

});


$(document).ready(function() {
	$('.banner-text').addClass('show');

	$('.absolut-pos').animated("fadeInUp");
	$('.classanim').animated("fadeInUp");
	$('.box-form-contact').animated("fadeInUp");
	$('.animright_l').animated("bounceInRight");
	$('.img-right').animated("bounceInRight");
	$('.img-two-box').animated("fadeInUp");

	$('.loyalty .for-client-cont').animated("fadeInUp");
	$('.loyalty .box-icon-pos .itemIcon').animated("bounceInRight");
	$('.loyalty .box-img-pos img').animated("bounceInLeft");
	$('.loyalty .posHeight').animated("fadeInUp");
});