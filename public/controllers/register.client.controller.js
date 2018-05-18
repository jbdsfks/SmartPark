mainApplicationModule.controller('registerController',
    ['$scope', '$routeParams', '$location', 'Authentication', 'Users', 'Register', 'Parks',
        function ($scope, $routeParams, $location, Authentication, Users, Register, Parks) {

            $scope.clickInfo = function () {
                $scope.errorInfo = '';
            };
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

            $scope.station = ["沪宁高速南京收费站", "沪宁高速苏州新区收费站", "沪宁高速花桥收费站"];

            $scope.doReflash = function () {
                window.location.reload();
            };

            $scope.register1 = function (username, password, usertype, confirmpassword, parkname, parksize, parkprice, parkphone, parkaddress) {
                if (username) {
                    if (password) {
                        if (confirmpassword && (confirmpassword === password)) {
                            if (parkname) {
                                if (parksize) {
                                    if (parkprice) {
                                        if (parkphone) {
                                            if (parkaddress) {
                                                Register.register({
                                                    username: username,
                                                    password: password,
                                                    type: usertype
                                                }, function (response) {
                                                    // console.log(response);
                                                    if (response.uid) {
                                                        $scope.user = response;
                                                        var park = new Parks({
                                                            parkname: parkname,
                                                            address: parkaddress,
                                                            phone: parkphone,
                                                            carnum: parksize,
                                                            price: parkprice,
                                                            owner: response._id
                                                        });
                                                        park.$create(function (response) {
                                                            // console.log(response);
                                                            if (response._id){
                                                                alert('注册成功！');
                                                                $location.path('signIn');
                                                                window.location.reload();
                                                            }else{
                                                                $scope.errorInfo = '停车场已存在！';
                                                                var user = new Users($scope.user);
                                                                user.$remove(function () {
                                                                    $location.path('signUp');
                                                                });
                                                            }
                                                        });

                                                    } else {
                                                        $scope.errorInfo = '用户已存在！';
                                                        // alert('注册失败！');
                                                    }
                                                });
                                            } else {
                                                $scope.errorInfo = '地址不能为空！';
                                            }
                                        } else {
                                            $scope.errorInfo = '联系方式不能为空！';
                                        }
                                    } else {
                                        $scope.errorInfo = '收费标准不能为空！';
                                    }
                                } else {
                                    $scope.errorInfo = '总车位不能为空！';
                                }
                            } else {
                                $scope.errorInfo = '停车场名称不能为空！';
                            }
                        } else {
                            $scope.errorInfo = '两次输入密码不一致！';
                        }
                    } else {
                        $scope.errorInfo = '密码不能为空！';
                    }
                } else {
                    $scope.errorInfo = '用户名不能为空！';
                }
            }

            $scope.register2 = function (username, password, confirmpassword, stationname) {
                if (username) {
                    if (password) {
                        if (confirmpassword) {
                            //var f=AddStationWorker(username,password,stationname);
                            if (true) {
                                alert('注册成功！');
                                $location.path('/');
                            } else {
                                alert('注册失败！');
                            }
                        } else {
                            $scope.errorInfo = '两次输入密码不一致！';
                        }
                    } else {
                        $scope.errorInfo = '密码不能为空！';
                    }
                } else {
                    $scope.errorInfo = '用户名不能为空！';
                }
            }

            $scope.register3 = function (username, password, confirmpassword, stationname, stationphone, stationaddress) {
                if (username) {
                    if (password) {
                        if (confirmpassword) {
                            if (stationname) {
                                if (stationphone) {
                                    if (stationaddress) {
                                        //var f=AddStationAdmin(username,password,stationname,stationphone,stationaddress);
                                        if (true) {
                                            alert('注册成功！');
                                            $location.path('/');
                                        } else {
                                            alert('注册失败！');
                                        }
                                    } else {
                                        $scope.errorInfo = '地址不能为空！';
                                    }
                                } else {
                                    $scope.errorInfo = '联系方式不能为空！';
                                }
                            } else {
                                $scope.errorInfo = '收费站名称不能为空！';
                            }
                        } else {
                            $scope.errorInfo = '两次输入密码不一致！';
                        }
                    } else {
                        $scope.errorInfo = '密码不能为空！';
                    }
                } else {
                    $scope.errorInfo = '用户名不能为空！';
                }
            }
        }]);
