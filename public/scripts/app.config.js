angular.module('dndApp').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.when('/home', {
        templateUrl: 'views/home.html',
    }).when('/select', {
        templateUrl: 'views/select.html',
        controller: 'SelectController as select'
    }).when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterController as register'
    }).otherwise({
        templateUrl: 'views/login.html',
        controller: 'LoginController as login'
    });
});
