/**
 * Controleur pour la recherche
 */
angular.module('media').controller('searchCtrl', ['$scope', 'media', function($scope, media) {
	//$scope.list = [];

		$scope.list = media;

}])