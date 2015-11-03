var myModule = angular.module('injectMe',[]);

myModule.controller('windowPain', ['$scope', '$window', function($scope, $window) {
	$scope.message = "InjectMe has loaded";
	$window.alert($scope.message);
}]);