'use strict';

angular.module('phocket.directive.navigationBar', [])

.directive('navigationBar', function ($window, $state) {
    return {
        restrict: 'E',
		templateUrl: 'directives/navigationBar/navigationBar.tpl.html',
		scope: {
			title: '=',
			isWorking: '=',
			refresh: '&'
		},
		link: function (scope) {
			scope.back = function () {
				$window.history.back();
			};
		}
    };
});
