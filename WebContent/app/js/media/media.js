angular.module('media', ['ngRoute']).config(function($routeProvider) {
	console.log('aaa');
	$routeProvider
		.when('/home', {
			templateUrl: './html/home.html'
		})
		.when('/media-search', {
			templateUrl: './html/search.html',
			controller: 'searchCtrl',
			resolve: {
				media: function(mediaService){
					return mediaService.getAll();
				}
			}
		})
		.when('/media-search/searchDVD', {
			templateUrl: './html/search.html',
			controller: 'searchCtrl',
			resolve: {
				media: function(mediaService){
					return mediaService.getDvds();
				}
			}
		})
		.when('/media-search/searchBook', {
			templateUrl: './html/search.html',
			controller: 'searchCtrl',
			resolve: {
				media: function(mediaService){
					return mediaService.getBooks();
				}
			}
		})
		.when('/media-search/searchCD', {
			templateUrl: './html/search.html',
			controller: 'searchCtrl',
			resolve: {
				media: function(mediaService){
					return mediaService.getCds();
				}
			}
		})
		.when('/edit/:id', {
			templateUrl: './html/modif.html'
		})
		.otherwise({
			redirectTo: '/media-search'
		})
});