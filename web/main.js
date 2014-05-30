var CenterScout = angular.module('CenterScout', ['ngRoute']);

CenterScout.config(function($routeProvider) {
    $routeProvider.when('/home2', {
        controller: 'HomeController',
        templateUrl: '/views/home.html'
    });

    $routeProvider.when('/home', {
        controller: 'HomeController',
        templateUrl: '/views/home.html'
    });

    $routeProvider.when('/class', {
        controller: 'ClassController',
        templateUrl: '/views/class.html'
    });

    $routeProvider.when('/', {
        controller: 'AboutController',
        templateUrl: '/views/about.html'
    });

    $routeProvider.when('/404', {
        controller: 'ErrorController',
        templateUrl: '/views/404.html'
    });

    $routeProvider.otherwise({
        redirectTo: '/404'
    });
});
