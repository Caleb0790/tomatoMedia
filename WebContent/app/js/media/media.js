angular.module('media', ['ngRoute']).config(function($routeProvider) {
	console.log('aaa');
	$routeProvider
		.when('/media-search', {
			templateUrl: './html/search.html',
			controller: 'searchCtrl'
		})
		.when('/media-search/:num', {
			templateUrl: './html/mediaDetails.html',
			controller: 'mediaDetailsCtrl'
		})
		.when('/media-search/searchBook', {
			templateUrl: './html/searchBook.html',
			controller: 'searchBookCtrl'
		})
		.when('/media-search/searchCD', {
			templateUrl: './html/searchCD.html',
			controller: 'searchCDCtrl'
		})
		.when('/media-search/searchDVD', {
			templateUrl: './html/searchDVD.html',
			controller: 'searchDVDCtrl'
		})
		.otherwise({
			redirectTo: '/media-search'
		})
});