'use strict';

angular.module('phocket.directive.fetchMoreBar', [])

.directive('fetchMoreBar', function ($window, $state) {
    return {
        restrict: 'E',
		templateUrl: 'directives/fetchMoreBar/fetchMoreBar.tpl.html',
		scope: {
			isWorking: '=',
			elements: '=',
			fetchMore: '&'
		}
    };
});
