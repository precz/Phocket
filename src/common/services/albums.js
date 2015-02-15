'use strict';

angular.module('phocket.service.albums', [])

.factory('AlbumsService', function ($http, $q, conf) {

    return {
    	get: function (id, detailed) {
    		var self = this,
    			params = {
   					client_id: conf.client_id,
   					detailed: false
   				};

        if (detailed !== undefined) {
          params.detailed = true;
        }

    		return $q(function (resolve, reject) {
    			$http({
    				method: 'GET',
    				url: [
              'https://www.eyeem.com/api/v2/albums',
              id
            ].join('/'),
    				params: params
   				}).success(function (data) {
            resolve(data.album);
   				})
   				.error(reject);
    		});
    	},

      getDetailed: function (id) {
        return this.get(id, true);
      }

    };
});
