/**
 * Controleur pour la recherche de DVD
 */
angular.module('media').controller('searchDVDCtrl', ['$scope', 'mediaService', function($scope, mediaService) {
	$scope.dvds = [];
	console.log('controller for DVDs');
	mediaService.getDvds().then(function(dvds) {
		$scope.dvds = dvds;
		console.log('DVD list loaded !');
	});
}]);