/**
 * Controleur pour l'ajout de media
 */
angular.module('media').controller('addCtrl', ['$scope', 'mediaService', function($scope, mediaService) {
	var media = {};
	$scope.createMedia = function() {
		return mediaService.addMedia($scope.media).then(function(media) {
			console.log('Creation success !')
			return media;
		})
	}
}])