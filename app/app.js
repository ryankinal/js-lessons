'use strict';

angular.module('lessonsApp', [
	'ui.router',
	'ui.bootstrap',
	'yaru22.md'
])

	.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $logProvider) {
		$urlRouterProvider.otherwise('/');
		$locationProvider.html5Mode(true);
		$logProvider.debugEnabled(true);

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