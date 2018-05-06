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
    $scope.stationname2 = '';
    $scope.stationphone = '';
    $scope.stationaddress = '';

    $scope.station=["沪宁高速南京收费站", "沪宁高速苏州新区收费站", "沪宁高速花桥收费站"];

    $scope.register1=function(username,password,confirmpassword,parkname,parksize,parkprice,parkphone,parkaddress){
        if(username){
            if(password){
                if(confirmpassword){
                    if(parkname){
                        if(parksize){
                            if(parkprice){
                                if(parkphone){
                                    if(parkaddress){
                                        //var f=AddParkManager(username,password,parkname,parksize,parkprice,parkphone,parkaddress);
                                        if(true){
                                            alert ('注册成功！');
                                            $location.path ('/');
                                        }else{
                                            alert ('注册失败！');
                                        }
                                    }else{
                                        $scope.errorInfo = '地址不能为空！';
                                    }
                                }else{
                                    $scope.errorInfo = '联系方式不能为空！';
                                }
                            }else{
                                $scope.errorInfo = '收费标准不能为空！';
                            }
                        }else{
                            $scope.errorInfo = '总车位不能为空！';
                        }
                    }else{
                        $scope.errorInfo = '停车场名称不能为空！';
                    }
                }else{
                    $scope.errorInfo = '两次输入密码不一致！';
                }
            }else{
                $scope.errorInfo = '密码不能为空！';
            }
        }else{
            $scope.errorInfo = '用户名不能为空！';
        }
    }

    $scope.register2=function(username,password,confirmpassword,stationname){
        if(username){
            if(password){
                if(confirmpassword){
                    //var f=AddStationWorker(username,password,stationname);
                    if(true){
                        alert ('注册成功！');
                        $location.path ('/');
                    }else{
                        alert ('注册失败！');
                    }
                }else{
                    $scope.errorInfo = '两次输入密码不一致！';
                }
            }else{
                $scope.errorInfo = '密码不能为空！';
            }
        }else{
            $scope.errorInfo = '用户名不能为空！';
        }
    }

    $scope.register3=function(username,password,confirmpassword,stationname,stationphone,stationaddress){
        if(username){
            if(password){
                if(confirmpassword){
                    if(stationname){
                        if(stationphone){
                            if(stationaddress){
                                //var f=AddStationAdmin(username,password,stationname,stationphone,stationaddress);
                                if(true){
                                    alert ('注册成功！');
                                    $location.path ('/');
                                }else{
                                    alert ('注册失败！');
                                }
                            }else{
                                $scope.errorInfo = '地址不能为空！';
                            }
                        }else{
                            $scope.errorInfo = '联系方式不能为空！';
                        }
                    }else{
                        $scope.errorInfo = '收费站名称不能为空！';
                    }
                }else{
                    $scope.errorInfo = '两次输入密码不一致！';
                }
            }else{
                $scope.errorInfo = '密码不能为空！';
            }
        }else{
            $scope.errorInfo = '用户名不能为空！';
        }
    }
});
