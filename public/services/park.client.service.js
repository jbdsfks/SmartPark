angular.module('parks').factory('Parks',['$resource', function ($resource) {
    return $resource('api/parks/:parkId', {
        parkId: '@parkId'
    }, {
        update: {
            method: 'PUT'
        },
        delete:{
            method: 'delete'
        }
    });

}]);