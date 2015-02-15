'use strict';

angular.module('phocket.directive.noData', [])

.directive('noData', function () {
    return {
        restrict: 'E',
		templateUrl: 'directives/noData/noData.tpl.html',
		scope: {
			refresh: '&'
		}
    };
});
