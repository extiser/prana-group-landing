angular.element(document).ready(function() {
	angular.bootstrap(document.getElementById('header'),['header']);
	angular.bootstrap(document.getElementById('slider'),['slider']);
	angular.bootstrap(document.getElementById('info'),['info']);
	angular.bootstrap(document.getElementById('programs'),['programs']);
	angular.bootstrap(document.getElementById('howwework'),['howwework']);
	angular.bootstrap(document.getElementById('portfolio'),['portfolio']);
	angular.bootstrap(document.getElementById('tarif'),['tarif']);
	angular.bootstrap(document.getElementById('reviews'),['reviews']);
	angular.bootstrap(document.getElementById('form'),['form']);
	angular.bootstrap(document.getElementById('toOrder'),['formSend']);
	angular.bootstrap(document.getElementById('map'),['map']);
});

var form = angular.module('form', []);

'use strict';
var formSend = angular.module('formSend', ['ui.utils']);

var header = angular.module('header', []);

var howwework = angular.module('howwework', []);

var info = angular.module('info', []);

var map = angular.module('map', []);

var portfolio = angular.module('portfolio', ['angular.filter']);

var programs = angular.module('programs', []);

var reviews = angular.module('reviews', []);

var slider = angular.module('slider', []);

var tarif = angular.module('tarif', []);

form.controller('formController', function formController($scope, $http) {
	$http.get('siteParam/form.json').success(function(data) {

			$scope.param = data.param;

			$scope.user = {};
	});
});

formSend.controller('formSendController', function formSendController($scope, $http) {
	$scope.user = {};
	$scope.submit = function() {
		if ($scope.form.$valid) {
			$.post('http://test.promo/sendMail.php', $scope.user, function(data, status) {
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

header.controller('headerController', function headerController($scope, $http) {
	$http.get('siteParam/header.json').success(function(data) {

			$scope.menu = data.menu;
			$scope.logo = data.logo;
	});
});

howwework.controller('howweworkController', function howweworkController($scope, $http) {
	$http.get('siteParam/howWeWork.json').success(function(data) {

			$scope.param = data.param;
			$scope.programs = data.programs;

	});
})

info.controller('infoController', function infoController($scope, $http) {
	$http.get('siteParam/info.json').success(function(data) {

			$scope.info = data.info;

	});
});

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

programs.controller('programsController', function programsController($scope, $http) {
	$http.get('siteParam/programs.json').success(function(data) {

			$scope.param = data.param;
			$scope.programs = data.programs;

	});
})

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

tarif.controller('tarifController', function tarifController($scope, $http) {
	$http.get('siteParam/tarif.json').success(function(data) {

		$scope.tarif = data.tarif;

	});
});
