tarif.controller('tarifController', function tarifController($scope, $http, $document) {
	$http.get('siteParam/tarif.json').success(function(data) {

		$scope.tarif = data.tarif;

			$(window).scroll(function() {
				$('#tarif').each(function() {
					var imagePos = $(this).offset().top;
					var topOfWindow = $(window).scrollTop();
					var calc3 = imagePos / topOfWindow;
					if (calc3 < 1.10) {
						$(this).addClass('fadeIn');
					}
				});
			});

			$scope.goToForm = function(item) {

				var setwork = angular.element(document.getElementById('setwork'));
				setwork.val(item);

			}

	});
});
