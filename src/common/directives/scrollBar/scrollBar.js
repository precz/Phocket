'use strict';

angular.module('phocket.directive.scrollBar', [])

.directive('scrollBar', function ($anchorScroll) {
    return {
        restrict: 'E',
		templateUrl: 'directives/scrollBar/scrollBar.tpl.html',
		scope: {
			title: '=title'
		},
		link: function (scope) {
	        scope.gotoTop = function () {
	          $anchorScroll();
	        };
	      }
    };
});
