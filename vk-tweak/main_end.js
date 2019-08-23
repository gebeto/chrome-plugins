;(function() {

	"use strict";

	console.log("SHORTCUTS END!");
	
	var menu = document.querySelector('#side_bar_inner nav ol');

	if (!document.getElementById('quick_forgot')) {
		const separator = document.createElement("div");
		separator.className = "more_div";
		menu.appendChild(separator);

		menu.appendChild(new MenuControlButton('markAsRead', "Не читать диалоги"));
		menu.appendChild(new MenuControlButton('markFeedBackAsRead', 'Не читать ответы'));
		menu.appendChild(new MenuControlButton('hideTyping', 'Скрыть набор'));
		menu.appendChild(new MenuControlButton('rollPhotos', 'Крутить фотки'));
		menu.appendChild(new MenuControlButton('rollPhotosForever', 'Крутить фотки вечно'));
	}

})();