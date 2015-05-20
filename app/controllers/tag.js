'use strict';

angular.module('lessonsApp')
	.controller('TagCtrl', function($scope, $rootScope, $state) {
		$scope.tag = $state.params.id;
		$scope.lessons = _.filter($rootScope.lessons, function(lesson) {
			return _.some(lesson.keywords, function(k) {
				return k === $state.params.id;
			});
		});
	});