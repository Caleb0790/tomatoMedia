angular.module('media', ['ngRoute']).config(function($routeProvider) {
	console.log('aaa');
	$routeProvider
		.when('/home', {
			templateUrl: './html/home.html'
		})
		.when('/media-search', {
			templateUrl: './html/search.html',
			controller: 'searchCtrl'
		})
		.when('/media-search/searchDVD', {
			templateUrl: './html/search.html',
			controller: 'searchDVDCtrl'
		})
		.when('/media-search/searchBook', {
			templateUrl: './html/search.html',
			controller: 'searchBookCtrl'
		})
		.when('/media-search/searchCD', {
			templateUrl: './html/search.html',
			controller: 'searchCDCtrl'
		})
		.otherwise({
			redirectTo: '/media-search'
		})
});