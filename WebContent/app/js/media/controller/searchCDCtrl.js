/**
 * Controleur pour la recherche de CD
 */
angular.module('media').controller('searchCDCtrl', ['$scope', 'mediaService', function($scope, mediaService) {
	$scope.list = [];
	console.log('controller for CDs');
	mediaService.getCds().then(function(cdsList) {
		$scope.list = cdsList;
		console.log('CD list loaded !');
	});
}]);