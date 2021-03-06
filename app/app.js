'use strict';

angular.module('lessonsApp', [
	'ui.router',
	'ui.bootstrap',
	'yaru22.md'
])

	.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
		$urlRouterProvider.otherwise('/');
		//$locationProvider.html5Mode(true);

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
			})
			.state('tag', {
				url: '/tags/{id}',
				templateUrl: 'app/templates/tag.html',
				controller: 'TagCtrl'
			});
	})

	.run(function($rootScope, $http) {
		$rootScope.base = window.base;
		$http.get(window.base + 'app/data/lessons.json')
			.then(function(response) {
				$rootScope.lessons = _.filter(response.data, function(l) {
					return l.active;
				});

				$rootScope.keywords = _.unique(_.flatten(_.map($rootScope.lessons, function(lesson) {
					return lesson.keywords;
				})));
			}, function(err) {
				console.log(err);
			});
	});