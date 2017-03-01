// Define the `SearchMusicApp` module
var myApp = angular.module('myApp', []);

// Define the `PhoneListController` controller on the `SearchMusicApp` module
myApp.controller('SearchMusicController', function ($scope, $http) {
	$scope.artists = [];
	$scope.tracks = [];
	$scope.search = function (){
		var searchTerm = $scope.searchText;
		$http.get("https://api.spotify.com/v1/search?q="+searchTerm+"&type=track,artist&market=US")
			.then(function(response) {
				$scope.artists = response.data.artists.items;
				$scope.tracks = response.data.tracks.items;
		});	
	};
});