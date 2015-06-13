myApp.controller('webcamsctrl', ['$scope', 'wu', function($scope, wu){
  $scope.zip='';
  $scope.title='This is your webcam report';
  $scope.getWebcams=function(){
    wu.getWebcams($scope.zip).then(function(response){
      console.log(response.data);
      $scope.webcam = response.data.webcams[1].WIDGETCURRENTIMAGEURL;
       
    })
  }
}]);