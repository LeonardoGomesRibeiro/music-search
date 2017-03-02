describe('myApp', function () {

	beforeEach(module('myApp'));
	var SpotifySearchService;
	beforeEach(inject(function(_SpotifySearchService_) {
		SpotifySearchService = _SpotifySearchService_;
	}));

	beforeEach(inject(function ($rootScope, $controller, _SpotifySearchService_ ) {
		scope = $rootScope.$new();
		spotifyService = _SpotifySearchService_;
		createController = function() {
			return $controller('SearchMusicController', {
				$scope: scope,
				SpotifySearchService: spotifyService
			}); 
		};
	}));
	
	var service;
	var $httpBackend;
	var $localstorage;
	beforeEach(inject(function($injector) {
		service = $injector.get('SpotifySearchService');
		$httpBackend = $injector.get('$httpBackend');
		$localstorage = $injector.get('$localstorage');
		var url = "https://api.spotify.com/v1/search?q=Muse&type=track,artist&market=US";
		$httpBackend.when('GET', url).respond(["muse album 1"]);
	}));
	
	describe('spotify-service', function () {
		it('is defined', function () {			
			 expect(SpotifySearchService).toBeDefined();
		});	
		
		it('will return no results', function () {
			var controller = new createController();
			expect(scope).toBeDefined();
			expect(controller).toBeDefined();
			scope.searchText='Muse';	
			scope.search();
			expect(scope.artists).toBeDefined();
			expect(scope.artists.length).toBe(0);
		});
		
		it('will return one result', function(){
			service.spotifySearch('Muse').then(function(response){
				expect(response.data.length).toEqual(1);
			});
			$httpBackend.flush();
		});
		
		it('is defined localstorage', function(){
			expect($localstorage).toBeDefined();
		});
		
		it('will save string object in localstorage cache', function(){
			expect($localstorage).toBeDefined();
			$localstorage.set('key','test');
			expect($localstorage.containsKey('key')).toBeDefined();
			expect($localstorage.get('key')).toEqual('test');
		});
		
		it('will save json object in localstorage cache', function(){
			expect($localstorage).toBeDefined();
			$localstorage.setObject('keyObj', '{[{name:"muse"}]}');
			expect($localstorage.containsKey('keyObj')).toBeDefined();
			expect($localstorage.getObject('keyObj')).toEqual('{[{name:"muse"}]}');
		});
	});
});