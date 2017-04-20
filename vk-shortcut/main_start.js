;(function() {

	"use strict";

	console.log("SHORTCUTS START!");

	var script = document.createElement('script');
	script.innerHTML = `ajax.post = function (url, query, options) {
		console.log(url, query, options);
		if (url.substr(0, 1) != '/' && url.substr(0, 4) != 'http') url = '/' + url;
		var o = extend({_captcha: false, _box: false}, options || {}), q = extend({al: o.frame ? -1 : 1}, query), now = vkNow();
		var timeSpent = vk.spentLastSendTS ? Math.round((now - vk.spentLastSendTS) / 1000) : 0;
		if (vk.sampleUser >= 0 && cur.module && timeSpent >= 1) {
			if (window.curNotifier && curNotifier.idle_manager && !curNotifier.idle_manager.is_idle) {
				q = extend({_smt: cur.module + ':' + timeSpent}, q);
			}
			vk.spentLastSendTS = now;
		}
		if (o.progress) {
			if (!o.showProgress) {
				o.showProgress = function() {
					var pr = ge(o.progress);
					if (hasClass(pr, 'pr')) {
						setStyle(pr, 'opacity', 1);
					}
					show(pr);
				}
			}
			if (!o.hideProgress) {
				o.hideProgress = function() {
					var pr = ge(o.progress);
					if (hasClass(pr, 'pr')) {
						setStyle(pr, 'opacity', 0);
					}
					hide(pr);
				}
			}
		}
		if (o.loader) {
			var boxLayerWrapWasVisible = isVisible(boxLayerWrap);

			o.showProgress = function() {
				boxRefreshCoords(boxLoader);
				show(boxLoader);
				if (!boxLayerWrapWasVisible) {
					show(boxLayerWrap);
				}
			}
			o.hideProgress = function() {
				hide(boxLoader);
				if (!boxLayerWrapWasVisible) {
					hide(boxLayerWrap);
				}
			}
		}
		return ajax._post(url, q, o);
	}`;
	document.body.appendChild(script);

})();
