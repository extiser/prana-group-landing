reviews.controller('reviewsController', function reviewsController($scope, $http) {
	$http.get('siteParam/reviews.json').success(function(data) {

			$scope.param = data.param;
			$scope.reviews = data.reviews;

			$scope.reviewsClick = function(item) {

				var reviewsList = angular.element(document.querySelector('.wrapper--reviews-list')).children();

				var reviewsUser = angular.element(document.querySelector('.wrapper--reviews-users')).children();

				angular.forEach(reviewsUser, function(value, key) {
					var id = angular.element(value).attr('data-iduser');

					if (id == item) {
						angular.element(value).toggleClass('active').siblings().removeClass('active');
					}
				});

				angular.forEach(reviewsList, function(value, key) {
					var id = angular.element(value).attr('data-idreview');

					if (id == item) {
						angular.element(value).toggleClass('active').siblings().removeClass('active');
					}
				});
			}

	});
})
