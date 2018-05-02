/*
* AddParkManager(username,password,parkname,parksize,parkprice,parkphone,parkaddress)  
*   添加停车场管理员，成功返回true
*
* AddStationWorker(username,password,stationname) 
*   添加收费站工作人员，成功返回true
*
* AddStationAdmin(username,password,stationname,stationphone,stationaddress)
*   添加收费站Admin，成功返回true
*/


app.controller ('registerController',function ($scope,$location) {
    function init () {
        if (localStorage.user)
            $scope.userid = localStorage.user;
    }

    $scope.clickInfo = function () {
        $scope.errorInfo = '';
    }
    $scope.username = '';
    $scope.password = '';
    $scope.confirmpassword = '';
    $scope.usertype = '';

    $scope.parkname = '';
    $scope.parksize = '';
    $scope.parkprice = '';
    $scope.parkphone = '';
    $scope.parkaddress = '';
    $scope.stationname = '';
    $scope.stationphone = '';
    $scope.stationaddress = '';

  $scope.register = function () {
        if ($scope.username) {
            if ($scope.password) {
                if ($scope.confirmpassword  ==  $scope.password) {
                    if ($scope.usertype  ==  'park-manager') {
                        if ($scope.parkname) {
                            if($scope.parksize){
                                if($scope.parkprice){
                                    if($scope.parkphone){
                                        if($scope.parkaddress){
                                            //var f=AddParkManager($scope.username,$scope.password,$scope.parkname,$scope.parksize,$scope.parkprice,$scope.parkphone,$scope.parkaddress);
                                            if(true){
                                                alert ('注册成功！');
                                                $location.path ('/');
                                            }else{
                                                alert ('注册失败！');
                                            }
                                        }else{
                                            $scope.errorInfo = '停车场地址不能为空！';
                                        }
                                    }else{
                                        $scope.errorInfo = '停车场联系方式不能为空！';
                                    }
                                }else{
                                    $scope.errorInfo = '停车场收费标准不能为空！';
                                }
                            }else{
                                $scope.errorInfo = '停车场总车位不能为空！';
                            }
                        }else{
                            $scope.errorInfo = '停车场名称不能为空！';
                        }
                    }else if ($scope.usertype  ==  'highway-worker') {
                        if($scope.stationname){
                            //var f=AddStationWorker($scope.username,$scope.password,$scope.stationname);
                            if(true){
                                alert ('注册成功!');
                                $location.path ('/');
                            }else{
                                alert ('注册失败!');
                            }
                        }else{
                            $scope.errorInfo = '收费站名称不能为空！';
                        }
                    }else if($scope.usertype == 'highway-admin'){
                        if($scope.stationname){
                            if($scope.stationprice){
                                if($scope.stationphone){
                                    if($scope.stationaddress){
                                        //var f=AddStationAdmin($scope.username,$scope.password,$scope.stationname,$scope.stationphone,$scope.stationaddress);
                                        if(true){
                                            alert ('注册成功!');
                                            $location.path ('/');
                                        }else{
                                            alert ('注册失败!');
                                        }
                                    }else{
                                        $scope.errorInfo = '收费站地址不能为空！';
                                    }
                                }else{
                                    $scope.errorInfo = '收费站联系方式不能为空！';
                                }
                            }else{
                                $scope.errorInfo = '收费价格不能为空！';
                            }
                        }else{
                            $scope.errorInfo = '收费站名称不能为空！';
                        }
                    }else{
                        $scope.errorInfo = '用户类型不能为空！';
                    }
                }else{
                    $scope.errorInfo = '两次密码输入不一致！';
                }
            }else{
                $scope.errorInfo = '密码不能为空！';
            }
        }else{
            $scope.errorInfo = '用户名不能为空！';
        }
    }
    init ();
});
