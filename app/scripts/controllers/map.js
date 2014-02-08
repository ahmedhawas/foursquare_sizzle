'use strict';

angular.module('sizzleAngularApp')
  .controller('MapCtrl', function ($scope) {
        $scope.map = {
            center: {
                latitude: 43.7000,
                longitude: -79.4000
            },
            zoom: 8
        };
  });
