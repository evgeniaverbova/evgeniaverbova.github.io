$(document).ready(function() {

	var height404 = $(window).height(),
	container404 = $('.contents-img404 .container');


	container404.css({
	    height: height404,
	});


	Share = {
	    /**
	     * Показать пользователю дилог шаринга в сооветствии с опциями
	     * Метод для использования в inline-js в ссылках
	     * При блокировке всплывающего окна подставит нужный адрес и ползволит браузеру перейти по нему
	     *
	     * @example <a href="" onclick="return share.go(this)">like+</a>
	     *
	     * @param Object _element - элемент DOM, для которого
	     * @param Object _options - опции, все необязательны
	     */
	    go: function(_element, _options) {
	        var
	            self = Share,
	            options = $.extend(
	                {
	                    type:       'vk',    // тип соцсети
	                    url:        location.href,  // какую ссылку шарим
	                    count_url:  location.href,  // для какой ссылки крутим счётчик
	                    title:      document.title, // заголовок шаринга
	                    text:       '',             // текст шаринга
	                },
	                $(_element).data(), // Если параметры заданы в data, то читаем их
	                _options            // Параметры из вызова метода имеют наивысший приоритет
	            );

	        if (self.popup(link = self[options.type](options)) === null) {
	            // Если не удалось открыть попап
	            if ( $(_element).is('a') ) {
	                // Если это <a>, то подставляем адрес и просим браузер продолжить переход по ссылке
	                $(_element).prop('href', link);
	                return true;
	            }
	            else {
	                // Если это не <a>, то пытаемся перейти по адресу
	                location.href = link;
	                return false;
	            }
	        }
	        else {
	            // Попап успешно открыт, просим браузер не продолжать обработку
	            return false;
	        }
	    },

	    // ВКонтакте
	    vk: function(_options) {
	        var options = $.extend({
	                url:    location.href,
	                title:  document.title,
	                image:  '',
	                text:   '',
	            }, _options);

	        return 'http://vkontakte.ru/share.php?'
	            + 'url='          + encodeURIComponent(options.url)
	            + '&title='       + encodeURIComponent(options.title)
	            + '&description=' + encodeURIComponent(options.text)
	            + '&image='       + encodeURIComponent(options.image)
	            + '&noparse=true';
	    },

	    // Facebook
	    fb: function(_options) {
	        var options = $.extend({
	                url:    location.href,
	                title:  document.title,
	                image:  '',
	                text:   '',
	            }, _options);

	        return 'http://www.facebook.com/sharer.php?s=100'
	            + '&p[title]='     + encodeURIComponent(options.title)
	            + '&p[summary]='   + encodeURIComponent(options.text)
	            + '&p[url]='       + encodeURIComponent(options.url)
	            + '&p[images][0]=' + encodeURIComponent(options.image);
	    },

	    // Открыть окно шаринга
	    popup: function(url) {
	        return window.open(url,'','toolbar=0,status=0,scrollbars=1,width=626,height=436');
	    }
	};











	/*
	 *	загрузка файла
	 */

	if (document.getElementById("uploadBtn")) {
		document.getElementById("uploadBtn").onchange = function () {
		document.getElementById("uploadFile").value = this.value;
		};
	};
	/*
	 *	анимация
	 */
	$(".seotext p").animated("fadeInLeft");
	$(".box-service div").animated("fadeInLeft");
	$(".box-text-additional").animated("fadeInLeft");
	$(".box-additionally .box-item").animated("fadeInUp");

	$(".box-text-contact").animated("fadeInLeft");
	$(".box-form-contact").animated("fadeInUp");

	$(".list-logos .item-logo").animated("fadeInUp");
	$(".CategoryBox .CategoryItem").animated("fadeInUp");

	/*
	 * Replace all SVG images with inline SVG
	 */
	jQuery('img.svg').each(function(){
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Add replaced image's ID to the new SVG
			if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');

	});



	/*
	 *	сео-текст
	 */


	$(".visible-link").on("click", function(){
		$(".seotext .container").css({"height": "auto"});
		$(".visible-link").css({"display": "none"});
	})






});




/*
 *	меню
 */

;$(document).ready(function() {

	var ww = window.innerWidth;

	$(document).ready(function() {
		$(".dl-menuwrapper > .dl-menu > li > a").each(function() {
			if ($(this).next().length > 0) {
				$(this).addClass("parent");
			};
		})

		$(".dl-trigger").click(function(e) {
			e.preventDefault();
			$(this).toggleClass("active").toggleClass("icon-cross").toggleClass("icon-menu");
			// $(".dl-menuwrapper .dl-menu").toggle();
			$(".dl-menuwrapper .dl-menu").toggleClass('activeyt');
		});
		adjustMenu();
	});

	$(window).bind('resize orientationchange', function() {
		ww = window.innerWidth;
		adjustMenu();
	});


	var adjustMenu = function() {
		if (ww < 1251) {
			$(".dl-menu").css("display", "none").fadeIn( 500 );
			$(".dl-trigger").css("display", "inline-block");
			if (!$(".dl-trigger").hasClass("active")) {
				$(".dl-menuwrapper .dl-menu").removeClass('activeyt');
			} else {
				$(".dl-menuwrapper .dl-menu").addClass('activeyt');
			}
			$(".dl-menuwrapper .dl-menu li").unbind('mouseenter mouseleave');
			$(".dl-menuwrapper .dl-menu li a.parent").unbind('click').bind('click', function(e) {
				// must be attached to anchor element to prevent bubbling
				e.preventDefault();
				$(this).parent("li").toggleClass("hover");
			});

			$(document).mouseup(function (e){
				var div = $(".hover");
				var divCl = $(".dl-submenu");
				if (!div.is(e.target)
					&& div.has(e.target).length === 0) {
					div.toggleClass("hover");
				}
			});
		}
		else if (ww >= 1251) {
			$(".dl-trigger").css("display", "none");
			// $(".dl-menu").removeAttr('style');
			$(".dl-menuwrapper .dl-menu").show();
			$(".dl-menuwrapper .dl-menu li").removeClass("hover");
			$(".dl-menuwrapper .dl-menu li a").unbind('click');
			$(".dl-menuwrapper .dl-menu li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
			 	// must be attached to li so that mouseleave is not triggered when hover over submenu
			 	$(this).toggleClass('hover');
			});
		}
	}

});


//ввод только цыфр
$(document).ready(function() {
    $("#intel").keydown(function(event) {
        // Разрешаем: backspace, delete, tab и escape
        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
             // Разрешаем: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
             // Разрешаем: home, end, влево, вправо
            (event.keyCode >= 35 && event.keyCode <= 39) ||
            // // Разрешаем: shift +
            // (event.keyCode == 187 && event.shiftkey === true) ||
             // Разрешаем: home, end, влево, вправо
            event.keyCode == 107) {
                 // Ничего не делаем
                 return;
        }
        else {
            // Обеждаемся, что это цифра, и останавливаем событие keypress
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault();
            }
        }
    });
});
