angular.module('parkingRecords').factory('ParkingRecords',['$resource', function ($resource) {
    return $resource('/api/parkingRecord/:parkId',{
    	parkId: '@park'
    },{

    });
}]);
