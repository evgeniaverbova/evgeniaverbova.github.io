//Фиксированное меню при прокрутке
$(window).bind('load resize scroll', function(){
  var $menu = $(".nav-wrapper"),
  wheight = $("#head").height();

  $(window).scroll(function(){
      if ( $(this).scrollTop() > wheight && $menu.hasClass("default-nav") ){
          $menu.removeClass("default-nav").addClass("fixed-nav");
      } else if($(this).scrollTop() <= wheight && $menu.hasClass("fixed-nav")) {
          $menu.removeClass("fixed-nav").addClass("default-nav");
      }
  });
});


//Появление скролТоп
$(window).bind('load resize scroll', function(){
  var $ScrollTop = $(".scroll-top"),
  wheight = $(window).height();

  $(window).scroll(function(){
      if ( $(this).scrollTop() > wheight && $ScrollTop.hasClass("hide-top") ){
          $ScrollTop.removeClass("hide-top").addClass("show-top");
      } else if($(this).scrollTop() <= wheight && $ScrollTop.hasClass("show-top")) {
          $ScrollTop.removeClass("show-top").addClass("hide-top");
      }
  });
});


// выпадающее меню
$(document).ready(function(){


  // выпадающие пункты меню
  $('nav li ul').hide().removeClass('fallback');
  $('nav li').hover(
    function () {
      $('ul', this).stop().slideDown(100);
    },
    function () {
      $('ul', this).stop().slideUp(100);
    }
  );

  // выпадающеие языки
  $('.lang-wrapper li ul').hide().removeClass('fallback');
  $('.lang-wrapper li').hover(
    function () {
      $('ul', this).stop().slideDown(100);
    },
    function () {
      $('ul', this).stop().slideUp(100);
    }
  );

  //появление поиска
  var __hideClass = $('.search-container');
  $(function() {
    $(".btn-search").click(function() {
      __hideClass.not('.search-container').hide();
      $(".search-container").toggle("fade");
      $(document).click(function(event) {
        if ($(event.target).closest('.search-container').length) return;
        $( ".search-container" ).hide("fade");
        event.stopPropagation();
      });
      return false;
    });
  });


  //появление формы перезвона
  var __hideClassСallback = $('.callback-container');
  $(function() {
    $(".btn-tel").click(function() {
      __hideClassСallback.not('.callback-container').hide();
      $(".callback-container").toggle("fade");
      $(document).click(function(event) {
        if ($(event.target).closest('.callback-container').length) return;
        $( ".callback-container" ).hide("fade");
        event.stopPropagation();
      });
      return false;
    });
  });


  // Smoothly scroll to an element
  $(function() {
      $('a[href^="#"]').on('click', function(event) {

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



    var $idmenu = $("#wrappermenu");
        $wheight = $(window).height();

    $( ".box-menu-icon" ).click(function() {

        if ( $idmenu.height() < "90"){
            $idmenu.animate({height:'+=' + $wheight});
        } else {
            $idmenu.animate({height: 85});
        }
    });





});



// реакция выпадающего меню на resize
$(window).bind('load resize', function(){

    var $idmenu = $("#wrappermenu"),
    $wwidth = $(window).width();

    if ( $wwidth > "500") {
      $idmenu.removeAttr('style');
    }

});
