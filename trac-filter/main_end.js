;(function() {

	"use strict";

	console.log("SHORTCUTS END!");
	
	if (window.location.pathname.match(/\/report\/[0-9]+/)) {
		var TableBody = document.querySelector('tbody');
		var menu = new SearchField(TableBody);
		document.body.appendChild(menu);
	}

	if (window.location.pathname === '/hours') {
		var sorter = new HoursSorter();
		sorter.sort();
	}
	

})();