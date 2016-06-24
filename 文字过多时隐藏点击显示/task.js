$(function(){
	var length = [];
	var LIMIT = 158;
	for(var i = 0, len = $('.textEle').length;i < len; i ++){
		length[i] = $($('.textEle')[i]).text().length;
		if(length[i] > LIMIT){
			var height = $($('.textEle')[i]).height();
			var oldText = sliceText($($('.textEle')[i]),LIMIT);
			creatmore($($('.textEle')[i]),height,oldText);
		}
	}
	function sliceText(obj,num){
		var oldText = obj.text();
		var lastText = obj.text().slice(num);
		var reg = eval('/'+lastText+'$/');
		newText = oldText.replace(reg,'...');
		obj.text(newText);		
		return oldText;
	}
	//创建显示更多字符
	function creatmore(obj,height,oldText){
		$('<a class = "showmore">显示更多</a>').appendTo(obj);
	}
	$('.allreviewcon').delegate($('.showmore'),'click',function(e){
		var target = $(e.target).parent();
		target.css('height',height+'px');
		target.text(oldText);
		target.addClass('showtext');
		$(e.target).hide();
		
	});
});