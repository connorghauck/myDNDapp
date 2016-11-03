angular.module('dndApp')
       .controller('SheetController', SheetController);

function SheetController($http, $location) {
    console.log('SheetController loaded');
    var ctrl = this;

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
