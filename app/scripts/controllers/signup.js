'use strict';

angular.module('sizzleAngularApp')
    .controller('SignupCtrl', function ($scope,$firebase) {
        var UserRef = new Firebase('https://sizzleapp.firebaseio.com/users');
        $scope.users = $firebase(UserRef);
        $scope.addUser = function(e) {
            if (e.keyCode !== 13){
                return;
            }
            $scope.users.$add(
                {from: $scope.email,
                    body: {
                        username: $scope.username,
                        password: $scope.password,
                        lat: $scope.lat,
                        long: $scope.long

        }});
//            find a way to get user location and add it.
//            $scope.update = '';
        };

    });