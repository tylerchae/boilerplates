(function() {
  'use strict';

  angular.module('Home', [])
  .controller('HomeController', ['$scope', '$http', HomeController])
  ;

  function HomeController($scope, $http, apiUrl) {
    console.log('HomeController');
  }
})();
