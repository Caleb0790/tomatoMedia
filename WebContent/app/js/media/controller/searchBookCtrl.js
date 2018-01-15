/**
 * Controleur pour la recherche de livres
 */
angular.module('media').controller('searchBookCtrl', ['$scope', 'mediaService', function($scope, mediaService) {
	$scope.list = [];
	console.log('controller for books');
	mediaService.getBooks().then(function(BookList) {
		$scope.list = BookList;
		console.log('Book list loaded !');
	});
}]);
