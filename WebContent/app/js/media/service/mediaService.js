angular.module('media').service('mediaService', ['$http', function($http){
	
	var host = 'http://127.0.0.1';
	var port = '8090';
	var mediaPromise= $http.get(host +':' + port + '/resource/media.recherche', {});
	//var mediaDvdPromise= $http.get('http://192.168.1.14:8090/resource/media.recherche', {params:{page:15}});
	//var mediaModif= $http.post('http://192.168.1.14:8090/resource/media.modification', {});
	
	/*Recherche*/
	this.getAll = function(){
		return mediaPromise.then( function(response){
			return response.data;
		})
	}
	
	this.reload = function() {
		mediaPromise = $http.get(host +':' + port + '/resource/media.recherche', {});
		return mediaPromise;
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
			alreadyLoadedMedia[mediaId] = $http.get(host +':' + port + '/resource/media.accession/', {params: {id: mediaId}});
		}
		return alreadyLoadedMedia[mediaId].then(function(response){
			console.log(response.data);
			return response.data;
		})
	}
	
	this.editMedia = function(media) {
		return $http.post(host +':' + port + '/resource/media.modification', media, {}).then(function(response){
			//reload();
			return response.data;
		});
	}
	
	this.addMedia = function(media) {
		return $http.post(host +':' + port + '/resource/media.creation', media, {}).then(function(response) {
			//reload();
			return response.data;
		})
	}
}])