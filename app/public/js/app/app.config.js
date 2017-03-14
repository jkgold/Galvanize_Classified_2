(function() {
  'use strict';

  angular.module('app')
    .config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){
    //removing the hash from the url
    $locationProvider.html5Mode(true)

    // different urls separate states of the application
    $stateProvider
      .state({
        name: 'home',
        url: '/',
        component: 'app',
      })
      .state({
        name: 'classifiedDetail',
        url: '/:id',
        component: 'classifiedDetail'
      })
  }

}());
