describe('myApp', function () {

  beforeEach(module('myApp'));

  var $controller;
  beforeEach(inject(function(_$controller_, $localstorage){
    $controller = _$controller_;
  }));

  describe('find artists', function () {
		it('should display search results', function () {
			var $scope = {};
			var $localstorage = {};
			var SpotifySearchService = {};
			$scope.searchText = 'Muse';
			var controller = $controller('SearchMusicController', { $scope: $scope, $localstorage:$localstorage, SpotifySearchService: SpotifySearchService });
			$scope.search();
			expect($scope.artists.length).toBe(1);
		});	
	});

});