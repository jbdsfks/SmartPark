angular.module('users').factory('Users',['$resource', function ($resource) {
    return $resource('user/id/:userId/', {
        userId: '@uid'
    }, {
        update: {
            method: 'PUT'
            param:{
                username:'@username',
                password:'@password'
            }
        },
        read: {
        	method:'GET'
        	param:{
                username:'@username'
            }
        }
    });

}]);
