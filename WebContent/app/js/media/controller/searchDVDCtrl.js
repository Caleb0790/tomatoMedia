/**
 * Controleur pour la recherche de DVD
 */
angular.module('media').controller('searchDVDCtrl', ['$scope', 'mediaService', function($scope, mediaService) {
	$scope.list = [];
	console.log('controller for DVDs');
	mediaService.getDvds().then(function(DVDsList) {
		$scope.list = DVDList;
		console.log('DVD list loaded !');
	});
}]);