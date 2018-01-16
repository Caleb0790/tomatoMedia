/**
 * Controleur pour la modification d'un media
 */
angular.module('media').controller('editCtrl', ['$scope','$routeParams', 'mediaService', function($scope, $routeParams, mediaService) {
	var media = {};
	mediaService.getOne($routeParams.id).then(function(media) {
		$scope.media = media;
	});
	$scope.submitForm = function() {
		return mediaService.editMedia($scope.media)
				.then(
					function(media) {
						mediaService.reload();
						return media;
				});
	}
}])