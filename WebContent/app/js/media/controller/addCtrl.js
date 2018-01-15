/**
 * Controleur pour l'ajout de media
 */
angular.module('media').controller('addCtrl', ['$scope', 'mediaService', function($scope, mediaService) {
	var media = {};
	$scope.createMedia = function() {
		while (media.id) {
			media.id++;
		}
		return mediaService.addMedia($scope.media).then(function(media) {
			return media;
		})
	}
}])