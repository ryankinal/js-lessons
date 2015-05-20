'use strict';

angular.module('lessonsApp')
	.controller('HomeCtrl', function($scope, $http) {
		$http.get('/app/data/lessons.json')
			.then(function(data) {
				console.log(data);
			}, function(err) {
				console.log(err);
			});
	});