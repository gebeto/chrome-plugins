;(function() {

	"use strict";

	console.log("SHORTCUTS END!");

	// var elementsWrapper = document.getElementsByClassName('media_selector')[0]
	// var pastebin = document.createElement('a');
	// pastebin.target = '_blank';
	// pastebin.href = 'http://pastebin.com/';
	// pastebin.style.float = 'left';
	// pastebin.innerHTML = '<img src="https://pastebin.com/i/pastebin_logo_side_outline.png" width="20">';
	// elementsWrapper.insertBefore(pastebin, elementsWrapper.children[0]);

	
	var menu = document.getElementById('side_bar_inner').children[0];

	// var markAsRead = document.createElement('');
	menu.appendChild(new MenuControlButton('markAsRead', "Не читать диалоги"));
	menu.appendChild(new MenuControlButton('markFeedBackAsRead', 'Не читать ответы'));
	menu.appendChild(new MenuControlButton('hideTyping', 'Скрыть набор'));
				// <span class="left_icon fl_l"></span>

})();