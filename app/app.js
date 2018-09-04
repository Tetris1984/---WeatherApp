'use strict';

var app = angular.module('weatherApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('main.home');

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
})
