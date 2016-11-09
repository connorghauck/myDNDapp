angular.module('dndApp')
       .controller('UpdateController', UpdateController);

function UpdateController($http, $location, CharacterService) {
    console.log('UpdateController loaded');
    var ctrl = this;
    var i = 0;
    ctrl.selectedId = CharacterService.currentlySelectedCharacter;
console.log('WHAT THE FUCJ', ctrl.selectedId);
    ctrl.sheet = function() {
        console.log('logging in');
        $http.put('/update/' + ctrl.selectedId.id, ctrl.selectedId
        ).then(function(response){
            $location.path('/home');
        }, function(error) {
            console.log('error workin', error);
        });
    };
}
