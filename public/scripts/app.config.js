angular.module('dndApp').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.when('/home', {
        templateUrl: 'views/home.html',
    }).when('/sheet', {
        templateUrl: 'views/sheet.html',
        controller: 'SheetController as sheet'
    }).when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterController as register'
    }).otherwise({
        templateUrl: 'views/login.html',
        controller: 'LoginController as login'
    });
});
