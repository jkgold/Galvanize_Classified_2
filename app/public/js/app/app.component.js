(function() {
  'use strict'

angular.module('app')
.component('app', {
  templateUrl: '/js/app/app.template.html',
  controller: controller
  })
controller.$inject = ['$http']
function controller ($http) {
  const vm = this

  //get classifieds from server store in variable

  vm.$onInit = onInit
   function onInit() {
    $http.get('/classifieds').then(function (response) {
      vm.classifieds = response.data
      console.log(vm.classifieds);
    })
  }
}
}());
