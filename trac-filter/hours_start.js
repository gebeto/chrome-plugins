;(function(path) {

	"use strict";

	/*
	"http://trac.leadsoft.name/hours?
		from_month={FROM_MONTH}&
		from_day=1&
		from_year={FROM_YEAR}&
		to_month={TO_MONTH}&
		to_day=31&
		to_year={TO_YEAR}&
		worker_filter=slavik.nychkalo%40gmail.com&
		status=accepted&
		status=assigned&
		status=closed&
		status=commit&
		status=needs_work&
		status=new&
		status=reopened&
		add_filter=&
		col=summary&
		col=estimatedhours&
		col=seconds_worked&
		col=worker&
		col=time_started&
		group=&
		max=0&
		order=priority&
		update=Обновить"
	*/
	
	if (path === '/hours') {
		console.log("HOURS END!");
		var d = new Date();

		var FROM_MONTH = /{FROM_MONTH}/;
		var TO_MONTH = /{TO_MONTH}/;
		var FROM_YEAR = /{FROM_YEAR}/;
		var TO_YEAR = /{TO_YEAR}/;

		var loc = {
			href: window.location.href,
			changed: false,
			replace: function(PTRN, STRING) {
				if (PTRN.test(this.href)) {
					console.log('RPLACE', PTRN, STRING, this);
					this.href = this.href.replace(PTRN, STRING);
					this.changed = true;
				}
			},
			apply: function() {
				if (this.changed) {
					window.location.href = this.href;
					// console.log(this.href);
				}
			}
		}
		
		loc.replace(FROM_MONTH, d.getMonth() + 1);
		loc.replace(TO_MONTH, d.getMonth() + 1);

		loc.replace(FROM_YEAR, d.getFullYear());
		loc.replace(TO_YEAR, d.getFullYear());

		loc.apply();
	}

})(window.location.pathname);