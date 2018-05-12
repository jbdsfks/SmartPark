angular.module('users').factory('Login',['$resource', function ($resource) {
    return $resource('signin',{

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