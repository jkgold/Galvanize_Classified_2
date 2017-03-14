(function() {
  'use strict'
  angular.module('app')
  .component('classifiedDetail', {
    // template: `<p>Hello</p>`,
    templateUrl: '/js/classified-detail/classified-detail.template.html',
    controller: controller
  })
  controller.$inject = ['$http', '$stateParams']
  function controller ($http, $stateParams) {
    const vm = this


    vm.$onInit = onInit
    // vm.patchClassified = patchClassified

    function onInit() {
      vm.id = $stateParams.id
    }
  }
}())
