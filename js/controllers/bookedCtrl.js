angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $state, $stateParams){

    $scope.package = mainSrv.getPackageById($stateParams.id);
    console.log($scope.package)
})