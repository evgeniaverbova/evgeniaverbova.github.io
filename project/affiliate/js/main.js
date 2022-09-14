$(document).ready(function() {

	/*
	* PAGE CPA
	*/


	// календарь
	updateConfig();
	function updateConfig() {
		var options = {
				"singleDatePicker": true,
				"showDropdowns": true,
				"timePicker": true,
				"timePicker24Hour": true,
				locale: {
					format: 'DD.MM.YYYY, HH:mm',
					applyLabel: 'Подтвердить',
					daysOfWeek: ['пн','вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
					monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
				},
		};

		$('#d-start').daterangepicker(options, function() { });
		$('#d-end').daterangepicker(options, function() { });

		$('#d-start2').daterangepicker(options, function() { });
		$('#d-end2').daterangepicker(options, function() { });

		$('#d-start3').daterangepicker(options, function() { });
		$('#d-end3').daterangepicker(options, function() { });

		$('#d-start4').daterangepicker(options, function() { });
		$('#d-end4').daterangepicker(options, function() { });
	} // конец календарь

	// календарь БЕЗ ЧАСОВ
	updateConfigNoClock();
	function updateConfigNoClock() {
		var options = {
				"singleDatePicker": true,
				"showDropdowns": true,
				"opens": "left",
				locale: {
					format: 'DD.MM.YYYY',
					applyLabel: 'Подтвердить',
					daysOfWeek: ['пн','вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
					monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
				},
		};

		$('#d-start-not').daterangepicker(options, function() { });
		$('#d-end-not').daterangepicker(options, function() { });

		$('#d-start-not2').daterangepicker(options, function() { });
		$('#d-end-not2').daterangepicker(options, function() { });
	} // конец календарь БЕЗ ЧАСОВ


	// боковое меню
	$('.aside-menu .dropdown-toggle > a').click(function(event) {
		event.preventDefault();
		$(this).closest( "li" ).toggleClass('active');
	});


	//поле по клику
	$('.add_field, #add_field').click(function(){

		var parentBox = $(this).closest('.set-input');

		var numField = parentBox.find('.input-box_sum .input-box-block').length;
		numField++;

		parentBox.find('.input-box_sum').append(
			'<div class="input-box-block">'
			+	'<label for="max-level' + numField +'">Уровень '+numField+'</label>'
			+	'<input class="max" id="max-level'+numField+'" type="text" placeholder="Игроков до..."/>'
			+	'<input class="min" type="text" placeholder="Оплата за игрока"/>'
			+'</div>'
		);

		parentBox.find('.over-input > p').text('Сумма выше уровня ['+ numField +']');

	});




	/*
	* page DOBAVIT_POLZOVATELYA
	*/


	// SELECT END CHECKBOX
	/*
	 *	var drilldown = new Drilldown("name", "title");
	 *	name - box id
	 *	title - тайтл не выбранного селекта
	 *
	 *	нужно создать контейнер для вывода результатов name + Selected
	 *
	 *	если есть checkbox oll ему id = *-all
	 *	каждому диву с инпутом свой id в том числе и oll
	 *
	 */

	var objDrilldown = {

		animationSpeed: 200,
		drilldown: {},
		drilldownSelected: {},
		dril: {},

		init: function(id, title) {
			this.drilldown = $("#"+id);
			this.dril = title;
			this.drilldownSelected = $("#" + this.drilldown.attr('id') + "Selected");
			this.updateSelected();
			this.listeners.all(this);
		},

		listeners: {
			all: function(self) {
				this.lists(self);
				this.selected(self);
			},
			// проверяем нажатие DIV INPUT ALL
			lists: function(self) {
				self.drilldown.find("li > div").click(function(e) {

					if( e.target.localName == "div" )	 {
						self.openItem(e.target);
					}
					if( e.target.localName == "input" && $(e.target).hasClass('all')) {
						self.selectItem(e.target);
					} else if(e.target.localName == "input") {
						self.selectItem(e.target);
					}
				});
				return "List listeners added";
			},
			selected: function(self) {
				self.drilldownSelected.click(function(e) {
					var selected = $(e.target);
					var item = $("#" + selected.attr('data-id'));
					var checkbox = item.find("input:checkbox");

					checkbox.attr("checked", false);

					if ($(self.drilldown.selector + "Selected p[data-id*=-all]").length !== 0) {
						self.updateSelected();
					}

					self.updateSelected();
				});
				return "Selected items listeners added";
			}
		},

		closeLists: function() {
			this.drilldown.find('ul').hide();
		},

		clearActive: function() {
			this.drilldown.find(".active").removeClass("active");
		},

		openItem: function(item) {
			var item = $(item);
			var child = item.next('ul');
			var wasVisible = child.is(':visible');

			this.closeLists();
			item.parents('ul').show();
			if( wasVisible ) {

				child.show().slideUp(this.animationSpeed);
				this.clearActive();

			} else {

				if (item.find(" + .scroll_pane").length == 1) {

					// вызов скрола
					function explode(){
							var scroll_set = {
								verticalDragMaxHeight: 74,
								hijackInternalLinks: true

							};
							var scroll_pane2 = $('.scroll_pane');
							scroll_pane2.jScrollPane(scroll_set);
							var api_scroll = scroll_pane2.data('jsp');
					};

					setTimeout(explode, 200);
				}

				child.slideDown(this.animationSpeed);
				if( item.closest('li').has('ul').length ) {
					this.clearActive();
					item.addClass('active');
				}
			}
		},
		// добавляем клас если был выбран или снят флажок
		selectItem: function(item) {
			var checkbox = $(item);
			var item		 = checkbox.closest('div');
			if( checkbox.is(':checked') && checkbox.is('.all') ) {
				checkbox.closest('ul').find(':input').prop("checked", true);
				checkbox.closest('ul').find('li > div').addClass('selected');
			} else if ( checkbox.is('.all') ) {
				checkbox.closest('ul').find(':input').prop("checked", false);
				checkbox.closest('ul').find('li > div').removeClass('selected');
			}
			if( checkbox.is(':checked') ) {
				item.addClass('selected');
			} else {
				item.removeClass('selected');
				item.closest('ul').find('.all').prop("checked", false);
			}

			this.updateSelected();


		},

		updateSelected: function() {
			var self			= this;
			var checked	 = this.drilldown.find("input:checked");
			var unchecked = this.drilldown.find("input:checkbox:not(:checked)");
			var ollCheked = checked.closest('ul').find('.all');
			var values		= '';

			unchecked.each(function(key, val) {
				$(val).closest('div').removeClass('selected');
				ollCheked.prop("checked", false);
				ollCheked.closest('div').removeClass('selected');
			});
			this.drilldownSelected.empty();
			checked.each(function(key, val) {
				values = values + " " + $(val).closest("div").attr("id");
				var parentDiv = $(val).closest('div');


				var checkText = parentDiv.text(),
					checkAttr = parentDiv.attr('id');

				self.drilldownSelected.append(checkAll(checkText, checkAttr));
			});

			var viborChekDiv = this.drilldown.selector;
			var viborChek = self.drilldownSelected[0].childNodes.length;
			var viborTitle = this.dril;

			this.titleSelect(viborChekDiv, viborChek, viborTitle);

		},

		/* функция изменения тайтла поля */
		titleSelect: function(i, e, b) {

				if (e !== 0) {
					$(i + ' .title_select').text('Выбрано ' + e + 'п.');
					$(i + ' .title_select').addClass('check_values');
				} else {
					$(i + ' .title_select').text(b);
					$(i + ' .title_select').removeClass('check_values');
				}
		},

	};

	function Drilldown( item, title ) {
		function drilldown() {}
		drilldown.prototype = objDrilldown;
		var f = new drilldown();
		f.init( item, title );
		return f;
	}

	function checkAll(checkText, checkAttr){

		if(isFinite(checkAttr)) {
			return $("<p>").text(checkText).attr('data-id', checkAttr )
		}

	}

	if($( '#drill_down' ).length !== 0) {
		var drilldown = new Drilldown("drill_down", "Выберите валюту");
	}
	if($( '#drill_down2' ).length !== 0) {
		var drilldown = new Drilldown("drill_down2", "Выберите валюту");
	}
	if($( '#drill_down3' ).length !== 0) {
		var drilldown = new Drilldown("drill_down3", "Выберите валюту");
	}
	if($( '#drill_down4' ).length !== 0) {
		var drilldown = new Drilldown("drill_down4", "Выберите валюту");
	}
	if($( '#drill_down5' ).length !== 0) {
		var drilldown = new Drilldown("drill_down5", "Отображать все колонки");
	};






	/*
	* 	Drilldown закрытие при новом открытии
	*/
	$(document).click(function(event) {
		if ($(event.target).closest(".drilldown__options-container.drilldown").length) {

			var this_box_drill = $(event.target).closest('.drilldown-box');
			var this_box_id = this_box_drill[0].id;

			$(".title_select.active").each(function(){
				var thisEach = this.closest('.drilldown-box');
				var thisEachId = $(thisEach).attr('id');

				if (thisEachId !== this_box_id) {
					$(this).removeClass('active');
					$(this).closest('li').find('ul').slideUp( 200 );
				}
			});

		} else {
			$(".title_select.active").removeClass('active');
			$(".title_select + ul").slideUp( 200 );
		}
		event.stopPropagation();
	});




	/*
	* page MARKET_PARTNERSKAYA_SCILKA
	*/

	$('#tabl-inp, #tabl-inp2, #tabl-inp3').on('keypress', function (event) {
		var regex = new RegExp("^[0-9]+$");

		var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);

		if (!regex.test(key)) {
			event.preventDefault();
			return false;
		} else {
			var e = $( this );
			ajaxFunk(e);
		}

	});

	function ajaxFunk(e) {
		$(e).keyup(function () {
			var data = e.val();



			// function funcBefore () {
			// 	console.log('start');
			// }
			// function funcSuccess (data) {
			// 	console.log('end');
			// }


			// $.ajax ({
			// 	url: "tabl.json",
			// 	type: "POST",
			// 	data: ({number: 3}),
			// 	dataType: "html",
			// 	beforeSend: funcBefore,
			// 	success: funcSuccess
			// });

		});
	};


	/*
	* page MARKET_SOZDAT_KOMPANIYU
	*/



	// scroll_set таблица
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

	function scrollPaneBoxNotArrows () {

		var scroll_set = {
			verticalDragMaxHeight: 74,
			hijackInternalLinks: true

		};
		var scroll_pane2 = $('.scroll_pane');
		scroll_pane2.jScrollPane(scroll_set);
		var api_scroll = scroll_pane2.data('jsp');
	};

	if($('.scroll_pane').length >= 1) {
		scrollPaneBox ();
	}

	$(".content-p").on('click', 'p',function (event) {
		$(this).addClass('selected');
	});



	$(".btn_js i").on('click', function (event) {

		if($(this).is("#js_right")){
			var closestContainer = $(this).closest('.container-clone'),
				findContentLeft = closestContainer.find('.clone_box_left p.selected'),
				removeContent = findContentLeft.removeClass('selected').remove();

			var findContentRight = closestContainer.find('.clone_box_right .content-p');

			findContentRight.prepend(removeContent);

			$('.scroll_pane').data('jsp').destroy();
			scrollPaneBox ();

		} else {

			var closestContainer = $(this).closest('.container-clone'),
				findContentRight = closestContainer.find('.clone_box_right p.selected'),
				removeContent = findContentRight.removeClass('selected').remove();

			var findContentLeft = closestContainer.find('.clone_box_left .content-p');

			findContentLeft.prepend(removeContent);

			$('.scroll_pane').data('jsp').destroy();
			scrollPaneBox ();
		}
	});



	/*
	* page MARKET_SOZDAT_MEDIA
	*/

	// add banner

	function inputFileImg () {

		var fileInput  = document.querySelector( ".input-file" ),
			button = document.querySelector( ".input-file-trigger" ),
			the_return = document.querySelector(".file-return span");

		button.addEventListener( "click", function( event ) {
			fileInput.focus();
			return false;
		});

		fileInput.addEventListener( "change", function( event ) {

			var name = this.value.split("\\"),
				name2 = name[name.length-1];

			the_return.innerHTML = name2;

			previewFile();
		});


		function previewFile() {
			var preview = document.querySelector('.add-img-input img');
			var file = document.querySelector('.input-file[type=file]').files[0];
			var reader = new FileReader();

			reader.onloadend = function () {
				preview.src = reader.result;
			}

			if (file) {
				reader.readAsDataURL(file);
			} else {
				preview.src = "";
			}
		}

		$(".file-return").on('click', 'i',function (event) {
			var boxP = $(this).closest('p').find('span');
				boxP[0].innerHTML = '';
			fileInput.value = "";
			previewFile();
		});
	}

	if($( '.add-img-input img' ).length != 0) {
		inputFileImg ();
	};



	// add rar

	function inputFileRar () {

		var fileInput  = document.querySelector( ".input-rar" ),
			button = document.querySelector( ".input-rar-trigger" ),
			the_return = document.querySelector(".file-return-rar span");

		button.addEventListener( "click", function( event ) {
			fileInput.focus();
			return false;
		});

		fileInput.addEventListener( "change", function( event ) {

			var name = this.value.split("\\"),
				name2 = name[name.length-1];

			the_return.innerHTML = name2;

		});

		$(".file-return-rar").on('click', 'i',function (event) {
			var boxP = $(this).closest('p').find('span');
				boxP[0].innerHTML = '';
			fileInput.value = "";
		});
	}

	if($( '.input-rar' ).length != 0) {
		inputFileRar ();
	};


	/*
	* SELECT
	*/


	var select2Object = {
		  s_period: "Период"
		, s_valuta: "Валюта"
		, main_criter: "Регистрация с депозитом"
		, add_criter: "Сумма первого депозита"
		, add_calculation: "Выбрать"
		, lang_selec: "Все"
		, site_selec9: false
		, s_selec01: false
		, s_selec02: false
		, s_selec03: false
		, s_selec04: false
		, s_map: false
		, s_apply: false
		, site_selec: "Сайт"
		, s_downl: "Выбрать"
		, site_selec1: "Сайт"
		, site_selec11: "Выберите месяц"
		, site_selec2: "Все"
		, site_selec3: "120х600"
		, site_selec4: "URL 1"
		, site_selec5: "Все"
		, site_selec6: "Все"
		, site_selec7: "Все"
		, site_selec8: "Все"
		, site_selec10: "Все"
		, s_lang: "Язык"
		, s_type: "Выберите тип медиа"
		, s_fim: "Выбрать"
		, negative_commis: "Кампания 1"
		, negative_commis: "Да"
		, accrual_commis: "Доход"
		, sl_accruals: "Cумма первых депозитов"
		, sl_negative: "Нет"
		, sl_smtp: "Basic Authentication"
		, sl_use: "select"
		, sl_status: "Активен"
		, sl_group: "Выбрать"
		, s_commission: "Выбрать"
		, s_affiliates: "Выбрать"
		, s_text: "текст"
	};

	(function(){

		for (var key in select2Object) {

			var key2 = "." + key,
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

	/*
	*  END SELECT
	*/



	/*
	* SCROLL_SET ТАБЛИЦА
	*/


	if($('.scroll_pane-2').length >= 1) {
		scrollPaneBoxNotArrows ();
	}
	if($('.ul-drilldown-scroll').length >= 1) {
		scrollPaneBoxNotArrows ();
	}

	/*
	*  end SCROLL_SET ТАБЛИЦА
	*/


	/*
	* SCROLL_SET ТАБЛИЦА
	*/

	$("#next").click(function(){

		// после проверки
		if (true) {

			$('.box-animation .step_one').addClass('hidebox');

			setTimeout(function(){
				$('.box-animation .step_one').slideUp();
				$('.box-animation .step_two').slideDown();
			}, 1000);
		}
	});

	/*
	*  end SCROLL_SET ТАБЛИЦА
	*/



	/*
	*  CREATE_NEW_PARTNER_GROUP
	*/
	var checkboxes = $('tbody  input[type="checkbox"]'),
		actions = $('thead  input[type="checkbox"]'),
		addGroup = $('#add_group'),
		removeGroup = $('#remove_group'),
		saveGroup = $('#save_group');

	// работа с чекбоксом (выделение всего)

	actions.on('click', function(e) {

		var $this = $(this),
			thisCheckBoxes = $this.closest('table').find('tbody  input[type="checkbox"]');

		if($this.is(':checked')){
			thisCheckBoxes.prop('checked', true);
		} else {
			thisCheckBoxes.removeAttr('checked');
		}

	});
	checkboxes.on('click', function(e) {

		var $this = $(this),
			thisActions = $this.closest('table').find('thead  input[type="checkbox"]');
		thisActions.removeAttr('checked');

	});
	// КОНЕЦ работа с чекбоксом (выделение всего)

	addGroup.on('click', function(e) {
		var tableEq0 = $('table').eq(0),
			tableEq1 = $('table').eq(1),
			tableSelect = tableEq0.find('tbody input');

		tableSelect.each(function(index) {

			if ($(this).is(':checked')) {
				var removeContent = $(this).closest('tr').remove();
				tableEq1.find('tbody').prepend(removeContent);
			}

		});

		actions.removeAttr('checked');
	});
	removeGroup.on('click', function(e) {
		var tableEq0 = $('table').eq(0),
			tableEq1 = $('table').eq(1),
			tableSelect = tableEq1.find('tbody input');

		tableSelect.each(function(index) {

			if ($(this).is(':checked')) {
				var removeContent = $(this).closest('tr').remove();
				tableEq0.find('tbody').prepend(removeContent);
			}

		});
	});
	/*
	*  end CREATE_NEW_PARTNER_GROUP
	*/

	var chartVar = {
		labels: ["06.08.15","07.08.15","08.08.15","09.08.15","10.08.15","11.08.15","12.08.15","13.08.15","14.08.15","14.08.15"],
		dataDays: [5, 5, 7, 5, 10, 15, 10, 7, 10, 15],
		dataCountry: [40, 20, 15, 30, 5, 10, 15],
		dataDevice: [10, 5]
	};

	function ChartFunc () {

		var lineChartData = {
			labels : chartVar.labels,
			datasets : [
				{
					label: "Конверсия по дням",
					fillColor : "rgba(220,220,220,0)",
					strokeColor : "rgba(9,95,161,1)", // цвет линии
					pointColor : "rgba(9,95,161,1)", // цвет кружочка
					pointStrokeColor : "#d1ebff", // цвет вокруг круга
					data: chartVar.dataDays
				}
			]
		}

		var lineChartData2 = {
			labels : ["Россия","Турция","Франция","Украина","Италия","Германия","Польша"],
			datasets : [
				{
					label: "Конверсия по странам",
					fillColor : "#095fa1",
					strokeColor : "rgba(220,220,220,0)",
					highlightFill: "#287ab9",
					highlightStroke: "rgba(220,220,220,0)",
					data: chartVar.dataCountry
				}
			]
		}

		var lineChartData3 = {
			labels : ["Desktop and Mobile"],
			datasets : [
				{
					label: "Конверсия по устройствам",
					fillColor : "#095fa1",
					strokeColor : "rgba(220,220,220,0)",
					highlightFill: "#287ab9",
					highlightStroke: "rgba(220,220,220,0)",
					data: [chartVar.dataDevice[0]]
				},
				{
					label: "Конверсия по устройствам",
					fillColor : "#ff8400",
					strokeColor : "rgba(220,220,220,0)",
					highlightFill: "#ff9320",
					highlightStroke: "rgba(220,220,220,0)",
					data: [chartVar.dataDevice[1]]
				}

			]
		}

		window.onload = function(){

			var ctx = document.getElementById("canvas").getContext("2d");
			var ctx2 = document.getElementById("canvas2").getContext("2d");
			var ctx3 = document.getElementById("canvas3").getContext("2d");

			window.myLine = new Chart(ctx).Line(lineChartData, {
				pointDotStrokeWidth : 3,// вокруг круга
				pointDotRadius : 5,// кружок
				scaleFontColor : "#57626a", // цвет подписей
				scaleLineColor : "#d3d1d1", // цвет линий главных
				scaleGridLineColor : "#e6e6e6", // линии внутри
				scaleStepWidth : 5, // шаг ячеек
				responsive : true,
				tooltipTemplate: "<%= value %> " + "%",

				// подсказка
				tooltipFillColor: "#095fa1",
				tooltipFontFamily: "'Tahoma', sans-serif",
				tooltipFontSize: 14,
				tooltipFontStyle: "normal",
				tooltipYPadding: 7,
				tooltipXPadding: 13,
				tooltipCaretSize: 11,
				tooltipCornerRadius: 3,
				tooltipXOffset: 100,

				scaleFontSize: 14,
				bezierCurve : false,
				scaleFontFamily: "'Tahoma', sans-serif"
			});
			window.myLine = new Chart(ctx2).Bar(lineChartData2, {
				scaleFontColor : "#57626a", // цвет подписей
				scaleLineColor : "#d3d1d1", // цвет линий главных
				scaleGridLineColor : "#e6e6e6", // линии внутри
				responsive : true,
				tooltipTemplate: "<%= value %> " + "%",

				scaleShowVerticalLines: false,
				barValueSpacing : 30,
				// подсказка
				tooltipFillColor: "#095fa1",
				tooltipFontFamily: "'Tahoma', sans-serif",
				tooltipFontSize: 14,
				tooltipFontStyle: "normal",
				tooltipYPadding: 7,
				tooltipXPadding: 13,
				tooltipCaretSize: 11,
				tooltipCornerRadius: 3,

				scaleFontSize: 14,
				scaleFontFamily: "'Tahoma', sans-serif"
			});
			window.myLine = new Chart(ctx3).Bar(lineChartData3, {
				scaleFontColor : "#57626a", // цвет подписей
				scaleLineColor : "#d3d1d1", // цвет линий главных
				scaleGridLineColor : "#e6e6e6", // линии внутри
				// tooltipTemplate: "<%= value %> " + "%",
				multiTooltipTemplate: "<%= value %>" + "%",
				 // tooltipTemplate: "<%=label%>" + "fdhg" + "<%= value %>",

				scaleShowVerticalLines: false,
				barValueSpacing : 30,
				// подсказка
				tooltipFillColor: "#095fa1",
				tooltipFontFamily: "'Tahoma', sans-serif",
				tooltipFontSize: 14,
				tooltipFontStyle: "normal",
				scaleFontStyle: "normal",
				tooltipYPadding: 7,
				tooltipXPadding: 13,
				tooltipCaretSize: 11,
				tooltipCornerRadius: 3,

				scaleFontSize: 14,
				scaleFontFamily: "'Tahoma', sans-serif",
				barDatasetSpacing : 80
			});
		};
	}





	function ChartFuncAdmin () {
		var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

		var lineChartData = {
			labels : ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0)",
					strokeColor : "rgba(9,95,161,1)", // цвет линии
					pointColor : "rgba(9,95,161,1)", // цвет кружочка
					pointStrokeColor : "#d1ebff", // цвет вокруг круга
					data: [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				},
				{
					fillColor : "rgba(220,220,220,0)",
					strokeColor : "#b53032", // цвет линии
					pointColor : "#b53032", // цвет кружочка
					pointStrokeColor : "#ffd6d7", // цвет вокруг круга
					data: [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				},
				{
					fillColor : "rgba(220,220,220,0)",
					strokeColor : "#8fac44", // цвет линии
					pointColor : "#8fac44", // цвет кружочка
					pointStrokeColor : "#f8ffe6", // цвет вокруг круга
					data: [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				},
				{
					fillColor : "rgba(220,220,220,0)",
					strokeColor : "#6b4d97", // цвет линии
					pointColor : "#6b4d97", // цвет кружочка
					pointStrokeColor : "#f0e6ff", // цвет вокруг круга
					data: [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				},
				{
					fillColor : "rgba(220,220,220,0)",
					strokeColor : "#ff8400", // цвет линии
					pointColor : "#ff8400", // цвет кружочка
					pointStrokeColor : "#ffebd5", // цвет вокруг круга
					data: [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				}
			]
		}

		window.onload = function(){

			var ctx = document.getElementById("canvas_graph").getContext("2d");

			window.myLine = new Chart(ctx).Line(lineChartData, {
				pointDotStrokeWidth : 3,// вокруг круга
				pointDotRadius : 5,// кружок
				scaleFontColor : "#57626a", // цвет подписей
				scaleLineColor : "#d3d1d1", // цвет линий главных
				scaleGridLineColor : "#e6e6e6", // линии внутри
				scaleStepWidth : 5, // шаг ячеек
				tooltipTemplate: "<%= value %> " + "%",

				// подсказка
				tooltipFontFamily: "'Tahoma', sans-serif",
				tooltipFontSize: 14,
				tooltipFontStyle: "normal",
				tooltipYPadding: 7,
				tooltipXPadding: 13,
				tooltipCaretSize: 11,
				tooltipCornerRadius: 3,
				tooltipXOffset: 100,

				scaleFontSize: 14,
				scaleFontFamily: "'Tahoma', sans-serif",

				tooltipXOffset: 5,
				scaleShowLabels: false,
				bezierCurve : false
			});
		};
	}


	var chartVar_5 = {
		dataCountry: [40, 20, 15, 30, 5, 10, 15],
		// dataCountry: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
	};

	function ChartFunc_5 () {

		var lineChartData2 = {
			labels : ["1 мес","2 мес","3 мес","4 мес","5 мес","6 мес","7 мес"],
			// labels : ["1 месяц", "2 месяц", "3 месяц", "4 месяц", "5 месяц", "6 месяц", "7 месяц", "8 месяц", "9 месяц", "10 месяц", "11 месяц", "12 месяц", "13 месяц", "14 месяц", "15 месяц", "16 месяц", "17 месяц", "18 месяц", "19 месяц", "20 месяц", "21 месяц", "22 месяц", "23 месяц", "24 месяц", "25 месяц", "26 месяц", "27 месяц", "28 месяц", "29 месяц", "30 месяц", "31 месяц", "32 месяц", "33 месяц", "34 месяц", "35 месяц", "36 месяц"],
			datasets : [
				{
					label: "Конверсия по странам",
					fillColor : "#095fa1",
					strokeColor : "rgba(220,220,220,0)",
					highlightFill: "#287ab9",
					highlightStroke: "rgba(220,220,220,0)",
					data: chartVar_5.dataCountry
				}
			]
		}

		window.onload = function(){

			var ctx2 = document.getElementById("canvas_gr_5").getContext("2d");

			window.myLine = new Chart(ctx2).Bar(lineChartData2, {
				scaleFontColor : "#57626a", // цвет подписей
				scaleLineColor : "#d3d1d1", // цвет линий главных
				scaleGridLineColor : "#e6e6e6", // линии внутри
				responsive : true,
				tooltipTemplate: "<%= value %> " + "%",

				scaleShowVerticalLines: false,
				barValueSpacing : 30,
				// подсказка
				tooltipFillColor: "#095fa1",
				tooltipFontFamily: "'Tahoma', sans-serif",
				tooltipFontSize: 14,
				tooltipFontStyle: "normal",
				tooltipYPadding: 7,
				tooltipXPadding: 13,
				tooltipCaretSize: 11,
				tooltipCornerRadius: 3,

				scaleFontSize: 14,
				scaleFontFamily: "'Tahoma', sans-serif"
			});

		};
	}

	if($('#canvas').length >= 1 && $('#canvas2').length >= 1 && $('#canvas3').length >= 1) {
		ChartFunc ();
	}

	if($('#canvas_graph').length >= 1) {
		ChartFuncAdmin ();
	}

	if($('#canvas_gr_5').length >= 1) {
		ChartFunc_5 ();
	}

	$(".add_cpa").on('click', function (e) {
		$('.cpa-box').removeClass('hidden-box');
	});
	$(".add_referral").on('click', function (e) {
		$('.refferal-box').removeClass('hidden-box');
	});


	/*
	*  POPUP
	*/
	//open
	$("body").on('click', '[class*=code]', function (e) {

		var classToId = $(this).attr('class'),
			re = /code_tr*(?:\d*\.)?\d+/,
			classToIdRe = re.exec(classToId)[0];

		$('.container').addClass('blur');
		$('.box-conteiner').addClass('visible');
		$('.box_code').addClass('visible');
		$('#' + classToIdRe).css({display: 'block'});

	});

	//close
	$('.box-conteiner').on('click', function(event){

		event.stopPropagation();

		var targetClik = $(event.target);
		if( $(event.target).is('.box-conteiner')) {
			removePopUp ();
		}

		if( $(event.target).is('.btn-close')) {
			removePopUp ();
		}
	});

	$('body').keyup(function(event){
		if(event.which=='27'){
			removePopUp ();
		}
	});

	function removePopUp () {
		$('.container').removeClass('blur');
		$('.box-conteiner').removeClass('visible');
		$('.box_code').removeClass('visible');

		setTimeout(function(){
			$('.box_code > div').css({display: 'none'});
		}, 300);
	}





    /*
     * РЕДАКТИРОВАНИЕ
     *
     */

	$('.info-partnera').on('click', function(e){

		var targetClass = e.target.className;

		if (targetClass === 'edit') {

			var editorBtn = $('.' + targetClass)[0],
				element = $( e.target ).closest( "li" ).find('.editor')[0];

				if (editorBtn) {
					if (element.isContentEditable) { // close
						element.contentEditable = 'false';
						editorClickOff();
						element.classList.remove("focus");

					} else {
						element.contentEditable = 'true';
						editorClick();
						element.classList.add("focus");
					}
				};

			function editorClick(){
					var e = element;
					e.focus();

			    if (window.getSelection) {
			        var s = window.getSelection();
			        if (s.setBaseAndExtent) {
			            s.setBaseAndExtent(e, 0, e, e.innerText.length - 0);
			        } else {
			            var r = document.createRange();
			            r.selectNodeContents(e);
			            s.removeAllRanges();
			            s.addRange(r);
			        }
			    } else if (document.getSelection) {
			        var s = document.getSelection();
			        var r = document.createRange();
			        r.selectNodeContents(e);
			        s.removeAllRanges();
			        s.addRange(r);
			    } else if (document.selection) {
			        var r = document.body.createTextRange();
			        r.moveToElementText(e);
			        r.select();
			    }

			};

			function editorClickOff(){
		        var s = window.getSelection();
						s.removeAllRanges();
			};
		}
	});

	// close
	$(function(){
	  $(document).click(function(e) {
	    if ($(event.target).closest(".edit").length || $(event.target).closest(".editor").length) return;

		var editorClose = $('.editor');

		editorClose.each(function(index, el) {
			el.isContentEditable ? el.contentEditable = 'false' : false;
		});
	    event.stopPropagation();
	  });
	});




	/*
	 * CHECKBOX-SHOWBOX
	 * revenue_share.html
	 */

	$('.check-showbox input').on('change', function(e){
		var thisShowbox = $(this.closest('.j_container')).find('.showbox');
		thisShowbox.toggle("slow");
	});

	/*
	 * SELECT-SHOW
	 * edit_media.html market_sozdat_media.html
	 */
	$(".type_media").change(function () {
		// var str = "";

		if (this.value === 'html') {
			$('.set-input-media .box-textarea').show("slow");
		} else {
			$('.set-input-media .box-textarea').hide("slow");
		}
		// $( "select option:selected" ).each(function() {
		// 	str += $( this ).text() + " ";
		// });
	});
	  // .change();

	// new_delivery_(step_2).html
	$(".js_partn").change(function () {
		// var str = "";

		if (this.value === 'check') {
			$('.new_delivery').slideDown();
		} else {
			$('.new_delivery').slideUp();
		}
	});

	$("#chollpart").change(function () {

		if (this.checked) {
			$('.table-invoices').slideDown();
		} else {
			$('.table-invoices').slideUp();
		}
	});

	/*
	 * DELET TABLE
	 * table-partsilk
	 */

	$('.table-partsilk td').on('click', 'i', function(e) {

		$(this).closest('tr').hide(500, function() {
			$(this).remove();
		});
	});






	$('.btn-newlink, .j-generate_link .btn').on('click', function(e){
		$(this).closest('.j_box').find('.none-block').slideDown(400);
		$(this).closest('.j_box').find(' + .none-block').slideDown(400);
	});


















	// cpa

	$("#check-cpashow").change(function () {

		if (this.checked) {
			$('.cpa-hide-box').slideDown();
		} else {
			$('.cpa-hide-box').slideUp();
		}
	});


	var id_addNum = 0;
	//поле по клику
	$('#js_btn_add').click(function(){

		var parentBox = $(this).closest('.box-addselect').find('.addbox');

		id_addNum++;

		parentBox.append(
			'<div class="select-box max">'
				+'<label for="id_add_cr0'+ id_addNum +'">Дополнительный критерий</label>'
				+'<select id="id_add_cr0'+ id_addNum +'" class="add_criter">'
					+'<option></option>'
					+'<option>пункт1</option>'
					+'<option>пункт2</option>'
				+'</select>'
			+'</div>'

			+'<div class="input-box min">'
				+'<label for="min-m0'+ id_addNum +'">Минимум/месяц</label>'
				+'<input id="min-m0'+ id_addNum +'" type="text" placeholder="25"/>'
			+'</div>'
		);

		new_idNum = '#id_add_cr0' + id_addNum;

		$(new_idNum).select2({
			placeholder: 'Сумма первого депозита',
			minimumResultsForSearch: Infinity
		});

	});

});
