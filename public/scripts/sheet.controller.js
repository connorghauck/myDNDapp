angular.module('dndApp')
       .controller('SheetController', SheetController);

function SheetController($http, $location) {
    console.log('SheetController loaded');
    var ctrl = this;

    $http.get('/alignments').then(function(response){
        console.log('getting alignments', response);
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
        $http.post('/charactersheet', ctrl.character
        ).then(function(response){
            $location.path('/home');
        }, function(error) {
            console.log('error workin', error);
        });
    };
}
