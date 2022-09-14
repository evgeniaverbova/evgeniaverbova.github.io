jQuery.noConflict();
jQuery(function($) {


    /*	SCROLL_SET
     *
     *
     *
     */

	// scroll_set2 таблица
	var scroll_set2 = {
		verticalDragMaxHeight: 10,
		hijackInternalLinks: true,
		showArrows: true
	};
	var scroll_pane2 = $('.Scrol2');
	scroll_pane2.jScrollPane(scroll_set2);
	var api_scroll = scroll_pane2.data('jsp');

	// scroll_set3 таблица
	var scroll_set3 = {
		hijackInternalLinks: true,
		showArrows: false,
		verticalDragMaxHeight: 10
	};
	var scroll_pane3 = $('.Scrol3');
	scroll_pane3.jScrollPane(scroll_set3);
	var api_scroll = scroll_pane3.data('jsp');

	// ScrolTab таблица
	var scroll_set4 = {
		hijackInternalLinks: true,
		showArrows: false,
		verticalDragMaxHeight: 10,
		autoReinitialise: true
	};
	var scroll_pane4 = $('.ScrolTab');
	scroll_pane4.jScrollPane(scroll_set4);
	var api_scroll = scroll_pane4.data('jsp');


	// scroll_set3 таблица
	var auto_scrolTab = function(e) {

		var play = e;
		if (play == true){

			if ($('.Scrol2').length >= 1) {
				$('.Scrol2').data('jsp').destroy();
			} else if ($('.ScrolPopup').length >= 1) {
				$('.ScrolPopup').data('jsp').destroy();
			} else if ($('.ScrolTab').length >= 1) {
				$('.ScrolTab').data('jsp').destroy();
			}

			// ScrolTab таблица
			var scroll_set4 = {
				hijackInternalLinks: true,
				showArrows: false,
				verticalDragMaxHeight: 10,
				autoReinitialise: true
			};
			var scroll_pane4 = $('.ScrolTab');
			scroll_pane4.jScrollPane(scroll_set4);
			var api_scroll = scroll_pane4.data('jsp');

			// scroll_set2 таблица

			var scroll_set2 = {
				hijackInternalLinks: true,
				showArrows: false,
				verticalDragMaxHeight: 10,
				autoReinitialise: true
			};
			var scroll_pane2 = $('.Scrol2');
			scroll_pane2.jScrollPane(scroll_set2);
			var api_scroll = scroll_pane2.data('jsp');


			// scroll_set9 таблица
			var scroll_set9 = {
				hijackInternalLinks: true,
				showArrows: false,
				verticalDragMaxHeight: 10
			};
			var scroll_pane9 = $('.ScrolPopup');
			scroll_pane9.jScrollPane(scroll_set9);
			var api_scroll = scroll_pane9.data('jsp');

		}


	};

	auto_scrolTab(true);


	//POPUP
    /*
     *
     *
     */
	$('.country_uk.popup1').click(function(){

	   $.arcticmodal({
	    type: 'ajax',
	    overlay: {css: {backgroundColor: '#000',opacity: .7}},
	    url: 'http://'+ location.host +'/assets/popup.php',
		afterLoadingOnShow: function() {

			// scroll_set3 таблица
			var scroll_set3 = {
				hijackInternalLinks: true,
				showArrows: false,
				verticalDragMaxHeight: 10
			};
			var scroll_pane3 = $('.Scrol3');
			scroll_pane3.jScrollPane(scroll_set3);
			var api_scroll = scroll_pane3.data('jsp');

			// таймер
	        $('.countdown2').downCount({
	            date: '11/10/2019 15:00:00',
	            offset: +2
	        }, function () {

	        });

			// scroll_set3 таблица
			var scroll_set6 = {
				hijackInternalLinks: true,
				showArrows: false,
				verticalDragMaxHeight: 10
			};
			var scroll_pane6 = $('.box-skrollP');
			scroll_pane6.jScrollPane(scroll_set6);
			var api_scroll = scroll_pane6.data('jsp');


		},
	    ajax: {
	     type: 'GET',
	     cache: false,
	     success: function(data, el, responce) {
	      var h = $('<div class="newbox-modal min_pop">' +
	        '<div class="text_mod"></div>' +
	        '</div>');
	      $('div.text_mod', h).html(responce);
	      data.body.html(h);
	    }}
	   });

	});


	//popUp 2
	$('.country_es.popup1').click(function(){

	   $.arcticmodal({
	    type: 'ajax',
	    overlay: {css: {backgroundColor: '#000',opacity: .7}},
	    url: 'http://'+ location.host +'/assets/popup2.php',
	    ajax: {
	     type: 'GET',
	     cache: false,
	     success: function(data, el, responce) {
	      var h = $('<div class="newbox-modal min_pop">' +
	        '<div class="text_mod optionSize"></div>' +
	        '</div>');
	      $('div.text_mod', h).html(responce);
	      data.body.html(h);
	    }}
	   });

	});


	//popUp 3
	$('.country_ua.popup1').click(function(){

	   $.arcticmodal({
	    type: 'ajax',
	    overlay: {css: {backgroundColor: '#000',opacity: .7}},
	    url: 'http://'+ location.host +'/assets/popup3.php',
	    ajax: {
	     type: 'GET',
	     cache: false,
	     success: function(data, el, responce) {
	      var h = $('<div class="newbox-modal min_pop">' +
	        '<div class="text_mod optionSize2"></div>' +
	        '</div>');
	      $('div.text_mod', h).html(responce);
	      data.body.html(h);
	    }}
	   });

	});


	//popUp 9
	$('.country_de.popup1').click(function(){

	   $.arcticmodal({
	    type: 'ajax',
	    overlay: {css: {backgroundColor: '#000',opacity: .7}},
	    url: 'http://'+ location.host +'/assets/popup4.php',
		afterLoadingOnShow: function() {

			// scroll_set9 таблица
			var scroll_set9 = {
				hijackInternalLinks: true,
				showArrows: false,
				verticalDragMaxHeight: 10
			};
			var scroll_pane9 = $('.ScrolPopup');
			scroll_pane9.jScrollPane(scroll_set9);
			var api_scroll = scroll_pane9.data('jsp');

			auto_scrolTab(true);

			auto_tablSorter();



		},
	    ajax: {
	     type: 'GET',
	     cache: false,
	     success: function(data, el, responce) {
	      var h = $('<div class="newbox-modal min_pop">' +
	        '<div class="text_mod optionSize3"></div>' +
	        '</div>');
	      $('div.text_mod', h).html(responce);
	      data.body.html(h);
	    }}
	   });

	});


	//popUp 10
	$('.country_fr.popup1').click(function(){

	   $.arcticmodal({
	    type: 'ajax',
	    overlay: {css: {backgroundColor: '#000',opacity: .7}},
	    url: 'http://'+ location.host +'/assets/popup5.php',
		afterLoadingOnShow: function() {

			// scroll_set9 таблица
			var scroll_set11 = {
				hijackInternalLinks: true,
				showArrows: false,
				verticalDragMaxHeight: 10
			};
			var scroll_pane11 = $('.Scrol2');
			scroll_pane11.jScrollPane(scroll_set11);
			var api_scroll = scroll_pane11.data('jsp');

			auto_scrolTab(true);

		},
	    ajax: {
	     type: 'GET',
	     cache: false,
	     success: function(data, el, responce) {
	      var h = $('<div class="newbox-modal min_pop">' +
	        '<div class="text_mod optionSize5"></div>' +
	        '</div>');
	      $('div.text_mod', h).html(responce);
	      data.body.html(h);
	    }}
	   });

	});



	// open fixed window
    /*
     *
     *
     */
	function openWindow() {
        var curr_browser = navigator.appName;
        if (curr_browser == "Microsoft Internet Explorer") {
            window.opener = self;
        }
        window.open('http://footfantasy.seocomp.net/topLine-newWind.php', 'null', 'width=680, height=540,status=no');
    }



	$('.country_eu.popup1').click(function(){
		openWindow();
	});

	// таймер
    /*
     *
     *
     */
    $('.countdown').downCount({
        date: '12/03/2019 20:00:00',
        offset: +2
    }, function () {

    });


    //select
    /*
     *
     *
     */
	$('.moneySelect').select2({
		placeholder: "От",
		minimumResultsForSearch: Infinity
	});

	$('.moneySelect2').select2({
		placeholder: "До",
		minimumResultsForSearch: Infinity
	});


	$('.all-matches').select2({
		minimumResultsForSearch: Infinity
	});

	$('.all-players').select2({
		minimumResultsForSearch: Infinity
	});




	//drop-down
    /*
     *
     *
     */
	$('.drop-down-line').click(function(){
		$(this).parent('.drop-down').find('.drop-down-box').toggleClass('display');
		$(this).toggleClass('dsnone');
	});

	$('.drop-down-line2').click(function(){
		$(this).parent('.drop-down-box').toggleClass('display');
		$(this).parent('.drop-down-box').parent('.drop-down').find('.drop-down-line').removeClass('dsnone');
	});


	// редактирование
    /*
     *
     *
     */
	var editorBtn = document.getElementById('editorBtn'),
		element = document.getElementById('editor');

		if (editorBtn) {

			editorBtn.addEventListener('click', function(e) {
				e.preventDefault();

				if (element.isContentEditable) {
					element.contentEditable = 'false';
					editorClickOff();
					element.classList.remove("focus");

				} else {
					element.contentEditable = 'true';
					editorClick();
					element.classList.add("focus");
				}
		});
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







	// $('.table-hover')
    /*
     *	добавляем класс table-hover для выделения блока 5 секунд
     *
     */
	var methodObj = ($('.table-hover') ? true : false);

	if (methodObj) {
		setTimeout(function(){
			$('.table-hover').animate({boxShadow: '0px 0px 0px 5px rgba(255,192,19,0)'}, 2000 );
		}, 3000);
	};






	// ФИЛЬТР -> ВКЛАДКИ + РЕАКЦИЯ НА SELECT
    /*
     *	click Li
     *	ListFilter('контейнер с вариантами выбора', 'контейнер с результатом', Булев-тру для перезапуска скрола, получает 0 или val измененного селекта);
		f,b - не обязательные
		e,s - не обязательные
     *	если есть параметр ВСЕ добавляем класс all
     *	data-block - параметр поиска
     *	data-nav - результат поиска
     */


    ;function ListFilter (f,b,e,s) {
      var fL = f +' li',
        check = $(f).find('.active');

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
		  auto_scrolTab(e);

        } else if ($(this).is('.all')==true) {
          activeItem(fL,this);
          $(b).find('[data-block]').show();

          auto_scrolTab(e);

        }

      });

      function optionSelected(val, y) {

      	if (!(val == 0)) {

	      	if (y) {
				$(b).find('[data-block]').not('[data-select="'+ val +'"]').hide();
				auto_scrolTab(true);
	      	} else {
				$(b).find('[data-block="'+ $(fL + '.active').data('nav') +'"]').not('[data-select="'+ s +'"]').hide();
				auto_scrolTab(true);
	      	}
      	} else {
			$(b).find('[data-block="'+ $(fL + '.active').data('nav') +'"]').show();
			auto_scrolTab(true);
      	}


      }

       if (check.length >= 1 && check.is('.all')) {
        $(b).find('[data-block]').show();

		if(!(s == undefined)) {
	        optionSelected(s, true);
		}

      } else if (check.length >= 1) {
        $(b).find('[data-block]').not('[data-block="'+ $(fL + '.active').data('nav') +'"]').hide();
        $(b).find('[data-block="'+ $(fL + '.active').data('nav') +'"]').show();

		if(!(s == undefined)) {
	        optionSelected(s, false);
		}

      }


    };

    ListFilter('.TabLinks', '.TabBlocks', true);
	ListFilter('.TabLinks_popup', '.ScrolTab_boxpopup');
//	ListFilter('.field-options', '.foot-field.boxs-persona-min');





	// ФИЛЬТР -> ВКЛАДКИ
    /*
     *	click Li
     *	ListFilter('контейнер с вариантами выбора', 'контейнер с результатом');
     *
     *	data-block - параметр поиска
     *	data-nav - результат поиск
     *
     *
     */


    ;function ListField (f,b) {
      var fL = f +' li',
        check = $(f).find('.active');

      $(document).on('click', fL ,function(){
        // изменить active
        function activeItem(a,c) {
          $(a).removeClass('active');
          $(c).addClass('active');
        };

        if($(this).is('.active')==false){
          $(b).find('[data-block="'+ $(f).find('.active').data('nav')+'"]').css({"opacity": "0", "z-index": "-20"});
          $(b).find('[data-block="'+ $(this).data('nav') +'"]').css({"opacity": "1", "z-index": "auto"});
          activeItem(fL,this);
        }

      });

       if (check.length >= 1) {
        $(b).find('[data-block="'+ $(fL + '.active').data('nav') +'"]').css({"opacity": "1", "z-index": "auto"});

      }


    };

	ListField('.field-options', '.foot-field.boxs-persona-min');







	// сортировка таблицы + ФИЛЬТР
    /*
     *
     *	data-type - параметр поиска {
			competition - по алфавиту
			price && prize - если имеет символы кроме числа (приводим к числу)
			participants - 8/20 удаляем слеш
			start - 12:20:01 удаляем слеш :
	     }
     *
     */

	ListFilter('.myTable-nav', '#myTable-item', true);


	function auto_tablSorter () {


		var table = document.getElementById('tablefilter');
		var tbody = document.querySelector('.box_sortjs');


		if (!(table === null) && !(tbody === null)) {


			table.onclick = function(e) {



			    if (e.target.hasAttribute('data-type') || e.target.parentElement.hasAttribute('data-type')) {

			      	if (e.target.hasAttribute('data-type') === true) {
			      		sortByField(e.target);
			      	} else {
			      		sortByField(e.target.parentElement);
			      	}
			    }
			}

			function sortByField(field) {

			    var index = $("#myTable-sorter p").index(field),
			        orderAbc = field.className,
			        data_type = field.getAttribute('data-type'),
			        rows = [];


			    // function работы с класами
			    function order(e) {
			        $(table).find('.active_cba').removeClass('active_cba');
			        $(table).find('.active_abc').removeClass('active_abc');
			        $(field).addClass(e);
			    };

			    // for создание объекта
			    for (var i = 0; i < tbody.children.length; i++) {

			        var elem2 = tbody.children[i];
			        var elem = elem2.children[0];

			        if (data_type == 'competition' || data_type == 'price' || data_type == 'prize') {
			            var notnan = parseInt(elem.children[index].innerHTML, 10),
			                itIsNan = elem.children[index].innerHTML;

			            rows.push({
			                value: isNaN(notnan) ? itIsNan : notnan,
			                elem: elem2
			            });

			        } else if (data_type == 'participants' || data_type == 'start') {
			            var symbolEnd = elem.children[index].innerHTML,
			                notsSlash = symbolEnd.replace("/", ""),
			                notColon = symbolEnd.replace(/:/g, "");


			            rows.push({
			                value: symbolEnd.indexOf('/') == 1 ? notsSlash : notColon,
			                elem: elem2
			            });
			        }
			    }



			    // сортировка
			    if (orderAbc === '' || orderAbc === 'active_cba') {

			        order('active_abc');

			        if (data_type == 'competition') {

			            rows.sort(function(a, b) {
			                return a.value > b.value ? 1 : -1;
			            });

			        } else {

			            rows.sort(function(a, b) {
			                return a.value - b.value;
			            });
			        }

			    } else {

			        order('active_cba');

			        if (data_type == 'competition') {
			            rows.sort(function(b, a) {
			                return a.value > b.value ? 1 : -1;
			            });
			        } else {
			            rows.sort(function(b, a) {
			                return a.value - b.value;
			            });
			        }
			    }

			    for (var i = 0; i < rows.length; i++) {
			        tbody.appendChild(rows[i].elem);
			    }
			}
		}

	}




	auto_tablSorter(); // вызов сортировки таблицы



	// сортировка таблицы  БЕЗ ФИЛЬТРА
    /*
     *
     *	data-type - параметр поиска {
			competition - по алфавиту
			price && prize - если имеет символы кроме числа (приводим к числу)
			participants - 8/20 удаляем слеш
			start - 12:20:01 удаляем слеш :
	     }
     *
     */

	function auto_tablSorterWithout (itemId, box) {

		var table = document.querySelector(itemId);
		var tbody = document.querySelector(box);

		if (!(table === null) && !(tbody === null)) {


			table.onclick = function(e) {



			    if (e.target.hasAttribute('data-type') || e.target.parentElement.hasAttribute('data-type')) {

			      	if (e.target.hasAttribute('data-type') === true) {
			      		sortByField(e.target);
			      	} else {
			      		sortByField(e.target.parentElement);
			      	}
			    }
			}

			function sortByField(field) {

			    var index = $(itemId + " p").index(field),
			        orderAbc = field.className,
			        data_type = field.getAttribute('data-type'),
			        rows = [];

			    // function работы с класами
			    function order(e) {
			        $(table).find('.active_cba').removeClass('active_cba');
			        $(table).find('.active_abc').removeClass('active_abc');
			        $(field).addClass(e);
			    };

			    // for создание объекта
			    for (var i = 0; i < tbody.children.length; i++) {

			        var elem2 = tbody.children[i], //получаю все поле
			            elem = elem2.children[0], //получаю ячейку
			            elemLink = elem.children[0]; //получаю ячейку если в ней ссылка



			        if (data_type == 'competition' || data_type == 'price' || data_type == 'prize') {


			            var notnan = parseInt(elem2.children[index].innerHTML, 10),
			                itIsNan;

			            data_type == 'competition' ? itIsNan = elemLink.innerHTML : itIsNan = ' ';

			            rows.push({
			                value: isNaN(notnan) ? itIsNan : notnan,
			                elem: elem2
			            });

			        } else if (data_type == 'participants' || data_type == 'start') {
			            var symbolEnd = elem2.children[index].innerHTML,
			                notsSlash = symbolEnd.replace("/", ""),
			                notColon = symbolEnd.replace(/:/g, "");


			            rows.push({
			                value: symbolEnd.indexOf('/') == 1 ? notsSlash : notColon,
			                elem: elem2
			            });
			        }

			    }

			    // сортировка
			    if (orderAbc === '' || orderAbc === 'active_cba') {

			        order('active_abc');

			        if (data_type == 'competition') {

			            rows.sort(function(a, b) {
			                return a.value > b.value ? 1 : -1;
			            });


			        } else {

			            rows.sort(function(a, b) {
			                return a.value - b.value;
			            });
			        }

			    } else {

			        order('active_cba');

			        if (data_type == 'competition') {
			            rows.sort(function(b, a) {
			                return a.value > b.value ? 1 : -1;
			            });
			        } else {
			            rows.sort(function(b, a) {
			                return a.value - b.value;
			            });
			        }
			    }

			    for (var i = 0; i < rows.length; i++) {
			        tbody.appendChild(rows[i].elem);
			    }
			}
		}
	}




	new auto_tablSorterWithout('.match-table-opening #myTable-sorter', '.match-table-opening .js_item_opening');
	new auto_tablSorterWithout('.match-table-closing #myTable-sorter2', '.match-table-closing .js_item_closing');



	// ListFilter('.match-table-opening #myTable-sorter', '#myTable-item');
	// ListFilter('match-table-closing #myTable-sorter', '#myTable-item', true);



    /*	SELECT
     *
     *	вкладка 'ВСЕ МАТЧИ' должна иметь КЛАСС ALL
     *	value - параметр поиска
     *	data-select - результат поиска
     */

	$( "select.all-matches" ).change(function() {
			var str,
				all = $(this).find('option:selected').is('.all');

			all == true ? str = 0 : str = $(this).find('option:selected').val();

			$('#search').val('');

			ListFilter('.TabLinks', '.TabBlocks', true, str);
	});



    /*	SEARCH
     *
     *
     *
     *
     */
	$('#search').bind("change keyup search", function() {

		var visibleLi = $('.Tabrow');
		var searchWord = $(this).val();

		if (searchWord.length == 0) { // ничего не введенно

		 ListFilter('.TabLinks', '.TabBlocks', true);
		 auto_scrolTab(true);

		} else if (searchWord.length >= 1) {

			visibleLi.each(function() {

				var text = $(this).find('span > span > i').text();
				if (text.match(RegExp(searchWord, 'i'))) {
					$(this).css({'display':'block'});
				} else {
					$(this).css({'display':'none'});
				}

			});
			auto_scrolTab(true);
		}
	});
	$('.TabLinks li').click(function(){
		$('#search').val('');
	});

	$(".moneybox_shadow > span > span").click(function(event) {
		$(this).closest('.box-persona').remove();
	});
});
