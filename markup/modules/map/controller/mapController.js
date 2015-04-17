map.controller('mapController', function mapController($scope) {

	$('#show-hide').click(function(event) {
		var classN = $(this).hasClass('show');

		var classM = $('#mapcode');

		if (classN) {
			$(this).removeClass('show').html('Показать карту');
			$(classM).removeClass('active');
		} else {
			$(this).addClass('show').html('Скрыть карту');
			$(classM).addClass('active');
		}
	});
})
