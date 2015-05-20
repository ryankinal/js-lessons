'use strict';

angular.module('lessonsApp')
	.controller('LessonCtrl', function($scope, $http, $state) {
		$scope.content = '';

		$http.get('/markdown/' + $state.params.id + '.md')
			.success(function(response) {
				$scope.content = response;
			})
			.error(function(err) {
				$scope.content = '# Content not found \n\n <a href="' + $scope.base + '">Home</a>';
			});
	});