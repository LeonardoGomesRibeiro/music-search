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

	describe('spotify-service', function () {
		it('is defined', function () {			
			 //expect(SpotifySearchService).toBeDefined();
		});	
		
		it('will return no results', function () {
			var controller = new createController();
			expect(scope).toBeDefined();
			expect(controller).toBeDefined();
			scope.search();
			expect(scope.artists).toBeDefined();
			expect(scope.artists.length).toBe(0);
		});
	});
});