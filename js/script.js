// Фиксированная "шапка"
$(window).scroll(function () {
	if ($(this).scrollTop() > 1) {
		$('header').addClass("sticky");
	} else {
		$('header').removeClass("sticky");
	}
});

// Адаптивное меню
$(document).ready(function() {
	$('.menu-trigger').click(function() {
		$('nav ul').slideToggle(500);
	});

	$(window).resize(function() {
		if ($(window).width > 960 ) {
			$('nav ul').removeAttr('style');
		}
	});
});

// Плавные "якоря"
$(document).ready(function () {
	$("#logo, #main-menu, #scroll-top").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href');
		var	top = $(id).offset().top
		$('body,html').animate({
			scrollTop: top
		}, 1000);
	});
});

// Слайдер "спец. предложений"
$('.main-slider').slick({
	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: true,
	draggable: false,
	autoplay: true,
	autoplaySpeed: 4000,
	pauseOnFocus: false,
	dots: true,
	fade: true
});

// Слайдер "продукции"
$('.products .products-items').slick({
	infinite: true,
  	slidesToShow: 3,
  	slidesToScroll: 1,
  	arrows: true,
	draggable: false,
	autoplay: true,
	autoplaySpeed: 4000,
	pauseOnFocus: false
});

// Слайдер "продукции" (мобильная версия)
$('.products-mob .products-items').slick({
	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: true,
	draggable: false,
	autoplay: true,
	autoplaySpeed: 4000,
	pauseOnFocus: false,
	dots: false
});

// Слайдер "отзывов"
$('.testimotials .testimotials-items').slick({
	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: false,
	draggable: false,
	autoplay: true,
	autoplaySpeed: 4000,
	pauseOnFocus: false,
	dots: true
});

// Слайдер "отзывов" (мобильная версия)
$('.testimotials-mob .testimotials-items').slick({
	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: false,
	draggable: false,
	autoplay: true,
	autoplaySpeed: 4000,
	pauseOnFocus: false,
	dots: true
});

// Слайдер "Instagram" (мобильная версия)
$('.instagram-mob .instagram-items').slick({
	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: false,
	draggable: false,
	autoplay: true,
	autoplaySpeed: 4000,
	pauseOnFocus: false,
	dots: true
});

// Слайдер "продукции" (страница продукции)
let slideIndex = 1,
	slides = document.getElementsByClassName('slider-item'),
	prev = document.querySelector('.prev'),
	next = document.querySelector('.next'),
	dotsWrap = document.querySelector('.slider-dots'),
	dots = document.getElementsByClassName('dot');
showSlides(slideIndex);

function showSlides(index) {
	if (index > slides.length) {
		slideIndex = 1;
	};
	if (index < 1) {
		slideIndex = slides.length;
	};
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	};
	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove('dot-active')
	};
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].classList.add('dot-active');
}

function plusSlides(index) {
	showSlides(slideIndex += index);
}

function currentSlide(index) {
	showSlides(slideIndex = index);
}

dotsWrap.addEventListener('click', function (event) {
	for (let i = 0; i < dots.length + 1; i++) {
		if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
			currentSlide(i);
		}
	}
});
//



