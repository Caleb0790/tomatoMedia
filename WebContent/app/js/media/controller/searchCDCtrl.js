/**
 * Controleur pour la recherche de CD
 */
angular.module('media').controller('searchCDCtrl', ['$scope', 'mediaService', function($scope, mediaService) {
	$scope.list = [];
	console.log('controller for CDs');
	mediaService.getAll().then(function(mediaList) {
		$scope.list = mediaList;
		console.log('CD list loaded !');
	});
}]);