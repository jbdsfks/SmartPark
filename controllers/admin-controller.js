/*
* quary_Allparks()——返回所有停车场信息
*
* quary_Allparkrecords()——返回所有停车交易
*
* quary_Allrecharges()——返回所有充值交易
*
* quary_parkingBypid(parkid)——返回parkid的全部停车交易
*
* quary_parkingByuid(userid)——返回carid的全部停车交易
*
* quary_rechargeByuid(userid)——返回userid的全部充值交易
*/

app.controller ('adminController', function ($scope,$location) {

	$scope.allparks=false;
	$scope.quarypark=false;
	$scope.allparkrecords=false;
	$scope.quaryparkrecord=false;
	$scope.parkingByparkid=false;
	$scope.allrecharges=false;
	$scope.quaryrecharge=false;
	$scope.rechargeinfo=false;
	$scope.quaryparkinfo=false;

	$scope.clickInfo = function(){
        $scope.errorInfo = '';
    }


	function init(){

		if(localStorage.user)
		      $scope.admin=localStorage.user;

		$scope.allparks=false;
		$scope.quarypark=false;
		$scope.allparkrecords=false;
		$scope.quaryparkrecord=false;
		$scope.parkingByparkid=false;
		$scope.allrecharges=false;
		$scope.quaryrecharge=false;
		$scope.rechargeinfo=false;
		$scope.quaryparkinfo=false;
	}

	init();

	$scope.Index=function (){
		init();
	}

	$scope.Allparks=function(){
		$scope.data=quary_Allparks();

		$scope.currentPage = 0;
	    $scope.eachPage = 5;
	    $scope.rate = 200;
	    var length = parseInt($scope.data.length/$scope.eachPage);
	    $scope.totalPage = ($scope.data.length%$scope.eachPage == 0)? (length-1):length;
	    $scope.divList();


		init();
		$scope.allparks=true;


	}

	$scope.QuaryPark=function(){
		init();
		$scope.quarypark=true;
	}

	$scope.AllParkRecords=function(){
		$scope.data=quary_Allparkrecords();

		$scope.currentPage = 0;
	    $scope.eachPage = 5;
	    $scope.rate = 200;
	    var length = parseInt($scope.data.length/$scope.eachPage);
	    $scope.totalPage = ($scope.data.length%$scope.eachPage == 0)? (length-1):length;
	    $scope.divList();

		init();
		$scope.allparkrecords=true;
	}

	$scope.QuaryParkRecord=function(){
		init();
		$scope.quaryparkrecord=true;
	}

	$scope.AllRecharges=function(){
		$scope.data=quary_Allrecharges();

		$scope.currentPage = 0;
	    $scope.eachPage = 5;
	    $scope.rate = 200;
	    var length = parseInt($scope.data.length/$scope.eachPage);
	    $scope.totalPage = ($scope.data.length%$scope.eachPage == 0)? (length-1):length;
	    $scope.divList();

		init();
		$scope.allrecharges=true;
	}

	$scope.QuaryRecharge=function(){
		init();
		$scope.quaryrecharge=true;
	}

	$scope.quaryParkInfo=function(){
		if($scope.parkid){
			if(true){//quary_parkingBypid($scope.parkid);
				$scope.data=quary_parkingBypid($scope.parkid);

				$scope.currentPage = 0;
			    $scope.eachPage = 5;
			    $scope.rate = 200;
			    var length = parseInt($scope.data.length/$scope.eachPage);
			    $scope.totalPage = ($scope.data.length%$scope.eachPage == 0)? (length-1):length;
			    $scope.divList();

			    $scope.parkingByparkid=true;
			}else{
				$scope.errorInfo='停车场ID无效！';
			}

		}else{
			$scope.errorInfo='停车场ID不能为空！';
		}
	}

	$scope.quaryParkRecord=function(){
		if($scope.carid){
			if(true){//quary_parkingByuid($scope.userid);
				$scope.data=quary_parkingByuid($scope.userid);

				$scope.currentPage = 0;
			    $scope.eachPage = 5;
			    $scope.rate = 200;
			    var length = parseInt($scope.data.length/$scope.eachPage);
			    $scope.totalPage = ($scope.data.length%$scope.eachPage == 0)? (length-1):length;
			    $scope.divList();

			    parkinginfo=true;
			}else{
				$scope.errorInfo='车牌号无效！';
			}

		}else{
			$scope.errorInfo='车牌号不能为空！';
		}
	}


	$scope.quaryRecharge=function(){
		if($scope.userid){
			if(true){//quary_rechargeByuid($scope.userid)
				$scope.data=quary_rechargeByuid($scope.userid)

				$scope.currentPage = 0;
			    $scope.eachPage = 5;
			    $scope.rate = 200;
			    var length = parseInt($scope.data.length/$scope.eachPage);
			    $scope.totalPage = ($scope.data.length%$scope.eachPage == 0)? (length-1):length;
			    $scope.divList();

			    rechargeinfo=true;
			}else{
				$scope.errorInfo='用户ID无效！';
			}

		}else{
			$scope.errorInfo='用户ID不能为空！';
		}
	}



	$scope.divList = function(page){
       if(page == 0){
        $scope.currentPage = 0;
       }else if(page){
        $scope.currentPage += page;
       }else {

       }
       var length = $scope.data.length;
       var start = $scope.currentPage * $scope.eachPage;
       var end = (start + $scope.eachPage > length)? length: start + $scope.eachPage;
       $scope.list = $scope.data.slice(start,end);
    }

    $scope.logout=function () {
	    alert ('注销成功！');
	    delete localStorage.cookie;
	    $location.path ('/login');
	}
});
