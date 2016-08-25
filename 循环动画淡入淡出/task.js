function Banner(wrap,li,showTime,hideTime){
	this.wrap = wrap;
	this.li = li;
	this.showTime = showTime;
	this.hideTime = hideTime;
	this.DELY = hideTime - 1500;
}
Banner.prototype.init = function(){
	var that = this; 
	that.cyclePlay(that,this.li.length);
	setInterval(function(){
		that.cyclePlay(that,that.li.length);
	},that.hideTime*that.li.length);
}
Banner.prototype.cyclePlay = function(that,length){
	var oldRight = '';
	 for(var i = 0; i < length;i++){
	 	(function(i){
	 	$(that.li[i]).children().delay(that.DELY*i).animate({
	        opacity: '1'
	    },that.showTime,function(){
	            oldRight = $(that.li[i]).children().css('right');
	            $(that.li[i]).children().animate({
	            right: '450px',
	            opacity: '0'
	        },that.hideTime,function(){
	            $(that.li[i]).children().css('right',oldRight);
	        });
	            });	
	 	})(i);
        
    }
}
