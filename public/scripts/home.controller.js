angular.module('dndApp')
       .controller('HomeController', HomeController);

function HomeController($http, $location) {
    console.log('HomeController loaded');
    var ctrl = this;
    ctrl.character = [];
    $http.get('/characters').then(function(response){
        console.log('home controller grabbing the fourth character in the db: ', response.data[4]);
        console.log('ctrl.character prior to response.data setting: ', ctrl.character);
        response.data.forEach(function (character){
            ctrl.character.push(character.charname);
        });
        console.log('ctrl.character: ', ctrl.character);
    });

}