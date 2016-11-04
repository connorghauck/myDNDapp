angular.module('dndApp')
       .controller('SheetController', SheetController);

function SheetController($http, $location) {
    console.log('SheetController loaded');
    var ctrl = this;

    $http.get('/alignments').then(function(response){
        console.log('hello', response);
        ctrl.alignments = response.data;
    });

    $http.get('/races').then(function(response){
        console.log('getting races', response);
        ctrl.races = response.data;
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
