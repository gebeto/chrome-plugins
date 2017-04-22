;(function() {

	"use strict";

	console.log("SHORTCUTS START!");

	document.body.appendChild(script);

	var style =  document.createElement('style');
	style.innerHTML = `
	@keyframes roll {
		0% { transform: rotate(0deg) scale(1,1); }
		50% { transform: rotate(180deg) scale(2,2); }
		100% { transform: rotate(360deg) scale(1,1); }
	}

	.post_img:hover,
	.copy_post_img:hover,
	.chat_tab_img:hover,
	.im_grid>img:hover {
		animation-name: roll;
		animation-duration: 1s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}
	`;
	// document.body.appendChild(style);

})();
