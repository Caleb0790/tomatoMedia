angular.module('media', ['ngRoute']).config(function($routeProvider) {
	console.log('aaa');
	$routeProvider
		.when('/media-search', {
			templateUrl: './html/search.html',
			controller: 'searchCtrl'
		})
		.when('/media-search/searchDVD', {
			templateUrl: './html/searchDVD.html',
			controller: 'searchDVDCtrl'
		})
		.when('/media-search/searchBook', {
			templateUrl: './html/searchBook.html',
			controller: 'searchBookCtrl'
		})
		.otherwise({
			redirectTo: '/media-search'
		})
});