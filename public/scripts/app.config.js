angular.module('dndApp').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as home'
    }).when('/sheet', {
        templateUrl: 'views/sheet.html',
        controller: 'SheetController as sheet'
    }).when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterController as register'
    }).when('/update', {
        templateUrl: 'views/update.html',
        controller: 'UpdateController as update'
    }).otherwise({
        templateUrl: 'views/login.html',
        controller: 'LoginController as login'
    });
});
