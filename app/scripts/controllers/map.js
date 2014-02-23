'use strict';

angular.module('sizzleAngularApp')
  .controller('MapCtrl', function ($scope, $firebase) {
        $scope.map = {
            center: {
                latitude: 43.7000,
                longitude: -79.4000
            },
            zoom: 10,
            markers:[
                {
                    latitude: 43.7000,
                    longitude: -79.4000
                }
            ]
        };
        var UpdateRef = new Firebase("https://sizzleapp.firebaseio.com/updates");
        $scope.updates = $firebase(UpdateRef);

        $scope.showOnMap = function(lat, long){
            $scope.map = {
                center:{
                    latitude:lat,
                    longitude: long
                },
                zoom: 14,

                markers: [
                    {
                        latitude: lat,
                        longitude: long
                    }
                ]
            }
        };
  });