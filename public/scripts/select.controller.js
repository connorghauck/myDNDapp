angular.module('dndApp')
       .controller('SelectController', SelectController);

function SelectController($http, $location) {
    console.log('SelectController loaded');
    var ctrl = this;

    ctrl.select = function() {
        console.log('selecting character');
        $http.post('/select', {
            username: ctrl.username,
            password: ctrl.password
        }).then(function(){
            $location.path('/home');
        }, function(error) {
            console.log('error registering', error);
        });
    };
}
