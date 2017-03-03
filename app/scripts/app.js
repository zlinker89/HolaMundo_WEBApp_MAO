'use strict';

/**
 * @ngdoc overview
 * @name webMaoApp
 * @description
 * # webMaoApp
 *
 * Main module of the application.
 */
var app = angular
  .module('webMaoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'monospaced.qrcode'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/qr_generator.html',
        controller: 'QRgeneratorCtrl',
        controllerAs: 'QRgenerator'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
