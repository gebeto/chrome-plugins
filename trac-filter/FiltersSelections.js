function Select(values, allTitle) {
	var select = document.createElement('select');
	var shtml = '<option value="">all ' + allTitle + '</option>';
	for (var i = 0; i < values.length; i++) {
		shtml += '<option value="' + values[i] + '">' + values[i] + '</option>';
	}
	select.innerHTML = shtml;
	return select;
}

function FiltersSelections(tableBody) {
	this.searchInputWrapper = document.createElement('div');
	// this.searchInputWrapper.style.position = 'fixed';
	// this.searchInputWrapper.style.top = '0px';
	// this.searchInputWrapper.style.width = '100%';
	// this.searchInputWrapper.style.textAlign = 'center';

	var rows = [];
	if (tableBody) {
		console.log(tableBody.children);
		for (var i = 0; i < tableBody.children.length; i++) {
			rows.push({
				element: tableBody.children[i],
				owner: tableBody.children[i].querySelector('.owner').textContent.trim(),
				status: tableBody.children[i].querySelector('.status').textContent.trim()
			});
		}
		console.log(rows);
	}
	
	function filter() {
		for (var i = 0; i < rows.length; i++) {
			if (rows[i].owner.includes(this.ownerSelect.value) && rows[i].status.includes(this.statusesSelect.value)) {
				rows[i].element.style.display = '';
			} else {
				rows[i].element.style.display = 'none';
			}
		}
 	}

 	this.ownerSelect = new Select(rows.map(function(item, index) {
 		return item.owner;
 	}).filter(function(item, index, arr) {
 		if (arr.indexOf(item) === index) {return true;}
 	}), 'owners');

 	this.statusesSelect = new Select(rows.map(function(item, index) {
 		return item.status;
 	}).filter(function(item, index, arr) {
 		if (arr.indexOf(item) === index) {return true;}
 	}), 'statuses');
	
	this.ownerSelect.addEventListener('change', filter.bind(this));
	this.statusesSelect.addEventListener('change', filter.bind(this));
	
	this.searchInputWrapper.innerHTML = '<h2 style="display: inline; margin-right: 6px;">Sort | Filter</h2>';
	this.searchInputWrapper.appendChild(this.ownerSelect);
	this.searchInputWrapper.appendChild(this.statusesSelect);
	return this.searchInputWrapper;
}
