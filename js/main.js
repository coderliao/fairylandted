define(['jquery'],function(){
	function change(){
		$('.tab a').on('touchstart',function(){
			$(this).parent().find('a').find('div').removeClass('red');
			$(this).parent().find('a').find('div').addClass('gray');
			$(this).find('div').removeClass('gray');
			$(this).find('div').addClass('red');
		});
	}
	function setsize(){
		document.documentElement.style.fontSize = innerWidth / 3.2 + 'px';
		window.onresize = function() {
			document.documentElement.style.fontSize = innerWidth / 3.2 + 'px';
		};
	}
	return {
		change: change,
		setsize: setsize
	};
});