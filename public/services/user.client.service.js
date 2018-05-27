angular.module('users').factory('Users',['$resource', function ($resource) {
    return $resource('/api/user/:userId/', {
        userId: '@uid'
    }, {
        update: {
            method: 'PUT',
            param:{
                username:'@username',
                password:'@password'
            }
        }
        // read: {
        // 	method:'GET',
        // 	param:{
        //         _uid:'@username'
        //     }
        // }
    });

}]);
