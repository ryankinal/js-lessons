angular.module('lessonsApp')
	.filter('md2html', function(markdown) {
		return function(input) {
			return markdown.toHTML(input);
		};
	});