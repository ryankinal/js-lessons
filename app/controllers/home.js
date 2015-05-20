'use strict';

angular.module('lessonsApp')
	.controller('HomeCtrl', function($scope, $http, _) {
		$scope.keywords = [];

		$http.get('/app/data/lessons.json')
			.then(function(response) {
				console.log(response);
				$scope.lessons = response.data;
				$scope.keywords = _.unique(_.flatten(_.map($scope.lessons, function(lesson) {
					return lesson.keywords;
				})));
			}, function(err) {
				console.log(err);
			});
	});