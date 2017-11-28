var shedule = {
	'0': '06:50 - 08:20',
	'1': '08:30 - 10:05',
	'2': '10:20 - 11:55',
	'3': '12:10 - 13:45',
	'4': '14:15 - 15:50',
	'5': '16:00 - 17:35',
	'6': '17:40 - 19:15',
	'7': '19:20 - 20:55',
	'8': '21:00 - 22:35',
};

;(function() {

	"use strict";

	console.log("SHORTCUTS END!");
	var table = document.querySelector('table.outer');

	if (table) {
		console.log(table);
		var cells = [...table.querySelectorAll('tbody>tr>td[class=leftcell]')].filter((cell) => cell.textContent.match(/\d/));
		console.log(cells);
		cells.map((cell) => {
			var cellContent = shedule[cell.textContent];
			cell.title = cellContent;
			cell.parentNode.title = cellContent;
			cell.style.cursor = 'pointer';
			cell.parentNode.innerHTML += `<td class="leftcell" style="text-align: center"><small><small><small>${cellContent.replace(' - ', '<br/>-<br/>')}</small></small></small></td>`;
		});
	}

})();