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
MoveAnimate.prototype.doAll = function(imgLength){
		if(this.count < imgLength-1){
		this.count+=1;
		}
		else{
			this.count = 0;
		}
		console.log(this.count);

		var level = this.width*this.count;
		var act_on = this.handle.filter(".act_on");
		if(imgLength <= 5){
			this.wrap.css('transform',"translate3d("+-level+"px,0px, 0px)");
			act_on.removeClass('act_on');
			$(this.handle[this.count]).delay(1000).addClass('act_on');	
		}
}
MoveAnimate.prototype.showMes = function(e){
	this.handle.parent().find('.act_on')? this.handle.parent().find('.act_on').removeClass('act_on'): 0;
	var li = '';
	var div = '';
	if(e.target.nodeName == 'LI'){
		console.log(e.target.nodeName);
		li = $(e.target);
		div = $(e.target).find('.TitleBanner');
	}
	else if(e.target.nodeName == 'DIV'){
		console.log(e.target.nodeName);
		li = $(e.target).parents('li');
		div = $(e.target);
	}
	li.addClass('act_on');
}
MoveAnimate.prototype.doNaimate = function(e) {
	var count = 0;
	var target = $(e.target).data('handle');
	console.log('target:'+parseInt(target.charAt( target.length - 1)));
	count = parseInt(target.charAt( target.length - 1));
	this.wrap.css('transform','translate3d('+(-this.width*count)+'px, 0px, 0px)');	

};
