/*
*
* loginPark(username,password) ——停车场管理员登录，成功返回true
* 
* loginHighwayWorker(username,password) ——收费站工作登人员登录，成功返回true
* 
* loginHighwayAdmin(username,password) ——收费站admin登录，成功返回true
*/


app.controller ('loginController',function ($scope,$location) {

    $scope.clickInfo = function () {
        $scope.errorInfo = '';
    }
    $scope.username = '';
    $scope.password = '';
    $scope.usertype = '';

    $scope.user=["停车场管理员", "收费站工作人员", "收费站admin"];
    $scope.login=function(){
        if($scope.username){
            if($scope.password){
                if($scope.usertype==$scope.user[0]){
                    //var f=loginPark(username,password)
                    if(true){
                        localStorage.user=$scope.username;
                        localStorage.cookie="username";
                        $location.path('/parkindex');
                    }
                }else if($scope.usertype==$scope.user[1]){
                    //var f=loginHighwayWorker(username,password);
                    if(true){
                        localStorage.user=$scope.username;
                        localStorage.cookie="username";
                        $location.path('/highwayindex1');
                    }
                }else{
                    //var f=loginHighwayAdmin(username,password);
                    if(true){
                        localStorage.user=$scope.username;
                        localStorage.cookie="username";
                        $location.path('/highwayindex2');
                    }
                }
            }else{
                $scope.errorInfo = '密码不能为空！';
            }
        }else{
           $scope.errorInfo = '用户名不能为空！';
        }
    }

    
});
