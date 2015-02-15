'use strict';

angular.module('phocket.popular')

.controller('PopularController', function ($scope, PopularService, $rootScope) {

  $scope.isWorking = false;

  $scope.refresh = function (more) {
    if ($scope.isWorking === true) {
      return;
    }

    $scope.isWorking = true;
    PopularService.getDetailed(more).then(
      function (photos) {
        $scope.photos = photos;
        $scope.isWorking = false;
      },
      function () {
        $rootScope.$broadcast('noConnection');
        $scope.isWorking = false;
      }
    );
  };
  
  $scope.more = function () {
    $scope.refresh(true);
  };

  $scope.refresh();
});
