$(function() {
	// fixed menu
	$(window).scroll(function() {
		if($(this).scrollTop() >= 73) {
		$('.menu-wrap').addClass('stickytop');
		}
		else{
		$('.menu-wrap').removeClass('stickytop');
		}
	});
	// fixed menu END
	// toggle btn
	$(".toggle-btn").click(function(){
		$(".toggle-btn").toggleClass("on");
		$(".menu-wrap").toggleClass("open");
		$(".menu-wrap").slideToggle();
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

});
