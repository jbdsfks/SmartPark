angular.module('users').factory('Register',['$resource', function ($resource) {
    return $resource('signup',{
    },{
        register:{
            method:'POST',
            param:{
                username:'@username',
                password:'@password',
                type:'@type'
            }
        }
    });
}]);