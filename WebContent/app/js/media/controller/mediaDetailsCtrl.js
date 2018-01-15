/**
 * Controleur pour la fiche details
 */
angular.module('media').controller('mediaDetailsCtrl', ['$scope', '$routeParams', 'mediaService', function($scope, $routeParams, mediaService) {
	$scope.media = undefined;
	var mediaId = $routeParams.id;
	console.log(mediaId);
	mediaService.getOne(mediaId).then(function(media) {
		$scope.media = media;
	})
}]);
