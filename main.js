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

	/*diffrent color of bar */
	const top1 = $('#home').offset().top;
	const top2 = $('#about').offset().top-60;
	const top3 = $('#services').offset().top-60;
	const top4 = $('#portfolio').offset().top-60;
	const top5 = $('#contact').offset().top-60;

	$(document).scroll(function() {
	  const scrollPos = $(document).scrollTop();
	  if (scrollPos >= top1 && scrollPos < top2) {
	    $('.bar').css('background-color', 'rgba(255, 255, 255, 0.7)');
	  } else if (scrollPos >= top2 && scrollPos < top3) {
	    $('.bar').css('background-color', 'rgba(0, 0, 0, 0.7)');
	  } else if (scrollPos >= top3 && scrollPos < top4) {
	    $('.bar').css('background-color', 'rgba(255, 255, 255, 0.7)');
	  } else if (scrollPos >= top4 && scrollPos < top5) {
	    $('.bar').css('background-color', 'rgba(0, 0, 0, 0.7)');
	  } else if (scrollPos >= top5) {
	    $('.bar').css('background-color', 'rgba(255, 255, 255, 0.7)');
	  }
	});
	 /*end diffrent color of nav bar */

	/*shorter - diffrent color of nav bar
	const top1 = $('#home').offset().top;
	const top2 = $('#about').offset().top-60;
	const top3 = $('#services').offset().top-60;
	const top4 = $('#portfolio').offset().top-60;
	const top5 = $('#contact').offset().top-60;

	$(document).scroll(function() {
	  const scrollPos = $(document).scrollTop();
	  if (scrollPos >= top1 && scrollPos < top2 && scrollPos >= top3 && scrollPos < top4 || scrollPos >= top5) {
	    $('.bar').css('background-color', 'rgba(0, 0, 0, 0.7)');
	  }
	});
	end shorter diffrent color of nav bar */

});
