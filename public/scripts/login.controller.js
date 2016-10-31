angular.module('dndApp')
       .controller('LoginController', LoginController);

function LoginController($http, $location) {
    console.log('LoginController loaded');
    var ctrl = this;

    ctrl.login = function() {
        console.log('logging in');
        $http.post('/login', {
            username: ctrl.username,
            password: ctrl.password
        }).then(function(response){
            $location.path('/home');
        }, function(error) {
            console.log('error loggin in', error);
        });
    };
}
