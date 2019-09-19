$(document).ready(function () {
	$('.menu-toggler').on('click', function () {
		$(this).toggleClass('open');
		$('.top-nav').toggleClass('open');
	});

	$('.top-nav .nav-link').on('click', function () {
		$('.menu-toggler').removeClass('open');
		$('.top-nav').removeClass('open');
	});

	$('nav a[href*="#"]').on('click', function () {
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top-100
		}, 2000);
	});

	$(".landing-link-about").click(function() {
     $('html, body').animate({
        	 scrollTop: $(".about").offset().top-70
    	 }, 1000);
	 });

	$(".landing-link-portfolio").click(function() {
     $('html, body').animate({
        	 scrollTop: $(".portfolio").offset().top+5
    	 }, 1000);
	 });



	$('#up').on('click', function () {
		$('html, body').animate({
			scrollTop: 0
		}, 2000);
	});


	/*AOS animation*/
	AOS.init({
		easing: 'ease',
		duration: 1800,
		once: true
	});

	/*end AOS animation*/

});