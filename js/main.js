(function() {
	"use strict";
	console.log("file connected");

	var iconSet = document.querySelectorAll(".icons");
	console.log(iconSet);

	function logLoaded(evt) {
		var targetSVG = evt.currentTarget.contentDocument;
		var theIcon = targetSVG.querySelector(".mainIcon");
		theIcon.addEventListener("click", logClicked,false);
	}

	function logClicked(evt) {
		console.log(evt.currentTarget.id);
	}

	for (var i = 0; i < iconSet.length; i++) {
		iconSet[i].addEventListener("load", logLoaded, false);
	}
})();