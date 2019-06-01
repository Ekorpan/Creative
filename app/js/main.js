'use strict';

(function($){

	$('.burger-menu').click(function() {
		$(this).toggleClass('burger-menu--active');
		$('body').toggleClass('is-menu-shown');
	});
	$('.slider').slick({
		dots: false,
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: "<img src='../images/icons/arrow-black.png' class='prev' alt='1'>",
		nextArrow: "<img src='../images/icons/arrow-black.png' class='next' alt='2'>",
		responsive: [
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				arrows: false
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false
			}
		}
		]
	});






})(jQuery);

function initMap() {
	var center = {lat: 49.568678, lng: 34.585731},
	map  = new google.maps.Map(document.getElementById('map'), {
		zoom: 15, 
		center: center,
		disableDefaultUI: true,
		zoomControl: true
	}),
	marker = new google.maps.Marker({
		title: 'Beetroot',
		position: {lat: 49.568678, lng: 34.585731},
		icon: 'images/map-marker.png',
		map: map
	}),
	infowindow =new google.maps.InfoWindow;

 /*google.maps.event.addListener(marker, 'click', (function(marker) {
   var info = '<div class="window">'+'<h1 class="window__title">' +marker.title+'</h1>'+'<p>'+'Welcome to Beetroot'+'</p>'+'</div>';
   return function() {
     infowindow.setContent(info);
     infowindow.open(map, marker);
 }})(marker));*/
};