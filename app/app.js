'use strict';

angular.module('lessonsApp', [
	'ui.router',
	'ui.bootstrap'
])

	.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
		$urlRouterProvider.otherwise('/');
		$locationProvider.html5Mode(true);

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'app/templates/home.html',
				controller: 'HomeCtrl'
			})
			.state('lesson', {
				url: '/lessons/{id}',
				templateUrl: 'app/templates/lesson.html',
				controller: 'LessonCtrl'
			});
	});