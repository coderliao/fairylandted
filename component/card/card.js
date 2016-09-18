define(['text!component/card/card.html','jquery','css!component/card/card.css'],function(content){
	function fun(){
		//console.log(content);
		$('.main').html(content);
	}
	return {
		fun: fun
	};
});