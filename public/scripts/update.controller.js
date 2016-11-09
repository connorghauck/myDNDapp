angular.module('dndApp')
       .controller('UpdateController', UpdateController);

function UpdateController($http, $location, CharacterService) {
    console.log('UpdateController loaded');

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
    ctrl.selectedId = CharacterService.currentlySelectedCharacter;
    console.log(CharacterService.currentlySelectedCharacter);
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
