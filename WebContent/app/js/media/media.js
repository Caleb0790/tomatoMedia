angular.module('media', ['ngRoute']).config(function($routeProvider) {
	console.log('aaa');
	$routeProvider
		.when('/media-search', {
			templateUrl: './html/search.html',
			controller: 'searchCtrl'
		})
		.otherwise({
			redirectTo: '/media-search'
		})
});