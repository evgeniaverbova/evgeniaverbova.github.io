/*----------------------------------------------
 GOOGLE.MAPS
 ------------------------------------------------*/

var center = new google.maps.LatLng(-25.363, 131.044);
var mapOptions = {
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: center,
        disableDefaultUI: true
};


function initializeModal() {
        mapModal = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        var marker = new google.maps.Marker({
                position: center,
                map: mapModal,
                title: 'Hello World!'
        });
}

function initializeSlide() {
        mapSlide = new google.maps.Map(document.getElementById('map-slide'), mapOptions);

        var marker = new google.maps.Marker({
                position: center,
                map: mapSlide,
                title: 'Hello World!'
        });
        google.maps.event.trigger(map, 'resize');
}





$('#mapModal').on('show.bs.modal', function () {

        if (window.innerWidth <= 500) {
                $('.map-slide').toggleClass('active');
                initializeSlide();
                map.setCenter(center);
                return false;
        }
});

$('#mapModal').on('shown.bs.modal', function () {
        initializeModal();
});

/*----------------------------------------------
 END GOOGLE.MAPS
 ------------------------------------------------*/
 /*----------------------------------------------
    A S I D E
  ------------------------------------------------*/


$(document).ready(function(){

    // icon menu
    function contaMenu() {
        $('.container-menu', this).stop().hide();
        $(this).toggleClass('open');
    }
    
    var setTimeoutBox;

    // hover mega menu
    $(".b_megamenu-li").hover(
        
        function() {
            $('.container-menu', this).stop().show();
            $(this).toggleClass('open');
            clearTimeout(setTimeoutBox);
        },
        function() {
            setTimeoutBox = setTimeout(contaMenu.bind(this), 500);
        }
    );

});






// fix menu - scroll
 ;(function($) {

     $.fn.fixMe = function() {
         return this.each(function() {
             var $this = $(this),
                 winW = 0,
                 stickyHeight = 0,
                 sidebarTop = 0;


             function init() {

                 if ($this.length > 0) {
                     stickyHeight = $this.height();
                     sidebarTop = $this.offset().top;
                     eventLstnr();

                 } else {
                     return
                 }

             }

             function resizeFixed() {

                 if ($this.length > 0) {
                     stickyHeight = $this.height();
                 }

             }

             function scrollFixed() {

                 winW = window.innerWidth;

                  if ( $this.length > 0 && winW >= 991 ) {
                      var scrollTop = $(window).scrollTop();

                      if (sidebarTop < scrollTop) {
                          $this.attr('style','position:fixed;z-index:99;');
                          
                          var sidebarBottom = $this.offset().top + stickyHeight,
                              stickyStop = $('.container-wrap').offset().top + $('.container-wrap').height();
                      }
                      else {
                          $this.attr('style','');
                      }
                  }
             }

             function eventLstnr() {
                 $(window).resize(resizeFixed);
                 $(window).scroll(scrollFixed);
             }

             init();
         });
     };

 })(jQuery);

 $(document).ready(function(){
     $('#js-aside-home').fixMe();
 });



/*----------------------------------------------
    E N D   A S I D E
 ------------------------------------------------*/
/*----------------------------------------------
		H E A D E R
------------------------------------------------*/

(function() {


	var searchInput = document.getElementById('search');
	var searchForm = document.getElementById('js-seform');


	searchInput.onblur = function() {
		searchForm.style.cssText = (' ');
	};

	searchInput.onfocus = function() {
		searchForm.style.cssText = ('opacity: 1; z-index: 1;');
	};

})();


/*----------------------------------------------
 		E N D   H E A D E R
 ------------------------------------------------*/
/*----------------------------------------------
 1 slick slider
 2 slider -> background
 3 slider background scroll
 ------------------------------------------------*/


$(document).ready(function() {

    // 1

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        speed: 300,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 4,
        asNavFor: '.slider-for',
        dots: false,
        speed: 500,
        focusOnSelect: true
    });

    $('.carousel-inner').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });


    // 2

    if ($('[data-bg]').length !== 0) {
        var objData = $('[data-bg]');
        var bgData;
        objData.each(function( i ) {
            bgData = $(this).attr('data-bg');
            $(this).attr('style','background-image:url(' + bgData + ');');
        });
    }


    // 3

    ;(function($) {

        $.fn.scrollSlide = function() {
            return this.each(function() {
                var $this = $(this),
                    objThisItem = $this.find('.slick-slide');

                function init() {
                        eventLstnr();
                }

                function scrollFixed() {
                    objThisItem.each(function( i ) {
                        $(this).css('backgroundPosition','50% '+ '-' + $(window).scrollTop()/ 2 +'px')
                    });
                }

                function eventLstnr() {
                    $(window).scroll(scrollFixed);
                }

                init();
            });
        };

    })(jQuery);

    $(document).ready(function(){
        $('.carousel-inner .slick-track').scrollSlide();
    });

});

/*----------------------------------------------
    slider end
 ------------------------------------------------*/
/*----------------------------------------------
    B T N - N A V
 ------------------------------------------------*/

(function() {

    $('.top-lines-button').on('click', function(){
        $('nav').attr('style','left: 0px;');
        $(this).hasClass('close') === true  && $('nav').attr('style',' ');
        $(this).toggleClass('close');
        
        $('.aside').toggleClass('open');
    });

})();

/*----------------------------------------------
    E N D   B T N - N A V
 ------------------------------------------------*/