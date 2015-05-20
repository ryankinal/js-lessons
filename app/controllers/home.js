'use strict';

angular.module('lessonsApp')
	.controller('HomeCtrl', function($scope, $http, _, $location) {
		$scope.keywords = [];
		$scope.path = $location.$$path;

		$http.get(window.base + 'app/data/lessons.json')
			.then(function(response) {
				$scope.lessons = response.data;
				$scope.keywords = _.unique(_.flatten(_.map($scope.lessons, function(lesson) {
					return lesson.keywords;
				})));
			}, function(err) {
				console.log(err);
			});
	});