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


	aaaaaaaddEvent = function addEvent(elem, types, handler, custom, context, useCapture) {
		elem = ge(elem);
		if (types ==='click') {
			if (handler.toString().includes('nim-dialog_unread')) {alert('KEK')}
			console.log(handler);
		}
		if (!elem || elem.nodeType == 3 || elem.nodeType == 8) { // 3 - Node.TEXT_NODE, 8 - Node.COMMENT_NODE
			return;
		}

		var realHandler = context ? function() {
			var newHandler = function(e) {
				var prevData = e.data;
				e.data = context;
				var ret = handler.apply(this, [e]);
				e.data = prevData;
				return ret;
			}
			newHandler.handler = handler;
			return newHandler;
		}() : handler;

		// For IE
		if (elem.setInterval && elem != window) elem = window;

		var events = data(elem, 'events') || data(elem, 'events', {}),
				handle = data(elem, 'handle') || data(elem, 'handle', function() {
					_eventHandle.apply(arguments.callee.elem, arguments);
				});
		// to prevent a memory leak
		handle.elem = elem;

		each(types.split(/\s+/), function(index, type) {
			if (!events[type]) {
				events[type] = [];
				if (!custom && elem.addEventListener) {
					elem.addEventListener(type, handle, useCapture);
				} else if (!custom && elem.attachEvent) {
					elem.attachEvent('on' + type, handle);
				}
			}
			events[type].push(realHandler);
		});

		elem = null;
	}

	`;

	document.body.appendChild(script);


})();
