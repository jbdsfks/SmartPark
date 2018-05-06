/*
* 返回用户信息
* QuaryPassword(username)——密码
*
* 返回收费站信息
* QuaryStationId(username)——ID
* QuaryStationName(stationid)——名称
* QuaryStationFlow(stationid,time)——当天的车流量
* QuaryStationPhone(stationid)——联系方式
* QuaryStationIncome(stationid)——收费总额
* QuaryStationkAddress(stationid)——地址
* 
* QuaryRec(stationid)——返回全部出入记录
* 
* Save_Station(username,pasword,stationid,stationname,stationphone,stationaddress)——更改收费站admin信息，成功返回true
*/



app.controller('highwayController2',function($scope,$location){

	/*
	$scope.password=QuaryPassword($scope.username);

	$scope.stationid=QuaryStationId($scope.username);
	$scope.stationname=QuaryStationName($scope.stationid);
	$scope.stationphone=QuaryStationPhone($scope.stationid);
	$scope.parkaddress= QuaryStationkAddress($scope.stationid);
	$scope.flow=QuaryStationFlow($scope.stationid,$scope.time);
	$scope.income=QuaryStationIncome($scope.stationid);*/

	$scope.username=localStorage.user;
	$scope.password="123456";

	$scope.stationid="001";
	$scope.stationname="苏州新区收费站";
	$scope.stationphone="025-999999";
	$scope.stationaddress="江苏省苏州市姑苏区";
	$scope.flow="2000";
	$scope.income="7817281";

	$scope.time=getNowFormatDate();

	$scope.divList=function (page) {
       if (page == 0) {
        $scope.currentPage=0;
       }else if (page) {
        $scope.currentPage += page;
       }else {

       }
       var length=$scope.data.length;
       var start=$scope.currentPage * $scope.eachPage;
       var end= (start + $scope.eachPage > length) ? length: start + $scope.eachPage;
       $scope.list=$scope.data.slice (start,end);
    }

    $scope.inout=true;
  	$scope.data_statistic=false;
    $scope.setting=false;
    $scope.alterinfo=false;

    //var record0=QuaryRec($scope.stationid);
  	var record0=[
	  {
	    "id": "1",
	    "username": "X1",
	    "carid": "苏A88888",
	    "intime": "2018-04-11 12:00:00",
	    "outtime": "2018-04-11 18:00:00",
	    "duration": "6h",
	    "pay": "60.00"
	  },
	  {
	    "id": "2",
	    "username": "X2",
	    "carid": "苏A88888",
	    "intime": "2018-04-11 12:00:00",
	    "outtime": "2018-04-11 18:00:00",
	    "duration": "6h",
	    "pay": "60.00"
	  },
	  {
	    "id": "3",
	    "username": "X3",
	    "carid": "苏A88888",
	    "intime": "2018-04-11 12:00:00",
	    "outtime": "2018-04-11 18:00:00",
	    "duration": "6h",
	    "pay": "60.00"
	  },
	  {
	    "id": "4",
	    "username": "X4",
	    "carid": "苏A88888",
	    "intime": "2018-04-11 12:00:00",
	    "outtime": "2018-04-11 18:00:00",
	    "duration": "6h",
	    "pay": "60.00"
	  },
	  {
	    "id": "5",
	    "username": "X5",
	    "carid": "苏A88888",
	    "intime": "2018-04-11 12:00:00",
	    "outtime": "2018-04-11 18:00:00",
	    "duration": "6h",
	    "pay": "60.00"
	  },
	  {
	    "id": "6",
	    "username": "X6",
	    "carid": "苏A88888",
	    "intime": "2018-04-11 12:00:00",
	    "outtime": "2018-04-11 18:00:00",
	    "duration": "6h",
	    "pay": "60.00"
	  },
	  {
	    "id": "7",
	    "username": "X7",
	    "carid": "苏A88888",
	    "intime": "2018-04-11 12:00:00",
	    "outtime": "2018-04-11 18:00:00",
	    "duration": "6h",
	    "pay": "60.00"
	  },
	  {
	    "id": "8",
	    "username": "X8",
	    "carid": "苏A88888",
	    "intime": "2018-04-11 12:00:00",
	    "outtime": "2018-04-11 18:00:00",
	    "duration": "6h",
	    "pay": "60.00"
	  },
	  {
	    "id": "9",
	    "username": "X9",
	    "carid": "苏A88888",
	    "intime": "2018-04-11 12:00:00",
	    "outtime": "2018-04-11 18:00:00",
	    "duration": "6h",
	    "pay": "60.00"
	  },
	  {
	    "id": "10",
	    "username": "X10",
	    "carid": "苏A88888",
	    "intime": "2018-04-11 12:00:00",
	    "outtime": "2018-04-11 18:00:00",
	    "duration": "6h",
	    "pay": "60.00"
	  },
	  {
	    "id": "11",
	    "username": "X11",
	    "carid": "苏A88888",
	    "intime": "2018-04-11 12:00:00",
	    "outtime": "2018-04-11 18:00:00",
	    "duration": "6h",
	    "pay": "60.00"
	  }
	];
	func(record0);
    $scope.divList();
    init();

	function init(){
		func(record0);
	    $scope.divList();
		$scope.errorInfo='';

	  	$scope.inout=true;
	  	$scope.data_statistic=false;
	    $scope.setting=false;
	    $scope.alterinfo=false;
	}

	function func(record){
		$scope.currentPage=0;
		$scope.eachPage=10;
		$scope.rate=200;
		$scope.data=record;
		var length=parseInt ($scope.data.length/$scope.eachPage);
		$scope.totalPage= ($scope.data.length%$scope.eachPage == 0) ?  (length-1) :length;
	}

	function getNowFormatDate(){
		var date=new Date();
		var seperator="-";
		var month=date.getMonth()+1;
		var strDate=date.getDate();
		if(month>=1 && month<=9){
			month="0"+month;
		}
		if(strDate>=1 && strDate<=9){
			strDate="0"+strDate;
		}
		var currendate=date.getFullYear()+seperator+month+seperator+strDate;
		return currendate;
	}

	$scope.Index=function(){
        init();
    }

    $scope.Data=function(){
    	var data0=[
		  {
		    "date": "2018-4-1",
		    "instation": "1000",
		    "outstaion": "1000",
		    "income": "2000"
		  },
		  {
		    "date": "2018-4-2",
		    "instation": "1024",
		    "outstaion": "1024",
		    "income": "2142"
		  },
		  {
		    "date": "2018-4-3",
		    "instation": "999",
		    "outstaion": "999",
		    "income": "1987"
		  },
		  {
		    "date": "2018-4-4",
		    "instation": "1024",
		    "outstaion": "1024",
		    "income": "2142"
		  },
		  {
		    "date": "2018-4-5",
		    "instation": "999",
		    "outstaion": "999",
		    "income": "1987"
		  },
		  {
		    "date": "2018-4-6",
		    "instation": "1024",
		    "outstaion": "1024",
		    "income": "2142"
		  },
		  {
		    "date": "2018-4-7",
		    "instation": "999",
		    "outstaion": "999",
		    "income": "1987"
		  },
		  {
		    "date": "2018-4-8",
		    "instation": "1024",
		    "outstaion": "1024",
		    "income": "2142"
		  },
		  {
		    "date": "2018-4-9",
		    "instation": "999",
		    "outstaion": "999",
		    "income": "1987"
		  },
		  {
		    "date": "2018-4-10",
		    "instation": "1000",
		    "outstaion": "1000",
		    "income": "2000"
		  },
		  {
		    "date": "2018-4-11",
		    "instation": "1024",
		    "outstaion": "1024",
		    "income": "2142"
		  },
		  {
		    "date": "2018-4-12",
		    "instation": "999",
		    "outstaion": "999",
		    "income": "1987"
		  },
		  {
		    "date": "2018-4-13",
		    "instation": "1024",
		    "outstaion": "1024",
		    "income": "2142"
		  },
		  {
		    "date": "2018-4-14",
		    "instation": "999",
		    "outstaion": "999",
		    "income": "1987"
		  },
		  {
		    "date": "2018-4-15",
		    "instation": "1024",
		    "outstaion": "1024",
		    "income": "2142"
		  },
		  {
		    "date": "2018-4-16",
		    "instation": "999",
		    "outstaion": "999",
		    "income": "1987"
		  },
		  {
		    "date": "2018-4-17",
		    "instation": "1024",
		    "outstaion": "1024",
		    "income": "2142"
		  },
		  {
		    "date": "2018-4-18",
		    "instation": "999",
		    "outstaion": "999",
		    "income": "1987"
		  },
		  {
		    "date": "2018-4-19",
		    "instation": "1000",
		    "outstaion": "1000",
		    "income": "2000"
		  },
		  {
		    "date": "2018-4-20",
		    "instation": "1024",
		    "outstaion": "1024",
		    "income": "2142"
		  },
		  {
		    "date": "2018-4-21",
		    "instation": "999",
		    "outstaion": "999",
		    "income": "1987"
		  },
		  {
		    "date": "2018-4-22",
		    "instation": "1024",
		    "outstaion": "1024",
		    "income": "2142"
		  },
		  {
		    "date": "2018-4-23",
		    "instation": "999",
		    "outstaion": "999",
		    "income": "1987"
		  },
		  {
		    "date": "2018-4-24",
		    "instation": "1024",
		    "outstaion": "1024",
		    "income": "2142"
		  },
		  {
		    "date": "2018-4-25",
		    "instation": "999",
		    "outstaion": "999",
		    "income": "1987"
		  },
		  {
		    "date": "2018-4-26",
		    "instation": "1024",
		    "outstaion": "1024",
		    "income": "2142"
		  },
		  {
		    "date": "2018-4-27",
		    "instation": "999",
		    "outstaion": "999",
		    "income": "1987"
		  },
		  {
		    "date": "2018-4-28",
		    "instation": "999",
		    "outstaion": "999",
		    "income": "1987"
		  },
		  {
		    "date": "2018-4-29",
		    "instation": "1024",
		    "outstaion": "1024",
		    "income": "2142"
		  },
		  {
		    "date": "2018-4-30",
		    "instation": "999",
		    "outstaion": "999",
		    "income": "1987"
		  }
		];
        init();
        func(data0);
   		$scope.divList();
        $scope.inout=false;
        $scope.data_statistic=true;
    }

    $scope.Setting=function(){
        init();
        $scope.inout=false;
        $scope.setting=true;
    }

    $scope.Info=function(){
        init();
        $scope.inout=false;
        $scope.setting=true;
    }

    $scope.AlterInfo=function(){
        init();
        $scope.inout=false;
        $scope.alterinfo=true;
    }


    $scope.save=function(){
    	if($scope.username){
    		if($scope.password){
    			if($scope.stationname){
    				if($scope.stationphone){
    					if($scope.stationaddress){
    						//var f=Save_Station($scope.username,$scope.pasword,$scope.stationid,$scope.stationname,$scope.stationphone,$scope.stationaddress);
    						if(true){
    							alert('更改成功！');

    							init();
    						}else{
    							alert('更改失败！');
    							init();
    						}
    					}else{
    						$scope.errorInfo='收费站地址不能为空！';
    					}
    				}else{
    					$scope.errorInfo='联系方式不能为空！';
    				}
    			}else{
    				$scope.errorInfo='收费站名称不能为空！';
    			}
    		}else{
    			$scope.errorInfo='密码不能为空！';
    		}
    	}else{
    		$scope.errorInfo='用户名不能为空！';
    	}
    }
    $scope.clickInfo=function(){
        $scope.errorInfo='';
    }
    

    $scope.logout=function () {
	    alert ('注销成功！');
	    delete localStorage.cookie;
	    $location.path ('/');
	}
    
});
