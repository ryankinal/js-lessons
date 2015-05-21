	(function() {
		var now = new Date(),
			year = now.getYear() + 1900,
			copyrightDateElem = document.querySelector('#copyDate'),
			newText = document.createTextNode(year);

		copyrightDateElem.appendChild(newText);
	})();