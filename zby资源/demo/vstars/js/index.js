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
$(".slide-item").eq(0).click(function(){
	$('html').animate({ scrollTop: 700 }, 1000);
	$(".slide-item").removeClass("acslide");
	$(".slide-item").eq(0).addClass("slide-item acslide");
	$(".slide-item").eq(0).children().css("display", "block").css("right", "16px").css("opacity", 1);
});
$(".slide-item").eq(1).click(function(){
	$('html').animate({ scrollTop: 980 }, 1000);
	$(".slide-item").removeClass("acslide");
	$(".slide-item").eq(1).addClass("slide-item acslide");
	$(".slide-item").eq(1).children().css("display", "block").css("right", "16px").css("opacity", 1);
});
$(".slide-item").eq(2).click(function(){
	$('html').animate({ scrollTop: 2000 }, 1000);
	$(".slide-item").removeClass("acslide");
	$(".slide-item").eq(2).addClass("slide-item acslide");
	$(".slide-item").eq(2).children().css("display", "block").css("right", "16px").css("opacity", 1);
});
$(".slide-item").eq(3).click(function(){
	$('html').animate({ scrollTop: 2575 }, 1000);
	$(".slide-item").removeClass("acslide");
	$(".slide-item").eq(3).addClass("slide-item acslide");
	$(".slide-item").eq(3).children().css("display", "block").css("right", "16px").css("opacity", 1);
});
$(".slide-item").eq(4).click(function(){
	$('html').animate({ scrollTop: 3080 }, 1000);
	$(".slide-item").removeClass("acslide");
	$(".slide-item").eq(4).addClass("slide-item acslide");
	$(".slide-item").eq(4).children().css("display", "block").css("right", "16px").css("opacity", 1);
});
$(".slide-item").eq(5).click(function(){
	$('html').animate({ scrollTop: 3580 }, 1000);
	$(".slide-item").removeClass("acslide");
	$(".slide-item").eq(5).addClass("slide-item acslide");
	$(".slide-item").eq(5).children().css("display", "block").css("right", "16px").css("opacity", 1);
});
$(".slidebar").css({"visibility":"hidden"});
$(window).scroll(function(){
	var a = $(window).scrollTop();
	if(a < 700){
		$(".slidebar").css({"visibility":"hidden"});
	}
	
	if(a >= 700 && a < 980){
		$(".slidebar").css({"visibility":"visible"});
		$(".slide-item").removeClass("acslide");
		$(".slide-tip").removeClass("www");
		$(".slide-item").eq(0).addClass("slide-item acslide");
		$(".slide-tip").eq(0).addClass("www");
		$(".slide-item").children().css({right: "0",opacity: 0});
		$(".slide-item").eq(0).children().css({right: "16px",opacity: 1});
	}

	if(a >= 980 && a < 2000){
		$(".slidebar").css({"visibility":"visible"});
		$(".slide-item").removeClass("acslide");
		$(".slide-tip").removeClass("www");
		$(".slide-item").eq(1).addClass("slide-item acslide");
		$(".slide-tip").eq(1).addClass("www");
		$(".slide-item").children().css({right: "0",opacity: 0});
		$(".slide-item").eq(1).children().css({right: "16px",opacity: 1});
		
	}

	if(a >= 2000 && a < 2575){
		$(".slidebar").css({"visibility":"visible"});
		$(".slide-item").removeClass("acslide");
		$(".slide-tip").removeClass("www");
		$(".slide-item").eq(2).addClass("slide-item acslide");
		$(".slide-tip").eq(2).addClass("www");
		$(".slide-item").children().css({right: "0",opacity: 0});
		$(".slide-item").eq(2).children().css({right: "16px",opacity: 1});
	}

	if(a >= 2575 && a < 3080){
		$(".slidebar").css({"visibility":"visible"});
		$(".slide-item").removeClass("acslide");
		$(".slide-tip").removeClass("www");
		$(".slide-item").eq(3).addClass("slide-item acslide");
		$(".slide-tip").eq(3).addClass("www");
		$(".slide-item").children().css({right: "0",opacity: 0});
		$(".slide-item").eq(3).children().css({right: "16px",opacity: 1});
	}

	if(a >= 3080 && a < 3580){
		$(".slidebar").css({"visibility":"visible"});
		$(".slide-item").removeClass("acslide");
		$(".slide-tip").removeClass("www");
		$(".slide-item").eq(4).addClass("slide-item acslide");
		$(".slide-tip").eq(4).addClass("www");
		$(".slide-item").children().css({right: "0",opacity: 0});
		$(".slide-item").eq(4).children().css({right: "16px",opacity: 1});
	}

	if(a >= 3580){
		$(".slidebar").css({"visibility":"visible"});
		$(".slide-item").removeClass("acslide");
		$(".slide-tip").removeClass("www");
		$(".slide-item").eq(5).addClass("slide-item acslide");
		$(".slide-tip").eq(5).addClass("www");
		$(".slide-item").children().css({right: "0",opacity: 0});
		$(".slide-item").eq(5).children().css({right: "16px",opacity: 1});
	}
});