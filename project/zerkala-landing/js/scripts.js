(function() {

	$('footer').on('click', '.dot-dar', function(e) {


		var boxThis = $(this).closest('.text-block'),
			boxHide = $(boxThis).find('+ .text-block.hide'),
			boxDote = $(boxThis).find('.dot-dar');


		if(boxDote.hasClass('bottom')) {
			$(boxDote).removeClass('bottom');
			$(boxHide).slideUp(500);
		} else {
			$(boxDote).addClass('bottom');
			$(boxHide).slideDown(500);
		}
	});

})();

(function() {

	var time = function() {
		d = new Date();
		h = d.getHours();
		m = d.getMinutes();

		if(h < 10){ h = "0" + h};
		if(m < 10){ m = "0" + m};

		document.getElementById("time").innerHTML = h + '<span>:</span>' + m;

		setTimeout(function(){time();}, 1000);
	};

	if(!(document.getElementById("time") === null)) {
		window.onload = time();
	}

})();

(function() {

	$('body').on('click', function(e) {
		if (!$(e.target).is(".langBoxChange .selectedLang,.langBoxChange_ul")) {
			$('.langBoxChange .selectedLang').removeClass('active');
			$('.langBoxChange_ul').slideUp(300);
		}
	});

	$('.langBoxChange').on("click", ".selectedLang", function() {

		if ($(this).is('.active')){
			$(this).removeClass('active');
			$('.langBoxChange_ul').slideUp(300);
		} else {
			$(this).addClass('active');
			$('.langBoxChange_ul').slideDown(300);
		}
	});

})();

(function() {

	$('article').on('click', 'i', function(e) {
		var boxThis = $(this).closest('article'),
			containBox = boxThis.closest('.col-box'),
			boxHide = $(containBox).find('.show');

			$(boxThis).css({
				zIndex: 9999
			});

		if (!(boxHide.length < 1)) {
			boxHide.each(function(index, el) {
				removeSlide(el);
			});
		}

		$(boxThis).addClass('show');
		$(boxThis).find('.hide').slideDown(500);
	});


	//close
	$('body').on('click', function(event){

		event.stopPropagation();

		var targetClik = $(event.target);

		if( !($(event.target).is('article i'))) {
			removePopUp ();
		}
	});


	// ESCP
	$('body').keyup(function(event){
		var boxThis = $('article.show');

		if(event.which == '27'){
			removePopUp (boxThis);
		}
	});

	function removePopUp () {
		$('article').find('.hide').slideUp(500);

		setTimeout(function(){
			$('article').removeClass('show');
		}, 550);
	}

	function removeSlide (e) {
		$(e).find('.hide').slideUp(500);

		$(e).css({
			zIndex: 10
		});

		setTimeout(function(){
			$(e).removeClass('show');

			$(e).attr('style', '');
		}, 550);


	}

})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci9mb290ZXIuanMiLCJoZWFkZXIvaGVhZGVyLmpzIiwibGFuZ2JveC9sYW5nYm94LmpzIiwibWFpbi9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcblxuXHQkKCdmb290ZXInKS5vbignY2xpY2snLCAnLmRvdC1kYXInLCBmdW5jdGlvbihlKSB7XG5cblxuXHRcdHZhciBib3hUaGlzID0gJCh0aGlzKS5jbG9zZXN0KCcudGV4dC1ibG9jaycpLFxuXHRcdFx0Ym94SGlkZSA9ICQoYm94VGhpcykuZmluZCgnKyAudGV4dC1ibG9jay5oaWRlJyksXG5cdFx0XHRib3hEb3RlID0gJChib3hUaGlzKS5maW5kKCcuZG90LWRhcicpO1xuXG5cblx0XHRpZihib3hEb3RlLmhhc0NsYXNzKCdib3R0b20nKSkge1xuXHRcdFx0JChib3hEb3RlKS5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG5cdFx0XHQkKGJveEhpZGUpLnNsaWRlVXAoNTAwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JChib3hEb3RlKS5hZGRDbGFzcygnYm90dG9tJyk7XG5cdFx0XHQkKGJveEhpZGUpLnNsaWRlRG93big1MDApO1xuXHRcdH1cblx0fSk7XG5cbn0pKCk7XG4iLCIoZnVuY3Rpb24oKSB7XG5cblx0dmFyIHRpbWUgPSBmdW5jdGlvbigpIHtcblx0XHRkID0gbmV3IERhdGUoKTtcblx0XHRoID0gZC5nZXRIb3VycygpO1xuXHRcdG0gPSBkLmdldE1pbnV0ZXMoKTtcblxuXHRcdGlmKGggPCAxMCl7IGggPSBcIjBcIiArIGh9O1xuXHRcdGlmKG0gPCAxMCl7IG0gPSBcIjBcIiArIG19O1xuXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lXCIpLmlubmVySFRNTCA9IGggKyAnPHNwYW4+Ojwvc3Bhbj4nICsgbTtcblxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aW1lKCk7fSwgMTAwMCk7XG5cdH07XG5cblx0aWYoIShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpbWVcIikgPT09IG51bGwpKSB7XG5cdFx0d2luZG93Lm9ubG9hZCA9IHRpbWUoKTtcblx0fVxuXG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuXG5cdCQoJ2JvZHknKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYgKCEkKGUudGFyZ2V0KS5pcyhcIi5sYW5nQm94Q2hhbmdlIC5zZWxlY3RlZExhbmcsLmxhbmdCb3hDaGFuZ2VfdWxcIikpIHtcblx0XHRcdCQoJy5sYW5nQm94Q2hhbmdlIC5zZWxlY3RlZExhbmcnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHQkKCcubGFuZ0JveENoYW5nZV91bCcpLnNsaWRlVXAoMzAwKTtcblx0XHR9XG5cdH0pO1xuXG5cdCQoJy5sYW5nQm94Q2hhbmdlJykub24oXCJjbGlja1wiLCBcIi5zZWxlY3RlZExhbmdcIiwgZnVuY3Rpb24oKSB7XG5cblx0XHRpZiAoJCh0aGlzKS5pcygnLmFjdGl2ZScpKXtcblx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0JCgnLmxhbmdCb3hDaGFuZ2VfdWwnKS5zbGlkZVVwKDMwMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0JCgnLmxhbmdCb3hDaGFuZ2VfdWwnKS5zbGlkZURvd24oMzAwKTtcblx0XHR9XG5cdH0pO1xuXG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuXG5cdCQoJ2FydGljbGUnKS5vbignY2xpY2snLCAnaScsIGZ1bmN0aW9uKGUpIHtcblx0XHR2YXIgYm94VGhpcyA9ICQodGhpcykuY2xvc2VzdCgnYXJ0aWNsZScpLFxuXHRcdFx0Y29udGFpbkJveCA9IGJveFRoaXMuY2xvc2VzdCgnLmNvbC1ib3gnKSxcblx0XHRcdGJveEhpZGUgPSAkKGNvbnRhaW5Cb3gpLmZpbmQoJy5zaG93Jyk7XG5cblx0XHRcdCQoYm94VGhpcykuY3NzKHtcblx0XHRcdFx0ekluZGV4OiA5OTk5XG5cdFx0XHR9KTtcblxuXHRcdGlmICghKGJveEhpZGUubGVuZ3RoIDwgMSkpIHtcblx0XHRcdGJveEhpZGUuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcblx0XHRcdFx0cmVtb3ZlU2xpZGUoZWwpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0JChib3hUaGlzKS5hZGRDbGFzcygnc2hvdycpO1xuXHRcdCQoYm94VGhpcykuZmluZCgnLmhpZGUnKS5zbGlkZURvd24oNTAwKTtcblx0fSk7XG5cblxuXHQvL2Nsb3NlXG5cdCQoJ2JvZHknKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XG5cblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdHZhciB0YXJnZXRDbGlrID0gJChldmVudC50YXJnZXQpO1xuXG5cdFx0aWYoICEoJChldmVudC50YXJnZXQpLmlzKCdhcnRpY2xlIGknKSkpIHtcblx0XHRcdHJlbW92ZVBvcFVwICgpO1xuXHRcdH1cblx0fSk7XG5cblxuXHQvLyBFU0NQXG5cdCQoJ2JvZHknKS5rZXl1cChmdW5jdGlvbihldmVudCl7XG5cdFx0dmFyIGJveFRoaXMgPSAkKCdhcnRpY2xlLnNob3cnKTtcblxuXHRcdGlmKGV2ZW50LndoaWNoID09ICcyNycpe1xuXHRcdFx0cmVtb3ZlUG9wVXAgKGJveFRoaXMpO1xuXHRcdH1cblx0fSk7XG5cblx0ZnVuY3Rpb24gcmVtb3ZlUG9wVXAgKCkge1xuXHRcdCQoJ2FydGljbGUnKS5maW5kKCcuaGlkZScpLnNsaWRlVXAoNTAwKTtcblxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdCQoJ2FydGljbGUnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuXHRcdH0sIDU1MCk7XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVTbGlkZSAoZSkge1xuXHRcdCQoZSkuZmluZCgnLmhpZGUnKS5zbGlkZVVwKDUwMCk7XG5cblx0XHQkKGUpLmNzcyh7XG5cdFx0XHR6SW5kZXg6IDEwXG5cdFx0fSk7XG5cblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHQkKGUpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG5cblx0XHRcdCQoZSkuYXR0cignc3R5bGUnLCAnJyk7XG5cdFx0fSwgNTUwKTtcblxuXG5cdH1cblxufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
