
function MenuControlButton(storageVar, title) {
	this.storageVar = storageVar;
	this.title = title;
	console.log(localStorage.getItem(storageVar));
	this.controlButton = document.createElement('li');
	this.controlButton.className = 'l_comm';
	this.controlButton.addEventListener('click', function() {
		if (localStorage.getItem(this.storageVar)) {
			this.turnOFF();
		} else {
			this.turnON();
		}
	}.bind(this));

	this.controlButton.innerHTML = `
		<a href="#" onclick="return false;" class="left_row">
			<span class="left_fixer">
				<span class="fl_l checkbox ` + (localStorage.getItem(this.storageVar) ? 'on' : 'off') + `" style="background: 0; padding: 5px; padding-left: 8px;"></span>
				<span class="left_label inl_bl">` + this.title + `</span>
			</span>
		</a>`;
	return this.controlButton;
}

MenuControlButton.prototype.turnOFF = function() {
	localStorage.removeItem(this.storageVar);
	this.controlButton.innerHTML = `
		<a href="#" onclick="return false;" class="left_row">
			<span class="left_fixer">
				<span class="fl_l checkbox off" style="background: 0; padding: 5px; padding-left: 8px;"></span>
				<span class="left_label inl_bl">` + this.title + `</span>
			</span>
		</a>`;
}

MenuControlButton.prototype.turnON = function() {
	localStorage.setItem(this.storageVar, 'on');
	this.controlButton.innerHTML = `
		<a href="#" onclick="return false;" class="left_row">
			<span class="left_fixer">
				<span class="fl_l checkbox on" style="background: 0; padding: 5px; padding-left: 8px;"></span>
				<span class="left_label inl_bl">` + this.title + `</span>
			</span>
		</a>`;
}