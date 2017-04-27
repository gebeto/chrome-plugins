;(function() {

	"use strict";

	console.log("SHORTCUTS START!");

	var adsRemove =  document.createElement('style');
	adsRemove.innerHTML = `
	@keyframes roll {
		0% { transform: rotate(0deg) }
		50% { transform: rotate(180deg) }
		100% { transform: rotate(360deg) }
	}

	#ads_left,
	[id^="ads"],
	[class^="ads"] {
		display: none !important;
	}
	`;
	document.body.appendChild(adsRemove);



	var style =  document.createElement('style');
	style.innerHTML = `
	@keyframes roll {
		0% { transform: rotate(0deg) }
		50% { transform: rotate(180deg) }
		100% { transform: rotate(360deg) }
	}

	.post_img:hover,
	.copy_post_img:hover,
	.page_square_photo:hover,
	.chat_tab_img:hover,
	.im_grid>img:hover,
	.image_cover:hover,
	img:hover {
		animation-name: roll;
		animation-duration: 1s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}
	`;
	if (localStorage.getItem('rollPhotos')) {
		document.body.appendChild(style);
	}


	var styleForever =  document.createElement('style');
	styleForever.innerHTML = `
	@keyframes roll {
		0% { transform: rotate(0deg) }
		50% { transform: rotate(180deg) }
		100% { transform: rotate(360deg) }
	}

	.post_img,
	.page_square_photo,
	.copy_post_img,
	.chat_tab_img,
	.im_grid>img,
	.image_cover,
	img {
		animation-name: roll;
		animation-duration: 1s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}
	`;
	if (localStorage.getItem('rollPhotosForever')) {
		document.body.appendChild(styleForever);
	}

})();
