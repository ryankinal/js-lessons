'use strict';

angular.module('lessonsApp')
	.directive('displayMarkdown', function(markdown) {
		return {
			restrict: 'EA',
			scope: '=',
			link: function(scope, elem, attrs) {
				scope.elem = elem;
				scope.$watch(attrs.displayMarkdown, function() {
					elem.innerHTML = markdown.toHTML(attrs.displayMarkdown);
				});
			}
		};
	});