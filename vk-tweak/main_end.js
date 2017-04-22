;(function() {

	"use strict";

	console.log("SHORTCUTS END!");
	
	var menu = document.getElementById('side_bar_inner').children[0];

	if (!document.getElementById('quick_forgot')) {
		menu.appendChild(new MenuControlButton('markAsRead', "Не читать диалоги"));
		menu.appendChild(new MenuControlButton('markFeedBackAsRead', 'Не читать ответы'));
		menu.appendChild(new MenuControlButton('hideTyping', 'Скрыть набор'));
	}

})();