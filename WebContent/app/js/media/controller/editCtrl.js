/**
 * Controleur pour la modification d'un media
 */
angular.module('media').controller('editCtrl', ['$scope', '$routeParams', 'mediaService', function($scope, $routeParams, mediaService) {
	var media = getOne($routeParams.id);
	mediaService.editMedia(media);
}])