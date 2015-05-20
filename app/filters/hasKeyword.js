angular.module('lessonsApp')
	.filter('hasKeyword', function(_) {
		return function(input, word) {
			return _.filter(input, function(item) {
				return _.some(item.keywords, function(k) {
					return k.indexOf(word) > -1;
				});
			});
		};
	});