angular.module('park').controller ('parkController',
    ['$scope', '$routeParams', '$location', 'Authentication', 'Users','Parks','Parkrecords'
    function ($scope, $routeParams, $location, Authentication, Users,Parks,Parkrecords) {

    $scope.username=localStorage.user;
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

    init();

    function init(){
	    Users.read({
	    	username:$scope.username
	    },function(response){
	    	console.log(response);
	    	if(response.uid){
	    		$scope.password=response.password;
	    		Parks.read({
	                parkowner:$scope.username
	            },function (response) {
	                if(response.parkId){
	                	$scope.parkid=response.parkId;
						$scope.parkname=response.parkname;
						$scope.parksize=response.carnum;
						$scope.parkphone=response.phone;
						$scope.parkprice=response.price;
						$scope.parkaddress=response.address;
						$scope.parkfree=response.free;

						Parkrecords.readBytime({
				            parkid:$scope.parkid,
				            time:$scope.time
				        },function (response) {
				            if(response.PKRid){
				            	var record=response;
				            	func(record);
							    $scope.divList();
							    $scope.todayparking=true;
								$scope.parkingrecord=false;
								$scope.quarycarid=false;
								$scope.setting=false;
								$scope.alterinfo=false;
				            }
				        });
	                } else {
	                    $scope.errorInfo = '停车场不存在！';
	                }
	            });
	    	}
	    });
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
		Parkrecords.readBypid({
            parkid:$scope.parkid
        },function (response) {
            if(response.PKRid){
            	var record=response;
            	func(record);
			    $scope.divList();
				$scope.todayparking=false;
				$scope.parkingrecord=true;
            }
        });
	}

	$scope.Quary=function(){
		if($scope.carid)
		{
			Parkrecords.readBycid({
	            carid:$scope.carid
	        },function (response) {
	            if(response.PKRid){
	            	var record=response;
	            	func(record);
					$scope.divList();
					$scope.todayparking=false;
					$scope.quarycarid=true;
					$scope.errorInfo='';
	            }}else{
					$scope.errorInfo='该车牌无停车记录！';
				}
	        });
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
									Users.alter({
							            username:$scope.username,
						                password:$scope.password
							        },function (response) {
							            if(response.uid){
							            	Parks.update({
									            parkid:$scope.parkid,
								                parkname:$scope.parkname,
								                parksize:$scope.parksize,
								                parkprice:$scope.parkprice,
								                parkphone:$scope.parkphone,
								                parkaddress:$scope.parkaddress,
								                parkfree:$scope.parkfree
									        },function (response) {
									            if(response.parkId){
									            	alert('更改成功！');
													init();
									            }else{
													alert('更改失败！')
													init();
												}
									        });
										}
							        });

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

}]);
