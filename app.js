// Define the `SearchMusicApp` module
var myApp = angular.module('myApp', []);

// Define the `PhoneListController` controller on the `SearchMusicApp` module
myApp.controller('SearchMusicController', function ($scope, $http, SpotifySearchService) {
	$scope.artists = [];
	$scope.tracks = [];
	$scope.search = function (){
		var searchTerm = $scope.searchText;
		SpotifySearchService.spotifySearch(searchTerm).then(function(response) {
				$scope.artists = response.data.artists.items;
		});
	};
});