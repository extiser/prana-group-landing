header.controller('headerController', function headerController($scope, $http, $document) {
	$http.get('siteParam/header.json').success(function(data) {

			$scope.menu = data.menu;
			$scope.logo = data.logo;

			var top = 400;
			var duration = 2000; //milliseconds

			$scope.toTheTop = function() {
				$document.scrollTop(0, 5000);
			}

	});
});
