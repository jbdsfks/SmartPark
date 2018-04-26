/*
* addUser (name,password,phone)  
* 	添加普通用户，成功返回true
*
* addManager (name,password,phone) 
*   添加管理员，成功返回true
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
    $scope.phone = '';
    $scope.password = '';
    $scope.confirmpassword = '';

	$scope.register = function () {
        if ($scope.username) {
            if ($scope.phone) {
                if ($scope.password) {
                    if ($scope.confirmpassword  ==  $scope.password) {
                        if ($scope.usertype  ==  'common') {
                            if (addUser ($scope.username,$scope.password,$scope.phone) ) {
                                alert ('注册成功');
                                $location.path ('/login');
                            }else{
                                alert ('注册失败');
                            }
                        }else if ($scope.usertype  ==  'manager')  {
                            if (addManager ($scope.username,$scope.password,$scope.phone) ) {
                                alert ('注册成功');
                                $location.path ('/login');
                            }else{
                                alert ('注册失败');
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
                $scope.errorInfo = '手机号码不能为空！';
            }
        }else{
            $scope.errorInfo = '用户名不能为空！';
        }
    }
    init ();
});
