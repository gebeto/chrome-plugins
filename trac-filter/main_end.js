;(function() {

	"use strict";

	console.log("SHORTCUTS END!");
	
	if (window.location.pathname.match(/\/report\/[0-9]+/)) {
		var TableBody = document.querySelector('tbody');
		var menu = new FiltersSelections(TableBody);

		var buttons = document.querySelectorAll('.buttons');
		var buttonWrapper = buttons[buttons.length - 1];
		buttonWrapper.appendChild(menu);
		// document.body.appendChild(menu);
	}

	if (window.location.pathname === '/hours') {
		var sorter = new HoursSorter();
		sorter.sort();
	}

	if (true) {

	}
	

})();