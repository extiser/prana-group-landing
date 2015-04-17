form.controller('formController', function formController($scope, $http) {
	$http.get('siteParam/form.json').success(function(data) {

			$scope.param = data.param;

			$scope.user = {};
	});
});
