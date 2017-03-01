// Define the `SearchMusicApp` module
var myApp = angular.module('myApp', []);

// Define the `PhoneListController` controller on the `SearchMusicApp` module
myApp.controller('SearchMusicController', function ($scope, $http, $localStorage, SpotifySearchService) {
	$scope.artists = [];
	$scope.tracks = [];
	$scope.search = function (){
		var searchTerm = $scope.searchText;
		if ($localStorage.containsKey(searchTerm)) {
			$scope.artists = $localStorage.getObject(searchTerm);
		} else {
			SpotifySearchService.spotifySearch(searchTerm).then(function(response) {
					$scope.artists = response.data.artists.items;
					$localStorage.setObject(searchTerm, $scope.artists);
			});	
		}
	};
});