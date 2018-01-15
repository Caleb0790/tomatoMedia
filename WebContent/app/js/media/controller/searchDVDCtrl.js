/**
 * Controleur pour la recherche de DVD
 */
angular.module('media').controller('searchDVDCtrl', ['$scope', 'mediaService', function($scope, mediaService) {
	$scope.list = [];
	console.log('controller for DVDs');
	mediaService.getDvds().then(function(dvds) {
		$scope.list = dvds;
		console.log('DVD list loaded !');
	});
}]);