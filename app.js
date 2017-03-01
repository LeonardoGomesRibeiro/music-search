// Define the `SearchMusicApp` module
var myApp = angular.module('myApp', []);

// Define the `PhoneListController` controller on the `SearchMusicApp` module
myApp.controller('SearchMusicController', function SearchMusicController($scope, $http, $localstorage, SpotifySearchService) {
	$scope.artists = [];
	$scope.tracks = [];
	$scope.search = function (){
		var searchTerm = $scope.searchText;
		if ($localstorage.containsKey(searchTerm)) {
			$scope.artists = $localstorage.getObject(searchTerm);
		} else {
			SpotifySearchService.spotifySearch(searchTerm).then(function(response) {
					$scope.artists = response.data.artists.items;
					$localstorage.setObject(searchTerm, $scope.artists);
			});	
		}
	};
});