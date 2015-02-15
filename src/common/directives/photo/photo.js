'use strict';

angular.module('phocket.directive.photo', ['phocket.directive.tag'])

.directive('photo', function () {

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

	function serchAlbum (id, albums) {
		var i,
			length = albums.length;

		for (i = 0; i < length; i += 1) {
			if (albums[i].id === id) {
				return albums[i].name;
			}
		}
	}

    return {
        restrict: 'E',
		templateUrl: 'directives/photo/photo.tpl.html',
		scope: {
			photo: '=photo'
		},
		link: function (scope) {
			var thumbUrlArray = scope.photo.user.thumbUrl.split('/'),
				tags = scope.photo.description.split(' '),
				i,
				id;

			scope.resizedImage = getImageUrl(
				window.innerWidth * window.devicePixelRatio,
				scope.photo
			);
			scope.resizedUserThumb = [
				'http://www.eyeem.com/thumb/sq',
				50 * window.devicePixelRatio,
				thumbUrlArray[thumbUrlArray.length - 1]
			].join('/');

			scope.tags = [];

			for (i = 0; i < tags.length; i += 1) {
				if (/[a]\:\d*/.exec(tags[i])) {
					id = /\:[\d]*/.exec(tags[i])[0].replace(':', '');
					scope.tags.push({
						tag: true,
						id: id,
						value: serchAlbum(id, scope.photo.albums.items)
					});
				} else {
					scope.tags.push({
						value: tags[i],
						tag: false
					});
				}
			}
		}
    };
});
