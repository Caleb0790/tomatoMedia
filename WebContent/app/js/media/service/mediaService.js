angular.module('media').service('mediaService', ['$http', function($http){
	var mediaPromise= $http.get('http://192.168.1.16:8090/resource/media.recherche', {});
	//var mediaDvdPromise= $http.get('http://192.168.1.16:8090/resource/media.recherche', {params:{page:15}});
	
	
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
	
	var alreadyLoadedMedia = {} ;
	
	this.getOne = function(mediaId){
		if(!alreadyLoadedMedia[mediaId]){
			alreadyLoadedMedia[mediaId] = $http.get('http://192.168.1.16:8090/resource/media.accession/'+mediaId);
		}
		return alreadyLoadedMedia[mediaId].then(function(response){
			return response;
		})
	}
}])