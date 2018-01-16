/**
 * Test pour le contrôleur de la recherche de medias
 */
describe('searchCtrl', function() {
	var medias = 'http://192.168.1.15:8090/resource/media.recherche';
	var scope, ctrl, $httBackend;
	beforeEach(module('tomatoMedia'));
	beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
		$httpBackend = _$httpBackend_;
		$httpBackend.expectGET(medias).respond('La liste complète des medias.');
		scope = $rootScope.$new();
		ctrl = $controller('searchCtrl', {$scope: scope});
	}));
	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});
	it('should get media list from GBE\'s server', function() {
		expect(scope.list).toBeUndefined();
		$httpBackend.flush();
		expect(scope.list).toEqual(medias);
	});
})