
var app=angular.module ( 'myapp',['ngRoute']);

app.config ( function ( $routeProvider,$locationProvider){

    $locationProvider.html5Mode ( true);
    $routeProvider
    .when ( '/',{
        controller:'loginController',
        templateUrl:'login.ejs'
    })
    .when ( '/register',{
        controller:'registerController',
        templateUrl:'register.ejs'
    })
    .when ( '/parkindex',{
        controller:'parkController',
        templateUrl:'parkindex.ejs'
    })
    .when ( '/highwayindex1',{
        controller:'highwayController1',
        templateUrl:'highwayindex1.ejs'
    })
    .when ( '/highwayindex2',{
        controller:'highwayController2',
        templateUrl:'highwayindex2.ejs'
    })
    .otherwise ( {
        redirectTo:'/'
    });
});
