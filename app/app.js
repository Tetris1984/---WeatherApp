'use strict';

var app = angular.module('weatherApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'templates/main.html'
    })
    .state('main.about', {
      url: '/main/about',
      templateUrl: 'templates/about.html'
    })
    .state('main.home', {
      url: '/main/home',
      templateUrl: 'templates/home.html'

    })
    // .state('main.weather', {
    //   url: '/weather/:name',
    //   templateUrl: 'templates/city.html',
    //   controller: 'WeatherCtrl'
    // });
})

app.controller('WeatherCtrl', function() {
  var vm = this;
});
