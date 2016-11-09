angular.module('dndApp')
       .controller('HomeController', HomeController);

function HomeController($http, $location, CharacterService) {
    console.log('HomeController loaded');
    var ctrl = this;
    ctrl.character = [];
    $http.get('/characters').then(function(response){
        response.data.forEach(function (character){
            ctrl.character.push(character);
        });
    });
    
    ctrl.updateSelector = function(){
        CharacterService.currentlySelectedCharacter = ctrl.characters;
        $location.path('/update');
    }
}
