define(['text!component/user/user.html','jquery','css!component/user/user.css'],function(content){
	function fun(){
		//console.log(content);
		$('.main').html(content);
	}
	return {
		fun: fun
	};
});