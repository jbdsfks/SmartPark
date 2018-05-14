var mainApplicationModuleName = 'myApp';
var mainApplicationModule = angular.module(mainApplicationModuleName,
    ['ngResource','ngRoute', 'users']);

mainApplicationModule.config ( function ( $routeProvider,$locationProvider){

    $locationProvider.html5Mode ( true);
    $locationProvider.hashPrefix('!');
    $routeProvider
        .when ( '/signin',{
            controller:'loginController',
            templateUrl:'login.ejs'
        })
        .when ( '/signup',{
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

if (window.location.hash === '#_=_') window.location.hash = '#!';


// angular.element(document).ready(function() {
//     angular.bootstrap(document, [mainApplicationModuleName]);
// });
