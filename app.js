require.config({
	paths:{
		jquery:'//cdn.bootcss.com/jquery/3.1.0/jquery.min',
		main:'./js/main',
		router:'./router',
		backbone:'//cdn.bootcss.com/backbone.js/1.3.3/backbone',
		underscore:'//cdn.bootcss.com/underscore.js/1.8.3/underscore-min',
		text:'./js/text',
		css:'./js/css',
		swiper:'//cdn.bootcss.com/Swiper/3.3.1/js/swiper.min',
		baiduTemplate:'js/baiduTemplate'
	},
	shim:{
		bootstrap:{
			deps:['jquery']
		}
	}
});
// require(['main','router','backbone','swiper'],function(main,router,backbone,swiper){
// 	main.change();
// 	main.setsize();
// 	backbone.history.start();
// });
require(['main','router','backbone','swiper','baiduTemplate'],function(main,router,backbone,swiper){
	main.change();
	main.setsize();
	backbone.history.start();
});