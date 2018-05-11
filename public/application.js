var mainApplicationModuleName = 'myApp';
var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngRoute','users','example']);

mainApplicationModule.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);

if (window.location.hash === '#_=_') window.location.hash = '#!';
