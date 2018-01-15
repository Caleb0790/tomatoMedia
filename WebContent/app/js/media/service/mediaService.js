angular.module('media').service('mediaService', ['$http', function($http){
	var mediaPromise= $http.get('http://192.168.1.14:8090/resource/media.recherche', {});
	//var mediaDvdPromise= $http.get('http://192.168.1.14:8090/resource/media.recherche', {params:{page:15}});
	//var mediaModif= $http.post('http://192.168.1.14:8090/resource/media.modification', {});
	
	/*Recherche*/
	this.getAll = function(){
		return mediaPromise.then( function(response){
			return response.data;
		})
	}
	
	this.getDvds = function(){
		return mediaPromise.then( function(response){
			var dvds= response.data.filter(element => element.type == 'DVD');
			return dvds;
		})
	}
	
	this.getBooks = function(){
		return mediaPromise.then( function(response){
			var livres= response.data.filter(element => element.type == 'Livre');
			return livres;
		})
	}
	
	this.getCds = function(){
		return mediaPromise.then( function(response){
			var cds= response.data.filter(element => element.type == 'CD');
			return cds;
		})
	}
	
	var alreadyLoadedMedia = {} ;
	
	this.getOne = function(mediaId){
		if(!alreadyLoadedMedia[mediaId]){
			alreadyLoadedMedia[mediaId] = $http.get('http://192.168.1.14:8090/resource/media.accession/', {params: {id: mediaId}});
		}
		return alreadyLoadedMedia[mediaId].then(function(response){
			console.log(response.data);
			return response.data;
		})
	}
	
	this.editMedia = function(media) {
		media.titre = $scope.media.titre;
		media.auteur = $scope.media.auteur;
		media.type = $scope.media.type;
		var mediaModif= $http.post('http://192.168.1.14:8090/resource/media.modification', media, {});
		mediaModif.then(function() {
			console.log('Edit success !');
		}, function() {
			console.log('Edit failed !');
		})
	}
}])