angular.module('parkingRecords').factory('ParkingRecords',['$resource', function ($resource) {
    return $resource('/api/parkingRecords/park/:parkId',{
    	parkId: '@park'
    },{

    });
}]);
