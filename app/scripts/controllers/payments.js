'use strict';

angular.module('privateTableApp')
  .controller('paymentsController', ['$scope', '$location', '$http', function($scope, $location, $http) {

    $scope.stripeCallback = function (code, result) {
      result.email = $scope.email;
      if (result.error) {
          window.alert('Your payment did not go through... Try again!');
      } else {
       var url = 'api/payments';
        return $http({
          method: 'POST',
          url: url,
          data: result
        })
        .then(function(response){
          $location.path('/confirmation');
        });
      }
    };

  }]);