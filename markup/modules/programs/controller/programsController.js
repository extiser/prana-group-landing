programs.controller('programsController', function programsController($scope, $http) {
	$http.get('siteParam/programs.json').success(function(data) {

			$scope.param = data.param;
			$scope.programs = data.programs;

			$(window).scroll(function() {
				$('#programs').each(function() {
					var imagePos = $(this).offset().top;
					var topOfWindow = $(window).scrollTop();
					var calc = imagePos / topOfWindow;
					if (calc < 1.5) {
						$(this).addClass('fadeIn');
					}
				});
			})

			$scope.modal = function(item) {
				$scope.item = {};
				$scope.modalLink = 'modalLink';
				$scope.item = item;

				$('#modal').toggleClass('active');
				$('#mask').toggleClass('active').click(function(event) {
					$('#modal').removeClass('active');
					$(this).removeClass('active');
				});
				$('#modalL').click(function(event) {
					$('#modal').removeClass('active');
					$('#mask').removeClass('active');
				});

			}
	});
})
