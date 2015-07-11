myApp.controller('tendayctrl', ['$scope', 'wu', function($scope, wu){
  $scope.zip='';
  $scope.title='Ten Day Forecast in your city';
  $scope.getforecast10day=function(){
    wu.getforecast10day($scope.zip).then(function(response){
      console.log(response);
      $scope.tenday = response.data.forecast.simpleforecast.forecastday[0];
    })
  }
}]);