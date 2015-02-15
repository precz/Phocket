'use strict';

angular.module('phocket.popular')

.config(function ($stateProvider) {
    $stateProvider.state('popular', {
        url: '/popular',
        views: {
            "main": {
                controller: 'PopularController',
                templateUrl: 'popular/popular.tpl.html'
            }
        },
        data: {
            title: 'Popular'
        }
    });
});
