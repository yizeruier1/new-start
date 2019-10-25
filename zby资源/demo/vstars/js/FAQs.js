$(function(){
	$(".right-con div li").click(function(){
		var self=$(this).children("p");
		if(self.parent().children(".tit").children("img").hasClass("rotate")){
			self.slideUp();
			self.parent().children(".tit").children("p").css({"color":"#333"});
			self.parent().children(".tit").children("img").removeClass("rotate");
		}else{
			self.slideDown();
			self.parent().children(".tit").children("p").css({"color":"#3c78ff"});
			self.parent().children(".tit").children("img").addClass("rotate");
		}
	})
	$(".right-con>div").addClass("hidden").eq(0).removeClass("hidden");
	$(".left-con li").click(function(){
		var index =$(this).index();
		$(this).siblings("li").removeClass("active");
		$(this).addClass("active");
		$(".right-con>div").addClass("hidden").eq(index).removeClass("hidden");
	})
	
	
})