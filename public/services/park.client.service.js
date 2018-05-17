angular.module('parks').factory('Parks',['$resource', function ($resource) {
    // var parkById = $resource('/api/parks/:parkId', {
    //     parkId: '@_id'
    // }, {
    //     update: {
    //         method: 'PUT',
    //         param:{
    //             parkid:'@parkid',
    //             parkname:'@parkname',
    //             parksize:'@carnum',
    //             parkprice:'@price',
    //             parkphone:'@phone',
    //             parkaddress:'@address',
    //             parkfree:'@free'
    //         }
    //     }
    // });

    var parkByOwner = $resource('/api/parks/:ownerId', {
        ownerId: '@owner'
    }, {
        update: {
            method: 'PUT',
            param:{
                parkid:'@parkid',
                parkname:'@parkname',
                parksize:'@carnum',
                parkprice:'@price',
                parkphone:'@phone',
                parkaddress:'@address',
                parkfree:'@free'
            }
        }
    });

    return parkByOwner;

}]);
