/**
 * Controleur pour la recherche
 */
angular.module('media').controller('searchCtrl', ['$scope', 'mediaService', function($scope, mediaService) {
	$scope.list = [];
	mediaService.getAll().then(function(mediaList) {
		$scope.list = mediaList;
		console.log('List loaded !');
	});
}])