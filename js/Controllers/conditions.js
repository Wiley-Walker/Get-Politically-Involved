myApp.controller('conditionsctrl', ['$scope', 'wu', function($scope, wu){
  $scope.zip='';
  $scope.title='To find the Current Temp in you city Please:';
  $scope.getConditions=function(){
    wu.getConditions($scope.zip).then(function(response){
      console.log(response.data);
      $scope.temp = response.data.current_observation.temp_f;
      $scope.cityname = response.data.current_observation.display_location.city;
      $scope.skies = response.data.current_observation.icon;
      $scope.skies2 = response.data.current_observation.icon_url;
    })
  }
}]);