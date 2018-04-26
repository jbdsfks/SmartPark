
var app=angular.module ( 'myapp',['ngRoute']);

app.config ( function ( $routeProvider,$locationProvider){

    $locationProvider.html5Mode ( true);
    $routeProvider
    .when ( '/',{
        controller:'indexController',
        templateUrl:'index.ejs'
    })
    .when ( '/login',{
        controller:'loginController',
        templateUrl:'login.ejs'
    })
    .when ( '/register',{
        controller:'registerController',
        templateUrl:'register.ejs'
    })
    .when ( '/commonindex',{
        controller:'commonController',
        templateUrl:'commonindex.ejs'
    })
    .when ( '/managerindex',{
        controller:'managerController1',
        templateUrl:'managerindex.ejs'
    })
    .when ( '/adminindex',{
        controller:'adminController1',
        templateUrl:'adminindex.ejs'
    })
    .otherwise ( {
        redirectTo:'/index'
    });
});
