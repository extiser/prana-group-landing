slider.controller('sliderController', function sliderController($scope, $http) {
	$http.get('siteParam/slider.json').success(function(data) {
			$scope.params = data.params;
			$scope.slides = data.slides;

			var hwSlideSpeed = $scope.params.speed;
			var hwTimeOut = $scope.params.timeout;
			var hwNeedLinks = $scope.params.controls;

			jQuery('.slide').hide().eq(0).show();
			var slideNum = 0,
				slideTime,
				slideCount = $scope.slides.length;

			var animSlide = function(arrow) {
				clearTimeout(slideTime);
				jQuery('.slide').eq(slideNum).fadeOut(hwSlideSpeed);
				if (arrow == 'next') {
					if (slideNum == (slideCount - 1)) {
						slideNum = 0;
					} else {
						slideNum++
					}
				} else if (arrow == 'prev') {
					if (slideNum == 0) {
						slideNum = slideCount - 1;
					} else {
						slideNum-=1
					}
				} else {
					slideNum = arrow;
				}
				jQuery('.slide').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
			}

			if (hwNeedLinks) {
				var $linkArrow = $('<span id="prevbutton" class="button button--prevbutton"></span><span id="nextbutton" class="button button--nextbutton"></span>')
				.prependTo('#slider-wrap');
				$('#nextbutton').click(function() {
					animSlide('next');
				})
				$('#prevbutton').click(function() {
					animSlide('prev');
				})
			}

			var pause = false;
			var rotator = function() {
				if (!pause){
					slideTime = setTimeout(function() {
						animSlide('next')
					}, hwTimeOut);
				}
			}
			jQuery('#slider').hover(
				function() {
					clearTimeout(slideTime);
					pause = true;
				},
				function() {
					pause = false;
					rotator();
				});
			rotator();
	});
});
