var initPages = function() {
	pageCurrent = 0;
	console.log("initialize pages");
	createPage(pageCurrent);
};

window.onload = initPages;