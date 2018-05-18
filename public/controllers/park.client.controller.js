mainApplicationModule.controller('parkController',
    ['$scope', '$routeParams', '$location', 'Authentication', 'Users', 'Parks', 'ParkingRecords',
        function ($scope, $routeParams, $location, Authentication, Users, Parks, ParkingRecords) {

            $scope.uid = sessionStorage.uid;
            $scope.time = getNowFormatDate();

            $scope.divList = function (page) {
                if (page === 0) {
                    $scope.currentPage = 0;
                } else if (page) {
                    $scope.currentPage += page;
                } else {

                }
                var length = $scope.data.length;
                var start = $scope.currentPage * $scope.eachPage;
                var end = (start + $scope.eachPage > length) ? length : start + $scope.eachPage;
                $scope.list = $scope.data.slice(start, end);
            };

            init();

            function init() {

                Users.get({
                    userId: $scope.uid
                }, function (response) {
                    console.log(response);
                    if (response.uid) {
                        $scope.user = response;
                        $scope.password = response.password;
                        $scope.username = response.username;
                        Parks.get({
                            ownerId: response._id
                        }, function (response) {
                            console.log(response);
                            if (response._id) {
                                $scope.parkid = response._id;
                                $scope.parkname = response.parkname;
                                $scope.parksize = response.carnum;
                                $scope.parkphone = response.phone;
                                $scope.parkprice = response.price;
                                $scope.parkaddress = response.address;
                                $scope.parkfree = response.freenum;

                                ParkingRecords.query({
                                    parkId: $scope.parkid
                                }, function (response) {
                                    console.log(response);
                                    if (response) {
                                        var record = response;
                                        func(record);
                                        $scope.divList();
                                        $scope.todayparking = true;
                                        $scope.parkingrecord = false;
                                        $scope.quarycarid = false;
                                        $scope.setting = false;
                                        $scope.alterinfo = false;
                                    }
                                });
                            } else {
                                $scope.errorInfo = '停车场不存在！';
                            }
                        });
                    }
                });
            }

            function func(record) {
                $scope.currentPage = 0;
                $scope.eachPage = 10;
                $scope.rate = 200;
                $scope.data = record;
                var length = parseInt($scope.data.length / $scope.eachPage);
                $scope.totalPage = ($scope.data.length % $scope.eachPage == 0) ? (length - 1) : length;
            }

            function getNowFormatDate() {
                var date = new Date();
                var seperator = "-";
                var month = date.getMonth() + 1;
                var strDate = date.getDate();
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                if (strDate >= 1 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                var currendate = date.getFullYear() + seperator + month + seperator + strDate;
                return currendate;
            }


            $scope.Index = function () {
                init();
            };

            $scope.Record = function () {
                ParkingRecords.query({
                    parkId: $scope.parkid
                }, function (response) {
                    console.log(response);
                    if (response) {
                        var record = response;
                        func(record);
                        $scope.divList();
                        $scope.todayparking = false;
                        $scope.parkingrecord = true;
                    }
                });
                // init();
                // ParkRecords.readBypid({
                //     parkid: $scope.parkid
                // }, function (response) {
                //     if (response.PKRid) {
                //         var record = response;
                //         func(record);
                //         $scope.divList();
                //         $scope.todayparking = false;
                //         $scope.parkingrecord = true;
                //     }
                // });
            };

            $scope.Quary = function () {
                if ($scope.carid) {
                    ParkRecords.readBycid({
                        carid: $scope.carid
                    }, function (response) {
                        if (response.PKRid) {
                            var record = response;
                            func(record);
                            $scope.divList();
                            $scope.todayparking = false;
                            $scope.quarycarid = true;
                            $scope.errorInfo = '';
                        } else {
                            $scope.errorInfo = '该车牌无停车记录！';
                        }
                    });
                } else {
                    $scope.errorInfo = '车牌号不能为空！';
                }
            };

            $scope.Setting = function () {
                // init();
                $scope.todayparking = false;
                $scope.setting = true;
            };

            $scope.Info = function () {
                // init();
                $scope.todayparking = false;
                $scope.setting = true;
                $scope.alterinfo = false;
            };

            $scope.AlterInfo = function () {
                // init();
                $scope.todayparking = false;
                $scope.setting = false;
                $scope.alterinfo = true;
            };

            $scope.save = function () {
                if ($scope.username) {
                    if ($scope.password) {
                        if ($scope.parkname) {
                            if ($scope.parksize) {
                                if ($scope.parkprice) {
                                    if ($scope.parkphone) {
                                        if ($scope.parkaddress) {
                                            var owner = $scope.user._id;
                                            console.log(owner);
                                            Parks.update({
                                                _id: $scope.parkid,
                                                parkname: $scope.parkname,
                                                carnum: $scope.parksize,
                                                price: $scope.parkprice,
                                                phone: $scope.parkphone,
                                                address: $scope.parkaddress,
                                                freenum: $scope.parkfree,
                                                owner: $scope.user._id
                                            }, function (response) {
                                                if (response._id) {
                                                    alert('更改成功！');
                                                    init();
                                                    $scope.todayparking = false;
                                                    $scope.setting = true;
                                                } else {
                                                    alert('更改失败！')
                                                    init();
                                                    $scope.todayparking = false;
                                                    $scope.setting = true;
                                                }
                                            });

                                        } else {
                                            $scope.errorInfo = '地址不能为空！';
                                        }
                                    } else {
                                        $scope.errorInfo = '联系电话不能为空！';
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
                        $scope.errorInfo = '密码不能为空！';
                    }

                } else {
                    $scope.errorInfo = '用户名不能为空！';
                }
            };


            $scope.clickInfo = function () {
                $scope.errorInfo = '';
            };

            $scope.logout = function () {
                alert('注销成功！');
                delete localStorage.cookie;
                $location.path('/signIn');
                window.location.reload();
            };

        }]);
