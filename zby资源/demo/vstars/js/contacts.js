$(".contact-send").on("click",function(){
	var nametest = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;
	var phonetest=/^[1][3,4,5,7,8][0-9]{9}$/ ;
	var name=$(".name").val();
	var phone=$(".phone").val();
	var subject=$(".subject").val();
	var message=$(".message").val();
	if(nametest.test(name)&&phonetest.test(phone)&&message){
		console.log(name+"     "+phone+"     "+message)
        return true;
	}else{
		alert("请确认输入有效的信息")
		console.log(name+"     "+phone+"     "+message)
        return false;
	}
})
