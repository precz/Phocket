'use strict';

angular.module('phocket')

.controller('AppCtrl', function ($rootScope, $scope, $timeout) {

    // handling UI Bootstrap Collapse plugin
    $scope.isCollapsed = true;

    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        if (angular.isDefined(toState.data.title)) {
            $scope.title = toState.data.title;
        }
    });
});
