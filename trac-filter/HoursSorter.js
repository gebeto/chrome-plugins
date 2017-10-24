function HoursSorter() {
	this.table = document.querySelector('.listing.tickets');
	this.tbody = this.table.querySelector('tbody');
	console.log(this.table);
	this.rows = this.table.querySelectorAll('tr.prio')
	console.log(this.rows);
}

HoursSorter.prototype.sort = function() {
	var _this = this;
	var forSort = [];
	for (var i = 0; i < this.rows.length; i++) {
		var tds = this.rows[i].querySelectorAll('td');
		forSort.push({
			key: new Date(tds[tds.length - 1].textContent.trim()),
			tr: this.rows[i],
		})
	}
	forSort.sort(function(a, b) {
		// return a.key.getTime() - b.key.getTime();
		return b.key.getTime() - a.key.getTime();
	}).map(function(item, index) {
		_this.tbody.appendChild(item.tr);
	});
	console.log(forSort);
};