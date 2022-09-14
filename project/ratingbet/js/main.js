$(document).ready(function() {

	$('.lines-button').on('click', function(event){
		$('.lines-button').toggleClass('close');
		$('nav').slideToggle('slow');
	});

	$('.box-btn .btn_on').on('click', function(event){
		$('.box-btn-show').toggleClass('show');
		$('.box-btn').toggleClass('show');
		$('.box-btn-show').slideToggle('slow');
	});

	$('.box-btn-show span').on('click', function(event){
		$('.box-btn-show').toggleClass('show');
		$('.box-btn-show').slideToggle('slow');
	});

	$('.more').on('click', function(event){
		$('.textFotter').toggleClass('show');
		$('.more').toggleClass('show');
	});


    $('.boxBlackIcon').click(function() {
    	$('.boxBlackIcon').toggleClass('show');

        $(".infographicsBlock").slideToggle('slow');
        $(document.body).animate({
          scrollTop: $(".infographicsBlock").offset().top + $('window').height()
        }, 500, 'swing', function() {
            var max = $(document).height() - $(window).height();
            // console.log(max);
            if ($(document.body).scrollTop() > max) {
                $(document.body).scrollTop(max);
            }
        });
    });





	// СЛАЙДЕРЫ НА ИНДЕКСЕ
	var slider = $('.bxslider').bxSlider({
		auto: true,
		pause: 5000,
		speed: 500,
		pager: false,
		controls: false,
		onSlideAfter: function() {
			slider.stopAuto();
			slider.startAuto();
		}
	});

	var sliderNews = $('.sliderNews').bxSlider({
		auto: true,
		pause: 3000,
		speed: 400,
		pager: false,
		controls: false,
		onSlideAfter: function() {
			sliderNews.stopAuto();
			sliderNews.startAuto();
		}
	});

	;function ListFilterlt (f,b,z) {
		var fL = f +' li',
			check = $(f).find('.active');

		function nonImgFunc() {
			$(b + " " + z).addClass('noneImg');
			$(b + " " + z + ":visible:lt(3)").removeClass('noneImg');
			// console.log(b + " " + z);
		};

		$(document).on('click', fL ,function(){
			// изменить active
			function activeItem(a,c) {
				$(a).removeClass('active');
				$(c).addClass('active');
			};

			if($(this).is('.active')==false && $(this).is('.all')==false){
				activeItem(fL,this);
				$(b).find('[data-block]').hide();
				$(b).find('[data-block="'+ $(this).data('nav') +'"]').show();
				nonImgFunc();

			} else if ($(this).is('.all')==true) {
				activeItem(fL,this);
				$(b).find('[data-block]').show();
				nonImgFunc();

			}
		});

		 if (check.length >= 1 && check.is('.all')) {
			$(b).find('[data-block]').show();
				nonImgFunc();

		} else if (check.length >= 1) {
			$(b).find('[data-block]').not('[data-block="'+ $(fL + '.active').data('nav') +'"]').hide();
				nonImgFunc();

		}


	};

	ListFilterlt('.container .navPost', '.container .postBox.forecasts', '.postItem');


	;function ListFilter (f,b,z) {
		var fL = f +' li',
			check = $(f).find('.active');

		function nonImgFunc() {
			$(b + " " + z).removeClass('vis');
			$(b + " " + z + ":visible").addClass('vis');

			$(b + " " + z).addClass('noneImg');
			$(b + " " + z + ":visible:lt(3)").removeClass('noneImg');
			$(b + " " + z + ":visible:eq(2)").css({'margin-bottom': 50});

			var $nc = 1;
			$('.vis').each(function(){
				if($(this).is('.non')==false){
			        if($nc > 3){$nc = 1;}
			        $(this).attr("data-color",$nc);
			       	$nc++;
			    }
			});

		};

		$(document).on('click', fL ,function(){
			// изменить active
			function activeItem(a,c) {
				$(a).removeClass('active');
				$(c).addClass('active');
			};

			if($(this).is('.active')==false && $(this).is('.all')==false){
				activeItem(fL,this);
				$(b).find('[data-block]').hide();
				$(b).find('[data-block="'+ $(this).data('nav') +'"]').show();
				nonImgFunc();
			} else if ($(this).is('.all')==true) {
				activeItem(fL,this);
				$(b).find('[data-block]').show();
				nonImgFunc();
			}
		});

		 if (check.length >= 1 && check.is('.all')) {
			$(b).find('[data-block]').show();
				nonImgFunc();

		} else if (check.length >= 1) {
			$(b).find('[data-block]').not('[data-block="'+ $(fL + '.active').data('nav') +'"]').hide();
				nonImgFunc();

		}


	};
	ListFilter('.prognosis .navPost', '.prognosis .box-forecastItem', '.forecastItem');

	// ACCORDION
	$(document).on('click', 'h2.hideZaTe', function(e){
        var self = $(this);
        self.next('div').slideToggle();
	});
    $('h2.hideZaTe').next('div').hide();

});




//КОМЕНТАРИЙ ПО КЛИКУ
$(function(){


    $(document).on('click',function(event){
        if ($(event.target).is('span.btn-click'))
            event.preventDefault();
        else if ($(event.target).is('textarea[name="comment"]') || $(event.target).is('input[name="usrname"]') || $(event.target).is('input[name="some-name"]'))
            event.stopPropagation();
        else if ($(event.target).is('.formBox form p') || $(event.target).is('.formBox form div'))
        	event.stopPropagation();
        else
            $('div.formBox').remove();
    });

    $(document).on('click','.btn-click',function(event){
        $('div.formBox').remove();
        var newRow = $('<div class="formBox">' +
            '<form action="#">' +
            '<textarea name="comment" placeholder="Сообщение"></textarea>' +
            '<p>Авторизация</p>' +
            '<div class="boxSoclogin">' +
            '<div id="uLogin_com_' + '" class="fl" data-uloginid="62c6a1c3"></div>' +
            '</div>' +
            '<div class="boxAnonym">' +
            '<p>Анонимно</p>' +
            '<input class="cool_inputName" type="text" name="usrname" placeholder="Имя">' +
            '<input class="cool_inputMail" type="email" name="some-name" placeholder="Е-mail">' +
            '</div>' +
            '<input class="cool_sendBut" type="submit" value="отправить">' +
            '</form>' +
            '</div>');

        var formBox = $(this).parent().find('.formBox');

        if (!(formBox.length > 0)) {
            var parentBox = $(this).parent();
            if (parentBox.find('.btn-click').find('textarea[name="comment"]').length == 0){
                newRow.insertAfter(parentBox.find('.btn-click'));
                $('.formBox').find('textarea[name="comment"]').focus();
            }
        }
    });

});
