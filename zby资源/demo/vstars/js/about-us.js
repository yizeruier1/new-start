$(function(){
	var a = $(window).height() / 2;
	$(".slidebar").css("top", a-97+"px");
	
	$(".slide-item").hover(function(){
		$(".slide-tip").css("right", 0).css("opacity", 0);
		$(this).children().css("display", "block");
		$(this).children().animate({
			right: "16px",
			opacity: 1
		}, 200);
		// console.log($(document).scrollTop());
	}, function(){
		$(this).children().animate({
			right: "0",
			opacity: 0
		}, 100);
	});
	
	
	// 100
	// 400
	// 1900
	// 2300
	// 3164
	// 3800
	$(".slide-item").eq(0).click(function(){
		$('html').animate({ scrollTop: 100 }, 1000);
		$(".slide-item").removeClass("acslide");
		$(".slide-item").eq(0).addClass("slide-item acslide");
		$(".slide-item").eq(0).children().css("display", "block").css("right", "16px").css("opacity", 1);
	});
	$(".slide-item").eq(1).click(function(){
		$('html').animate({ scrollTop: 400 }, 1000);
		$(".slide-item").removeClass("acslide");
		$(".slide-item").eq(1).addClass("slide-item acslide");
		$(".slide-item").eq(1).children().css("display", "block").css("right", "16px").css("opacity", 1);
	});
	

	$(".slidebar").css({"visibility":"hidden"});
	$(window).scroll(function(){
		var a = $(window).scrollTop();
		if(a < 100){
			$(".slidebar").css({"visibility":"hidden"});
		}
		
		if(a >= 100 && a < 400){
			$(".slidebar").css({"visibility":"visible"});
			$(".slide-item").removeClass("acslide");
			$(".slide-tip").removeClass("www");
			$(".slide-item").eq(0).addClass("slide-item acslide");
			$(".slide-tip").eq(0).addClass("www");
			$(".slide-item").children().css({right: "0",opacity: 0});
			$(".slide-item").eq(0).children().css({right: "16px",opacity: 1});
		}
		if(a >= 400){
			$(".slidebar").css({"visibility":"visible"});
			$(".slide-item").removeClass("acslide");
			$(".slide-tip").removeClass("www");
			$(".slide-item").eq(1).addClass("slide-item acslide");
			$(".slide-tip").eq(1).addClass("www");
			$(".slide-item").children().css({right: "0",opacity: 0});
			$(".slide-item").eq(1).children().css({right: "16px",opacity: 1});
		}
	});

})