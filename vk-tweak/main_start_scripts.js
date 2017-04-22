;(function() {

	"use strict";

	console.log("SHORTCUTS START!");

	var script = document.createElement('script');
	script.innerHTML = `
	ajax.post = function (url, query, options) {
		console.log('POST:', url, query, options);
		if (query['act'] === 'a_mark_read' && localStorage.getItem('markAsRead')) {
			query['act'] = '';
		} else if (query['act'] === 'a_send') {
			query['msg'] += '';
		} else if (query['act'] === 'a_typing' && localStorage.getItem('hideTyping')) {
			query['act'] = '';
		} else if (query['act'] === 'a_clean_notify' && localStorage.getItem('markFeedBackAsRead')) {
			query['act'] = '';
		}
		query['_full_page'] = false;
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
	}
	
	ajax.plainpost = function (url, query, done, fail, urlonly, options) {
		console.log('PLAINPOST:', url, query, options, done);
		var r = ajax._getreq();
		var q = (typeof(query) != 'string') ? ajx2q(query) : query;
		r.onreadystatechange = function() {
			if (r.readyState == 4) {
				if (r.status >= 200 && r.status < 300) {
					// console.log(r.responseText);
					if (done) { r.responseText = ''; done(r.responseText, r);}
				} else { // e.g sleep
					if (fail) fail(r.responseText, r);
				}
			}
		}
		try {
			r.open('POST', url, true);
		} catch(e) {
			return false;
		}

		if (options) {
			each(options, function(key, value) {
				r[key] = value;
			});
		}

		if (!urlonly) {
			r.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			r.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		}
		r.send(q);
		return r;
	}

	`;


})();
