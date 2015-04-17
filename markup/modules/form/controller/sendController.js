formSend.controller('formSendController', function formSendController($scope, $http, $location) {
	$scope.user = {};
	$scope.submit = function() {
		if ($scope.form.$valid) {
			var absUrl = $location.absUrl();
			$.post('sendMail.php', $scope.user, function(data, status) {
				if (status == 'success') {
					$('#send-form-ok').addClass('active').siblings().removeClass('active');
					$('#toOrder').removeClass('active');
				} else {
					$('#send-form-err').addClass('active').siblings().removeClass('active');
				};
			});
		}
	}
});
