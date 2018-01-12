angular.module('media', ['tomatoMedia', 'ngRoute']).config(function($routeProvider) {
	$routeProvider
		.when('/media-search', {
			templateUrl: './html/search.html',
			controller: 'searchCtrl'
		})
		.otherwise({
			redirectTo: '/media-search'
		})
});