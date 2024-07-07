$(function () {
    $('.sp_btn,.sp_nav li').on('click', function () {
        $('.sp_nav').fadeToggle();
        $('.sp_btn').toggleClass('open')
    });
});

// $(function(){
// 	$("#header, #mv").css("display", "none");
// 	setTimeout(function() {
// 		$('.loading-wrapper').fadeOut();
// 		}, 1000);
// 	});

// 	$(function(){
// 		$(".header").css({opacity:'0'});
// 		setTimeout(function(){
// 		$(".header").css("display", "block");
// 		$(".header").stop().animate({opacity:'1'},1000);
// 		},3000);
// 	});
	

jQuery(function ($) {
	let w = $(window).width();
	if (w <= 767) {
		var thumbIn = $('.skill_thumb');
		$(window).on('scroll', function () {
			$(thumbIn).each(function () {
				var offset = $(this).offset().top;
				var scroll = $(window).scrollTop(); 
				var windowHeight = $(window).height();
				if (scroll > offset - windowHeight + 300) {
					$(this).addClass("scroll-in");
				}
			});
		});
	}
});