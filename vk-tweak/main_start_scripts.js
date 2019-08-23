// function post(e, t, o) {
//   (H._protoAdapter = new B(
//     Object(p.partConfigEnabled)("web_ajax_json_object") ? D : R
//   )),
//     "/" !== e.substr(0, 1) && "http" !== e.substr(0, 4) && (e = "/" + e);
//   var i = W({}, o || {}, { _captcha: !1, _box: !1, no_ads_params: !1 }),
//     n = W({}, t, { al: i.frame ? -1 : 1 }),
//     r = Object(b.vkNow)(),
//     a = vk.spentLastSendTS ? Math.round((r - vk.spentLastSendTS) / 1e3) : 0;
//   if (
//     (vk.sampleUser >= 0 &&
//       window.cur &&
//       cur.module &&
//       a >= 1 &&
//       (window.curNotifier &&
//         curNotifier.idle_manager &&
//         !curNotifier.idle_manager.is_idle &&
//         (n._smt = cur.module + ":" + a),
//       (vk.spentLastSendTS = r)),
//     i.progress &&
//       (i.showProgress ||
//         (i.showProgress = function() {
//           var e = Object(f.ge)(i.progress);
//           Object(f.hasClass)(e, "pr") && Object(f.setStyle)(e, "opacity", 1),
//             Object(f.show)(e);
//         }),
//       i.hideProgress ||
//         (i.hideProgress = function() {
//           var e = Object(f.ge)(i.progress);
//           Object(f.hasClass)(e, "pr") && Object(f.setStyle)(e, "opacity", 0),
//             Object(f.hide)(e);
//         })),
//     i.loader)
//   ) {
//     var s = Object(f.isVisible)(window.boxLayerWrap);
//     (i.showProgress = function() {
//       boxRefreshCoords(window.boxLoader),
//         Object(f.show)(window.boxLoader),
//         s || Object(f.show)(window.boxLayerWrap);
//     }),
//       (i.hideProgress = function() {
//         Object(f.hide)(window.boxLoader),
//           s || Object(f.hide)(window.boxLayerWrap);
//       });
//   }
//   return new H(e, n, i)._post();
// }



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
		} else if (query['act'] === 'a_onlines') {
			query['act'] = 'a_offlines';
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
		// return ajax.post(url, q, o);
		// return new ajax.AjaxRequest(url, query, options)._post();
		return new ajax.AjaxRequest(url, q, o)._post();
	}
	
	// ajax.plainpost = function (url, query, done, fail, urlonly, options) {
	// 	console.log('PLAINPOST:', url, query, options, done);
	// 	var r = ajax._getreq();
	// 	var q = (typeof(query) != 'string') ? ajx2q(query) : query;
	// 	r.onreadystatechange = function() {
	// 		if (r.readyState == 4) {
	// 			if (r.status >= 200 && r.status < 300) {
	// 				// console.log(r.responseText);
	// 				if (done) { r.responseText = ''; done(r.responseText, r);}
	// 			} else { // e.g sleep
	// 				if (fail) fail(r.responseText, r);
	// 			}
	// 		}
	// 	}
	// 	try {
	// 		r.open('POST', url, true);
	// 	} catch(e) {
	// 		return false;
	// 	}

	// 	if (options) {
	// 		each(options, function(key, value) {
	// 			r[key] = value;
	// 		});
	// 	}

	// 	if (!urlonly) {
	// 		r.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	// 		r.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	// 	}
	// 	r.send(q);
	// 	return r;
	// }


	// aaaaaaaddEvent = function addEvent(elem, types, handler, custom, context, useCapture) {
	// 	elem = ge(elem);
	// 	if (types ==='click') {
	// 		if (handler.toString().includes('nim-dialog_unread')) {alert('KEK')}
	// 		console.log(handler);
	// 	}
	// 	if (!elem || elem.nodeType == 3 || elem.nodeType == 8) { // 3 - Node.TEXT_NODE, 8 - Node.COMMENT_NODE
	// 		return;
	// 	}

	// 	var realHandler = context ? function() {
	// 		var newHandler = function(e) {
	// 			var prevData = e.data;
	// 			e.data = context;
	// 			var ret = handler.apply(this, [e]);
	// 			e.data = prevData;
	// 			return ret;
	// 		}
	// 		newHandler.handler = handler;
	// 		return newHandler;
	// 	}() : handler;

	// 	// For IE
	// 	if (elem.setInterval && elem != window) elem = window;

	// 	var events = data(elem, 'events') || data(elem, 'events', {}),
	// 			handle = data(elem, 'handle') || data(elem, 'handle', function() {
	// 				_eventHandle.apply(arguments.callee.elem, arguments);
	// 			});
	// 	// to prevent a memory leak
	// 	handle.elem = elem;

	// 	each(types.split(/\s+/), function(index, type) {
	// 		if (!events[type]) {
	// 			events[type] = [];
	// 			if (!custom && elem.addEventListener) {
	// 				elem.addEventListener(type, handle, useCapture);
	// 			} else if (!custom && elem.attachEvent) {
	// 				elem.attachEvent('on' + type, handle);
	// 			}
	// 		}
	// 		events[type].push(realHandler);
	// 	});

	// 	elem = null;
	// }

	// ajax.framepost = function (url, query, done) {
	// 	console.log('FRAMEPOST', url, query);
	// 	clearTimeout(iframeTO);
	// 	if (window.iframeTransport) {
	// 		ajax._frameover();
	// 	}
	// 	window.iframeTransport = utilsNode.appendChild(ce('div', {innerHTML: '<iframe></iframe>'})).firstChild;
	// 	ajax._framedone = done;
	// 	ajax.framedata = [true];
	// 	url += '?' + ((typeof(query) != 'string') ? ajx2q(query) : query);
	// 	url += (url.charAt(url.length - 1) != '?' ? '&' : '') + '_rndVer=' + irand(0, 99999);
	// 	ajax._frameurl = iframeTransport.src = url;
	// }

	`;

	document.body.appendChild(script);


})();
