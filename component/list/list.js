define(['text!component/list/list.html','jquery','css!component/list/list.css','baiduTemplate'],function(content){
	function fun(){
		//console.log(content);
		$('.main').html(content);
		set('全城');
		$('.main2nav').on('touchstart',function(e){
			$('.main2nav li').removeClass('redbottom');
			$('.main2nav li').addClass('transbottom');
			$(e.target).addClass('redbottom');
			$(e.target).removeClass('transbottom');
			$('.main2 .content').html('');
			$('.cityselect').css('display','none');
			if($(e.target).index()=='0'){
				set('全城');
			}else if($(e.target).index()=='1'){
				$('.cityselect').css('display','block');
			}else{
				setorderdata('全城');
			}
		});
		$('.cityselect ul').on('touchstart',function(e){
			$('.cityselect ul li').removeClass('graybg');
			$('.cityselect ul li').addClass('whitebg');
			$(e.target).addClass('graybg');
			$(e.target).removeClass('whitebg');
			$('.cityselect').css('display','none');
			$('.main2nav .city').text($(e.target).text());
			set($('.main2nav .city').text());
		});

		function set(add){
			$.ajax({
				type:"get",
				url:"http://duif.applinzi.com/leyuan/leyuan_data.php",
				async:true,
				dataType:'json',
				data:{'address':add},
				success:function(res){
					setdata(res.data);
				}
			});
			function setdata(arr){
				// console.log(arr);
				var html = baidu.template("listmsg",{data:arr});
				//console.log(html);
				$('.main2 .content').append(html);
			}
		}
		function setorderdata(add){
			$.ajax({
				type:"get",
				url:"http://duif.applinzi.com/leyuan/leyuan_data.php",
				async:true,
				dataType:'json',
				data:{'address':add},
				success:function(res){
					setdata(res.data);
				}
			});
			function setdata(arr){
				arr.sort(function(a,b){
					return a.dist - b.dist;
				});
				var html = baidu.template("listmsg",{data:arr});
				//console.log(html);
				$('.main2 .content').append(html);
			}
		}

	}
	return {
		fun: fun
	};
});