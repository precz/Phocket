'use strict';

angular.module('phocket.directive.categoryButton', [])

.directive('categoryButton', function ($window, $state, $timeout) {

	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}

	function getRatio (width, height) {
		return height / width;
	}

	function getImageUrl (width, photo) {
		var height = parseInt(width * getRatio(photo.width, photo.height), 10);

		return [
				'http://www.eyeem.com/thumb/h',
				height,
				photo.file_id
			].join('/');
	}

    return {
        restrict: 'E',
		templateUrl: 'directives/categoryButton/categoryButton.tpl.html',
		scope: {
			photos: '=',
			link: '=',
			title: '='
		},
		link: function (scope, element) {
			var timeout,
				image = new Image();

			scope.photo = getImageUrl(
				window.innerWidth * window.devicePixelRatio,
				scope.photos[0]
			);

			function setTimeout () {
				timeout = $timeout(function () {
					var index = getRandomInt(scope.photos.length),
						src = getImageUrl(
							window.innerWidth * window.devicePixelRatio,
							scope.photos[index]
						);
					if (image.src === src) {
						//The same image would not trigger load event.
						return setTimeout();
					}
			    	image.src = src;
			    }, (getRandomInt(9) + 1) * 1000);
			}

			function updateCoverImage () {
				scope.$apply(function () {
					scope.photo =  image.src;
					setTimeout();
				});
			}

			image.addEventListener('load', updateCoverImage);
			image.addEventListener('error', setTimeout);

			element.on('$destroy', function() {
		      	$timeout.cancel(timeout);
		      	image.removeEventListener('load', updateCoverImage);
		      	image.removeEventListener('error', setTimeout);
		    });

		    setTimeout();
		}
    };
});