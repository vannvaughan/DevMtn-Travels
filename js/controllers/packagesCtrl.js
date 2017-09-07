angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv, $stateParams){

$scope.packageInfo = mainSrv.getPackageByCountry($stateParams.country);


})