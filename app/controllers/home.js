'use strict';

angular.module('lessonsApp')
	.controller('HomeCtrl', function($scope, $rootScope, $http, _, $location) {
		$scope.categories = {
			language: [
				'data-types',
				'control-structures',
				'functions-scope',
				'inheritance'
			],
			client: [
				'client-modules',
				'dom',
				'events-listeners',
				'client-side-storage',
				'xhr',
				'angular-apps',
				'angular-routing',
				'angular-services',
				'angular-directives'
			],
			server: [
				'node-npm',
				'node-modules',
				'file-access',
				'database-access',
				'http-routing',
				'express',
				'sequelize'
			],
			tools: [
				'console',
				'debugger',
				'inspector',
				'node-npm',
				'angular-fullstack',
				'bootstrap-css'
			]
		};

		_.forEach($scope.categories, function(arr, index) {
			$scope.categories[index] = _.map(arr, function(link) {
				return _.filter($scope.lessons, function(lesson) {
					return lesson.link === link;
				})[0];
			});
		});
	});