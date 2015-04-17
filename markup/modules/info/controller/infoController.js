info.controller('infoController', function infoController($scope, $http) {
	$http.get('siteParam/info.json').success(function(data) {

			$scope.info = data.info;

	});
});
