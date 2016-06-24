var MoveAnimate = function(ele,handle,group,wrap){
	this.ele = ele;
	this.width =parseInt(this.ele.css('width')); 
	this.handle = handle;
	this.group = group;
	this.wrap = wrap;
	this.count = 0;
	this.init();
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
	if(this.count < imgLength*2-2){
		this.count+=1;
	}
	else{
		this.count = -1;
	}
//	this.count = this.count%2==0? this.count: ++this.count;
	console.log(this.count);
	var level = this.width*this.count/2;
	this.wrap.css('transform',"translate3d("+-level+"px,0px, 0px)");
	
	this.handle.filter(".act_on").removeClass('act_on');
	$(this.handle[this.count/2]).delay(1000).addClass('act_on');
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
//	li.children('div').show();
//	div.addClass('act_on');
	li.addClass('act_on');
}
MoveAnimate.prototype.doNaimate = function(e) {
	var akey = [],
		value = [];
	var count = 0;
	for(var key in this.group){
		akey[count] = key;
		value[count] = this.group[key];
		count++;
	}
	var target = $(e.target).data('handle');
	switch(target){
		case value[0]:
			this.wrap.css('transform','translate3d('+0+'px, 0px, 0px)');			
			break;
		case value[1]:
			this.wrap.css('transform','translate3d('+(-this.width)+'px, 0px, 0px)');			
			break;
		case value[2]:
			this.wrap.css('transform','translate3d('+(-this.width*2)+'px, 0px, 0px)');			
			break;
		case value[3]:
			this.wrap.css('transform','translate3d('+(-this.width*3)+'px, 0px, 0px)');			
			break;
		case value[4]:
			this.wrap.css('transform','translate3d('+(-this.width*4)+'px, 0px, 0px)');			
			break;
	}
};
