$(function(){
	$(".country").hover(function(){
		$(this).children(".nav2").show(100);
	}, function(){
		$(this).children(".nav2").hide(100);
	});
	
	if(localStorage.getItem("language")=="ch"){
		$(".country>.language-group").removeClass("hidden");
		$(".country>.language-group").addClass("hidden").eq(1).removeClass("hidden");
	}else if(localStorage.getItem("language")=="en"){
		$(".country>.language-group").removeClass("hidden");
		$(".country>.language-group").addClass("hidden").eq(0).removeClass("hidden");
	}else{
		$(".country>.language-group").removeClass("hidden");
		$(".country>.language-group").addClass("hidden").eq(0).removeClass("hidden");
	}
	$(".nav2 .language-group").click(function(){
		var pcon=$(this).children("p").html();
		var locallan=null;
		if(pcon=="EN"||pcon=="英文"){
			locallan="en";
			console.log(locallan);
			$(".country>.language-group").removeClass("hidden");
			$(".country>.language-group").addClass("hidden").eq(0).removeClass("hidden");
		}else{
			locallan="ch";
			console.log(locallan);
			$(".country>.language-group").removeClass("hidden");
			$(".country>.language-group").addClass("hidden").eq(1).removeClass("hidden");
		}
		localStorage.setItem('language', locallan);
	})
	
	
})