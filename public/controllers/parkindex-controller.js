/*
*
* 返回用户信息
* QuaryPassword(username)——密码
*
* 返回停车场信息
* QuaryParkId(username)——ID
* QuaryParkName(parkid)——名称
* QuaryParkSize(parkid)——总车位
* QuaryParkPhone(parkid)——联系方式
* QuaryParkPrice(parkid)——收费标准
* QuaryParkAddress(parkid)——地址
* QuaryParkFree(parkid)——空车位
* 
* QuaryRec(parkid)——返回parkid全部停车记录
* 
* QuaryRecByCarid(parkid,carid)——返回parkid中carid的停车记录
* 
* QuaryRecByTime(parkid,time)——返回parkid当天的停车记录
*
* SavePark(parkid,parkname,parksize,parkprice,parkphone,parkaddress)——更改parkid的信息，成功返回true
*
* 
*
* */
app.controller('parkController',function($scope,$location){

	/*
	$scope.password=QuaryPassword($scope.username);

	$scope.parkid=QuaryParkId($scope.username);
	$scope.parkname=QuaryParkName($scope.parkid);
	$scope.parksize=QuaryParkSize($scope.parkid);
	$scope.parkphone=QuaryParkPhone($scope.parkid);
	$scope.parkprice=QuaryParkPrice($scope.parkid);
	$scope.parkaddress=QuaryParkAddress($scope.parkid);
	$scope.parkfree=QuaryParkFree($scope.parkid);

	*/

	$scope.username=localStorage.user;
	$scope.password="123456";

	$scope.parkid="001";
	$scope.parkname="南京理工大学停车场";
	$scope.parksize="100";
	$scope.parkfree="10";
	$scope.parkphone="025-8888888";
	$scope.parkprice="10";
	$scope.parkaddress="南京市玄武区孝陵卫街道200号";
	$scope.time=getNowFormatDate();

	$scope.todayparking=false;
	$scope.parkingrecord=false;
	$scope.quarycarid=false;
	$scope.setting=false;
	$scope.alterinfo=false;

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
	//var record0=QuaryRecByTime($scope.parkid,$scope.time);
  	var record0=[
		  {
		    "id": "1",
		    "username": "X1",
		    "carid": "苏A78323",
		    "intime": "2018-04-11 12:00:00",
		    "outtime": "2018-04-11 18:00:00",
		    "duration": "6h",
		    "pay": "60.00"
		  },
		  {
		    "id": "2",
		    "username": "X2",
		    "carid": "苏A21213",
		    "intime": "2018-04-11 12:00:00",
		    "outtime": "2018-04-11 18:00:00",
		    "duration": "6h",
		    "pay": "60.00"
		  },
		  {
		    "id": "3",
		    "username": "X3",
		    "carid": "苏A45D34",
		    "intime": "2018-04-11 12:00:00",
		    "outtime": "2018-04-11 18:00:00",
		    "duration": "6h",
		    "pay": "60.00"
		  },
		  {
		    "id": "4",
		    "username": "X4",
		    "carid": "苏A89J43",
		    "intime": "2018-04-11 12:00:00",
		    "outtime": "2018-04-11 18:00:00",
		    "duration": "6h",
		    "pay": "60.00"
		  },
		  {
		    "id": "5",
		    "username": "X5",
		    "carid": "苏A56574",
		    "intime": "2018-04-11 12:00:00",
		    "outtime": "2018-04-11 18:00:00",
		    "duration": "6h",
		    "pay": "60.00"
		  },
		  {
		    "id": "6",
		    "username": "X6",
		    "carid": "苏A78335",
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
		$scope.todayparking=true;
		$scope.parkingrecord=false;
		$scope.quarycarid=false;
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

	$scope.Record=function(){
		init();
		//var record1=QuaryRec($scope.parkid);
		var record1=[
		  {
		    "id": "1",
		    "username": "X1",
		    "carid": "苏A78323",
		    "intime": "2018-04-11 12:00:00",
		    "outtime": "2018-04-11 18:00:00",
		    "duration": "6h",
		    "pay": "60.00"
		  },
		  {
		    "id": "2",
		    "username": "X2",
		    "carid": "苏A21213",
		    "intime": "2018-04-11 12:00:00",
		    "outtime": "2018-04-11 18:00:00",
		    "duration": "6h",
		    "pay": "60.00"
		  },
		  {
		    "id": "3",
		    "username": "X3",
		    "carid": "苏A45D34",
		    "intime": "2018-04-11 12:00:00",
		    "outtime": "2018-04-11 18:00:00",
		    "duration": "6h",
		    "pay": "60.00"
		  },
		  {
		    "id": "4",
		    "username": "X4",
		    "carid": "苏A89J43",
		    "intime": "2018-04-11 12:00:00",
		    "outtime": "2018-04-11 18:00:00",
		    "duration": "6h",
		    "pay": "60.00"
		  },
		  {
		    "id": "5",
		    "username": "X5",
		    "carid": "苏A56574",
		    "intime": "2018-04-11 12:00:00",
		    "outtime": "2018-04-11 18:00:00",
		    "duration": "6h",
		    "pay": "60.00"
		  },
		  {
		    "id": "6",
		    "username": "X6",
		    "carid": "苏A78335",
		    "intime": "2018-04-11 12:00:00",
		    "outtime": "2018-04-11 18:00:00",
		    "duration": "6h",
		    "pay": "60.00"
		  },
		  {
		    "id": "7",
		    "username": "X7",
		    "carid": "苏A23546",
		    "intime": "2018-04-11 12:00:00",
		    "outtime": "2018-04-11 18:00:00",
		    "duration": "6h",
		    "pay": "60.00"
		  },
		  {
		    "id": "8",
		    "username": "X8",
		    "carid": "苏A84533",
		    "intime": "2018-04-11 12:00:00",
		    "outtime": "2018-04-11 18:00:00",
		    "duration": "6h",
		    "pay": "60.00"
		  },
		  {
		    "id": "9",
		    "username": "X9",
		    "carid": "苏A34365",
		    "intime": "2018-04-11 12:00:00",
		    "outtime": "2018-04-11 18:00:00",
		    "duration": "6h",
		    "pay": "60.00"
		  },
		  {
		    "id": "10",
		    "username": "X10",
		    "carid": "苏A53656",
		    "intime": "2018-04-11 12:00:00",
		    "outtime": "2018-04-11 18:00:00",
		    "duration": "6h",
		    "pay": "60.00"
		  },
		  {
		    "id": "11",
		    "username": "X11",
		    "carid": "苏A23256",
		    "intime": "2018-04-11 12:00:00",
		    "outtime": "2018-04-11 18:00:00",
		    "duration": "6h",
		    "pay": "60.00"
		  }
		];
		func(record1);
	    $scope.divList();
		$scope.todayparking=false;
		$scope.parkingrecord=true;
	}

	$scope.Quary=function(){
		if($scope.carid)
		{
			//var record2=QuaryRecByCarid($scope.parkid,$scope.carid);
			var record2=[
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
					}
					];
			if(true){
					init();
					func(record2);
					$scope.divList();
					$scope.todayparking=false;
					$scope.quarycarid=true;
					$scope.errorInfo='';
			}else{
				$scope.errorInfo='车牌号无效！';
			}
		}else{
			$scope.errorInfo='车牌号不能为空！';
		}
	}

	$scope.Setting=function(){
		init();
		$scope.todayparking=false;
		$scope.setting=true;
	}

	$scope.Info=function(){
		init();
		$scope.todayparking=false;
		$scope.setting=true;
	}

	$scope.AlterInfo=function(){
		init();
		$scope.todayparking=false;
		$scope.alterinfo=true;
	}

	$scope.save=function(){
		if($scope.username){
			if($scope.password){
				if($scope.parkname){
					if($scope.parksize){
						if($scope.parkprice){
							if($scope.parkphone){
								if($scope.parkaddress){
									//var f=savepark($scope.parkid,$scope.parkname,$scope.parksize,$scope.parkprice,$scope.parkphone,$scope.parkaddress);
									if(true){
										alert('更改成功！');
										init();
									}else{
										alert('更改失败！')
										init();
									}
								}else{
									$scope.errorInfo='地址不能为空！';
								}
							}else{
								$scope.errorInfo='联系电话不能为空！';
							}
						}else{
							$scope.errorInfo='收费标准不能为空！';
						}
					}else{
						$scope.errorInfo='总车位不能为空！';
					}
				}else{
					$scope.errorInfo='停车场名称不能为空！';
				}
			}else{
				$scope.errorInfo='密码不能为空！';
			}

		}else {
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
