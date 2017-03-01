var myApp = angular.module('myApp');
myApp.service('SpotifySearchService', function ($http) {
    this.spotifySearch = function (searchTerm) {
        return $http.get("https://api.spotify.com/v1/search?q="+searchTerm+"&type=track,artist&market=US");
    }
});