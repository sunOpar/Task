var MoveAnimate = function(ele,handle,wrap){
	this.ele = ele;
	this.width =parseInt(this.ele.css('width')); 
	this.handle = handle;
	this.wrap = wrap;
	this.count = 0;
}
MoveAnimate.prototype.init = function(){
	var that = this;
	var length = this.ele.length;
	setInterval(
		function(){
		that.doAll(length);	
		},7000);
	this.handle.parent().delegate($('li'),'mouseover',function(e){
		if(e.target.nodeName == 'LI' ||e.target.nodeName == 'DIV'){
			that.doNaimate(e);
			that.showMes(e);
		}
	})
}
/**
 * 循环移动，首先判断下标是否越界，如果没有，则自增一，越界清零
 * @param  {[number]} imgLength [循环图片数量]
 */
MoveAnimate.prototype.doAll = function(imgLength){
		if(this.count < imgLength-1){
		this.count+=1;
		}
		else{
			this.count = 0;
		}
		console.log(this.count);
		// 判断移动图片的距离，获取当前活动标签
		// 然后将当前活动标签去除，给循环中的标签变化活动标签
		var level = this.width*this.count;
		var act_on = this.handle.filter(".act_on");
		this.wrap.css('transform',"translate3d("+-level+"px,0px, 0px)");
		act_on.removeClass('act_on');
		$(this.handle[this.count]).delay(1000).addClass('act_on');	
}
/**
 * 鼠标滑到哪，就对哪个dom进行操作
 */
MoveAnimate.prototype.showMes = function(e){
	this.handle.parent().find('.act_on')? this.handle.parent().find('.act_on').removeClass('act_on'): 0;
	var li = '';
	var div = '';
	if(e.target.nodeName == 'LI'){
		console.log(e.target.nodeName);
		li = $(e.target);
	}
	else if(e.target.nodeName == 'DIV'){
		console.log(e.target.nodeName);
		li = $(e.target).parents('li');
	}
	li.addClass('act_on');
}
/**
 * 得到鼠标滑到哪的data值，然后进行位移
 */
MoveAnimate.prototype.doNaimate = function(e) {
	var count = 0;
	var target = $(e.target).data('handle');
	console.log('target:'+parseInt(target.charAt( target.length - 1)));
	count = parseInt(target.charAt( target.length - 1));
	this.wrap.css('transform','translate3d('+(-this.width*count)+'px, 0px, 0px)');	

};
