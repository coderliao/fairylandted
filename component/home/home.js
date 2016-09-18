define(['text!component/home/home.html','jquery','css!//cdn.bootcss.com/Swiper/3.3.1/css/swiper.min.css','css!component/home/home.css'],function(content){
	function fun(){
		//console.log(content);
		$('.main').html(content);
		$.ajax({
			type:"get",
			url:"http://duif.applinzi.com/leyuan/home_data.php",
			async:true,
			success:function(res){
				setslider(JSON.parse(res).slider);
				setarealist(JSON.parse(res).arealist);
				setreclist(JSON.parse(res).reclist);
				lunbo();
			}
		});
		function lunbo(){
			var mySwiper = new Swiper("#slidePic",{  
		        direction:"horizontal",/*横向滑动*/  
		        loop:true,/*形成环路（即：可以从最后一张图跳转到第一张图*/  
		        pagination:".swiper-pagination",/*分页器*/  
		        prevButton:".swiper-button-prev",/*前进按钮*/  
		        nextButton:".swiper-button-next",/*后退按钮*/  
		        autoplay:2000,/*每隔3秒自动播放*/ 
		        autoplayDisableOnInteraction : false 
		    });
		}
		function setslider(arr){
			for(var i =  0; i < arr.length; i++){
				//console.log(arr[i].img);
				$('#slidePic .swiper-wrapper').find('div').eq(i).find('img').attr('src',arr[i].img);
			}
		}
		function setarealist(arr){
			for(var i =0; i < arr.length; i++){
				$('#suggest').before('<a href="' + arr[i].href + '" class="arealist"><img src="' + arr[i].img + '" /></a>');
			}
		}
		function setreclist(arr){
			for(var i =0; i < arr.length; i++){
				$('#suggest').after('<section><img src="' + arr[i].img + '"><p >' + arr[i].name + '</p><p>' + arr[i].address + '</p></section>');
			}
		}
	}
	return {
		fun: fun
	};
});