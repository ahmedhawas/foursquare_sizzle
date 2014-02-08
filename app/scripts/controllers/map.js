'use strict';

angular.module('sizzleAngularApp')
  .controller('MapCtrl', function ($scope, $firebase) {
        $scope.map = {
            center: {
                latitude: 43.7000,
                longitude: -79.4000
            },
            zoom: 8
        };
        var UpdateRef = new Firebase("https://sizzleapp.firebaseio.com/updates");
        $scope.updates = $firebase(UpdateRef);
  });
