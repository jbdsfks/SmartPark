
/*
* userid 当前管理员id
*
* quaryParkId (userid) ——返回parkid
* quaryParkName (userid) ——返回park名称
* quaryParkAddress (userid) ——返回park地址
* quaryParkPhone (userid) ——返回park联系电话
* quaryParkSize (userid) ——返回park总车位数
* quaryParkPrice (userid) ——返回park收费标准
* quaryParkFree (userid) ——返回park当前空闲车位数
*
* quaryUserName (userid) ——返回userid的用户名
* quaryUserPwd (userid) ——返回userid的密码
* quaryUserPhone (userid) ——返回userid手机号
*
* quaryParkRrecord (userid) ——返回userid下park的全部停车记录
*
* quaryRecord(carid)——返回carid的停车记录
*
* deletepark (parkid) ——删除停车场parkid，成功返回true
*
* addpark (parkname1,parksize1,price1,parkphone1,parkaddress1) ——添加停车场，成功返回true
*
* alterpark (parkid,parkname,parksize,price,parkphone,parkaddress);——更改parkid的信息，成功返回true
*
* alterManagerInfo (userid,username,userphone,userpwd) ——更改userid的信息，成功返回true

*
* 
*/


var f=true;

app.controller ('managerController', function ($scope,$location) {

  
  $scope.add=true;
  $scope.parkinfo=false;
  $scope.alterinfo=false;
  $scope.addpark=false;
  $scope.alterparkinfo=false;
  $scope.quarycar=false;
  $scope.clickInfo=function(){
        $scope.errorInfo='';
    }

  function init (f) {

    if(localStorage.user)
      $scope.userid=localStorage.user;

    $scope.errorInfo='';

    /*$scope.username=quaryUserName ($scope.userid);
    $scope.userpwd=quaryUserPwd ($scope.userid);
    $scope.userphone=quaryUserPhone ($scope.userid);

    $scope.parkid=quaryParkId ($scope.userid);
    $scope.parkname=quaryParkName ($scope.userid);
    $scope.parksize=quaryParkSize ($scope.userid);
    $scope.free=quaryParkFree ($scope.userid);
    $scope.price=quaryParkPrice ($scope.userid);
    $scope.parkaddress=quaryParkAddress ($scope.userid);
    $scope.parkphone=quaryParkPhone ($scope.userid);

    var record=quaryParkRrecord ($scope.userid);*/

    $scope.username="XXX";
    $scope.userpwd="123456";
    $scope.userphone="18928192187";

    $scope.parkid="1";
    $scope.parkname="南京理工大学-停车场";
    $scope.parksize="200";
    $scope.free="20";
    $scope.price="10";
    $scope.parkaddress="孝陵卫街200号";
    $scope.parkphone="025-888888";
    var record=[
      {
        "id": "1",
        "user_id": "2",
        "car_id": "苏A22222",
        "park_id": "5",
        "car_in": "2018-04-15 08:00:00",
        "duration": "4",
        "pay": "40.00",
        "status": ""
      },
      {
        "id": "2",
        "user_id": "2",
        "car_id": "苏A22222",
        "park_id": "2",
        "car_in": "2018-04-13 08:00:00",
        "duration": "4",
        "pay": "80.00",
        "status": ""
      },
      {
        "id": "3",
        "user_id": "2",
        "car_id": "苏A22222",
        "park_id": "3",
        "car_in": "2018-04-14 08:00:00",
        "duration": "4",
        "pay": "32.00",
        "status": ""
      },
      {
        "id": "4",
        "user_id": "2",
        "car_id": "苏A22222",
        "park_id": "2",
        "car_in": "2018-04-16 08:00:00",
        "duration": "4",
        "pay": "80.00",
        "status": ""
      },
      {
        "id": "5",
        "user_id": "2",
        "car_id": "苏A22222",
        "park_id": "2",
        "car_in": "2018-04-17 08:00:00",
        "duration": "4",
        "pay": "80.00",
        "status": ""
      },
      {
        "id": "6",
        "user_id": "1",
        "car_id": "苏A11111",
        "park_id": "3",
        "car_in": "2018-04-17 08:00:00",
        "duration": "4",
        "pay": "32.00",
        "status": ""
      },
      {
        "id": "7",
        "user_id": "2",
        "car_id": "苏A22222",
        "park_id": "2",
        "car_in": "2018-04-13 08:00:00",
        "duration": "4",
        "pay": "80.00",
        "status": ""
      },
      {
        "id": "8",
        "user_id": "2",
        "car_id": "苏A22222",
        "park_id": "3",
        "car_in": "2018-04-14 08:00:00",
        "duration": "4",
        "pay": "32.00",
        "status": ""
      },
      {
        "id": "9",
        "user_id": "2",
        "car_id": "苏A22222",
        "park_id": "2",
        "car_in": "2018-04-16 08:00:00",
        "duration": "4",
        "pay": "80.00",
        "status": ""
      },
      {
        "id": "10",
        "user_id": "2",
        "car_id": "苏A22222",
        "park_id": "2",
        "car_in": "2018-04-17 08:00:00",
        "duration": "4",
        "pay": "80.00",
        "status": ""
      },
      {
        "id": "11",
        "user_id": "1",
        "car_id": "苏A11111",
        "park_id": "3",
        "car_in": "2018-04-17 08:00:00",
        "duration": "4",
        "pay": "32.00",
        "status": ""
      }
    ];
    $scope.currentPage=0;
    $scope.eachPage=10;
    $scope.rate=200;
    $scope.data=record;
    var length=parseInt ($scope.data.length/$scope.eachPage);
    $scope.totalPage= ($scope.data.length%$scope.eachPage == 0) ?  (length-1) :length;
    $scope.divList=function (page) {
       if (page == 0) {
        $scope.currentPage=0;
       }else if (page) {
        $scope.currentPage += page;
       }else {

       }
       var length=$scope.data.length;
       var start=$scope.currentPage * $scope.eachPage;
       var end= (start + $scope.eachPage > length) ? length: start + $scope.eachPage;
       $scope.list=$scope.data.slice (start,end);
    }

    /*if (quaryParkId ($scope.userid) ) 
      f=true;*/
    $scope.divList();
    $scope.add=!f;
    $scope.parkinfo=f;
    $scope.alterinfo=false;
    $scope.addpark=false;
    $scope.alterparkinfo=false;
    $scope.quarycar=false;
  }
    

  $scope.Index=function(){
    init(f);
  }

  $scope.QuaryCar=function () {
    $scope.errorInfo='';
    $scope.parkinfo=false;
    $scope.add=false;
    $scope.alterinfo=false;
    $scope.addpark=false;
    $scope.alterparkinfo=false;
    $scope.quarycar=true;
    $scope.quarycarid=false;
  }

  $scope.AlterInfo=function () {
    $scope.errorInfo='';
    $scope.parkinfo=false;
    $scope.add=false;
    $scope.alterinfo=true;
    $scope.addpark=false;
    $scope.alterparkinfo=false;
    $scope.quarycar=false;
  }


  $scope.AlterPark=function () {
    $scope.errorInfo='';
    $scope.add=false;
    $scope.parkinfo=false;
    $scope.alterinfo=false;
    $scope.addpark=false;
    $scope.alterparkinfo=true;
    $scope.quarycar=false;
    
  }

  $scope.AddPark=function () {
    if (!f) {
      $scope.errorInfo='';
      $scope.add=false;
      $scope.parkinfo=false;
      $scope.alterinfo=false;
      $scope.addpark=true;
      $scope.alterparkinfo=false;
      $scope.quarycar=false;
    }else{
      alert ('停车场已存在');
      init (f);
    }
  }

  $scope.DeletePark=function () {
    if (f) {
      if (true) {//deletepark (parkid) 
        f=false;
        alert ('已删除');
        init (f);
      }else{
        alert ('删除失败');
        init (f);
      }
    }else{
      alert ('停车场不存在！');
      init (f);
    }
  }


  $scope.savepark=function () {
    if ($scope.parkname1) {
      if ($scope.parksize1) {
        if ($scope.price1) {
          if ($scope.parkphone1) {
            if ($scope.parkaddress1) {
              if (true) {//addpark ($scope.parkname1,$scope.parksize1,$scope.price1,$scope.parkphone1,$scope.parkaddress1) 
                f=true;
                alert ('添加成功！');
                init (f);
              }else{
                alert ('添加失败！');
                init (f);
              }
            }else{
              $scope.errorInfo='停车场地址不能为空';
            }
          }else{
            $scope.errorInfo='联系电话不能为空';
          }
        }else{
          $scope.errorInfo='收费标准不能为空';
        }
      }else{
        $scope.errorInfo='停车场规模不能为空';
      }
    }else{
      $scope.errorInfo='停车场名称不能为空';
    }
  }

  $scope.savealter=function () {
    if ($scope.parkname) {
      if ($scope.parksize) {
        if ($scope.price) {
          if ($scope.parkphone) {
            if ($scope.parkaddress) {
              if (true) {//alterpark ($scope.parkid,$scope.parkname,$scope.parksize,$scope.price,$scope.parkphone,$scope.parkaddress) 
                alert ('更改成功！');
                init (f);
              }else{
                alert ('更改失败！');
                init (f);
              }
            }else{
              $scope.errorInfo='停车场地址不能为空';
            }
          }else{
            $scope.errorInfo='联系电话不能为空';
          }
        }else{
          $scope.errorInfo='收费标准不能为空';
        }
      }else{
        $scope.errorInfo='停车场规模不能为空';
      }

    }else{
      $scope.errorInfo='停车场名称不能为空';
    }
  }

  $scope.saveinfo=function () {
    if ($scope.username) {
      if ($scope.userphone) {
        if ($scope.userpwd) {
          if ($scope.confirmpassword==$scope.userpwd) {
            if (true ) {//alterManagerInfo ($scope.userid,$scope.username,$scope.userphone,$scope.userpwd)
              alert ('更改成功！');
              init (f);
            }else{
              alert ('更改失败！');
              init (f);
            }
          }else{
            $scope.errorInfo='两次密码输入不一致';
          }
        }else{
          $scope.errorInfo='密码不能为空';
        }
      }else{
        $scope.errorInfo='手机号不能为空';
      }
    }else{
      $scope.errorInfo='用户名不能为空';
    }
  }


  $scope.quary=function(){
    if($scope.carid){
      if(true){//quaryRecord($scope.carid)
            $scope.errorInfo='';
            var rec=[
          {
            "id": "1",
            "user_id": "2",
            "car_id": "苏A22222",
            "park_id": "5",
            "car_in": "2018-04-15 08:00:00",
            "duration": "4",
            "pay": "40.00",
            "status": ""
          },
          {
            "id": "2",
            "user_id": "2",
            "car_id": "苏A22222",
            "park_id": "2",
            "car_in": "2018-04-13 08:00:00",
            "duration": "4",
            "pay": "80.00",
            "status": ""
          },
          {
            "id": "3",
            "user_id": "2",
            "car_id": "苏A22222",
            "park_id": "3",
            "car_in": "2018-04-14 08:00:00",
            "duration": "4",
            "pay": "32.00",
            "status": ""
          }];
          $scope.carrec=rec;
          $scope.quarycarid=true;

      }else{
        $scope.errorInfo='没有停车记录！';
      }
    }else{
      $scope.quarycarid=false;
      $scope.errorInfo='车牌号不能为空';
    }
    
  }

  $scope.logout=function () {
    alert ('注销成功！');
    delete localStorage.cookie;
    $location.path ('/login');
  }
  init (f);

});
