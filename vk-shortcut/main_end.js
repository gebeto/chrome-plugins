;(function() {

	"use strict";

	console.log("SHORTCUTS END!");

	var elementsWrapper = document.getElementsByClassName('media_selector')[0]
	var pastebin = document.createElement('a');
	pastebin.target = '_blank';
	pastebin.href = 'http://pastebin.com/';
	pastebin.style.float = 'left';
	pastebin.innerHTML = '<img src="https://pastebin.com/i/pastebin_logo_side_outline.png" width="20">';
	elementsWrapper.insertBefore(pastebin, elementsWrapper.children[0]);

})();
