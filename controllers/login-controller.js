/*
*id 用户id
*pwd 用户密码
*type 用户类型（common/manager/admin）
*
* loginCommon(id,pwd,type) ——普通用户登录，成功返回true
* 
* loginManager(id,pwd,type) ——管理员登录，成功返回true
* 
* loginAdmin(id,pwd,type) ——admin登录，成功返回true
*/

app.controller('loginController',function($scope,$location){

    $scope.clickInfo=function(){
        $scope.errorInfo='';
    }
    $scope.userid='';
    $scope.password='';
    $scope.usertype='';

    $scope.login=function(){
        if($scope.userid){
            if($scope.password){
                if($scope.usertype){
                    if($scope.usertype == 'common'){
                        if(loginCommon($scope.userid,$scope.password)){
                            localStorage.user=$scope.userid;
                            localStorage.cookie="userid";
                            $location.path('/commonindex');
                        }else
                            $scope.errorInfo='登录失败！';
                    }
                    else if($scope.usertype == 'manager'){
                        //if(loginManager($scope.userid,$scope.password)){
                            localStorage.user=$scope.userid;
                            localStorage.cookie="userid";
                            $location.path('/managerindex');
                       // }else{
                            //$scope.errorInfo='登录失败！';
                        //}
                    }
                    else{
                        if(($scope.userid=='admin') && ($scope.password=='123456')){
                            localStorage.user=$scope.userid;
                            localStorage.cookie="userid";
                            $location.path('/adminindex');
                        }else{
                            $scope.errorInfo='登录失败';
                        }
                    }
                }else{
                    $scope.errorInfo='用户类型不能为空！';
                }
            }else{
                $scope.errorInfo='密码不能为空！';
            }
        }else{
            $scope.errorInfo='用户名不能为空！';
        }
    }
    
});