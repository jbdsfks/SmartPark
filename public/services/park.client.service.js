angular.module('parks').factory('Parks',['$resource', function ($resource) {
    return $resource('api/parks/:parkId', {
        parkId: '@parkId'
    }, {
        update: {
            method: 'PUT'
            param:{
                parkid:'@parkid',
                parkname:'@parkname',
                parksize:'@carnum',
                parkprice:'@price',
                parkphone:'@phone',
                parkaddress:'@address',
                parkfree:'@free'
            }
        },
        read: {
            method: 'GET',
            param:{
                owner:'@parkowner'
            }
        }
    });

}]);
