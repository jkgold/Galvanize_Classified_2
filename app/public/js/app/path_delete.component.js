(function() {
  'use strict'
  angular.module('app')
  .component('app', {
    templateUrl: '/js/app.patch_delete.template.html',
    controller: controller
  })
  controller.$inject = ['$http']
  function controller ($http) {
    const vm = this


    vm.$onInit = onInit
    vm.patchClassified = patchClassified

    function onInit() {
      $http.patch

    }
  }
})
