/*
*
* loginPark(userid,password) ——停车场管理员登录，成功返回true
* 
* loginHighwayWorker(userid,password) ——收费站工作登人员登录，成功返回true
* 
* loginHighwayAdmin(userid,password) ——收费站admin登录，成功返回true
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
                    if($scope.usertype=='park-manager'){
                        //var f=loginPark($scope,userid,$scope.password);
                        if(true){
                            localStorage.user=$scope.userid;
                            localStorage.cookie="userid";
                            $location.path('/parkindex');
                        }else{
                            alert('登录失败！';)
                        }
                    }else if ($scope.usertype=='highway-worker'){
                        //var f=loginHighwayWorker($scope,userid,$scope.password);
                        if(true){
                            localStorage.user=$scope.userid;
                            localStorage.cookie="userid";
                            $location.path('/highwayindex1');
                        }else{
                            alert('登录失败！';)
                        }
                    }else{
                        //var f=loginHighwayAdmin($scope,userid,$scope.password);
                        if(true){
                            localStorage.user=$scope.userid;
                            localStorage.cookie="userid";
                            $location.path('/highwayindex2');
                        }else{
                            alert('登录失败！';)
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
