var CenterScout = angular.module('CenterScout', []);

CenterScout.config(function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'HomeController',
        templateUrl: '/views/home/home.html'
    });

    $routeProvider.when('/class', {
        controller: 'ClassController',
        templateUrl: '/views/class/class.html'
    });

    $routeProvider.when('/about', {
        controller: 'AboutController',
        templateUrl: '/views/about/about.html'
    });

    $routeProvider.otherwise({
        redirectTo: '/404'
    });
});
