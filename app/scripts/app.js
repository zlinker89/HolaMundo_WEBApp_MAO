'use strict';

/**
 * @ngdoc overview
 * @name webMaoApp
 * @description
 * # webMaoApp
 *
 * Main module of the application.
 */
angular
  .module('webMaoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/qr_generator.html',
        controller: 'QRgeneratorCtrl',
        controllerAs: 'QRgenerator'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
