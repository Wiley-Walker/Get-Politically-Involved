'use strict';

// Declare app level module which depends on filters, and services

var myApp = angular.module('myApp', [
  'ngRoute'
]);
myApp.config(function ($routeProvider,$sceProvider) {
    $sceProvider.enabled(false);
  $routeProvider.
    when('/', {
      templateUrl: 'views/home.html',
      controller: 'mycontroller'
    }).
    when('/legislators', {
      templateUrl: 'views/legislators.html',
      controller: 'legislatorsctrl'
    }).
    when('/current',{
      templateUrl: 'views/current.html',
      controller:'mycontroller'
    }).
    when('/zipcodes',{
      templateUrl: 'views/zipCodes.html',
      controller: 'zipsctrl'
    }).
    when('/vote',{
      templateUrl: 'views/polls.html',
      controller: 'mycontroller'
    }).
    otherwise({
      redirectTo: '/'
    });
});

 
