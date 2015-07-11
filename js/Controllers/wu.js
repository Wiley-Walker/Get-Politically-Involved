myApp.factory('wu', ['$http', function($http){

  function getUrl(){
    return 'https://congress.api.sunlightfoundation.com/' + method + '?apikey=d76ffc8279fc4bc291273bfe9c794064'
  }
   

  function getLegislator(method){
      var url = getUrl('legislators');
      console.log('we have it here')
      return $http.jsonp(url);
  }

  function getforecast10day(method){
  	var url = getUrl('forecastday', zip);
  	return $http.jsonp(url);
  	console.log('10 day defined');
  }

  function getWebcams(method){
    var url = getUrl('webcams', zip);
    return $http.jsonp(url);
    console.log('webcams');
  }


return{getLegislator:getLegislator, getforecast10day:getforecast10day, getWebcams:getWebcams
}

 

}])