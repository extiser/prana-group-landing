howwework.controller('howweworkController', function howweworkController($scope, $http) {
	$http.get('siteParam/howWeWork.json').success(function(data) {

			$scope.param = data.param;
			$scope.programs = data.programs;

			$(window).scroll(function() {
				$('#howwework').each(function() {
					var imagePos = $(this).offset().top;
					var topOfWindow = $(window).scrollTop();
					var calc2 = imagePos / topOfWindow;
					if (calc2 < 1.10) {
						$(this).addClass('fadeIn');
					}
				});
			})

	});
})
