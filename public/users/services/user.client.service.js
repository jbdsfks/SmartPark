angular.module('users').factory('Users',['$resource', function ($resource) {

    var User =  $resource('/user/id/:userId',{
        userId:'@id'
    });
    var user = User.get({
        userId:'P001'
    }, function () {
        console.log(user.username);
    });
}]);