'use strict';

angular.module('sizzleAngularApp')
    .controller('UpdateCtrl', function ($scope, $firebase) {
        var UpdateRef = new Firebase('https://sizzleapp.firebaseio.com/updates');
        $scope.updates = $firebase(UpdateRef);
        $scope.date = new Date(); // unify timezone accross the system to be able to compare time
        $scope.addMessage = function() {
            $scope.updates.$add({from: $scope.name,
                body: {
                    update: $scope.update,
                    category: $scope.category, // category?
                    lat: $scope.lat,
                    long: $scope.long,
                    date: $scope.date
            }});
            $scope.update = '';
        };
        $scope.readableDate = function(date){
//            function that produces a date readable for the user
        }

        $scope.oneAtATime = false;

        $scope.groups = [
            {
                title: "Dynamic Group Header - 1",
                content: "Dynamic Group Body - 1"
            },
            {
                title: "Dynamic Group Header - 2",
                content: "Dynamic Group Body - 2"
            }
        ];

        $scope.addItem = function() {
            var newItemNo = $scope.items.length + 1;
            $scope.items.push('Item ' + newItemNo);
        };
    });