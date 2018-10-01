'use strict';

var app = angular.module('weatherApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('main/home');

  $stateProvider
    .state('main', {
      url: '',
      templateUrl: 'templates/main.html'
    })
    .state('main.about', {
      url: 'main/about',
      templateUrl: 'templates/about.html'
    })
    .state('main.home', {
      url: 'main/home',
      templateUrl: 'templates/home.html'
    })
    .state('main.weather', {
      url: "/weather?city",
      views: {
        '': {
          templateUrl: 'templates/city.html',
          controller: 'WeatherCtrl'
        }
      }
    })
    .state('main.weather.detail', {
      url: "/weather/{city}",
      views: {
        '': {
          templateUrl: 'templates/city-details.html'
        }
      }
    });
    ;
});



var WeatherCtrl = function($scope, $state, $stateParams, cityService) {
  $scope.city = $stateParams.city;


     var onFetchError = function(message){
       $scope.error = "Error Fetching Users. Message:" +message;
     };

     var onFetchCompleted = function(data){
        $scope.users =data;
     };

     var getUsers = function(){
       cityService.get().then(onFetchCompleted,onFetchError);
     };

     getUsers();



}

app.controller('WeatherCtrl', WeatherCtrl);


