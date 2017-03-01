describe('myApp', function () {

  beforeEach(module('myApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('find something', function () {
		it('should display search results', function () {
			var $scope = {};
			var controller = $controller('SearchMusicController', { $scope: $scope });
			$scope.x = 1;
			$scope.y = 2;
			$scope.sum();
			expect($scope.z).toBe(3);
		});	
	});

});