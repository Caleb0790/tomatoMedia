angular.module('tomatoMedia').service('mediaService', ['$http', function($http){
	var mediaPromise= $http.get('http://192.168.1.16:8090/resource/media.recherche', {});

	this.getAll = function(){
		return mediaPromise.then( function(response){
			return response;
		})
	}
	
	var alreadyLoadedMedia = {} ;
	
	this.getOne = function(mediaId){
		
	}
}])