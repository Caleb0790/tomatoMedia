/**
 * Controleur pour la fiche details
 */
angular.module('media').controller('mediaDetailsCtrl', ['$scope', '$routeParams', 'mediaService', function($scope, $routeParams, mediaService) {
	$scope.media = undefined;
	var mediaNum = $routeParams.num;
	console.log(mediaNum);
	mediaDetails.getOne(mediaNum).then(function(media) {
		$scope.media = media;
	})
}]);
