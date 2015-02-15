'use strict';

angular.module('phocket.home')

.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        views: {
            "main": {
                controller: 'HomeController',
                templateUrl: 'home/home.tpl.html'
            }
        },
        data: {
            title: 'Phocket'
        }
    });
});
