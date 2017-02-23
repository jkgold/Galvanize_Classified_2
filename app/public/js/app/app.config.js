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
      // .state({
      //   name: 'app',
      //   abstract: true,
      //   component: 'app',
      // })
      .state({
        name: 'home',
        // parent: 'app',
        url: '/',
        component: 'app',
      })
      // .state({
      //   name: 'editClassifiedState',
      //   parent: 'app',
      //   url: '/posts/:id/edit',
      //   component: 'classifiedEdit',
      // })
  }

}());
