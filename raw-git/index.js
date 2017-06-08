;(function() {

	"use strict";

	console.log("RAWGIT!");

	var files = document.querySelectorAll('.file-actions');
	var urlField = document.querySelector('.js-zeroclipboard-container').querySelector('input');
	
	function rawGitButton(urlField, url, title, description, replacer) {
		description = description || ('Copy ' + title + ' to clipboard');
		var btn = document.createElement('button');
		btn.style.marginRight = '3px';
		btn.className = 'btn btn-sm tooltipped tooltipped-s';
		btn.setAttribute('aria-label', description);
		btn.textContent = title;
		btn.addEventListener('click', function(e) {
			console.log(url);
			url = url.replace('gist.github.com', replacer);
			urlField.value = url;
			urlField.select();
			document.execCommand('copy');
			this.setAttribute('aria-label', 'Copied!');
		});
		btn.addEventListener('mouseout', function(e) {
			this.setAttribute('aria-label', description);
		});
		return btn;
	}

	function inputTextReadOnlyField() {
		var inp = document.createElement('input');
		inp.className = 'form-control input-monospace input-sm js-zeroclipboard-target js-url-field';
		inp.placeholder = 'RawGit url';
		inp.setAttribute('readonly', true);
		// <input type="text" readonly="">
		return inp;
	}

	for (var i = 0; i < files.length; i++) {
		var item = files[i];
		var btn = item.querySelector('a');
		var spu = btn.href.split('.');
		if (spu[spu.length - 1] === 'js') {
			var input = inputTextReadOnlyField();
			item.appendChild(rawGitButton(input, btn.href, 'RawGit Develop', 'Copy script URL for development', 'rawgit.com'));
			item.appendChild(rawGitButton(input, btn.href, 'RawGit CDN', 'Copy script URL for production', 'cdn.rawgit.com'));
			item.appendChild(input);
		}
	}

})();