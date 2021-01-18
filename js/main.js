//main.js
$(function(){

	$('.partners__item').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 3,
		prevArrow: '<button class="slick-btn slick-prev"><img src="img/arrows-left.png" alt="prev"></button>',
		nextArrow: '<button class="slick-btn slick-next"><img src="img/arrows-right.png" alt="next"></button>',
		responsive: [
			{
				breakpoint: 1250,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					dots: true,
					arrows: false
					
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: true,
					arrows: false
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					arrows: false
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	$('.mnu__btn').on('click', function(){

		$('.menu ul').slideToggle();

	});

});