function gamesBoxHeight(e){var i=$(".gamesBox"),a=$(".rightSide"),s=191,o=Math.ceil($(".gameItem:visible").length/4),t=o*s,n=a.height();if(t>n){for(var c=s,l=0;n>c;l++)c+=s;i.css({height:c}),o*=s,c>=o?$(".more_games").hide():$(".more_games").show()}else $(".more_games").hide();$(".more_games").click(function(e){e.preventDefault(),$(".more_games").hide(),i.css({height:t})})}$(document).ready(function(){function e(e,i){var a=e+" li",s=$(e).find(".active");$(document).on("click",a,function(){0==$(this).is(".active")&&($(a).removeClass("active"),$(this).addClass("active"),$(i).find("[data-block]").hide(),$(i).find('[data-block="'+$(this).data("nav")+'"]').show(),gamesBoxHeight())}),s.length>=1&&$(i).find("[data-block]").not('[data-block="'+$(a+".active").data("nav")+'"]').hide()}function i(e,i){var a=e+" li";$(e).find(".active");$(document).on("click",a,function(){$(".version_game li").removeClass("active"),0==$(this).is(".active")&&($(a).removeClass("active"),$(this).addClass("active"),$(i).find("[data-blockcom]").hide(),$(i).find('[data-blockcom="'+$(this).data("com")+'"]').show())})}function a(e,i){var a=e+" li";$(document).on("click",a,function(){$(a).removeClass("active"),$(this).addClass("active")})}function s(e,i){var a=e+" span";$(document).on("click",a,function(){var e=$(this).context.classList[0];0==$(this).is(".active")&&($(a).removeClass("active"),$(this).addClass("active"),$(i).find(" > div").hide(),$(i).find(" > div#"+e).show())}),$(i).find(" > div:first").show()}gamesBoxHeight(),$(document).on("click",function(e){$(e.target).is(".langBoxChange .selectedLang,.langBoxChange_ul")||($(".langBoxChange .selectedLang").removeClass("active"),$(".langBoxChange_ul").slideUp(200))}).on("click",".langBoxChange .selectedLang",function(){$(this).is(".active")?($(this).removeClass("active"),$(".langBoxChange_ul").slideUp(200)):($(this).addClass("active"),$(".langBoxChange_ul").slideDown(200))}),$(".bxslider").bxSlider({auto:!0,pause:5e3,speed:500,pager:!1}),$(".bxsliderLogo").bxSlider({slideWidth:234,minSlides:4,maxSlides:4,slideMargin:3,infiniteLoop:!1,hideControlOnEnd:!0,pager:!1}),e(".version_game",".gamesBox"),i(".company_game",".gamesBox"),$(".popap .close").on("click",function(e){$(".popap").slideToggle("slow"),$(".bttn.bckgr.icochange").toggleClass("show")}),$(".casino .bttn.bckgr.icochange").on("click",function(e){$(".popap").slideToggle("slow"),$("#carousel").slick("slickUnfilter"),$(".bttn.bckgr.icochange").toggleClass("show"),$(".vergame_slider li").removeClass("active")}),a(".vergame_slider","#carousel"),$("#carousel").slick({dots:!1,arrows:!0,infinite:!1,speed:300,slidesToShow:8,slidesToScroll:8}),$(".vergame_slider li").on("click",function(e){$("#carousel").slick("slickUnfilter");var i=$(this).attr("data-nav");$("#carousel").slick("slickFilter",'[data-filter="'+i+'"]'),filtered=!0}),$(".join_now_box > a").on("click",function(e){$(".loginDropTop_div").slideToggle("fast")}),s(".TabLinks",".TabBlocks")});