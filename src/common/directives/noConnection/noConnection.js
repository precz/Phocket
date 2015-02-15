'use strict';

angular.module('phocket.directive.noConnection', [])

.controller('noConnectionController', function ($scope, $modalInstance) {
	$scope.close = function () {
    	$modalInstance.dismiss();
  	};
})

.directive('noConnection', function ($modal, $rootScope) {
    return {
        restrict: 'E',
		link: function () {
			var open = false;

			$rootScope.$on('noConnection', function () {
				if (open) {
					return;
				}
				open = true;
				$modal.open({
					templateUrl: 'directives/noConnection/noConnection.tpl.html',
					controller: 'noConnectionController'
				}).result.then(
					function () {
						open = false;
					},
					function () {
						open = false;
					}
				);
			});
			//$rootScope.$broadcast('noConnection');
		}
    };
});
