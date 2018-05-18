/*
*
* loginPark(username,password) ——停车场管理员登录，成功返回true
*
* loginHighwayWorker(username,password) ——收费站工作登人员登录，成功返回true
*
* loginHighwayAdmin(username,password) ——收费站admin登录，成功返回true
*/

angular.module('users').controller('loginController',
    ['$scope', '$routeParams', '$location', 'Authentication', 'Users', 'Login',
        function ($scope, $routeParams, $location, Authentication, Users, Login) {

            $scope.clickInfo = function () {
                $scope.errorInfo = '';
            };
            $scope.username = '';
            $scope.password = '';
            $scope.usertype = '';

            $scope.type = ["停车场管理员", "收费站工作人员", "收费站admin"];

            $scope.doReflash = function () {
              window.location.reload();
            };

            $scope.login = function () {
                if ($scope.username) {
                    if ($scope.password) {

                        Login.login({
                            username: $scope.username,
                            password: $scope.password
                        }, function (response) {
                            if (response.uid) {
                                // sessionStorage.user = response.username;
                                // sessionStorage.cookie = "username";

                                if ($scope.usertype === $scope.type[0] && response.type === $scope.usertype) {
                                    // sessionStorage.user._id = response._id;
                                    sessionStorage.uid = response.uid;
                                    // console.log(sessionStorage.user);
                                    // localStorage.cookie = "username";
                                    $location.path('park/index');
                                    window.location.reload();
                                // } else if ($scope.usertype === $scope.type[1] && response.type === $scope.usertype) {
                                //     //var f=loginHighwayWorker(username,password);
                                //     if (true) {
                                //         localStorage.user = $scope.username;
                                //         localStorage.cookie = "username";
                                //         $location.path('/highwayindex1');
                                //         window.location.reload();
                                //     }
                                // } else if ($scope.usertype === $scope.type[2] && response.type === $scope.usertype) {
                                //     //var f=loginHighwayAdmin(username,password);
                                //     if (true) {
                                //         localStorage.user = $scope.username;
                                //         localStorage.cookie = "username";
                                //         $location.path('/highwayindex2');
                                //         window.location.reload();
                                //     }
                                } else {
                                    $scope.errorInfo = '此身份下用户不存在！';
                                }
                            } else {
                                $scope.errorInfo = '用户名或密码错误！';
                            }
                        });
                        // console.log($scope.user);

                    } else {
                        $scope.errorInfo = '密码不能为空！';
                    }
                } else {
                    $scope.errorInfo = '用户名不能为空！';
                }
            }


        }]);
