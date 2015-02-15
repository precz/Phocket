'use strict';

angular.module('phocket.home')

.controller('HomeController', function ($scope, PopularService, $rootScope) {

	$scope.isWorking = false;

	$scope.refresh = function (more) {
    if ($scope.isWorking === true) {
      return;
    }

    $scope.isWorking = true;
    PopularService.get().then(
      function (photos) {
        $scope.popular = photos;
        $scope.isWorking = false;
      },
      function () {
        $rootScope.$broadcast('noConnection');
        $scope.isWorking = false;
      }
    );
  };

  $scope.refresh();
});
