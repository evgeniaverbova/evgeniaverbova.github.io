/* ---------------------------------
	SCROLL
--------------------------------- */
(function() {

	function scrollPaneBox () {

		var scroll_set = {
			verticalDragMaxHeight: 74,
			hijackInternalLinks: true,
			showArrows: true
		};
		var scroll_pane2 = $('.scroll_pane');
		scroll_pane2.jScrollPane(scroll_set);
		var api_scroll = scroll_pane2.data('jsp');
	};

	if($('.scroll_pane').length >= 1) {
		scrollPaneBox ();
	}

	$(".content-p").on('click', 'p',function (event) {
		$(this).toggleClass('selected');
	});

	$(".btn_js i").on('click', function (event) {

		$(this).is(".js_right") ? newRebuild (this, 'left') : newRebuild (this, 'right');

		function newRebuild (e, side) {
			var $this = e,
				container = $this.closest('.container-clone'),
				findContentSide = $(container).find('.clone_box_'+ side +' p.selected'),
				removeContent = $(findContentSide).removeClass('selected').remove(),
				findOtherSide;

			side === 'left' ?
				findOtherSide = $(container).find('.clone_box_right .content-p'):
				findOtherSide = $(container).find('.clone_box_left .content-p');

			findOtherSide.prepend(removeContent);

			$('.scroll_pane').data('jsp').destroy();
			scrollPaneBox();


			if ($(e).hasClass('js_ajax') === true) {
				ajaxClone()
			}
		}
	});

	/* ---------------------------------
		page_7
	--------------------------------- */

	// счетчик для объекта
	function countOfOject(obj) {
		var t = typeof(obj),
			i = 0;

		if (t != "object" || obj == null) return 0;
		for (x in obj) i++;
		return i;
	}

	$('.group-radio-min input').change(function () {
		var e = $(this).attr('id');
		ajaxFunk(e);
	});

	// заполнение при нажатии radio input
	function ajaxFunk(e) {

		function funcSuccess (data) {

			var data = JSON.parse(data),
				countObj = countOfOject(data);

			// заполнение
			$(".content-p").empty();

			for (var i = 0; i < countObj; i++) {
				$(".clone_box_left .content-p").append(data[i]);
			}

			$('.scroll_pane').data('jsp').destroy();
			scrollPaneBox ();
		}

		function showAndHide(e) {
			$('.b-boxset-op').find('[data-filter]').slideUp();
			$('.b-boxset-op').find('[data-filter="'+ e +'"]').slideDown();
				if (e === 'radio-4')
					$('.b-boxset-op').find('[data-filter="radio-1"]').slideDown();
		}

		$.ajax({
			url: "radio.php",
			data: (e),
			type: 'GET',
			success: funcSuccess
		})

		// скрыть + показать поля
		// e ===
		if(e === 'radio-1' || e === 'radio-2' || e === 'radio-5')
			showAndHide('radio-1');

		if(e === 'radio-3')
			showAndHide('radio-3');

		if(e === 'radio-4')
			showAndHide('radio-4');
		if(e === 'radio-6')
			showAndHide('radio-6');

	};

	// заполнение при перенесение с одного поля в другое
	function ajaxClone() {

		var box = $('.clone_box_right .content-p p'),
			objData = {};

		for (var i = box.length - 1; i >= 0; i--) {
			objData[i] = $(box[i]).data('in');
		};

		function funcSuccess (data) {

			data = JSON.parse(data);
			var countObj = countOfOject(data);

			// заполнение
			$("#s_format").empty();

			for (var i = 0; i < countObj; i++) {
				$("#s_format").append(data[i]);
			}
		}

		$.ajax({
			url: "clone.php",
			data: (objData),
			type: 'GET',
			success: funcSuccess
		})
	};



})();

(function() {


    $('.graph-box').highcharts({
        title: {
            text: 'Тут заглавие'
        },
        subtitle: {
            text: 'маленькая подпись'
        },
        xAxis: [{
            categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            crosshair: true
        }],
        yAxis: [{
            labels: {
                format: '{value} тип',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'подпись',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, {
            title: {
                text: 'подпись',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value} тип',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        },  {
            title: {
                text: 'подпись',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value} тип',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 100,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        series: [{
            name: 'подпись',
            type: 'spline',
            yAxis: 1,
                        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            tooltip: {
                valueSuffix: ' тип'
            }

        }, {
            name: 'подпись 1',
            type: 'spline',
                        data: [21, 22, 23, 24, 25, 26, 27, 28, 29, 20],
            tooltip: {
                valueSuffix: ' тип2'
            }
        }, {
            name: 'подпись 2',
            type: 'spline',
            data: [31, 32, 33, 34, 35, 36, 37, 38, 39, 30],
            tooltip: {
                valueSuffix: ' тип3'
          }
        }]
    });


})();

/* ---------------------------------
	Анимация radio input
--------------------------------- */

(function() {

	if($('.group-radio input.all').length !== 0) {
		var e = $('.group-radio input.all').closest('.group-radio_input'),
			th = $('.group-radio input.all').closest('.group-radio_input'),
			sizW = th[0].clientWidth / 2;
			sizH = th[0].clientHeight / 2;

		radioInput(e,th,sizW,sizH);

	}

	$(".group-radio, .group-radio-min").on('click', '.group-radio_input', function(e) {
		var th = $(this);
		radioInput(e,th);
	});

	function radioInput(e,th,sizW,sizH) {
		var $this = th,
			oX = parseInt($this.offset().left),
			oY = parseInt($this.offset().top),
			pX = e.pageX || oX + sizW,
			pY = e.pageY || oY + sizH;

			$(".group-radio_input input[type='radio']").parent().removeClass('active-radio').addClass('no-active-radio');

			$this.addClass('active-radio').removeClass('no-active-radio');

			$(".group-radio_input.no-active-radio").each(function() {
				$(".click-efect", this).animate({
					"width": "0",
					"height": "0",
					"top": "0",
					"left": "0"
				}, 300, function() {
					$(this).remove();
				});
			});

			if (!$("span", this).hasClass('click-efect')) {
				$this.append('<span class="click-efect x-' + oX + ' y-' + oY + '" style="margin-left:' + (pX - oX) + 'px;margin-top:' + (pY - oY) + 'px;"></span>')
				$('.x-' + oX + '.y-' + oY + '').animate({
					"width": "500px",
					"height": "500px",
					"top": "-250px",
					"left": "-250px",
				}, 500);
			}

	}

})();

/* ---------------------------------
	SELECT
--------------------------------- */

(function() {
	var select2Object = {
		  s_valuta: "Период"
		, s_format: " "
		, s_format2: " "
		, s_format3: " "
		, s_format4: " "
		, s_owner: " "
		, s_company: " "
	};

	for (var key in select2Object) {

		var key2 = "#" + key,
			value = select2Object[key];

		if($(key2).length != 0 && value !== false) {

			$(key2).select2({
				placeholder: value,
				minimumResultsForSearch: Infinity
			});

		} else {

			$(key2).select2({
				minimumResultsForSearch: Infinity
			});

		}
	}
})();

(function() {

	var startDt,
		endDt;

	// '05 03 2016'
	var commonObject = {

		'dataCalendar' :{
			'startDate' : startDt || moment().format('D MM YYYY'),
			'endDate' : endDt || moment().add(1, 'day').format('D MM YYYY')
		},
		'dataTime': {
		}
	}

/* ---------------------------------
	ФУНКЦИЯ ПО ВРЕМЕНЫМ ПЕРИОДАМ
--------------------------------- */


	/* проверка ОСНОВНАЯ ФУНКЦИЯ
	*  intInt - объект для базы
	*
	*
	*/
	var trRowObj = function (firstShow) {

		var intInt = {}, // первый обект со свеми чекбоксами
			trRowObj = {}, // обект с промежутками
			in_St = '', // переменая с началом промежутка
			in_En = '', // переменая с концом промежутка
			innerSort = ''; // переменая содержит целый промежуток

		// Формирование  объекта для базы
		$('.table-interval .tr-interval').each(function(tr_index, tr) {
			var inner = {};

			$(tr).find('td.b-interval input').each(function(input_index, input) {
				var $input = $(input);

				if (input.checked) {
					inner[input_index] = $input.attr('data-time');
				} else {
					inner[input_index] = false;
				}
			});

			if (!jQuery.isEmptyObject(inner)) {
				intInt[tr_index] = inner;
			}
		});


		// формирование объекта с промежутками
		function newDay (e,s,y) {
			if (s === '23') {

				if (in_St !== '' || in_En !== '') {
					innerSort += in_St + in_En + '; ';

					innerSort = innerSort.substring(0, innerSort.length - 2);
					trRowObj[e] = innerSort;
					$('.tr-interval:nth-child('+ ( i + 2 ) +')').find('td.b-info p').text(innerSort);

				} else if (in_St === '' && in_En === '' && innerSort === '') {

					$('.tr-interval:nth-child('+ ( i + 2 ) +')').find('td.b-info p').text('не задано');

				} else {

					innerSort = innerSort.substring(0, innerSort.length - 2);
					trRowObj[e] = innerSort;
					$('.tr-interval:nth-child('+ ( i + 2 ) +')').find('td.b-info p').text(innerSort);

				}

				in_St = '';
				in_En = '';
				innerSort = '';

			} else if (y === true) {

				innerSort += in_St + in_En + '; ';
				in_St = '';
				in_En = '';

			}
		}

		/*
		 * перебор всех чекбоксов с главного объекта ( 7 === дней; 24 === часа) */
		for (var i = 0; i <= 7; i++) {

			for (var key in intInt[i]) {
				var itemObj = intInt[i][key];

				if(itemObj !== false && in_St === '') {
					in_St = itemObj + ':00';
					newDay (i,key,false);

				} else if (itemObj && in_St !== false) {
					in_En = ' - ' + itemObj + ':00';
					newDay (i,key,false);

				} else if (itemObj === false && in_St !== '') {
					newDay (i,key,true);

				} else if (itemObj === false && in_St === '') {
					newDay (i,key,false);
		        }
			}
		};

		/*
		 * проверка на checked при первичной загрузки + при клике->checked */
		if (firstShow === undefined)
			firstShowing();

		return trRowObj;
	};


	trRowObj(); // --- САМЫЙ ПЕРВЫЙ ВЫЗОВ

	function firstShowing() {

		var i_all = 0;

		$('.tr-interval td.b-interval input').each(function(index, el) {
			$(this).is(':checked') ? i_all++ : false;
		});

		if(i_all === 168)
			$('.table-interval tbody').find('td.control-all input').prop("checked", true);


		$('tr.tr-interval').each(function(index, el) {
			var i_v = 0;
			$(this).find('.b-interval input').each(function(index, el) {
				$(this).is(':checked') ? i_v++ : false;
			});

			if(i_v === 24)
				$(this).find('.control input').prop("checked", true);
		});


		for (var h = 0; h < 24; h++) {

			var horiz = $('.tr-interval').find('td:eq(' + (h + 1) + ') input');
			var i_h = 0;

			horiz.each(function(index, el) {
				$(this).is(':checked') ? i_h++ : false;
			});

			if(i_h === 7)
				$('tr').find('td.b-intall:eq(' + h + ') input').prop("checked", true);
		};
	}


	// проверка при клике
	function tdCheck(horiz, item_horiz, vertic, item_vertic, allchec, item_ollchec) {

		var i_h = 0,
			i_v = 0,
			i_all = 0;
		horiz.each(function(indx){
			$(this).is(':checked') ? i_h++ : false;
		});

		if(i_h === 7)
			$(item_horiz).prop("checked", true);


		vertic.each(function(indx){
			$(this).is(':checked') ? i_v++ : false;
		});


		if(i_v === 24)
			$(item_vertic).prop("checked", true);

		allchec.each(function(indx){
			$(this).is(':checked') ? i_all++ : false;
		});

		if(i_all === 168)
			$(item_ollchec).prop("checked", true);
	}

	/*
	*	КЛИКИ
	*/
	// нажатие на отдельный день
	$('td.b-interval').on('click', 'input', function(event) {
		var obJect = trRowObj(true),
			$this = $(this);

		// индекс TR
		var trThis = $this.closest('tr'),
			tBodyThis = $this.closest('tbody'),
			index = tBodyThis.find('tr').index( trThis ) -1,
			srokaIsObj = obJect[index],

			// индекс TD
			tdThis = $this.closest('td'),
			indexTd = trThis.find('td').index( tdThis ) - 1;

		if(srokaIsObj === '') {
			$( trThis ).find('td.b-info p').text( 'не задано' );
		} else {
			$( trThis ).find('td.b-info p').text( srokaIsObj );
		}



		if($this.is(':checked')) {

			var $horiz = $('.tr-interval').find('td:eq(' + (indexTd + 1) + ') input'),
				item_horiz = $('tr').find('td.b-intall:eq(' + indexTd + ') input'),

				$vertic = $this.closest('tr').find('.b-interval input'),
				item_vertic = trThis.find('td.control input'),

				$allchec = $this.closest('tbody').find('.b-interval input'),
				item_ollchec = $this.closest('tbody').find('td.control-all input');

			tdCheck($horiz, item_horiz, $vertic, item_vertic, $allchec, item_ollchec);

		} else {

			$('tr').find('td.b-intall:eq(' + indexTd + ') input').prop("checked", false);
			trThis.find('td.control input').prop("checked", false);
			tBodyThis.find('td.control-all input').prop("checked", false);
			trRowObj();
		}



	});

	// нажатие на день недели
	$('td.control').on('click', 'input', function(event) {

		var $this = $(this);

		if($this.is(':checked')) {

			$this.closest('tr').find('.b-interval input').prop("checked", true);
			trRowObj();

		} else {

			$this.closest('tr').find('.b-interval input, .control-all input, .b-intall input').prop("checked", false);
			$this.closest('tbody').find('.control-all input, .b-intall input').prop("checked", false);
			trRowObj(true);

		}
	});

	// нажатие на все сразу
	$('td.control-all').on('click', 'input', function(event) {

		var $this = $(this);

		if($this.is(':checked')) {

			$this.closest('tbody').find('.b-interval input, .b-intall input, .control input').prop("checked", true);
			trRowObj(true);

		} else {

			$this.closest('tbody').find('.b-interval input, .b-intall input, .control input').prop("checked", false);
			trRowObj(true);

		}
	});

	// нажатие на временной отрезок на сквозь всех дней
	$('td.b-intall').on('click', 'input', function(event) {

		var $this = $(this),
			trThis = $(this).closest('td'),
			tBodyThis = $(this).closest('tr'),
			index = tBodyThis.find('td').index( trThis );

		if($this.is(':checked')) {

			$('.tr-interval').find('td:eq(' + index + ') input').prop("checked", true);

			trRowObj();

		} else {
			$('.tr-interval').find('td:eq(' + index + ') input').prop("checked", false);
			$this.closest('tbody').find('.control input, .control-all input').prop("checked", false);

			trRowObj(true);

		}
	});







/* ---------------------------------
	ВЫВОД КАЛЕНДАРЯ
	БЕЗ ЧАСОВ
		moment.min.js
		ru.js
		daterangepicker.js
--------------------------------- */


	function updateConfigNoClock() {
		var defaults = {
				"singleDatePicker": true,
				"showDropdowns": true,
				"opens": "right",
				locale: {
					format: 'D MMMM YYYY',
					applyLabel: 'Подтвердить',
					daysOfWeek: ['пн','вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
					monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
				},
		};

		var optionsStart = {
			"startDate": moment(commonObject.dataCalendar.startDate, "D MM YYYY").format('D MMMM YYYY'),
		};
		var optionsEnd = {
			"startDate": moment(commonObject.dataCalendar.endDate, "D MM YYYY").format('D MMMM YYYY'),
		};

		optionsStart = $.extend( true, {}, defaults, optionsStart );
		optionsEnd = $.extend( true, {}, defaults, optionsEnd );

		$('#d-start').daterangepicker(optionsStart, function() { });
		$('#d-end').daterangepicker(optionsEnd, function() { });
	}

	updateConfigNoClock();

	$('.b-daterang i').click(function() {
		$(this).parent().find('input').click();
	});


	$('#d-start, #d-end').on('show.daterangepicker', function(ev, picker) {
		startCalendar();
	});

	$('#d-start, #d-end').on('showCalendar.daterangepicker', function(ev, picker) {
		startCalendar();
	});


	$('#d-start, #d-end').on('apply.daterangepicker', function(ev, picker) {
		if ($(this).attr('id') === 'd-start') {
			commonObject.dataCalendar.startDate = picker.startDate.format('D MM YYYY');
		} else {
			commonObject.dataCalendar.endDate = picker.startDate.format('D MM YYYY');
		}
	});




	function startCalendar() {
		$('.table-condensed th.available').remove();
		$('.table-condensed .month').attr('colspan', '7');
		$('.monthselect').select2({
			minimumResultsForSearch: Infinity
		});
		$('.yearselect').select2({
			minimumResultsForSearch: Infinity
		});
	}


	/*
	* передать class бокса
	* id#hours
	* id#minutes
	*/
	function dateTime(boxCl,hId,mId) {

		var hour = 0,
			minute = 0,
			kPress = '.' + boxCl + ' input',
			hId = hId,
			mId = mId;

		$(kPress).each(function(num, input) {

			if($(input).val() !== '') {
				in_time($(input).val().length , $(input).attr('class'));
			}
		});

		// очиcтить значение
		$( kPress ).select(function(e) {

			$(this).val('');

			if($(this).attr('class') === 'hour') {
				hour = 0;
			} else if($(this).attr('class') === 'minute') {
				minute = 0;
			}
		});

		// backspace
		$( kPress ).keyup(function(event) {
			var thisClass = $(this).attr('class');

			if(event.keyCode === 8 && thisClass === 'hour') {
				var value = $(this).val().length;
				hour = value;
			} else if (event.keyCode === 8 && thisClass === 'minute') {
				var value = $(this).val().length;
				minute = value;
			}
		});

		$( kPress ).on('keypress', function (event) {

			var regex = new RegExp("^[0-9]+$"),
				key = String.fromCharCode(!event.charCode ? event.which : event.charCode),
				thisClass = $(this).attr('class'),
				thisId = $(this).attr('id');

			$(kPress).keyup(function() {
				var value = $(this).val(),
					valueLeng = $(this).val().length,
					thisClass = $(this).attr('class');


				if ( thisClass === 'hour' && hour === 2 && value < 24 ) {
					$('#' + thisId + ' + input').focus();
				} else if ( thisClass === 'hour' && value > 23 ) {
					this.select();
				}

				if ( thisClass === 'minute' && minute === 2 && value < 60 ) {
					$('#' + thisId).parent().find('.hour').focus();
				} else if ( thisClass === 'minute' &&  value > 59 ) {
					this.select();
				}
			});

			if (!regex.test(key) || thisClass === 'hour' && !(hour < 2) || thisClass === 'minute' && !(minute < 2)) {

				event.preventDefault();
				return false;

			} else {

				if(thisClass === 'hour') {

					if (hour < 2)
						hour +=1;
				} else {

					if (minute < 2)
						minute +=1;
				}

			}

		});

		function in_time(num,classIn) {

			if(classIn === 'hour') {
				hour = num;
			} else {
				minute = num;
			}
		}

		// переход фокуса
		function eventFocus(e) {
			$('#' + e).attr('class') === 'hour' ?
				$('#' + e + ' + input').focus() :
				$('#' + e).parent().find('.hour').focus();
		}

	}

	dateTime('j_tame','#hours','#minutes');
	dateTime('j_tame_end','#hours_end','#minutes_end');





/* ---------------------------------
	ФОРМИРОВАНИЕ ОБЪЕКТА
--------------------------------- */

	$('#nextstep').on('click', function(event) {

		// Объект таблицы
		var intInt = {};

		$('.table-interval .tr-interval').each(function(tr_index, tr) {
			var inner = {};

			$(tr).find('td.b-interval input').each(function(input_index, input) {
				var $input = $(input);

				if (input.checked) {
					inner[input_index] = $input.attr('data-time');
				} else {
					inner[input_index] = false;
				}
			});

			if (!jQuery.isEmptyObject(inner)) {
				intInt[tr_index] = inner;
			}
		});

		commonObject.intInt = intInt;

		// Объект времени
		$('#hours, #minutes, #hours_end, #minutes_end').each(function(input_index, input) {

			if( $(this).val() === '' ) {
				$(this).attr('data-ch', 'err');
			} else if ( $(this).attr('data-ch') === 'err' ) {
				$(this).attr('data-ch', 'ch');
			}

			if ( $(this).attr('data-ch') === 'ch' ) {
				commonObject.dataTime[$(this).attr('id')] = $(this).val();
			}
		});

		if ( $('[data-ch="err"]').length !== 0 ) {
			return false;
		} else {
			var res = unformatted_unix();

			switch ( true ){
				case ( res < 0 ) :
					send_commonObject ();
					break;
				case ( res > 0 || res === 0 ) :
					err_commonObject();
					break;
				default:
					console.log( 'Я таких значений не знаю' );
					break;
			}
		}

		function unformatted_unix() {

			var unformatted_unix = commonObject.dataCalendar.startDate + " " + commonObject.dataTime.hours + ":" + commonObject.dataTime.minutes;
			var unixtime = moment(unformatted_unix, "D MM YYYY h:mm").format("X");

			var unformatted_unix2 = commonObject.dataCalendar.endDate + " " + commonObject.dataTime.hours_end + ":" + commonObject.dataTime.minutes_end;
			var unixtime2 = moment(unformatted_unix2, "D MM YYYY h:mm").format("X");
			var res;

			return res = unixtime - unixtime2;
		}

		function err_commonObject() {

			$(".b-date-contain .info-pos").css({visibility: "visible"}).animate({
				opacity: 1,
				top: '50%'
			}, 1000);

			$(".b-date-contain .info-pos").delay( 1000 ).animate({
				opacity: 0,
				top: '80%'
			}, 1000, function() {
				$(this).css({visibility: "hidden", top: '10%'});
			});

		}

		function send_commonObject() {
			console.log(commonObject);
		}

	});

})();

/* ---------------------------------
	Загрузка файла
	input type='file'
--------------------------------- */

(function() {

	$.fn.inputFileRar = function(options) {

		return this.each(function() {

			var	op = $.extend({}, {
					'e': ''
				}, options);


			var fileInput  = document.querySelector( op.e + " .input--file" ),
				button = document.querySelector( op.e + " .input--trigger" ),
				the_return = document.querySelector( op.e + " .file-return span" );


			button.addEventListener( "click", function( event ) {
				fileInput.focus();
				return false;
			});

			fileInput.addEventListener( "change", function( event ) {

				var name = this.value.split("\\"),
					name2 = name[name.length-1];

				the_return.innerHTML = name2;

			});

			$( op.e + " .file-return" ).on('click', 'i', function (event) {
				var boxP = $(this).closest('p').find('span');
					boxP[0].innerHTML = '';
				fileInput.value = "";
			});

		});

	};

	if($( '.other' ).length != 0) {
		$('.other').inputFileRar({
			'e': '.other'
		});
	};

	if($( '.html5' ).length != 0) {
		$('.html5').inputFileRar({
			'e': '.html5'
		});
	};

})();



// (function() {

// 	$.fn.inputFileRar = function() {
// 		return this.each(function() {
// 			var $this = $(this);


// 			var fileInput  = $this.find( ".input--file" ),
// 				button = $this.find( ".input--trigger" ),
// 				the_return = $this.find( ".file-return span" ),
// 				file_return = $this.find( ".file-return" );

// 			$( button ).on( "click", function( event ) {
// 				fileInput.focus();
// 				return false;
// 			});

// 			$( fileInput ).on( "change", function( event ) {

// 				var name = this.value.split("\\"),
// 					name2 = name[name.length-1];

// 				the_return.innerHTML = name2;

// 			});

// 			$( file_return ).on('click', 'i', function (event) {
// 				var boxP = $(this).closest('p').find('span');
// 					boxP[0].innerHTML = '';
// 				fileInput.value = "";
// 			});

// 		});

// 	};

// 	if($( '.other' ).length != 0) {
// 		$('.other').inputFileRar();
// 	};

// 	if($( '.html5' ).length != 0) {
// 		$('.html5').inputFileRar();
// 	};

// })();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb25lL2Nsb25lLmpzIiwiY2hhcnQvY2hhcnQuanMiLCJlbC1yYWRpb2J0bi9lbC1yYWRpb2J0bi5qcyIsImVsLXNlbGVjdC9lbC1zZWxlY3QuanMiLCJpbnRlcnZhbC9pbnRlcnZhbC5qcyIsInVwbG9hZC91cGxvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0bEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRTQ1JPTExcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuKGZ1bmN0aW9uKCkge1xuXG5cdGZ1bmN0aW9uIHNjcm9sbFBhbmVCb3ggKCkge1xuXG5cdFx0dmFyIHNjcm9sbF9zZXQgPSB7XG5cdFx0XHR2ZXJ0aWNhbERyYWdNYXhIZWlnaHQ6IDc0LFxuXHRcdFx0aGlqYWNrSW50ZXJuYWxMaW5rczogdHJ1ZSxcblx0XHRcdHNob3dBcnJvd3M6IHRydWVcblx0XHR9O1xuXHRcdHZhciBzY3JvbGxfcGFuZTIgPSAkKCcuc2Nyb2xsX3BhbmUnKTtcblx0XHRzY3JvbGxfcGFuZTIualNjcm9sbFBhbmUoc2Nyb2xsX3NldCk7XG5cdFx0dmFyIGFwaV9zY3JvbGwgPSBzY3JvbGxfcGFuZTIuZGF0YSgnanNwJyk7XG5cdH07XG5cblx0aWYoJCgnLnNjcm9sbF9wYW5lJykubGVuZ3RoID49IDEpIHtcblx0XHRzY3JvbGxQYW5lQm94ICgpO1xuXHR9XG5cblx0JChcIi5jb250ZW50LXBcIikub24oJ2NsaWNrJywgJ3AnLGZ1bmN0aW9uIChldmVudCkge1xuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cdH0pO1xuXG5cdCQoXCIuYnRuX2pzIGlcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cblx0XHQkKHRoaXMpLmlzKFwiLmpzX3JpZ2h0XCIpID8gbmV3UmVidWlsZCAodGhpcywgJ2xlZnQnKSA6IG5ld1JlYnVpbGQgKHRoaXMsICdyaWdodCcpO1xuXG5cdFx0ZnVuY3Rpb24gbmV3UmVidWlsZCAoZSwgc2lkZSkge1xuXHRcdFx0dmFyICR0aGlzID0gZSxcblx0XHRcdFx0Y29udGFpbmVyID0gJHRoaXMuY2xvc2VzdCgnLmNvbnRhaW5lci1jbG9uZScpLFxuXHRcdFx0XHRmaW5kQ29udGVudFNpZGUgPSAkKGNvbnRhaW5lcikuZmluZCgnLmNsb25lX2JveF8nKyBzaWRlICsnIHAuc2VsZWN0ZWQnKSxcblx0XHRcdFx0cmVtb3ZlQ29udGVudCA9ICQoZmluZENvbnRlbnRTaWRlKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKS5yZW1vdmUoKSxcblx0XHRcdFx0ZmluZE90aGVyU2lkZTtcblxuXHRcdFx0c2lkZSA9PT0gJ2xlZnQnID9cblx0XHRcdFx0ZmluZE90aGVyU2lkZSA9ICQoY29udGFpbmVyKS5maW5kKCcuY2xvbmVfYm94X3JpZ2h0IC5jb250ZW50LXAnKTpcblx0XHRcdFx0ZmluZE90aGVyU2lkZSA9ICQoY29udGFpbmVyKS5maW5kKCcuY2xvbmVfYm94X2xlZnQgLmNvbnRlbnQtcCcpO1xuXG5cdFx0XHRmaW5kT3RoZXJTaWRlLnByZXBlbmQocmVtb3ZlQ29udGVudCk7XG5cblx0XHRcdCQoJy5zY3JvbGxfcGFuZScpLmRhdGEoJ2pzcCcpLmRlc3Ryb3koKTtcblx0XHRcdHNjcm9sbFBhbmVCb3goKTtcblxuXG5cdFx0XHRpZiAoJChlKS5oYXNDbGFzcygnanNfYWpheCcpID09PSB0cnVlKSB7XG5cdFx0XHRcdGFqYXhDbG9uZSgpXG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHQvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRwYWdlXzdcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cblx0Ly8g0YHRh9C10YLRh9C40Log0LTQu9GPINC+0LHRitC10LrRgtCwXG5cdGZ1bmN0aW9uIGNvdW50T2ZPamVjdChvYmopIHtcblx0XHR2YXIgdCA9IHR5cGVvZihvYmopLFxuXHRcdFx0aSA9IDA7XG5cblx0XHRpZiAodCAhPSBcIm9iamVjdFwiIHx8IG9iaiA9PSBudWxsKSByZXR1cm4gMDtcblx0XHRmb3IgKHggaW4gb2JqKSBpKys7XG5cdFx0cmV0dXJuIGk7XG5cdH1cblxuXHQkKCcuZ3JvdXAtcmFkaW8tbWluIGlucHV0JykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgZSA9ICQodGhpcykuYXR0cignaWQnKTtcblx0XHRhamF4RnVuayhlKTtcblx0fSk7XG5cblx0Ly8g0LfQsNC/0L7Qu9C90LXQvdC40LUg0L/RgNC4INC90LDQttCw0YLQuNC4IHJhZGlvIGlucHV0XG5cdGZ1bmN0aW9uIGFqYXhGdW5rKGUpIHtcblxuXHRcdGZ1bmN0aW9uIGZ1bmNTdWNjZXNzIChkYXRhKSB7XG5cblx0XHRcdHZhciBkYXRhID0gSlNPTi5wYXJzZShkYXRhKSxcblx0XHRcdFx0Y291bnRPYmogPSBjb3VudE9mT2plY3QoZGF0YSk7XG5cblx0XHRcdC8vINC30LDQv9C+0LvQvdC10L3QuNC1XG5cdFx0XHQkKFwiLmNvbnRlbnQtcFwiKS5lbXB0eSgpO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50T2JqOyBpKyspIHtcblx0XHRcdFx0JChcIi5jbG9uZV9ib3hfbGVmdCAuY29udGVudC1wXCIpLmFwcGVuZChkYXRhW2ldKTtcblx0XHRcdH1cblxuXHRcdFx0JCgnLnNjcm9sbF9wYW5lJykuZGF0YSgnanNwJykuZGVzdHJveSgpO1xuXHRcdFx0c2Nyb2xsUGFuZUJveCAoKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBzaG93QW5kSGlkZShlKSB7XG5cdFx0XHQkKCcuYi1ib3hzZXQtb3AnKS5maW5kKCdbZGF0YS1maWx0ZXJdJykuc2xpZGVVcCgpO1xuXHRcdFx0JCgnLmItYm94c2V0LW9wJykuZmluZCgnW2RhdGEtZmlsdGVyPVwiJysgZSArJ1wiXScpLnNsaWRlRG93bigpO1xuXHRcdFx0XHRpZiAoZSA9PT0gJ3JhZGlvLTQnKVxuXHRcdFx0XHRcdCQoJy5iLWJveHNldC1vcCcpLmZpbmQoJ1tkYXRhLWZpbHRlcj1cInJhZGlvLTFcIl0nKS5zbGlkZURvd24oKTtcblx0XHR9XG5cblx0XHQkLmFqYXgoe1xuXHRcdFx0dXJsOiBcInJhZGlvLnBocFwiLFxuXHRcdFx0ZGF0YTogKGUpLFxuXHRcdFx0dHlwZTogJ0dFVCcsXG5cdFx0XHRzdWNjZXNzOiBmdW5jU3VjY2Vzc1xuXHRcdH0pXG5cblx0XHQvLyDRgdC60YDRi9GC0YwgKyDQv9C+0LrQsNC30LDRgtGMINC/0L7Qu9GPXG5cdFx0Ly8gZSA9PT1cblx0XHRpZihlID09PSAncmFkaW8tMScgfHwgZSA9PT0gJ3JhZGlvLTInIHx8IGUgPT09ICdyYWRpby01Jylcblx0XHRcdHNob3dBbmRIaWRlKCdyYWRpby0xJyk7XG5cblx0XHRpZihlID09PSAncmFkaW8tMycpXG5cdFx0XHRzaG93QW5kSGlkZSgncmFkaW8tMycpO1xuXG5cdFx0aWYoZSA9PT0gJ3JhZGlvLTQnKVxuXHRcdFx0c2hvd0FuZEhpZGUoJ3JhZGlvLTQnKTtcblx0XHRpZihlID09PSAncmFkaW8tNicpXG5cdFx0XHRzaG93QW5kSGlkZSgncmFkaW8tNicpO1xuXG5cdH07XG5cblx0Ly8g0LfQsNC/0L7Qu9C90LXQvdC40LUg0L/RgNC4INC/0LXRgNC10L3QtdGB0LXQvdC40LUg0YEg0L7QtNC90L7Qs9C+INC/0L7Qu9GPINCyINC00YDRg9Cz0L7QtVxuXHRmdW5jdGlvbiBhamF4Q2xvbmUoKSB7XG5cblx0XHR2YXIgYm94ID0gJCgnLmNsb25lX2JveF9yaWdodCAuY29udGVudC1wIHAnKSxcblx0XHRcdG9iakRhdGEgPSB7fTtcblxuXHRcdGZvciAodmFyIGkgPSBib3gubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdG9iakRhdGFbaV0gPSAkKGJveFtpXSkuZGF0YSgnaW4nKTtcblx0XHR9O1xuXG5cdFx0ZnVuY3Rpb24gZnVuY1N1Y2Nlc3MgKGRhdGEpIHtcblxuXHRcdFx0ZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG5cdFx0XHR2YXIgY291bnRPYmogPSBjb3VudE9mT2plY3QoZGF0YSk7XG5cblx0XHRcdC8vINC30LDQv9C+0LvQvdC10L3QuNC1XG5cdFx0XHQkKFwiI3NfZm9ybWF0XCIpLmVtcHR5KCk7XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY291bnRPYmo7IGkrKykge1xuXHRcdFx0XHQkKFwiI3NfZm9ybWF0XCIpLmFwcGVuZChkYXRhW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQkLmFqYXgoe1xuXHRcdFx0dXJsOiBcImNsb25lLnBocFwiLFxuXHRcdFx0ZGF0YTogKG9iakRhdGEpLFxuXHRcdFx0dHlwZTogJ0dFVCcsXG5cdFx0XHRzdWNjZXNzOiBmdW5jU3VjY2Vzc1xuXHRcdH0pXG5cdH07XG5cblxuXG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xyXG5cclxuXHJcbiAgICAkKCcuZ3JhcGgtYm94JykuaGlnaGNoYXJ0cyh7XHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgdGV4dDogJ9Ci0YPRgiDQt9Cw0LPQu9Cw0LLQuNC1J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VidGl0bGU6IHtcclxuICAgICAgICAgICAgdGV4dDogJ9C80LDQu9C10L3RjNC60LDRjyDQv9C+0LTQv9C40YHRjCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHhBeGlzOiBbe1xyXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJ10sXHJcbiAgICAgICAgICAgIGNyb3NzaGFpcjogdHJ1ZVxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIHlBeGlzOiBbe1xyXG4gICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogJ3t2YWx1ZX0g0YLQuNC/JyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IEhpZ2hjaGFydHMuZ2V0T3B0aW9ucygpLmNvbG9yc1sxXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ9C/0L7QtNC/0LjRgdGMJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IEhpZ2hjaGFydHMuZ2V0T3B0aW9ucygpLmNvbG9yc1sxXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ9C/0L7QtNC/0LjRgdGMJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IEhpZ2hjaGFydHMuZ2V0T3B0aW9ucygpLmNvbG9yc1swXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogJ3t2YWx1ZX0g0YLQuNC/JyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IEhpZ2hjaGFydHMuZ2V0T3B0aW9ucygpLmNvbG9yc1swXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcHBvc2l0ZTogdHJ1ZVxyXG4gICAgICAgIH0sICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAn0L/QvtC00L/QuNGB0YwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogSGlnaGNoYXJ0cy5nZXRPcHRpb25zKCkuY29sb3JzWzBdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiAne3ZhbHVlfSDRgtC40L8nLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogSGlnaGNoYXJ0cy5nZXRPcHRpb25zKCkuY29sb3JzWzBdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9wcG9zaXRlOiB0cnVlXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICBzaGFyZWQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICBsYXlvdXQ6ICd2ZXJ0aWNhbCcsXHJcbiAgICAgICAgICAgIGFsaWduOiAnbGVmdCcsXHJcbiAgICAgICAgICAgIHg6IDEyMCxcclxuICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXHJcbiAgICAgICAgICAgIHk6IDEwMCxcclxuICAgICAgICAgICAgZmxvYXRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogKEhpZ2hjaGFydHMudGhlbWUgJiYgSGlnaGNoYXJ0cy50aGVtZS5sZWdlbmRCYWNrZ3JvdW5kQ29sb3IpIHx8ICcjRkZGRkZGJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VyaWVzOiBbe1xyXG4gICAgICAgICAgICBuYW1lOiAn0L/QvtC00L/QuNGB0YwnLFxyXG4gICAgICAgICAgICB0eXBlOiAnc3BsaW5lJyxcclxuICAgICAgICAgICAgeUF4aXM6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF0sXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlU3VmZml4OiAnINGC0LjQvydcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6ICfQv9C+0LTQv9C40YHRjCAxJyxcclxuICAgICAgICAgICAgdHlwZTogJ3NwbGluZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFsyMSwgMjIsIDIzLCAyNCwgMjUsIDI2LCAyNywgMjgsIDI5LCAyMF0sXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlU3VmZml4OiAnINGC0LjQvzInXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6ICfQv9C+0LTQv9C40YHRjCAyJyxcclxuICAgICAgICAgICAgdHlwZTogJ3NwbGluZScsXHJcbiAgICAgICAgICAgIGRhdGE6IFszMSwgMzIsIDMzLCAzNCwgMzUsIDM2LCAzNywgMzgsIDM5LCAzMF0sXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlU3VmZml4OiAnINGC0LjQvzMnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfV1cclxuICAgIH0pO1xyXG5cclxuXHJcbn0pKCk7XHJcbiIsIi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHTQkNC90LjQvNCw0YbQuNGPIHJhZGlvIGlucHV0XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuKGZ1bmN0aW9uKCkge1xuXG5cdGlmKCQoJy5ncm91cC1yYWRpbyBpbnB1dC5hbGwnKS5sZW5ndGggIT09IDApIHtcblx0XHR2YXIgZSA9ICQoJy5ncm91cC1yYWRpbyBpbnB1dC5hbGwnKS5jbG9zZXN0KCcuZ3JvdXAtcmFkaW9faW5wdXQnKSxcblx0XHRcdHRoID0gJCgnLmdyb3VwLXJhZGlvIGlucHV0LmFsbCcpLmNsb3Nlc3QoJy5ncm91cC1yYWRpb19pbnB1dCcpLFxuXHRcdFx0c2l6VyA9IHRoWzBdLmNsaWVudFdpZHRoIC8gMjtcblx0XHRcdHNpekggPSB0aFswXS5jbGllbnRIZWlnaHQgLyAyO1xuXG5cdFx0cmFkaW9JbnB1dChlLHRoLHNpelcsc2l6SCk7XG5cblx0fVxuXG5cdCQoXCIuZ3JvdXAtcmFkaW8sIC5ncm91cC1yYWRpby1taW5cIikub24oJ2NsaWNrJywgJy5ncm91cC1yYWRpb19pbnB1dCcsIGZ1bmN0aW9uKGUpIHtcblx0XHR2YXIgdGggPSAkKHRoaXMpO1xuXHRcdHJhZGlvSW5wdXQoZSx0aCk7XG5cdH0pO1xuXG5cdGZ1bmN0aW9uIHJhZGlvSW5wdXQoZSx0aCxzaXpXLHNpekgpIHtcblx0XHR2YXIgJHRoaXMgPSB0aCxcblx0XHRcdG9YID0gcGFyc2VJbnQoJHRoaXMub2Zmc2V0KCkubGVmdCksXG5cdFx0XHRvWSA9IHBhcnNlSW50KCR0aGlzLm9mZnNldCgpLnRvcCksXG5cdFx0XHRwWCA9IGUucGFnZVggfHwgb1ggKyBzaXpXLFxuXHRcdFx0cFkgPSBlLnBhZ2VZIHx8IG9ZICsgc2l6SDtcblxuXHRcdFx0JChcIi5ncm91cC1yYWRpb19pbnB1dCBpbnB1dFt0eXBlPSdyYWRpbyddXCIpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUtcmFkaW8nKS5hZGRDbGFzcygnbm8tYWN0aXZlLXJhZGlvJyk7XG5cblx0XHRcdCR0aGlzLmFkZENsYXNzKCdhY3RpdmUtcmFkaW8nKS5yZW1vdmVDbGFzcygnbm8tYWN0aXZlLXJhZGlvJyk7XG5cblx0XHRcdCQoXCIuZ3JvdXAtcmFkaW9faW5wdXQubm8tYWN0aXZlLXJhZGlvXCIpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoXCIuY2xpY2stZWZlY3RcIiwgdGhpcykuYW5pbWF0ZSh7XG5cdFx0XHRcdFx0XCJ3aWR0aFwiOiBcIjBcIixcblx0XHRcdFx0XHRcImhlaWdodFwiOiBcIjBcIixcblx0XHRcdFx0XHRcInRvcFwiOiBcIjBcIixcblx0XHRcdFx0XHRcImxlZnRcIjogXCIwXCJcblx0XHRcdFx0fSwgMzAwLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoISQoXCJzcGFuXCIsIHRoaXMpLmhhc0NsYXNzKCdjbGljay1lZmVjdCcpKSB7XG5cdFx0XHRcdCR0aGlzLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJjbGljay1lZmVjdCB4LScgKyBvWCArICcgeS0nICsgb1kgKyAnXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDonICsgKHBYIC0gb1gpICsgJ3B4O21hcmdpbi10b3A6JyArIChwWSAtIG9ZKSArICdweDtcIj48L3NwYW4+Jylcblx0XHRcdFx0JCgnLngtJyArIG9YICsgJy55LScgKyBvWSArICcnKS5hbmltYXRlKHtcblx0XHRcdFx0XHRcIndpZHRoXCI6IFwiNTAwcHhcIixcblx0XHRcdFx0XHRcImhlaWdodFwiOiBcIjUwMHB4XCIsXG5cdFx0XHRcdFx0XCJ0b3BcIjogXCItMjUwcHhcIixcblx0XHRcdFx0XHRcImxlZnRcIjogXCItMjUwcHhcIixcblx0XHRcdFx0fSwgNTAwKTtcblx0XHRcdH1cblxuXHR9XG5cbn0pKCk7XG4iLCIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0U0VMRUNUXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuKGZ1bmN0aW9uKCkge1xuXHR2YXIgc2VsZWN0Mk9iamVjdCA9IHtcblx0XHQgIHNfdmFsdXRhOiBcItCf0LXRgNC40L7QtFwiXG5cdFx0LCBzX2Zvcm1hdDogXCIgXCJcblx0XHQsIHNfZm9ybWF0MjogXCIgXCJcblx0XHQsIHNfZm9ybWF0MzogXCIgXCJcblx0XHQsIHNfZm9ybWF0NDogXCIgXCJcblx0XHQsIHNfb3duZXI6IFwiIFwiXG5cdFx0LCBzX2NvbXBhbnk6IFwiIFwiXG5cdH07XG5cblx0Zm9yICh2YXIga2V5IGluIHNlbGVjdDJPYmplY3QpIHtcblxuXHRcdHZhciBrZXkyID0gXCIjXCIgKyBrZXksXG5cdFx0XHR2YWx1ZSA9IHNlbGVjdDJPYmplY3Rba2V5XTtcblxuXHRcdGlmKCQoa2V5MikubGVuZ3RoICE9IDAgJiYgdmFsdWUgIT09IGZhbHNlKSB7XG5cblx0XHRcdCQoa2V5Mikuc2VsZWN0Mih7XG5cdFx0XHRcdHBsYWNlaG9sZGVyOiB2YWx1ZSxcblx0XHRcdFx0bWluaW11bVJlc3VsdHNGb3JTZWFyY2g6IEluZmluaXR5XG5cdFx0XHR9KTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdCQoa2V5Mikuc2VsZWN0Mih7XG5cdFx0XHRcdG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiBJbmZpbml0eVxuXHRcdFx0fSk7XG5cblx0XHR9XG5cdH1cbn0pKCk7XG4iLCIoZnVuY3Rpb24oKSB7XHJcblxyXG5cdHZhciBzdGFydER0LFxyXG5cdFx0ZW5kRHQ7XHJcblxyXG5cdC8vICcwNSAwMyAyMDE2J1xyXG5cdHZhciBjb21tb25PYmplY3QgPSB7XHJcblxyXG5cdFx0J2RhdGFDYWxlbmRhcicgOntcclxuXHRcdFx0J3N0YXJ0RGF0ZScgOiBzdGFydER0IHx8IG1vbWVudCgpLmZvcm1hdCgnRCBNTSBZWVlZJyksXHJcblx0XHRcdCdlbmREYXRlJyA6IGVuZER0IHx8IG1vbWVudCgpLmFkZCgxLCAnZGF5JykuZm9ybWF0KCdEIE1NIFlZWVknKVxyXG5cdFx0fSxcclxuXHRcdCdkYXRhVGltZSc6IHtcclxuXHRcdH1cclxuXHR9XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHTQpNCj0J3QmtCm0JjQryDQn9CeINCS0KDQldCc0JXQndCr0Jwg0J/QldCg0JjQntCU0JDQnFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcblxyXG5cdC8qINC/0YDQvtCy0LXRgNC60LAg0J7QodCd0J7QktCd0JDQryDQpNCj0J3QmtCm0JjQr1xyXG5cdCogIGludEludCAtINC+0LHRitC10LrRgiDQtNC70Y8g0LHQsNC30YtcclxuXHQqXHJcblx0KlxyXG5cdCovXHJcblx0dmFyIHRyUm93T2JqID0gZnVuY3Rpb24gKGZpcnN0U2hvdykge1xyXG5cclxuXHRcdHZhciBpbnRJbnQgPSB7fSwgLy8g0L/QtdGA0LLRi9C5INC+0LHQtdC60YIg0YHQviDRgdCy0LXQvNC4INGH0LXQutCx0L7QutGB0LDQvNC4XHJcblx0XHRcdHRyUm93T2JqID0ge30sIC8vINC+0LHQtdC60YIg0YEg0L/RgNC+0LzQtdC20YPRgtC60LDQvNC4XHJcblx0XHRcdGluX1N0ID0gJycsIC8vINC/0LXRgNC10LzQtdC90LDRjyDRgSDQvdCw0YfQsNC70L7QvCDQv9GA0L7QvNC10LbRg9GC0LrQsFxyXG5cdFx0XHRpbl9FbiA9ICcnLCAvLyDQv9C10YDQtdC80LXQvdCw0Y8g0YEg0LrQvtC90YbQvtC8INC/0YDQvtC80LXQttGD0YLQutCwXHJcblx0XHRcdGlubmVyU29ydCA9ICcnOyAvLyDQv9C10YDQtdC80LXQvdCw0Y8g0YHQvtC00LXRgNC20LjRgiDRhtC10LvRi9C5INC/0YDQvtC80LXQttGD0YLQvtC6XHJcblxyXG5cdFx0Ly8g0KTQvtGA0LzQuNGA0L7QstCw0L3QuNC1ICDQvtCx0YrQtdC60YLQsCDQtNC70Y8g0LHQsNC30YtcclxuXHRcdCQoJy50YWJsZS1pbnRlcnZhbCAudHItaW50ZXJ2YWwnKS5lYWNoKGZ1bmN0aW9uKHRyX2luZGV4LCB0cikge1xyXG5cdFx0XHR2YXIgaW5uZXIgPSB7fTtcclxuXHJcblx0XHRcdCQodHIpLmZpbmQoJ3RkLmItaW50ZXJ2YWwgaW5wdXQnKS5lYWNoKGZ1bmN0aW9uKGlucHV0X2luZGV4LCBpbnB1dCkge1xyXG5cdFx0XHRcdHZhciAkaW5wdXQgPSAkKGlucHV0KTtcclxuXHJcblx0XHRcdFx0aWYgKGlucHV0LmNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdGlubmVyW2lucHV0X2luZGV4XSA9ICRpbnB1dC5hdHRyKCdkYXRhLXRpbWUnKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aW5uZXJbaW5wdXRfaW5kZXhdID0gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmICghalF1ZXJ5LmlzRW1wdHlPYmplY3QoaW5uZXIpKSB7XHJcblx0XHRcdFx0aW50SW50W3RyX2luZGV4XSA9IGlubmVyO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblxyXG5cdFx0Ly8g0YTQvtGA0LzQuNGA0L7QstCw0L3QuNC1INC+0LHRitC10LrRgtCwINGBINC/0YDQvtC80LXQttGD0YLQutCw0LzQuFxyXG5cdFx0ZnVuY3Rpb24gbmV3RGF5IChlLHMseSkge1xyXG5cdFx0XHRpZiAocyA9PT0gJzIzJykge1xyXG5cclxuXHRcdFx0XHRpZiAoaW5fU3QgIT09ICcnIHx8IGluX0VuICE9PSAnJykge1xyXG5cdFx0XHRcdFx0aW5uZXJTb3J0ICs9IGluX1N0ICsgaW5fRW4gKyAnOyAnO1xyXG5cclxuXHRcdFx0XHRcdGlubmVyU29ydCA9IGlubmVyU29ydC5zdWJzdHJpbmcoMCwgaW5uZXJTb3J0Lmxlbmd0aCAtIDIpO1xyXG5cdFx0XHRcdFx0dHJSb3dPYmpbZV0gPSBpbm5lclNvcnQ7XHJcblx0XHRcdFx0XHQkKCcudHItaW50ZXJ2YWw6bnRoLWNoaWxkKCcrICggaSArIDIgKSArJyknKS5maW5kKCd0ZC5iLWluZm8gcCcpLnRleHQoaW5uZXJTb3J0KTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmIChpbl9TdCA9PT0gJycgJiYgaW5fRW4gPT09ICcnICYmIGlubmVyU29ydCA9PT0gJycpIHtcclxuXHJcblx0XHRcdFx0XHQkKCcudHItaW50ZXJ2YWw6bnRoLWNoaWxkKCcrICggaSArIDIgKSArJyknKS5maW5kKCd0ZC5iLWluZm8gcCcpLnRleHQoJ9C90LUg0LfQsNC00LDQvdC+Jyk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0aW5uZXJTb3J0ID0gaW5uZXJTb3J0LnN1YnN0cmluZygwLCBpbm5lclNvcnQubGVuZ3RoIC0gMik7XHJcblx0XHRcdFx0XHR0clJvd09ialtlXSA9IGlubmVyU29ydDtcclxuXHRcdFx0XHRcdCQoJy50ci1pbnRlcnZhbDpudGgtY2hpbGQoJysgKCBpICsgMiApICsnKScpLmZpbmQoJ3RkLmItaW5mbyBwJykudGV4dChpbm5lclNvcnQpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGluX1N0ID0gJyc7XHJcblx0XHRcdFx0aW5fRW4gPSAnJztcclxuXHRcdFx0XHRpbm5lclNvcnQgPSAnJztcclxuXHJcblx0XHRcdH0gZWxzZSBpZiAoeSA9PT0gdHJ1ZSkge1xyXG5cclxuXHRcdFx0XHRpbm5lclNvcnQgKz0gaW5fU3QgKyBpbl9FbiArICc7ICc7XHJcblx0XHRcdFx0aW5fU3QgPSAnJztcclxuXHRcdFx0XHRpbl9FbiA9ICcnO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8qXHJcblx0XHQgKiDQv9C10YDQtdCx0L7RgCDQstGB0LXRhSDRh9C10LrQsdC+0LrRgdC+0LIg0YEg0LPQu9Cw0LLQvdC+0LPQviDQvtCx0YrQtdC60YLQsCAoIDcgPT09INC00L3QtdC5OyAyNCA9PT0g0YfQsNGB0LApICovXHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8PSA3OyBpKyspIHtcclxuXHJcblx0XHRcdGZvciAodmFyIGtleSBpbiBpbnRJbnRbaV0pIHtcclxuXHRcdFx0XHR2YXIgaXRlbU9iaiA9IGludEludFtpXVtrZXldO1xyXG5cclxuXHRcdFx0XHRpZihpdGVtT2JqICE9PSBmYWxzZSAmJiBpbl9TdCA9PT0gJycpIHtcclxuXHRcdFx0XHRcdGluX1N0ID0gaXRlbU9iaiArICc6MDAnO1xyXG5cdFx0XHRcdFx0bmV3RGF5IChpLGtleSxmYWxzZSk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbU9iaiAmJiBpbl9TdCAhPT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdGluX0VuID0gJyAtICcgKyBpdGVtT2JqICsgJzowMCc7XHJcblx0XHRcdFx0XHRuZXdEYXkgKGksa2V5LGZhbHNlKTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmIChpdGVtT2JqID09PSBmYWxzZSAmJiBpbl9TdCAhPT0gJycpIHtcclxuXHRcdFx0XHRcdG5ld0RheSAoaSxrZXksdHJ1ZSk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbU9iaiA9PT0gZmFsc2UgJiYgaW5fU3QgPT09ICcnKSB7XHJcblx0XHRcdFx0XHRuZXdEYXkgKGksa2V5LGZhbHNlKTtcclxuXHRcdCAgICAgICAgfVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qXHJcblx0XHQgKiDQv9GA0L7QstC10YDQutCwINC90LAgY2hlY2tlZCDQv9GA0Lgg0L/QtdGA0LLQuNGH0L3QvtC5INC30LDQs9GA0YPQt9C60LggKyDQv9GA0Lgg0LrQu9C40LrQtS0+Y2hlY2tlZCAqL1xyXG5cdFx0aWYgKGZpcnN0U2hvdyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRmaXJzdFNob3dpbmcoKTtcclxuXHJcblx0XHRyZXR1cm4gdHJSb3dPYmo7XHJcblx0fTtcclxuXHJcblxyXG5cdHRyUm93T2JqKCk7IC8vIC0tLSDQodCQ0JzQq9CZINCf0JXQoNCS0KvQmSDQktCr0JfQntCSXHJcblxyXG5cdGZ1bmN0aW9uIGZpcnN0U2hvd2luZygpIHtcclxuXHJcblx0XHR2YXIgaV9hbGwgPSAwO1xyXG5cclxuXHRcdCQoJy50ci1pbnRlcnZhbCB0ZC5iLWludGVydmFsIGlucHV0JykuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcclxuXHRcdFx0JCh0aGlzKS5pcygnOmNoZWNrZWQnKSA/IGlfYWxsKysgOiBmYWxzZTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmKGlfYWxsID09PSAxNjgpXHJcblx0XHRcdCQoJy50YWJsZS1pbnRlcnZhbCB0Ym9keScpLmZpbmQoJ3RkLmNvbnRyb2wtYWxsIGlucHV0JykucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcblxyXG5cclxuXHRcdCQoJ3RyLnRyLWludGVydmFsJykuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcclxuXHRcdFx0dmFyIGlfdiA9IDA7XHJcblx0XHRcdCQodGhpcykuZmluZCgnLmItaW50ZXJ2YWwgaW5wdXQnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xyXG5cdFx0XHRcdCQodGhpcykuaXMoJzpjaGVja2VkJykgPyBpX3YrKyA6IGZhbHNlO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmKGlfdiA9PT0gMjQpXHJcblx0XHRcdFx0JCh0aGlzKS5maW5kKCcuY29udHJvbCBpbnB1dCcpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG5cdFx0fSk7XHJcblxyXG5cclxuXHRcdGZvciAodmFyIGggPSAwOyBoIDwgMjQ7IGgrKykge1xyXG5cclxuXHRcdFx0dmFyIGhvcml6ID0gJCgnLnRyLWludGVydmFsJykuZmluZCgndGQ6ZXEoJyArIChoICsgMSkgKyAnKSBpbnB1dCcpO1xyXG5cdFx0XHR2YXIgaV9oID0gMDtcclxuXHJcblx0XHRcdGhvcml6LmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5pcygnOmNoZWNrZWQnKSA/IGlfaCsrIDogZmFsc2U7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYoaV9oID09PSA3KVxyXG5cdFx0XHRcdCQoJ3RyJykuZmluZCgndGQuYi1pbnRhbGw6ZXEoJyArIGggKyAnKSBpbnB1dCcpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cclxuXHQvLyDQv9GA0L7QstC10YDQutCwINC/0YDQuCDQutC70LjQutC1XHJcblx0ZnVuY3Rpb24gdGRDaGVjayhob3JpeiwgaXRlbV9ob3JpeiwgdmVydGljLCBpdGVtX3ZlcnRpYywgYWxsY2hlYywgaXRlbV9vbGxjaGVjKSB7XHJcblxyXG5cdFx0dmFyIGlfaCA9IDAsXHJcblx0XHRcdGlfdiA9IDAsXHJcblx0XHRcdGlfYWxsID0gMDtcclxuXHRcdGhvcml6LmVhY2goZnVuY3Rpb24oaW5keCl7XHJcblx0XHRcdCQodGhpcykuaXMoJzpjaGVja2VkJykgPyBpX2grKyA6IGZhbHNlO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYoaV9oID09PSA3KVxyXG5cdFx0XHQkKGl0ZW1faG9yaXopLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG5cclxuXHJcblx0XHR2ZXJ0aWMuZWFjaChmdW5jdGlvbihpbmR4KXtcclxuXHRcdFx0JCh0aGlzKS5pcygnOmNoZWNrZWQnKSA/IGlfdisrIDogZmFsc2U7XHJcblx0XHR9KTtcclxuXHJcblxyXG5cdFx0aWYoaV92ID09PSAyNClcclxuXHRcdFx0JChpdGVtX3ZlcnRpYykucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcblxyXG5cdFx0YWxsY2hlYy5lYWNoKGZ1bmN0aW9uKGluZHgpe1xyXG5cdFx0XHQkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpID8gaV9hbGwrKyA6IGZhbHNlO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYoaV9hbGwgPT09IDE2OClcclxuXHRcdFx0JChpdGVtX29sbGNoZWMpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG5cdH1cclxuXHJcblx0LypcclxuXHQqXHTQmtCb0JjQmtCYXHJcblx0Ki9cclxuXHQvLyDQvdCw0LbQsNGC0LjQtSDQvdCwINC+0YLQtNC10LvRjNC90YvQuSDQtNC10L3RjFxyXG5cdCQoJ3RkLmItaW50ZXJ2YWwnKS5vbignY2xpY2snLCAnaW5wdXQnLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0dmFyIG9iSmVjdCA9IHRyUm93T2JqKHRydWUpLFxyXG5cdFx0XHQkdGhpcyA9ICQodGhpcyk7XHJcblxyXG5cdFx0Ly8g0LjQvdC00LXQutGBIFRSXHJcblx0XHR2YXIgdHJUaGlzID0gJHRoaXMuY2xvc2VzdCgndHInKSxcclxuXHRcdFx0dEJvZHlUaGlzID0gJHRoaXMuY2xvc2VzdCgndGJvZHknKSxcclxuXHRcdFx0aW5kZXggPSB0Qm9keVRoaXMuZmluZCgndHInKS5pbmRleCggdHJUaGlzICkgLTEsXHJcblx0XHRcdHNyb2thSXNPYmogPSBvYkplY3RbaW5kZXhdLFxyXG5cclxuXHRcdFx0Ly8g0LjQvdC00LXQutGBIFREXHJcblx0XHRcdHRkVGhpcyA9ICR0aGlzLmNsb3Nlc3QoJ3RkJyksXHJcblx0XHRcdGluZGV4VGQgPSB0clRoaXMuZmluZCgndGQnKS5pbmRleCggdGRUaGlzICkgLSAxO1xyXG5cclxuXHRcdGlmKHNyb2thSXNPYmogPT09ICcnKSB7XHJcblx0XHRcdCQoIHRyVGhpcyApLmZpbmQoJ3RkLmItaW5mbyBwJykudGV4dCggJ9C90LUg0LfQsNC00LDQvdC+JyApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCggdHJUaGlzICkuZmluZCgndGQuYi1pbmZvIHAnKS50ZXh0KCBzcm9rYUlzT2JqICk7XHJcblx0XHR9XHJcblxyXG5cclxuXHJcblx0XHRpZigkdGhpcy5pcygnOmNoZWNrZWQnKSkge1xyXG5cclxuXHRcdFx0dmFyICRob3JpeiA9ICQoJy50ci1pbnRlcnZhbCcpLmZpbmQoJ3RkOmVxKCcgKyAoaW5kZXhUZCArIDEpICsgJykgaW5wdXQnKSxcclxuXHRcdFx0XHRpdGVtX2hvcml6ID0gJCgndHInKS5maW5kKCd0ZC5iLWludGFsbDplcSgnICsgaW5kZXhUZCArICcpIGlucHV0JyksXHJcblxyXG5cdFx0XHRcdCR2ZXJ0aWMgPSAkdGhpcy5jbG9zZXN0KCd0cicpLmZpbmQoJy5iLWludGVydmFsIGlucHV0JyksXHJcblx0XHRcdFx0aXRlbV92ZXJ0aWMgPSB0clRoaXMuZmluZCgndGQuY29udHJvbCBpbnB1dCcpLFxyXG5cclxuXHRcdFx0XHQkYWxsY2hlYyA9ICR0aGlzLmNsb3Nlc3QoJ3Rib2R5JykuZmluZCgnLmItaW50ZXJ2YWwgaW5wdXQnKSxcclxuXHRcdFx0XHRpdGVtX29sbGNoZWMgPSAkdGhpcy5jbG9zZXN0KCd0Ym9keScpLmZpbmQoJ3RkLmNvbnRyb2wtYWxsIGlucHV0Jyk7XHJcblxyXG5cdFx0XHR0ZENoZWNrKCRob3JpeiwgaXRlbV9ob3JpeiwgJHZlcnRpYywgaXRlbV92ZXJ0aWMsICRhbGxjaGVjLCBpdGVtX29sbGNoZWMpO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHQkKCd0cicpLmZpbmQoJ3RkLmItaW50YWxsOmVxKCcgKyBpbmRleFRkICsgJykgaW5wdXQnKS5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XHJcblx0XHRcdHRyVGhpcy5maW5kKCd0ZC5jb250cm9sIGlucHV0JykucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xyXG5cdFx0XHR0Qm9keVRoaXMuZmluZCgndGQuY29udHJvbC1hbGwgaW5wdXQnKS5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XHJcblx0XHRcdHRyUm93T2JqKCk7XHJcblx0XHR9XHJcblxyXG5cclxuXHJcblx0fSk7XHJcblxyXG5cdC8vINC90LDQttCw0YLQuNC1INC90LAg0LTQtdC90Ywg0L3QtdC00LXQu9C4XHJcblx0JCgndGQuY29udHJvbCcpLm9uKCdjbGljaycsICdpbnB1dCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG5cdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcblx0XHRpZigkdGhpcy5pcygnOmNoZWNrZWQnKSkge1xyXG5cclxuXHRcdFx0JHRoaXMuY2xvc2VzdCgndHInKS5maW5kKCcuYi1pbnRlcnZhbCBpbnB1dCcpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG5cdFx0XHR0clJvd09iaigpO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHQkdGhpcy5jbG9zZXN0KCd0cicpLmZpbmQoJy5iLWludGVydmFsIGlucHV0LCAuY29udHJvbC1hbGwgaW5wdXQsIC5iLWludGFsbCBpbnB1dCcpLnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcclxuXHRcdFx0JHRoaXMuY2xvc2VzdCgndGJvZHknKS5maW5kKCcuY29udHJvbC1hbGwgaW5wdXQsIC5iLWludGFsbCBpbnB1dCcpLnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcclxuXHRcdFx0dHJSb3dPYmoodHJ1ZSk7XHJcblxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHQvLyDQvdCw0LbQsNGC0LjQtSDQvdCwINCy0YHQtSDRgdGA0LDQt9GDXHJcblx0JCgndGQuY29udHJvbC1hbGwnKS5vbignY2xpY2snLCAnaW5wdXQnLCBmdW5jdGlvbihldmVudCkge1xyXG5cclxuXHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG5cdFx0aWYoJHRoaXMuaXMoJzpjaGVja2VkJykpIHtcclxuXHJcblx0XHRcdCR0aGlzLmNsb3Nlc3QoJ3Rib2R5JykuZmluZCgnLmItaW50ZXJ2YWwgaW5wdXQsIC5iLWludGFsbCBpbnB1dCwgLmNvbnRyb2wgaW5wdXQnKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuXHRcdFx0dHJSb3dPYmoodHJ1ZSk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdCR0aGlzLmNsb3Nlc3QoJ3Rib2R5JykuZmluZCgnLmItaW50ZXJ2YWwgaW5wdXQsIC5iLWludGFsbCBpbnB1dCwgLmNvbnRyb2wgaW5wdXQnKS5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XHJcblx0XHRcdHRyUm93T2JqKHRydWUpO1xyXG5cclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0Ly8g0L3QsNC20LDRgtC40LUg0L3QsCDQstGA0LXQvNC10L3QvdC+0Lkg0L7RgtGA0LXQt9C+0Log0L3QsCDRgdC60LLQvtC30Ywg0LLRgdC10YUg0LTQvdC10LlcclxuXHQkKCd0ZC5iLWludGFsbCcpLm9uKCdjbGljaycsICdpbnB1dCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG5cdFx0dmFyICR0aGlzID0gJCh0aGlzKSxcclxuXHRcdFx0dHJUaGlzID0gJCh0aGlzKS5jbG9zZXN0KCd0ZCcpLFxyXG5cdFx0XHR0Qm9keVRoaXMgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJyksXHJcblx0XHRcdGluZGV4ID0gdEJvZHlUaGlzLmZpbmQoJ3RkJykuaW5kZXgoIHRyVGhpcyApO1xyXG5cclxuXHRcdGlmKCR0aGlzLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblxyXG5cdFx0XHQkKCcudHItaW50ZXJ2YWwnKS5maW5kKCd0ZDplcSgnICsgaW5kZXggKyAnKSBpbnB1dCcpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG5cclxuXHRcdFx0dHJSb3dPYmooKTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkKCcudHItaW50ZXJ2YWwnKS5maW5kKCd0ZDplcSgnICsgaW5kZXggKyAnKSBpbnB1dCcpLnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcclxuXHRcdFx0JHRoaXMuY2xvc2VzdCgndGJvZHknKS5maW5kKCcuY29udHJvbCBpbnB1dCwgLmNvbnRyb2wtYWxsIGlucHV0JykucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xyXG5cclxuXHRcdFx0dHJSb3dPYmoodHJ1ZSk7XHJcblxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx00JLQq9CS0J7QlCDQmtCQ0JvQldCd0JTQkNCg0K9cclxuXHTQkdCV0Jcg0KfQkNCh0J7QklxyXG5cdFx0bW9tZW50Lm1pbi5qc1xyXG5cdFx0cnUuanNcclxuXHRcdGRhdGVyYW5nZXBpY2tlci5qc1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcblxyXG5cdGZ1bmN0aW9uIHVwZGF0ZUNvbmZpZ05vQ2xvY2soKSB7XHJcblx0XHR2YXIgZGVmYXVsdHMgPSB7XHJcblx0XHRcdFx0XCJzaW5nbGVEYXRlUGlja2VyXCI6IHRydWUsXHJcblx0XHRcdFx0XCJzaG93RHJvcGRvd25zXCI6IHRydWUsXHJcblx0XHRcdFx0XCJvcGVuc1wiOiBcInJpZ2h0XCIsXHJcblx0XHRcdFx0bG9jYWxlOiB7XHJcblx0XHRcdFx0XHRmb3JtYXQ6ICdEIE1NTU0gWVlZWScsXHJcblx0XHRcdFx0XHRhcHBseUxhYmVsOiAn0J/QvtC00YLQstC10YDQtNC40YLRjCcsXHJcblx0XHRcdFx0XHRkYXlzT2ZXZWVrOiBbJ9C/0L0nLCfQstGCJywgJ9GB0YAnLCAn0YfRgicsICfQv9GCJywgJ9GB0LEnLCAn0LLRgSddLFxyXG5cdFx0XHRcdFx0bW9udGhOYW1lczogWyfQr9C90LLQsNGA0YwnLCAn0KTQtdCy0YDQsNC70YwnLCAn0JzQsNGA0YInLCAn0JDQv9GA0LXQu9GMJywgJ9Cc0LDQuScsICfQmNGO0L3RjCcsICfQmNGO0LvRjCcsICfQkNCy0LPRg9GB0YInLCAn0KHQtdC90YLRj9Cx0YDRjCcsICfQntC60YLRj9Cx0YDRjCcsICfQndC+0Y/QsdGA0YwnLCAn0JTQtdC60LDQsdGA0YwnXVxyXG5cdFx0XHRcdH0sXHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciBvcHRpb25zU3RhcnQgPSB7XHJcblx0XHRcdFwic3RhcnREYXRlXCI6IG1vbWVudChjb21tb25PYmplY3QuZGF0YUNhbGVuZGFyLnN0YXJ0RGF0ZSwgXCJEIE1NIFlZWVlcIikuZm9ybWF0KCdEIE1NTU0gWVlZWScpLFxyXG5cdFx0fTtcclxuXHRcdHZhciBvcHRpb25zRW5kID0ge1xyXG5cdFx0XHRcInN0YXJ0RGF0ZVwiOiBtb21lbnQoY29tbW9uT2JqZWN0LmRhdGFDYWxlbmRhci5lbmREYXRlLCBcIkQgTU0gWVlZWVwiKS5mb3JtYXQoJ0QgTU1NTSBZWVlZJyksXHJcblx0XHR9O1xyXG5cclxuXHRcdG9wdGlvbnNTdGFydCA9ICQuZXh0ZW5kKCB0cnVlLCB7fSwgZGVmYXVsdHMsIG9wdGlvbnNTdGFydCApO1xyXG5cdFx0b3B0aW9uc0VuZCA9ICQuZXh0ZW5kKCB0cnVlLCB7fSwgZGVmYXVsdHMsIG9wdGlvbnNFbmQgKTtcclxuXHJcblx0XHQkKCcjZC1zdGFydCcpLmRhdGVyYW5nZXBpY2tlcihvcHRpb25zU3RhcnQsIGZ1bmN0aW9uKCkgeyB9KTtcclxuXHRcdCQoJyNkLWVuZCcpLmRhdGVyYW5nZXBpY2tlcihvcHRpb25zRW5kLCBmdW5jdGlvbigpIHsgfSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVDb25maWdOb0Nsb2NrKCk7XHJcblxyXG5cdCQoJy5iLWRhdGVyYW5nIGknKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdCQodGhpcykucGFyZW50KCkuZmluZCgnaW5wdXQnKS5jbGljaygpO1xyXG5cdH0pO1xyXG5cclxuXHJcblx0JCgnI2Qtc3RhcnQsICNkLWVuZCcpLm9uKCdzaG93LmRhdGVyYW5nZXBpY2tlcicsIGZ1bmN0aW9uKGV2LCBwaWNrZXIpIHtcclxuXHRcdHN0YXJ0Q2FsZW5kYXIoKTtcclxuXHR9KTtcclxuXHJcblx0JCgnI2Qtc3RhcnQsICNkLWVuZCcpLm9uKCdzaG93Q2FsZW5kYXIuZGF0ZXJhbmdlcGlja2VyJywgZnVuY3Rpb24oZXYsIHBpY2tlcikge1xyXG5cdFx0c3RhcnRDYWxlbmRhcigpO1xyXG5cdH0pO1xyXG5cclxuXHJcblx0JCgnI2Qtc3RhcnQsICNkLWVuZCcpLm9uKCdhcHBseS5kYXRlcmFuZ2VwaWNrZXInLCBmdW5jdGlvbihldiwgcGlja2VyKSB7XHJcblx0XHRpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09PSAnZC1zdGFydCcpIHtcclxuXHRcdFx0Y29tbW9uT2JqZWN0LmRhdGFDYWxlbmRhci5zdGFydERhdGUgPSBwaWNrZXIuc3RhcnREYXRlLmZvcm1hdCgnRCBNTSBZWVlZJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb21tb25PYmplY3QuZGF0YUNhbGVuZGFyLmVuZERhdGUgPSBwaWNrZXIuc3RhcnREYXRlLmZvcm1hdCgnRCBNTSBZWVlZJyk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cclxuXHJcblxyXG5cdGZ1bmN0aW9uIHN0YXJ0Q2FsZW5kYXIoKSB7XHJcblx0XHQkKCcudGFibGUtY29uZGVuc2VkIHRoLmF2YWlsYWJsZScpLnJlbW92ZSgpO1xyXG5cdFx0JCgnLnRhYmxlLWNvbmRlbnNlZCAubW9udGgnKS5hdHRyKCdjb2xzcGFuJywgJzcnKTtcclxuXHRcdCQoJy5tb250aHNlbGVjdCcpLnNlbGVjdDIoe1xyXG5cdFx0XHRtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogSW5maW5pdHlcclxuXHRcdH0pO1xyXG5cdFx0JCgnLnllYXJzZWxlY3QnKS5zZWxlY3QyKHtcclxuXHRcdFx0bWluaW11bVJlc3VsdHNGb3JTZWFyY2g6IEluZmluaXR5XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cclxuXHQvKlxyXG5cdCog0L/QtdGA0LXQtNCw0YLRjCBjbGFzcyDQsdC+0LrRgdCwXHJcblx0KiBpZCNob3Vyc1xyXG5cdCogaWQjbWludXRlc1xyXG5cdCovXHJcblx0ZnVuY3Rpb24gZGF0ZVRpbWUoYm94Q2wsaElkLG1JZCkge1xyXG5cclxuXHRcdHZhciBob3VyID0gMCxcclxuXHRcdFx0bWludXRlID0gMCxcclxuXHRcdFx0a1ByZXNzID0gJy4nICsgYm94Q2wgKyAnIGlucHV0JyxcclxuXHRcdFx0aElkID0gaElkLFxyXG5cdFx0XHRtSWQgPSBtSWQ7XHJcblxyXG5cdFx0JChrUHJlc3MpLmVhY2goZnVuY3Rpb24obnVtLCBpbnB1dCkge1xyXG5cclxuXHRcdFx0aWYoJChpbnB1dCkudmFsKCkgIT09ICcnKSB7XHJcblx0XHRcdFx0aW5fdGltZSgkKGlucHV0KS52YWwoKS5sZW5ndGggLCAkKGlucHV0KS5hdHRyKCdjbGFzcycpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8g0L7Rh9C4Y9GC0LjRgtGMINC30L3QsNGH0LXQvdC40LVcclxuXHRcdCQoIGtQcmVzcyApLnNlbGVjdChmdW5jdGlvbihlKSB7XHJcblxyXG5cdFx0XHQkKHRoaXMpLnZhbCgnJyk7XHJcblxyXG5cdFx0XHRpZigkKHRoaXMpLmF0dHIoJ2NsYXNzJykgPT09ICdob3VyJykge1xyXG5cdFx0XHRcdGhvdXIgPSAwO1xyXG5cdFx0XHR9IGVsc2UgaWYoJCh0aGlzKS5hdHRyKCdjbGFzcycpID09PSAnbWludXRlJykge1xyXG5cdFx0XHRcdG1pbnV0ZSA9IDA7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIGJhY2tzcGFjZVxyXG5cdFx0JCgga1ByZXNzICkua2V5dXAoZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0dmFyIHRoaXNDbGFzcyA9ICQodGhpcykuYXR0cignY2xhc3MnKTtcclxuXHJcblx0XHRcdGlmKGV2ZW50LmtleUNvZGUgPT09IDggJiYgdGhpc0NsYXNzID09PSAnaG91cicpIHtcclxuXHRcdFx0XHR2YXIgdmFsdWUgPSAkKHRoaXMpLnZhbCgpLmxlbmd0aDtcclxuXHRcdFx0XHRob3VyID0gdmFsdWU7XHJcblx0XHRcdH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gOCAmJiB0aGlzQ2xhc3MgPT09ICdtaW51dGUnKSB7XHJcblx0XHRcdFx0dmFyIHZhbHVlID0gJCh0aGlzKS52YWwoKS5sZW5ndGg7XHJcblx0XHRcdFx0bWludXRlID0gdmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdCQoIGtQcmVzcyApLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cclxuXHRcdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIl5bMC05XSskXCIpLFxyXG5cdFx0XHRcdGtleSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoIWV2ZW50LmNoYXJDb2RlID8gZXZlbnQud2hpY2ggOiBldmVudC5jaGFyQ29kZSksXHJcblx0XHRcdFx0dGhpc0NsYXNzID0gJCh0aGlzKS5hdHRyKCdjbGFzcycpLFxyXG5cdFx0XHRcdHRoaXNJZCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuXHJcblx0XHRcdCQoa1ByZXNzKS5rZXl1cChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgdmFsdWUgPSAkKHRoaXMpLnZhbCgpLFxyXG5cdFx0XHRcdFx0dmFsdWVMZW5nID0gJCh0aGlzKS52YWwoKS5sZW5ndGgsXHJcblx0XHRcdFx0XHR0aGlzQ2xhc3MgPSAkKHRoaXMpLmF0dHIoJ2NsYXNzJyk7XHJcblxyXG5cclxuXHRcdFx0XHRpZiAoIHRoaXNDbGFzcyA9PT0gJ2hvdXInICYmIGhvdXIgPT09IDIgJiYgdmFsdWUgPCAyNCApIHtcclxuXHRcdFx0XHRcdCQoJyMnICsgdGhpc0lkICsgJyArIGlucHV0JykuZm9jdXMoKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKCB0aGlzQ2xhc3MgPT09ICdob3VyJyAmJiB2YWx1ZSA+IDIzICkge1xyXG5cdFx0XHRcdFx0dGhpcy5zZWxlY3QoKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICggdGhpc0NsYXNzID09PSAnbWludXRlJyAmJiBtaW51dGUgPT09IDIgJiYgdmFsdWUgPCA2MCApIHtcclxuXHRcdFx0XHRcdCQoJyMnICsgdGhpc0lkKS5wYXJlbnQoKS5maW5kKCcuaG91cicpLmZvY3VzKCk7XHJcblx0XHRcdFx0fSBlbHNlIGlmICggdGhpc0NsYXNzID09PSAnbWludXRlJyAmJiAgdmFsdWUgPiA1OSApIHtcclxuXHRcdFx0XHRcdHRoaXMuc2VsZWN0KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmICghcmVnZXgudGVzdChrZXkpIHx8IHRoaXNDbGFzcyA9PT0gJ2hvdXInICYmICEoaG91ciA8IDIpIHx8IHRoaXNDbGFzcyA9PT0gJ21pbnV0ZScgJiYgIShtaW51dGUgPCAyKSkge1xyXG5cclxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGlmKHRoaXNDbGFzcyA9PT0gJ2hvdXInKSB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGhvdXIgPCAyKVxyXG5cdFx0XHRcdFx0XHRob3VyICs9MTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdGlmIChtaW51dGUgPCAyKVxyXG5cdFx0XHRcdFx0XHRtaW51dGUgKz0xO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRmdW5jdGlvbiBpbl90aW1lKG51bSxjbGFzc0luKSB7XHJcblxyXG5cdFx0XHRpZihjbGFzc0luID09PSAnaG91cicpIHtcclxuXHRcdFx0XHRob3VyID0gbnVtO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG1pbnV0ZSA9IG51bTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vINC/0LXRgNC10YXQvtC0INGE0L7QutGD0YHQsFxyXG5cdFx0ZnVuY3Rpb24gZXZlbnRGb2N1cyhlKSB7XHJcblx0XHRcdCQoJyMnICsgZSkuYXR0cignY2xhc3MnKSA9PT0gJ2hvdXInID9cclxuXHRcdFx0XHQkKCcjJyArIGUgKyAnICsgaW5wdXQnKS5mb2N1cygpIDpcclxuXHRcdFx0XHQkKCcjJyArIGUpLnBhcmVudCgpLmZpbmQoJy5ob3VyJykuZm9jdXMoKTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRkYXRlVGltZSgnal90YW1lJywnI2hvdXJzJywnI21pbnV0ZXMnKTtcclxuXHRkYXRlVGltZSgnal90YW1lX2VuZCcsJyNob3Vyc19lbmQnLCcjbWludXRlc19lbmQnKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHTQpNCe0KDQnNCY0KDQntCS0JDQndCY0JUg0J7QkdCq0JXQmtCi0JBcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5cdCQoJyNuZXh0c3RlcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG5cdFx0Ly8g0J7QsdGK0LXQutGCINGC0LDQsdC70LjRhtGLXHJcblx0XHR2YXIgaW50SW50ID0ge307XHJcblxyXG5cdFx0JCgnLnRhYmxlLWludGVydmFsIC50ci1pbnRlcnZhbCcpLmVhY2goZnVuY3Rpb24odHJfaW5kZXgsIHRyKSB7XHJcblx0XHRcdHZhciBpbm5lciA9IHt9O1xyXG5cclxuXHRcdFx0JCh0cikuZmluZCgndGQuYi1pbnRlcnZhbCBpbnB1dCcpLmVhY2goZnVuY3Rpb24oaW5wdXRfaW5kZXgsIGlucHV0KSB7XHJcblx0XHRcdFx0dmFyICRpbnB1dCA9ICQoaW5wdXQpO1xyXG5cclxuXHRcdFx0XHRpZiAoaW5wdXQuY2hlY2tlZCkge1xyXG5cdFx0XHRcdFx0aW5uZXJbaW5wdXRfaW5kZXhdID0gJGlucHV0LmF0dHIoJ2RhdGEtdGltZScpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpbm5lcltpbnB1dF9pbmRleF0gPSBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKCFqUXVlcnkuaXNFbXB0eU9iamVjdChpbm5lcikpIHtcclxuXHRcdFx0XHRpbnRJbnRbdHJfaW5kZXhdID0gaW5uZXI7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvbW1vbk9iamVjdC5pbnRJbnQgPSBpbnRJbnQ7XHJcblxyXG5cdFx0Ly8g0J7QsdGK0LXQutGCINCy0YDQtdC80LXQvdC4XHJcblx0XHQkKCcjaG91cnMsICNtaW51dGVzLCAjaG91cnNfZW5kLCAjbWludXRlc19lbmQnKS5lYWNoKGZ1bmN0aW9uKGlucHV0X2luZGV4LCBpbnB1dCkge1xyXG5cclxuXHRcdFx0aWYoICQodGhpcykudmFsKCkgPT09ICcnICkge1xyXG5cdFx0XHRcdCQodGhpcykuYXR0cignZGF0YS1jaCcsICdlcnInKTtcclxuXHRcdFx0fSBlbHNlIGlmICggJCh0aGlzKS5hdHRyKCdkYXRhLWNoJykgPT09ICdlcnInICkge1xyXG5cdFx0XHRcdCQodGhpcykuYXR0cignZGF0YS1jaCcsICdjaCcpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoICQodGhpcykuYXR0cignZGF0YS1jaCcpID09PSAnY2gnICkge1xyXG5cdFx0XHRcdGNvbW1vbk9iamVjdC5kYXRhVGltZVskKHRoaXMpLmF0dHIoJ2lkJyldID0gJCh0aGlzKS52YWwoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYgKCAkKCdbZGF0YS1jaD1cImVyclwiXScpLmxlbmd0aCAhPT0gMCApIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHJlcyA9IHVuZm9ybWF0dGVkX3VuaXgoKTtcclxuXHJcblx0XHRcdHN3aXRjaCAoIHRydWUgKXtcclxuXHRcdFx0XHRjYXNlICggcmVzIDwgMCApIDpcclxuXHRcdFx0XHRcdHNlbmRfY29tbW9uT2JqZWN0ICgpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAoIHJlcyA+IDAgfHwgcmVzID09PSAwICkgOlxyXG5cdFx0XHRcdFx0ZXJyX2NvbW1vbk9iamVjdCgpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCAn0K8g0YLQsNC60LjRhSDQt9C90LDRh9C10L3QuNC5INC90LUg0LfQvdCw0Y4nICk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHVuZm9ybWF0dGVkX3VuaXgoKSB7XHJcblxyXG5cdFx0XHR2YXIgdW5mb3JtYXR0ZWRfdW5peCA9IGNvbW1vbk9iamVjdC5kYXRhQ2FsZW5kYXIuc3RhcnREYXRlICsgXCIgXCIgKyBjb21tb25PYmplY3QuZGF0YVRpbWUuaG91cnMgKyBcIjpcIiArIGNvbW1vbk9iamVjdC5kYXRhVGltZS5taW51dGVzO1xyXG5cdFx0XHR2YXIgdW5peHRpbWUgPSBtb21lbnQodW5mb3JtYXR0ZWRfdW5peCwgXCJEIE1NIFlZWVkgaDptbVwiKS5mb3JtYXQoXCJYXCIpO1xyXG5cclxuXHRcdFx0dmFyIHVuZm9ybWF0dGVkX3VuaXgyID0gY29tbW9uT2JqZWN0LmRhdGFDYWxlbmRhci5lbmREYXRlICsgXCIgXCIgKyBjb21tb25PYmplY3QuZGF0YVRpbWUuaG91cnNfZW5kICsgXCI6XCIgKyBjb21tb25PYmplY3QuZGF0YVRpbWUubWludXRlc19lbmQ7XHJcblx0XHRcdHZhciB1bml4dGltZTIgPSBtb21lbnQodW5mb3JtYXR0ZWRfdW5peDIsIFwiRCBNTSBZWVlZIGg6bW1cIikuZm9ybWF0KFwiWFwiKTtcclxuXHRcdFx0dmFyIHJlcztcclxuXHJcblx0XHRcdHJldHVybiByZXMgPSB1bml4dGltZSAtIHVuaXh0aW1lMjtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBlcnJfY29tbW9uT2JqZWN0KCkge1xyXG5cclxuXHRcdFx0JChcIi5iLWRhdGUtY29udGFpbiAuaW5mby1wb3NcIikuY3NzKHt2aXNpYmlsaXR5OiBcInZpc2libGVcIn0pLmFuaW1hdGUoe1xyXG5cdFx0XHRcdG9wYWNpdHk6IDEsXHJcblx0XHRcdFx0dG9wOiAnNTAlJ1xyXG5cdFx0XHR9LCAxMDAwKTtcclxuXHJcblx0XHRcdCQoXCIuYi1kYXRlLWNvbnRhaW4gLmluZm8tcG9zXCIpLmRlbGF5KCAxMDAwICkuYW5pbWF0ZSh7XHJcblx0XHRcdFx0b3BhY2l0eTogMCxcclxuXHRcdFx0XHR0b3A6ICc4MCUnXHJcblx0XHRcdH0sIDEwMDAsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCQodGhpcykuY3NzKHt2aXNpYmlsaXR5OiBcImhpZGRlblwiLCB0b3A6ICcxMCUnfSk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBzZW5kX2NvbW1vbk9iamVjdCgpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coY29tbW9uT2JqZWN0KTtcclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG59KSgpO1xyXG4iLCIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx00JfQsNCz0YDRg9C30LrQsCDRhNCw0LnQu9CwXG5cdGlucHV0IHR5cGU9J2ZpbGUnXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuKGZ1bmN0aW9uKCkge1xuXG5cdCQuZm4uaW5wdXRGaWxlUmFyID0gZnVuY3Rpb24ob3B0aW9ucykge1xuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcblxuXHRcdFx0dmFyXHRvcCA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRcdFx0J2UnOiAnJ1xuXHRcdFx0XHR9LCBvcHRpb25zKTtcblxuXG5cdFx0XHR2YXIgZmlsZUlucHV0ICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIG9wLmUgKyBcIiAuaW5wdXQtLWZpbGVcIiApLFxuXHRcdFx0XHRidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBvcC5lICsgXCIgLmlucHV0LS10cmlnZ2VyXCIgKSxcblx0XHRcdFx0dGhlX3JldHVybiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIG9wLmUgKyBcIiAuZmlsZS1yZXR1cm4gc3BhblwiICk7XG5cblxuXHRcdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoIFwiY2xpY2tcIiwgZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0XHRmaWxlSW5wdXQuZm9jdXMoKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSk7XG5cblx0XHRcdGZpbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCBcImNoYW5nZVwiLCBmdW5jdGlvbiggZXZlbnQgKSB7XG5cblx0XHRcdFx0dmFyIG5hbWUgPSB0aGlzLnZhbHVlLnNwbGl0KFwiXFxcXFwiKSxcblx0XHRcdFx0XHRuYW1lMiA9IG5hbWVbbmFtZS5sZW5ndGgtMV07XG5cblx0XHRcdFx0dGhlX3JldHVybi5pbm5lckhUTUwgPSBuYW1lMjtcblxuXHRcdFx0fSk7XG5cblx0XHRcdCQoIG9wLmUgKyBcIiAuZmlsZS1yZXR1cm5cIiApLm9uKCdjbGljaycsICdpJywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHRcdHZhciBib3hQID0gJCh0aGlzKS5jbG9zZXN0KCdwJykuZmluZCgnc3BhbicpO1xuXHRcdFx0XHRcdGJveFBbMF0uaW5uZXJIVE1MID0gJyc7XG5cdFx0XHRcdGZpbGVJbnB1dC52YWx1ZSA9IFwiXCI7XG5cdFx0XHR9KTtcblxuXHRcdH0pO1xuXG5cdH07XG5cblx0aWYoJCggJy5vdGhlcicgKS5sZW5ndGggIT0gMCkge1xuXHRcdCQoJy5vdGhlcicpLmlucHV0RmlsZVJhcih7XG5cdFx0XHQnZSc6ICcub3RoZXInXG5cdFx0fSk7XG5cdH07XG5cblx0aWYoJCggJy5odG1sNScgKS5sZW5ndGggIT0gMCkge1xuXHRcdCQoJy5odG1sNScpLmlucHV0RmlsZVJhcih7XG5cdFx0XHQnZSc6ICcuaHRtbDUnXG5cdFx0fSk7XG5cdH07XG5cbn0pKCk7XG5cblxuXG4vLyAoZnVuY3Rpb24oKSB7XG5cbi8vIFx0JC5mbi5pbnB1dEZpbGVSYXIgPSBmdW5jdGlvbigpIHtcbi8vIFx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuLy8gXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcblxuXG4vLyBcdFx0XHR2YXIgZmlsZUlucHV0ICA9ICR0aGlzLmZpbmQoIFwiLmlucHV0LS1maWxlXCIgKSxcbi8vIFx0XHRcdFx0YnV0dG9uID0gJHRoaXMuZmluZCggXCIuaW5wdXQtLXRyaWdnZXJcIiApLFxuLy8gXHRcdFx0XHR0aGVfcmV0dXJuID0gJHRoaXMuZmluZCggXCIuZmlsZS1yZXR1cm4gc3BhblwiICksXG4vLyBcdFx0XHRcdGZpbGVfcmV0dXJuID0gJHRoaXMuZmluZCggXCIuZmlsZS1yZXR1cm5cIiApO1xuXG4vLyBcdFx0XHQkKCBidXR0b24gKS5vbiggXCJjbGlja1wiLCBmdW5jdGlvbiggZXZlbnQgKSB7XG4vLyBcdFx0XHRcdGZpbGVJbnB1dC5mb2N1cygpO1xuLy8gXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG4vLyBcdFx0XHR9KTtcblxuLy8gXHRcdFx0JCggZmlsZUlucHV0ICkub24oIFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCBldmVudCApIHtcblxuLy8gXHRcdFx0XHR2YXIgbmFtZSA9IHRoaXMudmFsdWUuc3BsaXQoXCJcXFxcXCIpLFxuLy8gXHRcdFx0XHRcdG5hbWUyID0gbmFtZVtuYW1lLmxlbmd0aC0xXTtcblxuLy8gXHRcdFx0XHR0aGVfcmV0dXJuLmlubmVySFRNTCA9IG5hbWUyO1xuXG4vLyBcdFx0XHR9KTtcblxuLy8gXHRcdFx0JCggZmlsZV9yZXR1cm4gKS5vbignY2xpY2snLCAnaScsIGZ1bmN0aW9uIChldmVudCkge1xuLy8gXHRcdFx0XHR2YXIgYm94UCA9ICQodGhpcykuY2xvc2VzdCgncCcpLmZpbmQoJ3NwYW4nKTtcbi8vIFx0XHRcdFx0XHRib3hQWzBdLmlubmVySFRNTCA9ICcnO1xuLy8gXHRcdFx0XHRmaWxlSW5wdXQudmFsdWUgPSBcIlwiO1xuLy8gXHRcdFx0fSk7XG5cbi8vIFx0XHR9KTtcblxuLy8gXHR9O1xuXG4vLyBcdGlmKCQoICcub3RoZXInICkubGVuZ3RoICE9IDApIHtcbi8vIFx0XHQkKCcub3RoZXInKS5pbnB1dEZpbGVSYXIoKTtcbi8vIFx0fTtcblxuLy8gXHRpZigkKCAnLmh0bWw1JyApLmxlbmd0aCAhPSAwKSB7XG4vLyBcdFx0JCgnLmh0bWw1JykuaW5wdXRGaWxlUmFyKCk7XG4vLyBcdH07XG5cbi8vIH0pKCk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
