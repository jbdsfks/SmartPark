angular.module('parkingrecords').factory('Parkingrecords',['$resource', function ($resource) {
    return $resource('/api/parkingRecord/:parkingRecordId',{
    	parkingRecordId: '@PKRid'
    },{
        readBypid: {
            method: 'GET',
            param:{
                parkid:'@pid'
            }
        },
        readBycid: {
            method: 'GET',
            param:{
                carid:'@carid'
            }
        },
        readBytime: {
            method: 'GET',
            param:{
                parkid:'@pid',
                time:'@time'
            }
        }
    });
}]);
