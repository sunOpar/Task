	//返回顶部
$(function(){
	var windows = $(window);
	var back = $('.back_top');
	var wrap = $('.back_top_wrap');
	var topv = -Infinity;
	wrap.delegate('img','click',function(){
		topv = windows.scrollTop();
		var timer = setInterval(function(){
			if(topv >0){
				windows.scrollTop(topv-=250);
			}else{
				clearInterval(timer);
			}
		},20);
	})
	windows.on('scroll',function(){
		if(windows.scrollTop()!= 0){
			back.fadeIn();
		}else{
			back.fadeOut();
		}
	});
});