myApp.controller('legislatorsctrl', function($scope, $http) {
  $scope.zip="";
  $scope.encodeURIComponent = decodeURIComponent;

  $scope.getLegislators = function() {

    $http({
       url: "https://congress.api.sunlightfoundation.com/legislators/locate?apikey=d76ffc8279fc4bc291273bfe9c794064&zip=" + $scope.zip,
       method: "GET"
    }).success(function(data, status, headers, config) {
       console.log(data);
       $scope.senators=data.results
       $scope.title = "This is the Conditions Page"
       //$scope.data = data;
    }).error(function(data, status, headers, config) {
       $scope.status = status;
    });
  }   
});