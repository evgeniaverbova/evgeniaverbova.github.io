// preloader 
$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.delay(700).fadeOut('slow');
    $preloader.delay(1200).fadeOut('slow');
});

// подгон окна с видео в шапке под размер окна браузера
$(window).bind('load resize', function(){
    var $vbox = $(".videobox"),
    $headercon = $(".header-content"),
	$boxheight = $(".box-text").height(),
    $wheight = $(window).height(),
	$wwidth = $("header").width();
	$vbox.css({
        height: $wheight,
		width: $wwidth,
	});
        $("header").css({
        height: $wheight,
    });
    $headercon.css({
        height: ($boxheight / $wheight) * 100 + "%"
    });
});

//Фиксированное меню при прокрутке
$(window).bind('load resize scroll', function(){
        var $menu = $("#menu"),
        $menuhide = $("#menu-hide"),
		wheight = $(window).height();
        $(window).scroll(function(){
            if ( $(this).scrollTop() > wheight && $menu.hasClass("menu-default") ){
                $menu.removeClass("menu-default").addClass("menu-fixed");
                $menuhide.removeClass("invisible").addClass("visible");
            } else if($(this).scrollTop() <= wheight && $menu.hasClass("menu-fixed")) {
                $menu.removeClass("menu-fixed").addClass("menu-default");
                $menuhide.removeClass("visible").addClass("invisible");
            }
        });
});


// выпадающее меню
$(document).ready(function(){
    var $idmenu = $("#menu"),
    $wheight = $(window).height();

    $( ".menu-icon" ).click(function() {
        if ( $idmenu.height() == "40"){
            $idmenu.animate({height:'+=' + $wheight});
        } else {
            $idmenu.animate({height: 40});
        }
    });
});


// реакция выпадающего меню на resize
$(window).bind('load resize', function(){

    var $idmenu = $("#menu"),
    $wheight = $(window).height(),
    $wwidth = $(window).width();

    if ( $wwidth > "633") {
        $idmenu.css({
            height: 85,
        }); 
    } else if ($idmenu.height() > 90) {

    } else {
        $idmenu.css({
            height: 40,
        });
    }

});


// инициализация WOW.js Не обязательно оборачивать вызов в $(document).ready(), т.к. у нас нет зависимости от jQuery
new WOW().init();


// инициализация анимации цифр
jQuery(document).ready(function( $ ) {
    $('.counter').counterUp({
        delay: 1,
        time: 500
    });
});


// Smoothly scroll to an element 
$(function() {
    $('a[href^="#menu-"]').on('click', function(event) {

        var target = $( $(this).attr('href') ),
        $idmenu = $("#menu");
        if( target.length ) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: target.offset().top

            }, 1000);
            if ($idmenu.height() > 86) {
                $idmenu.animate({
                    height: 40,
                });
            };
        }
    });
 
});



// google maps

function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(50.405475, 30.525125),
    scrollwheel: false,
    zoom: 17,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.LEFT_TOP
    }
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var marker = new google.maps.Marker({
    map: map,
    position: map.getCenter()
  });
  var infowindow = new google.maps.InfoWindow();
  infowindow.setContent('<b>dddddddd</b>');
  google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);


