angular.module('users').factory('Login',['$resource', function ($resource) {
    return $resource('signIn',{
    },{
        login:{
            method:'POST',
            param:{
                username:'@username',
                password:'@password'
            }
        }
    });
}]);