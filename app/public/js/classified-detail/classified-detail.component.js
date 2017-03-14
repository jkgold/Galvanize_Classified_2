(function() {
  'use strict'
  angular.module('app')
  .component('classifiedDetail', {
    // template: `<p>Hello</p>`,
    templateUrl: '/js/classified-detail/classified-detail.template.html',
    controller: controller
  })
  controller.$inject = ['$http', '$stateParams', '$state']
  function controller ($http, $stateParams, $state) {
    const vm = this


    vm.$onInit = onInit
    vm.updateClassified = updateClassified
    // vm.patchClassified = patchClassified
    vm.deleteClassified = deleteClassified

    function onInit() {
      vm.id = $stateParams.id
      $http.get(`/classifieds/${$stateParams.id}`)
      .then(response => {
        // console.log(response.data);
        vm.classifiedResponse = response.data;

      })

    }
    function updateClassified(){
      console.log("Hello");
      $http.patch(`/classifieds/${$stateParams.id}`,vm.classifiedResponse)
      .then(response => {
        // console.log("response is",response);
        $state.go('home')
      })
    }
    function deleteClassified(){
      console.log("Hello");
      $http.delete(`/classifieds/${$stateParams.id}`)
      .then(response => {
        console.log("response is",response);
        $state.go('home')
      })
    }
  }

}())
