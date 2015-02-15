'use strict';

angular.module('phocket.directive.tag', ['phocket.service.albums'])

.directive('tag', function (AlbumsService, $rootScope) {
    return {
        restrict: 'E',
		templateUrl: 'directives/tag/tag.tpl.html',
		scope: {
			tag: '='
		},
		link: function (scope) {
			if (scope.tag.tag === true && scope.tag.value === undefined) {
				AlbumsService.get(scope.tag.id).then(
					function (album) {
						scope.tag.value = album.name;
					},
					function () {
						$rootScope.$broadcast('noConnection');
					}
				);
			}
		}
    };
});
