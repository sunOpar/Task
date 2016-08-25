function User_index(ul,addTop){
	this.ul = ul;
	this.addTop = addTop;
	this.doanimate();
	this.bindmouse();
}
User_index.prototype.doanimate = function(){
		var that = this;
		this.timer = setInterval(function(){
			var vtop = parseInt(that.ul.css('top'),10);
			if(vtop <= (-that.addTop-3)){
				vtop = -3;
			}
				that.ul.css({
					top:vtop-1
				})
		},30);
}
User_index.prototype.bindmouse = function(){
	var that = this;
		this.ul.on('mouseenter mouseleave',function(e){
			if(e.type == 'mouseenter'){
				clearInterval(that.timer);
			}
			else if(e.type == 'mouseleave'){
				that.doanimate(9);
				console.log(111);
			}
		});
}
