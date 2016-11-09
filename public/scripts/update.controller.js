angular.module('dndApp')
       .controller('UpdateController', UpdateController);

function UpdateController($http, $location) {
    console.log('UpdateController loaded');
    var ctrl = this;

    $http.get('/characters').then(function(response){
        console.log('getting character' response);
        ctrl.character = response.data;
    });

    $http.get('/alignments').then(function(response){
        console.log('hello', response);
        ctrl.alignments = response.data;
    });

    $http.get('/races').then(function(response){
        console.log('getting races', response);
        ctrl.races = response.data;
    });

    $http.get('/charclass').then(function(response){
        console.log('getting classes', response);
        ctrl.classes = response.data;
    });

    ctrl.sheet = function() {
        console.log('logging in');
        $http.put('/charactersheet', ctrl.character
        ).then(function(response){
            $location.path('/home');
        }, function(error) {
            console.log('error workin', error);
        });
    };
}
