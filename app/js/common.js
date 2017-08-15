$(document).ready(function() {

	// scroll
	$('a[href^="#"]').bind('click.smoothscroll',function (e) {
	 e.preventDefault();
	 
	var target = this.hash,
	 $target = $(target);
	 
	$('html, body').stop().animate({
	 'scrollTop': $target.offset().top-100
	 }, 500, 'swing', function () {
	 window.location.hash = target;
	 });
	 });


	// fixed menu
	$(window).scroll(function() {
		if($(this).scrollTop() >= 200) {
		$('.header_top').addClass('stickytop');
		}
		else{
		$('.header_top').removeClass('stickytop');
		}
	}),500;
	// fixed menu END


	// toggle btn
	$(".toggle-btn").click(function(){
		$(".toggle-btn").toggleClass("on");
		$(".menu-wrap").toggleClass("open");
		$(".menu-wrap").slideToggle();
	});

	$('.menu-wrap li').click(function(){
		$(".menu-wrap").slideToggle();
		$(".toggle-btn").toggleClass("on");
	});
	// toggle btn END


	// top nav
	$("nav li").click(function(){
		$("nav li").removeClass("active");
		$(this).addClass("active");
	});
	// top nav END 

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	// slider

		$('.projects__slider').slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1
			}
		}
	]
		});



		// slider END

	// animation

	
	// $(".about_us-text").animated("fadeInLeft", "fadeOutLeft");
	// $(".about_us__img").animated("fadeInRight", "fadeOutRight");
	// $(".services__item").animated("bounceIn", "bounceOut");
	
});


