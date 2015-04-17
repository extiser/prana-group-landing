portfolio.controller('portfolioController', function portfolioController($scope, $http) {
	$http.get('siteParam/portfolio.json').success(function(data) {

		$scope.filter = data.filter;
		$scope.param = data.param;
		$scope.works = data.works;

		$scope.filterWorks = function(item) {

			var works = angular.element(document.querySelector('.portfolio__works')).children();

			var itemFilter = angular.element(document.getElementById(item));
			itemFilter.addClass('active').siblings().removeClass('active');

			angular.forEach(works, function(value, key) {
				var id = angular.element(value).attr('data-work');

				angular.element(value).hide(500);

				if (item == 'all') {
					angular.element(value).show(300);
				}

				if (id == item) {
					angular.element(value).show(300);
				};

			});
		}
	});
});
