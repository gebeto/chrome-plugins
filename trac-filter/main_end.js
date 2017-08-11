;(function() {

	"use strict";

	console.log("SHORTCUTS END!");
	
	var TableBody = document.querySelector('tbody');
	var menu = new SearchField(TableBody);
	
	document.body.appendChild(menu);

})();