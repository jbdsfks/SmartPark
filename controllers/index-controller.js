/*
* 
* quaryAllpark () ——返回全部停车场的基本信息
*
* quaryByParkname ( name ) ——返回停车场name的基本信息
*
* quaryByStatus ( flag ) ——返回status为falg的停车场的基本信息
*/


app.controller ( 'indexController', function ( $scope, $location ) {

    var parks=[
    {
      "parkId": "1",
      "name": "南京理工大学-停车场",
      "address": "孝陵卫街200号",
      "longitude": "118.8593420000",
      "latitude": "32.0369070000",
      "distance": "49",
      "free": "20",
      "fullNum": "80",
      "size": "100",
      "price": "10.00",
      "phone": "025-82617371",
      "managerid":"1"
    },
    {
      "parkId": "2",
      "name": "南京理工大学医院-停车场",
      "address": "孝陵卫街200号南京理工大学",
      "longitude": "118.8583120000",
      "latitude": "32.0363550000",
      "distance": "38",
      "free": "5",
      "fullNum": "95",
      "size": "100",
      "price": "20.00",
      "phone": "025-98136731",
      "managerid":"2"
    },
    {
      "parkId": "3",
      "name": "南京理工大学-地上停车场",
      "address": "孝陵卫街200号",
      "longitude": "118.8593640000",
      "latitude": "32.0349920000",
      "distance": "27",
      "free": "40",
      "fullNum": "60",
      "size": "100",
      "price": "2.00",
      "phone": "025-98318633",
      "managerid":"3"
    },
    {
      "parkId": "4",
      "name": "胜利村路-占道停车场",
      "address": "胜利村路后标营路",
      "longitude": "118.8434980000",
      "latitude": "32.0320250000",
      "distance": "97",
      "free": "70",
      "fullNum": "30",
      "size": "100",
      "price": "8.00",
      "phone": "025-86472464",
      "managerid":"4"
    },
    {
      "parkId": "5",
      "name": "钟山花园城水居小区-地上停车场",
      "address": "龙宫路附近",
      "longitude": "118.8557100000",
      "latitude": "32.0375150000",
      "distance": "76",
      "free": "20",
      "fullNum": "80",
      "size": "100",
      "price": "5.00",
      "phone": "025-23256944",
      "managerid":"5"
    },
    {
      "parkId": "6",
      "name": "钟山花园城水居小区-地上停车场",
      "address": "龙宫路附近",
      "longitude": "118.8557100000",
      "latitude": "32.0375150000",
      "distance": "76",
      "free": "20",
      "fullNum": "80",
      "size": "100",
      "price": "5.00",
      "phone": "025-23256944",
      "managerid":"7"
    },
    {
      "parkId": "7",
      "name": "钟山花园城水居小区-地上停车场",
      "address": "龙宫路附近",
      "longitude": "118.8557100000",
      "latitude": "32.0375150000",
      "distance": "76",
      "free": "20",
      "fullNum": "80",
      "size": "100",
      "price": "5.00",
      "phone": "025-23256944",
      "managerid":"8"
    },
    {
      "parkId": "8",
      "name": "钟山花园城水居小区-地上停车场",
      "address": "龙宫路附近",
      "longitude": "118.8557100000",
      "latitude": "32.0375150000",
      "distance": "76",
      "free": "20",
      "fullNum": "80",
      "size": "100",
      "price": "5.00",
      "phone": "025-23256944",
      "managerid":"8"
    },
    {
      "parkId": "9",
      "name": "钟山花园城水居小区-地上停车场",
      "address": "龙宫路附近",
      "longitude": "118.8557100000",
      "latitude": "32.0375150000",
      "distance": "76",
      "free": "20",
      "fullNum": "80",
      "size": "100",
      "price": "5.00",
      "phone": "025-23256944",
      "managerid":"10"
    },
    {
      "parkId": "10",
      "name": "钟山花园城水居小区-地上停车场",
      "address": "龙宫路附近",
      "longitude": "118.8557100000",
      "latitude": "32.0375150000",
      "distance": "76",
      "free": "20",
      "fullNum": "80",
      "size": "100",
      "price": "5.00",
      "phone": "025-23256944",
      "managerid":"5"
    },
    {
      "parkId": "11",
      "name": "钟山花园城水居小区-地上停车场",
      "address": "龙宫路附近",
      "longitude": "118.8557100000",
      "latitude": "32.0375150000",
      "distance": "76",
      "free": "20",
      "fullNum": "80",
      "size": "100",
      "price": "5.00",
      "phone": "025-23256944",
      "managerid":"7"
    },
    {
      "parkId": "12",
      "name": "钟山花园城水居小区-地上停车场",
      "address": "龙宫路附近",
      "longitude": "118.8557100000",
      "latitude": "32.0375150000",
      "distance": "76",
      "free": "20",
      "fullNum": "80",
      "size": "100",
      "price": "5.00",
      "phone": "025-23256944",
      "managerid":"8"
    },
    {
      "parkId": "13",
      "name": "钟山花园城水居小区-地上停车场",
      "address": "龙宫路附近",
      "longitude": "118.8557100000",
      "latitude": "32.0375150000",
      "distance": "76",
      "free": "20",
      "fullNum": "80",
      "size": "100",
      "price": "5.00",
      "phone": "025-23256944",
      "managerid":"8"
    },
    {
      "parkId": "14",
      "name": "钟山花园城水居小区-地上停车场",
      "address": "龙宫路附近",
      "longitude": "118.8557100000",
      "latitude": "32.0375150000",
      "distance": "76",
      "free": "20",
      "fullNum": "80",
      "size": "100",
      "price": "5.00",
      "phone": "025-23256944",
      "managerid":"10"
    }];
   
    $scope.currentPage = 0;
    $scope.eachPage = 5;
    $scope.data = parks;
    $scope.rate = 200;
    var length = parseInt ( $scope.data.length/$scope.eachPage ) ;
    $scope.totalPage =  ( $scope.data.length%$scope.eachPage  ==  0 ) ?  ( length-1 ) :length;
    $scope.divList = function ( page ) {
       if ( page  ==  0 ) {
        $scope.currentPage = 0;
       }else if ( page ) {
        $scope.currentPage += page;
       }else {

       }
       var length = $scope.data.length;
       var start = $scope.currentPage * $scope.eachPage;
       var end =  ( start + $scope.eachPage > length ) ? length: start + $scope.eachPage;
       $scope.list = $scope.data.slice ( start,end ) ;
    }
    init () ;

    $scope.divList () ;
   
} ) ;
