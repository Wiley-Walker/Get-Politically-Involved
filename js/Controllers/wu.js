myApp.factory('wu', ['$http', function($http){

  function getUrl(service, zip){
    return 'http://api.wunderground.com/api/536b90dc843299c1/' + service + '/q/' + zip + '.json?callback=JSON_CALLBACK'
  }

  function getConditions(zip){
      var url = getUrl('conditions', zip);
      return $http.jsonp(url);
      console.log('we have it here')
  }

  function getforecast10day(zip){
  	var url = getUrl('forecast', zip);
  	return $http.jsonp(url);
  	console.log('10 day defined');
  }

  function getWebcams(zip){
    var url = getUrl('webcams', zip);
    return $http.jsonp(url);
    console.log('webcams');
  }


return{getConditions:getConditions, getforecast10day:getforecast10day, getWebcams:getWebcams
}

 

}])