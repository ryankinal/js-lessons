'use strict';

angular.module('lessonsApp')
	.controller('LessonCtrl', function($scope, $http, $state) {
		$http.get('/markdown/' + $state.params.id + '.md')
			.then(function(response) {
				console.log(response);
				$scope.content = response.data;
			}, function(err) {
				console.log(err);
			});
	});