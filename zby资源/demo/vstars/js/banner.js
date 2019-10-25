$(function(){
	var banner=$(".banner");
	$(".bannertwo").hide(1);
	$(".banner-big div .banner-d2").eq(1).hide(1);
	function bannerplay(){
		var time = setInterval(function(){
			
			if($(".bannerone").css("z-index")=='-1'){
				$(".bannerone").css("z-index","-3");
				$(".bannertwo").fadeIn(1500);
				$(".bannerone").fadeOut(750);
				$(".banner-big div .banner-d2").eq(1).fadeIn(3000);
				$(".banner-big div .banner-d2").eq(0).fadeOut(1);
			}else{
				$(".bannerone").css("z-index","-1");
				$(".bannerone").fadeIn(1500);
				$(".bannertwo").fadeOut(750);
				$(".banner-big div .banner-d2").eq(0).fadeIn(3000);
				$(".banner-big div .banner-d2").eq(1).fadeOut(1);
			}
	　　},8000);
	}
	bannerplay();
})
