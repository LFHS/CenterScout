CenterScout.config(function($routeProvider) {
    $routeProvider.when('/home', {
        controller: 'HomeController',
        templateUrl: 'views/home.html'
    });

    $routeProvider.when('/login', {
        controller: 'LoginController',
        templateUrl: 'views/login.html'
    });

    $routeProvider.when('/settings', {
        controller: 'SettingsController',
        templateUrl: 'views/settings.html'
    });

    $routeProvider.when('/home/course/:course', {
        controller: 'HomeController',
        templateUrl: 'views/home.html'
    });

    $routeProvider.when('/class', {
        controller: 'ClassController',
        templateUrl: 'views/class.html'
    });

    $routeProvider.when('/about', {
        controller: 'AboutController',
        templateUrl: 'views/about.html'
    });

    $routeProvider.when('/404', {
        controller: 'ErrorController',
        templateUrl: 'views/404.html'
    });

    $routeProvider.otherwise({
        redirectTo: '/home'
    });


});

if(isCordova())
    $('body').addClass('cordova');

$('body').nodoubletapzoom();
