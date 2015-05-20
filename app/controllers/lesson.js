'use strict';

angular.module('lessonsApp')
	.controller('LessonCtrl', function($scope, $http, $state, _) {
		$scope.content = '';
		$scope.lesson = _.filter($scope.lessons, function(lesson) {
			return lesson.link === $state.params.id;
		})[0];

		$http.get($scope.base + 'markdown/' + $state.params.id + '.md')
			.success(function(response) {
				$scope.content = response;
			})
			.error(function(err) {
				$scope.content = '# Content not found: ' + $state.params.id;
			});
	});