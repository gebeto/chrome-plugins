function hello() {
	chrome.tabs.executeScript({
		file: 'main_end.js'
	}); 
}

document.getElementById('click').addEventListener('click', hello);

chrome.browserAction.onClicked.addListener((tab) => {
	chrome.tabs.executeScript(tab, {
		file: 'main_end.js'
	});
	// alert('ASDASD');
})