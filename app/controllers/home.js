'use strict';

angular.module('lessonsApp')
	.controller('HomeCtrl', function($scope, $http) {
		$http.get('/app/data/lessons.json')
			.then(function(response) {
				console.log(response);
				$scope.lessons = response.data;
			}, function(err) {
				console.log(err);
			});
	});