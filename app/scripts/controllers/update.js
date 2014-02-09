'use strict';

angular.module('sizzleAngularApp')
    .controller('UpdateCtrl', function ($scope, $firebase) {
        var UpdateRef = new Firebase('https://sizzleapp.firebaseio.com/updates');
        $scope.updates = $firebase(UpdateRef);
        $scope.addMessage = function(e) {
            if (e.keyCode !== 13){
              return;
            }
            $scope.updates.$add({from: $scope.name, body: $scope.update});
            $scope.update = '';
        };
    });