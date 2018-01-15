/**
 * Controleur pour la recherche de livres
 */
angular.module('media').controller('searchBookCtrl', ['$scope', 'mediaService', function($scope, mediaService) {
	$scope.books = [];
	console.log('controller for books');
	mediaService.getBooks().then(function(BookList) {
		$scope.books = BookList;
		console.log('Book list loaded !');
	});
}]);
