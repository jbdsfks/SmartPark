angular.module('parks').factory('Parks', ['$resource', function ($resource) {
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

    return $resource('/api/parks/:ownerId', {
        ownerId: '@owner'
    }, {
        update: {
            method: 'PUT',
            param: {
                _id: '@_id',
                parkname: '@parkname',
                carnum: '@carnum',
                price: '@price',
                phone: '@phone',
                address: '@address',
                freenum: '@freenum'
            }
        },
        create: {
            method: 'POST',
            param: {
                parkname: '@parkname',
                carnum: '@carnum',
                price: '@price',
                phone: '@phone',
                address: '@address'
            }
        },
        findParkByOwnerId:{
            method: 'get'
        }
    });

    // return parkByOwner;

}]);
