'use strict';

angular.module('phocket.service.popular', [])

.factory('PopularService', function ($http, $q, conf) {
	
	function updatePhotos (array, photos, offset) {
		switch (true) {
			//When first fetch
	        case array.length === 0:
	            array = photos;
	            break;
	        //When no update
	        case offset !== true && photos[0].id === array[0].id:
	        	break;
	        //when new data avaliable
	        case offset !== true && photos[0].id !== array[0].id:
	            array = photos;
              break;
	        //When fetch more
	        default:
	            array = array.concat(photos);
	            break;
		}
		return array;
	}

    return {
    	get: function (detailed, offset) {
    		var self = this,
    			params = {
   					client_id: conf.client_id,
   					detailed: true
   				};

    		if (self.photos === undefined) {
    			self.photos = [];
    		}

        if (detailed !== undefined) {
          params.detailed = true;
          params.includeAlbums = true;
        }

    		if (offset !== undefined) {
    			params.offset = self.photos.length;
    		}

    		return $q(function (resolve, reject) {
    			$http({
    				method: 'GET',
    				url: 'https://www.eyeem.com/api/v2/photos/popular',
    				params: params
   				}).success(function (data) {
            if (detailed !== true) {
              return resolve(data.photos.items);
            }
   					self.photos = updatePhotos(
   						self.photos,
   						data.photos.items,
   						offset
   					);
   					resolve(self.photos);
   				})
   				.error(reject);
    		});
    	},

      getDetailed: function (offset) {
        return this.get(true, offset);
      }

    };
});
