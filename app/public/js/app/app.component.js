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
  vm.createClassified = createClassified

   function onInit() {
    $http.get('/classifieds').then(function (response) {
      vm.classifieds = response.data
      console.log(vm.classifieds);
    })
  }

  //write a function that posts a classified
  function createClassified(){
    // console.log("am i in function");
    console.log(vm.classified);
    $http.post('/classifieds', vm.classified).then(response => {
      // response.data.addclassifieds = []
      vm.classifieds.push(response.data)
      console.log(vm.classifieds);

  })
  }

  function updateClassified() {
    $http.patch(`/classifieds/${$stateParams.id}`)
    .then (response => {
      $state.go("home")
    })
  }

}
}());
