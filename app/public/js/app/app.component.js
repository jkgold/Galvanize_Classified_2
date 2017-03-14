(function (){
  'use strict';

  angular
    .module('app')
    .component('app', {
      templateUrl: '/js/app/app.template.html',
      controller: AppController
    })

  AppController.$inject = ['$http'];
  function AppController($http) {
    const vm = this;

    vm.$onInit = onInit;
    vm.createClassified = createClassified;

    function onInit() {
      $http.get('/classifieds').then(function (response) {
        vm.classifieds = response.data;
      });
    }

    function createClassified() {
      $http.post('/classifieds', vm.classified).then(function (response) {
        vm.classifieds.push(response.data);
      });
    }
  }
})();
