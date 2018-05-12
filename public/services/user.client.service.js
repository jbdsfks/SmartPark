angular.module('users').factory('Users',['$resource', function ($resource) {
    return $resource('user/id/:userId/', {
        userId: '@uid'
    }, {
        update: {
            method: 'PUT'
        }
    });

}]);